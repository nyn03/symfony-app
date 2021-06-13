<?php
declare(strict_types = 1);

namespace App\Tests\Mockers;

use PHPUnit\Framework\TestCase;
use App\Repository\ServersRepository;

class ServerRepositoryMocker extends TestCase
{
    public array $list = [];

    public function getServerRepositoryMock(): ServersRepository
    {
        $serverRepoMock = $this->createMock(ServersRepository::class);

        $serverRepoMock->expects(self::any())
        ->method('getServersList')
        ->willReturn($this->list);

        return $serverRepoMock;
    }
}