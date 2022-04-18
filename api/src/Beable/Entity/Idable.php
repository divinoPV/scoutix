<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Idable
{
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    #[ORM\Id]
    protected ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
