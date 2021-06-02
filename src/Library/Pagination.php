<?php

declare(strict_types=1);

namespace App\Library;

use Doctrine\ORM\Tools\Pagination\Paginator;

class Pagination
{
    private $paginator;
    private $total;
    private $lastPageNumber;
    private $limit;
    private $offSet;
    private $result;

    public function setQuery($dql, $fetchJoinCollection = true): void
    {
        $this->paginator = new Paginator($dql, $fetchJoinCollection);
    }

    public function paginate($page = 1, $resultsPerPage = 10)
    {
        $this->setTotal();
        $this->limit = $resultsPerPage;
        $this->offSet = $resultsPerPage * ($page - 1);
        $this->result = $this->paginator->getQuery()
            ->setFirstResult($this->offSet)
            ->setMaxResults($this->limit)
            ->getResult();

        $this->setLastPageNumber();

        return $this->result;
    }

    public function getTotal(): int
    {
        return $this->total;
    }

    private function setTotal(): void
    {
        $this->total = count($this->paginator->getQuery()->getResult());
    }

    public function getLastPageNumber()
    {
        return $this->lastPageNumber;
    }
    
    private function setLastPageNumber(): void
    {
        $this->lastPageNumber = ceil($this->total / $this->limit);
    }
}