<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Usernameable
{
    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    protected ?string $username;

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): static
    {
        $this->username = $username;

        return $this;
    }
}
