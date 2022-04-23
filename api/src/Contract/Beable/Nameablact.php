<?php

namespace App\Contract\Beable;

interface Nameablact
{
    public function getFirstName(): ?string;

    public function setFirstName(?string $firstName): Nameablact;

    public function getMaidenName(): ?string;

    public function setMaidenName(?string $maidenName): Nameablact;

    public function getMatronym(): ?string;

    public function setMatronym(?string $matronym): Nameablact;

    public function getMiddleName(): ?string;

    public function setMiddleName(?string $middleName): Nameablact;

    public function getPatronym(): ?string;

    public function setPatronym(?string $patronym): Nameablact;

    public function getThirdName(): ?string;

    public function setThirdName(?string $thirdName): Nameablact;
}
