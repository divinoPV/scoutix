<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Titleablact;
use App\Contract\Beable\Uuidablact;
use App\Entity\LocalityType;

interface Localityact extends Blameablact, Idablact, LifeCycleablact, Timestampablact, Titleablact, Uuidablact
{
    public function getType(): ?LocalityType;

    public function setType(?LocalityType $type): Localityact;
}
