<?php

namespace App\Contract\Beable;

interface Mediablact
{
    public function getMedias(): ?array;

    public function setMedias(?array $medias): static;
}
