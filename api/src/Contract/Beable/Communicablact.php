<?php

namespace App\Contract\Beable;

interface Communicablact
{
    public function getFax(): ?string;

    public function setFax(?string $fax): Communicablact;

    public function getLandline(): ?string;

    public function setLandline(?string $landline): Communicablact;

    public function getMobile(): ?string;

    public function setMobile(?string $mobile): Communicablact;
}
