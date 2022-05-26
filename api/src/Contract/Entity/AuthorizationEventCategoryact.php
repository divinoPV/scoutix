<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\Defaultablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Entity\Activity;
use App\Entity\EventCategory;

interface AuthorizationEventCategoryact extends Blameablact, Defaultablact, Entityact, LifeCycleablact, Timestampablact
{
    public function getActivity(): ?Activity;

    public function setActivity(?Activity $activity): static;

    public function getCategory(): ?EventCategory;

    public function setCategory(?EventCategory $category): static;
}
