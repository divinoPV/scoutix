<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Defaultable
{
    #[ORM\Column(type: Types::BOOLEAN, nullable: false)]
    protected ?bool $default = false;

    public function isDefault(): ?bool
    {
        return $this->default;
    }

    public function setDefault(?bool $default): static
    {
        $this->default = $default;

        return $this;
    }
}
