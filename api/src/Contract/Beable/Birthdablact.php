<?php

namespace App\Contract\Beable;

use App\Enum\Genderum;

interface Birthdablact
{
    public function getBirth(): ?\DateTimeImmutable;

    public function setBirth(?\DateTimeImmutable $birth): static;

    public function getBirthCity(): ?string;

    public function setBirthCity(?string $birthCity): static;

    public function getBirthGender(): ?Genderum;

    public function setBirthGender(?Genderum $birthGender): static;

    public function getBirthZipCode(): ?string;

    public function setBirthZipCode(?string $birthZipCode): static;
}
