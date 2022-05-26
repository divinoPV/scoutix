<?php

namespace App\Contract\Beable;

interface Communicablact
{
    public function getFax(): ?string;

    public function setFax(?string $fax): static;

    public function getLandline(): ?string;

    public function setLandline(?string $landline): static;

    public function getMobile(): ?string;

    public function setMobile(?string $mobile): static;
}
