<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Contentable
{
    #[ORM\Column(type: 'text', length: 8191, nullable: false)]
    protected ?string $content;

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): static
    {
        $this->content = $content;

        return $this;
    }
}
