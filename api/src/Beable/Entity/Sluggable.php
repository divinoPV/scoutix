<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Sluggable
{
    /** To use it you must override the property to add this attribute #[Gedmo\Slug(fields: [...])]*/

    #[ORM\Column(type: Types::STRING, nullable: true)]
    protected ?string $slug;

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }
}
