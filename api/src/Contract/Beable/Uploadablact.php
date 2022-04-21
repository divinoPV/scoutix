<?php

namespace App\Contract\Beable;

interface Uploadablact
{
    public function getFileName(): ?string;

    public function setFileName(?string $name): Uploadablact;

    public function getFileMimeType(): ?string;

    public function setFileMimeType(?string $mimeType): Uploadablact;

    public function getFilePath(): ?string;

    public function setFilePath(?string $path): Uploadablact;

    public function getFileSize(): ?float;

    public function setFileSize(?float $size): Uploadablact;
}
