<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Mediable
{
    #[ORM\Column(type: Types::ARRAY, nullable: true)]
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
