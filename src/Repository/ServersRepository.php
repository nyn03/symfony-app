<?php

namespace App\Repository;

use App\Entity\Servers;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

class ServersRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry
    ) {
        parent::__construct($registry, Servers::class);
    }

    public function getServersList(
         $locationFilter,
         $hddFilter,
         $ramFilter,
         $storageFilter
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

            if (!empty($storageFilter)) {
                $qb->andWhere($qb->expr()->between('h.storage', ':minStorage', ':maxStorage'))
                ->setParameter('minStorage', $storageFilter[0])
                ->setParameter('maxStorage', $storageFilter[1]);
            }

        return $qb->getQuery()->getResult();
    }
}
