<?php
declare(strict_types=1);

namespace App\Test\Services;

use App\Tests\Mockers\ApiServiceMocker;
use App\Tests\Mockers\ServerRepositoryMocker;
use PHPUnit\Framework\TestCase;

class ApiServiceTest extends TestCase
{
    private ApiServiceMocker $apiServiceMocker;
    private ServerRepositoryMocker $serverRepoMocker; 
    
    protected function setUp(): void 
    {
        $this->apiServiceMocker = new ApiServiceMocker();
        $this->serverRepoMocker = new ServerRepositoryMocker();
    }

    /** @test */
    public function ItShouldReturnValidArrayWhenCalledFromService()
    {   
        $filters = [1,'','','','',1];
        $this->apiServiceMocker->list = $this->getMockServersList();
        $apiServiceMock = $this->apiServiceMocker->getApiServiceMock();
        $result = $apiServiceMock->getServersList($filters);

        $this->assertEquals($result, $this->getMockServersList());
    }

    /** @test */
    public function ItShouldReturnValidArrayWhenCalledFromRepository()
    {
        $this->serverRepoMocker->list = $this->getMockServersList();
        $serverRepoMock = $this->serverRepoMocker->getServerRepositoryMock();
        $filters = [1,'','','','',1];
        $result = $serverRepoMock->getServersList($filters);
        
        $this->assertTrue(is_array($result));
    }

    public function getMockServersList()
    {
        return [
            [
                "id" => 1,
                "server_name" => "RH2288v32x Intel Xeon E5-2650V4",
                "ram_name" => "128GBDDR4",
                "hdd_name" => "4x480GBSSD",
                "location_name" => "AmsterdamAMS-01",
                "price" => "$227.99"
            ]
        ];
    }
}