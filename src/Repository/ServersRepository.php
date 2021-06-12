<?php

namespace App\Repository;

use App\Entity\Servers;
use App\Library\Pagination;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

class ServersRepository extends ServiceEntityRepository
{
    private Pagination $pagination;

    public function __construct(
        ManagerRegistry $registry,
        Pagination $pagination
    ) {
        parent::__construct($registry, Servers::class);
        $this->pagination = $pagination;
    }

    public function getServersList(array $filters): array
    {
        $qb = $this->createQueryBuilder('s');
        
         $qb->select('s.id',
              's.name as server_name', 
              'r.name as ram_name',
              'h.name as hdd_name', 
              'l.name as location_name',
              'case
                when s.currency = \'EUR\'  then CONCAT(\'€\',s.price)
                when s.currency = \'USD\' then CONCAT(\'$\',s.price)
                else s.price
                end as price
              ')
             ->leftJoin('s.ram', 'r')
             ->leftJoin('s.hardDiskDrive', 'h')
             ->leftJoin('s.location', 'l');

            if (!empty($filters['location'])) {
                $qb->andWhere($qb->expr()->eq('l.id', ':locationFilter'))
                ->setParameter('locationFilter', $filters['location']);
            }
            
            if (!empty($filters['hdd'])) {
                $qb->andWhere($qb->expr()->eq('h.type', ':hddFilter'))
                ->setParameter('hddFilter', $filters['hdd']);
            }

            if (!empty($filters['ram'])) {
                $qb->andWhere($qb->expr()->in('r.memory', ':ramFilter'))
                ->setParameter('ramFilter', explode(',', $filters['ram']));
            }

            if (!empty($filters['storage'])) {
                $storageRange = explode(',', $filters['storage']);

                $qb->andWhere($qb->expr()->between('h.storage', ':minStorage', ':maxStorage'))
                ->setParameter('minStorage', $storageRange[0])
                ->setParameter('maxStorage', $storageRange[1]);
            }

        $this->pagination->setQuery($qb);
        $result = $this->pagination->paginate($filters['page']);
        $lastPageNumber =  $this->pagination->getLastPageNumber();

        return [
            'result' => $result,
            'lastPageNumber' => $lastPageNumber
        ];
    }
}
