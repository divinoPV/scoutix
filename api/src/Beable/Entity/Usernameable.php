<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait Usernameable
{
    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
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
