<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Titleable
{
    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    protected ?string $title;

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): static
    {
        $this->title = $title;

        return $this;
    }
}
