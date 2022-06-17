<?php

namespace App\Contract\Entity;

use App\Entity\Activity;
use App\Entity\Feature;

interface AuthorizationActivityFeatureact extends Entityact
{
    public function getActivity(): ?Activity;

    public function setActivity(?Activity $activity): static;

    public function getFeature(): ?Feature;

    public function setFeature(?Feature $feature): static;
}
