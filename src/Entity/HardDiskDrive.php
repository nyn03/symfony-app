<?php

namespace App\Entity;

use App\Repository\HardDiskDriveRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HardDiskDriveRepository")
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
}
