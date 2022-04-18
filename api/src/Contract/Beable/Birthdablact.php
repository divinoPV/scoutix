<?php

namespace App\Contract\Beable;

interface Birthdablact
{
    public function getBirth(): ?\DateTimeImmutable;

    public function setBirth(?\DateTimeImmutable $birth): Birthdablact;

    public function getBirthCity(): ?string;

    public function setBirthCity(?string $birthCity): Birthdablact;

    public function getBirthZipCode(): ?string;

    public function setBirthZipCode(?string $birthZipCode): Birthdablact;
}
