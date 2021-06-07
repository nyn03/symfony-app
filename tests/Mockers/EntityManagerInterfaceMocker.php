<?php

namespace App\Tests\Mockers;

use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;

class EntityManagerInterfaceMocker extends TestCase
{
    public array $map;

    public function getEntityManagerInterfaceMock(): EntityManagerInterface
    {
        $emInterfaceMock = $this->getMockBuilder(EntityManagerInterface::class)
        ->getMock();

        $emInterfaceMock->expects(self::any())
            ->method('getRepository')
            ->will(self::returnValueMap($this->map));

        return $emInterfaceMock;
    }
}