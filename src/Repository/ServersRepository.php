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

    public function getServersList(
         $locationFilter,
         $hddFilter,
         $ramFilter,
         $storageFilter,
         $page
    ) {
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

            if (!empty($locationFilter)) {
                $qb->andWhere($qb->expr()->eq('l.id', ':locationFilter'))
                ->setParameter('locationFilter', $locationFilter);
            }
            
            if (!empty($hddFilter)) {
                $qb->andWhere($qb->expr()->eq('h.type', ':hddFilter'))
                ->setParameter('hddFilter', $hddFilter);
            }

            if (!empty($ramFilter)) {
                $qb->andWhere($qb->expr()->in('r.memory', ':ramFilter'))
                ->setParameter('ramFilter', $ramFilter);
            }

            if (!empty($storageFilter[0]) && !empty($storageFilter[1])) {
                $qb->andWhere($qb->expr()->between('h.storage', ':minStorage', ':maxStorage'))
                ->setParameter('minStorage', $storageFilter[0])
                ->setParameter('maxStorage', $storageFilter[1]);
            }

        $this->pagination->setQuery($qb);
        $result = $this->pagination->paginate($page);
        $lastPageNumber =  $this->pagination->getLastPageNumber();

        return [
            'result' => $result,
            'lastPageNumber' => $lastPageNumber
        ];
    }
}
