<?php

namespace App\Contract\Beable;

use App\Enum\Genderum;

interface Genderablact
{
    public function getGender(): ?Genderum;

    public function setGender(?Genderum $gender): Genderablact;
}
