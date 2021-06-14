<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class Servers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ram")
     */
    private $ram;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\HardDiskDrive")
     */
    private $hardDiskDrive;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Location")
     */
    private $location;

    /**
     * @ORM\Column(type="decimal", scale=2, options={"default" : 0.00})
     */
    private $price;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('USD', 'EUR')")
     */
    private $currency;
}
