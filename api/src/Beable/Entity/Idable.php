<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Idable
{
    #[ORM\Column(type: Types::INTEGER)]
    #[ORM\GeneratedValue]
    #[ORM\Id]
    protected ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
