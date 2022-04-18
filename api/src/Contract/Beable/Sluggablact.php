<?php

namespace App\Contract\Beable;

interface Sluggablact
{
    public function getSlug(): ?string;

    public function setSlug(?string $slug): Sluggablact;
}
