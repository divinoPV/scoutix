<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Tagable
{
    #[ORM\Column(type: 'array', nullable: true)]
    protected ?array $tags = [];

    public function getTags(): ?array
    {
        return $this->tags;
    }

    public function setTags(?array $tags): static
    {
        $this->tags = $tags;

        return $this;
    }
}
