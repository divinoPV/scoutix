<?php

namespace App\Contract\Beable;

interface Titleablact
{
    public function getTitle(): ?string;

    public function setTitle(?string $title): static;
}
