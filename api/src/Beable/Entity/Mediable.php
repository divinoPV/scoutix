<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Mediable
{
    #[ORM\Column(type: 'array', nullable: true)]
    protected ?array $medias = [];

    public function getMedias(): ?array
    {
        return $this->medias;
    }

    public function setMedias(?array $medias): static
    {
        $this->medias = $medias;

        return $this;
    }
}
