<?php

namespace App\Contract\Beable;

interface Contentablact
{
    public function getContent(): ?string;

    public function setContent(?string $content): Contentablact;
}
