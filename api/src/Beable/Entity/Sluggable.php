<?php

namespace App\Beable\Entity;

use Doctrine\ORM\Mapping as ORM;

trait Sluggable
{
    /** To use it you must override the property to add this attribute #[Gedmo\Slug(fields: [...])]*/

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
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
