<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Entity\Activity;
use App\Entity\Feature;

interface AuthorizationActivityFeatureact extends Blameablact, Entityact, LifeCycleablact, Timestampablact
{
    public function getActivity(): ?Activity;

    public function setActivity(?Activity $activity): static;

    public function getFeature(): ?Feature;

    public function setFeature(?Feature $feature): static;
}
