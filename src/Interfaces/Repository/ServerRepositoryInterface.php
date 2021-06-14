<?php

declare(strict_types=1);

namespace App\Interfaces\Repository;

interface ServerRepositoryInterface
{
    public function getServersList(array $filters): array;
}