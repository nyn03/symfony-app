<?php

namespace App\Entity;

use App\Repository\HardDiskDriveRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HardDiskDriveRepository::class)
 */
class HardDiskDrive
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
     * @ORM\Column(type="smallint")
     */
    private $storage;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('SAS', 'SATA', 'SSD')")
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    public function getStorage()
    {
        return $this->storage;
    }

    public function setStorage($storage)
    {
        $this->storage = $storage;

        return $this;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }
}
