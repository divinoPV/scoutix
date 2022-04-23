<?php

namespace App\Contract\Beable;

interface Tagablact
{
    public function getTags(): ?array;

    public function setTags(?array $tags): Tagablact;
}
