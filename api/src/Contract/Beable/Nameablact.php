<?php

namespace App\Contract\Beable;

interface Nameablact
{
    public function getFirstName(): ?string;

    public function setFirstName(?string $firstName): static;

    public function getMaidenName(): ?string;

    public function setMaidenName(?string $maidenName): static;

    public function getMatronym(): ?string;

    public function setMatronym(?string $matronym): static;

    public function getMiddleName(): ?string;

    public function setMiddleName(?string $middleName): static;

    public function getPatronym(): ?string;

    public function setPatronym(?string $patronym): static;

    public function getThirdName(): ?string;

    public function setThirdName(?string $thirdName): static;
}
