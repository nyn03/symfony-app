<?php
declare(strict_types=1);

namespace App\Services;

use App\Entity\Servers;
use Doctrine\ORM\EntityManagerInterface;

class ApiService {

    public EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getServersList(array $filters) 
    {
        $result = $this->em->getRepository(Servers::class)->getServersList(
            $filters
        );

        return $result;
    }
}
