<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Idablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Contract\Beable\Uuidablact;
use App\Entity\Activity;
use App\Entity\Locality;

interface Scopeact extends Idablact, Uuidablact, LifeCycleablact, Timestampablact, Blameablact
{
    public function getActivity(): ?Activity;

    public function setActivity(?Activity $activity): Scopeact;

    public function getLocality(): ?Locality;

    public function setLocality(?Locality $locality): Scopeact;
}
