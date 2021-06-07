<?php

namespace App\Test\Services;

use PHPUnit\Framework\TestCase;
use App\Tests\Mockers\ServerRepositoryMocker;

class ApiServiceTest extends TestCase
{
    private ServerRepositoryMocker $serverRepoMocker;

    protected function setUp(): void 
    {
        $this->serverRepoMocker = new ServerRepositoryMocker();
    }

    /** @test */
    public function fetchCorrectResultFromRepository()
    {
        $this->serverRepoMocker->list = $this->getServersListData();
        $serverRepoMock = $this->serverRepoMocker->getServerRepositoryMock();
        $result = $serverRepoMock->getServersList(1,'','','','',1);
        
        $this->assertTrue(is_array($result));
    }
    
    public function getServersListData()
    {
        return [
            [
                "id" => 4,
                "server_name" => "RH2288v32x Intel Xeon E5-2650V4",
                "ram_name" => "128GBDDR4",
                "hdd_name" => "4x480GBSSD",
                "location_name" => "AmsterdamAMS-01",
                "price" => "$227.99"
            ]
        ];
    }
}