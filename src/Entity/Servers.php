<?php

namespace App\Entity;

use App\Repository\ServersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ServersRepository::class)
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
     * @ORM\OneToOne(targetEntity="App\Entity\Ram")
     */
    private $ram;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\HardDiskDrive")
     */
    private $hardDiskDrive;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Location")
     */
    private $location;

    /**
     * @ORM\Column(type="decimal", scale=2, options={"default" : 0.00})
     */
    private $price;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRam()
    {
        return $this->ram;
    }

    public function setRam($ram)
    {
        $this->ram = $ram;

        return $this;
    }

    public function getHardDiskDrive()
    {
        return $this->hardDiskDrive;
    }

    public function setHardDiskDrive($hardDiskDrive)
    {
        $this->hardDiskDrive = $hardDiskDrive;

        return $this;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }
}
