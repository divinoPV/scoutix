<?php

namespace App\Contract\Beable;

interface Uploadablact
{
    public function getName(): ?string;

    public function setName(?string $name): Uploadablact;

    public function getMimeType(): ?string;

    public function setMimeType(?string $mimeType): Uploadablact;

    public function getPath(): ?string;

    public function setPath(?string $path): Uploadablact;

    public function getSize(): ?float;

    public function setSize(?float $size): Uploadablact;
}
