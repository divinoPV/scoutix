<?php

namespace App\Contract\Beable;

interface Uploadablact
{
    public function getFileName(): ?string;

    public function setFileName(?string $name): static;

    public function getFileMimeType(): ?string;

    public function setFileMimeType(?string $mimeType): static;

    public function getFilePath(): ?string;

    public function setFilePath(?string $path): static;

    public function getFileSize(): ?float;

    public function setFileSize(?float $size): static;
}
