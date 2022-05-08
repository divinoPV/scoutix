<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait Emailable
{
    #[Groups(["read", "write"])]
    #[ORM\Column(type: Types::STRING, length: 255, unique: true)]
    protected ?string $email;

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }
}
