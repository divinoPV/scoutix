<?php

namespace App\Contract\Beable;

use App\Enum\Genderum;

interface Birthdablact
{
    public function getBirth(): ?\DateTimeImmutable;

    public function setBirth(?\DateTimeImmutable $birth): Birthdablact;

    public function getBirthCity(): ?string;

    public function setBirthCity(?string $birthCity): Birthdablact;

    public function getBirthGender(): ?Genderum;

    public function setBirthGender(?Genderum $birthGender): static;

    public function getBirthZipCode(): ?string;

    public function setBirthZipCode(?string $birthZipCode): Birthdablact;
}
