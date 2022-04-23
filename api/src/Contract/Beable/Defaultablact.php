<?php

namespace App\Contract\Beable;

interface Defaultablact
{
    public function isDefault(): ?bool;

    public function setDefault(?bool $default): Defaultablact;
}
