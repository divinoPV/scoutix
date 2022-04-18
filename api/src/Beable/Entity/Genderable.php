<?php

namespace App\Beable\Entity;

use App\Enum\Genderum;
use Doctrine\ORM\Mapping as ORM;

trait Genderable
{
    #[ORM\Column(type: 'string', length: 255, nullable: false, enumType: Genderum::class)]
    protected ?Genderum $gender;

    public function getGender(): ?Genderum
    {
        return $this->gender;
    }

    public function setGender(?Genderum $gender): static
    {
        $this->gender = $gender;

        return $this;
    }
}
