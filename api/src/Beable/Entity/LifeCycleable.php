<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait LifeCycleable
{
    #[ORM\Column(Types::BOOLEAN, nullable: false)]
    protected ?bool $archived = false;

    #[ORM\Column(Types::BOOLEAN, nullable: false)]
    protected ?bool $deleted = false;

    public function isArchived(): ?bool
    {
        return $this->archived;
    }

    public function setArchived(?bool $archived): static
    {
        $this->archived = $archived;

        return $this;
    }

    public function isDeleted(): ?bool
    {
        return $this->deleted;
    }

    public function setDeleted(?bool $deleted): static
    {
        $this->deleted = $deleted;

        return $this;
    }
}
