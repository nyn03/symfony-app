<?php
declare(strict_types=1);

namespace App\Services;

use App\Interfaces\Repository\ServerRepositoryInterface;

class ApiService {

    public ServerRepositoryInterface $serversRepository;

    public function __construct(ServerRepositoryInterface $serversRepository)
    {
        $this->serversRepository = $serversRepository;
    }

    public function getServersList(array $filters) 
    {
        $result = $this->serversRepository->getServersList(
            $filters
        );

        return $result;
    }
}
