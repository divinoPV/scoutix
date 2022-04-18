<?php

namespace App\Contract\Entity;

use App\Contract\Beable\Blameablact;
use App\Contract\Beable\LifeCycleablact;
use App\Contract\Beable\Timestampablact;
use App\Entity\Scope;
use App\Entity\User;

interface ScopeUseract extends Blameablact, LifeCycleablact, Timestampablact
{
    public function getScope(): ?Scope;

    public function setScope(?Scope $scope): ScopeUseract;

    public function getUser(): ?User;

    public function setUser(?User $user): ScopeUseract;
}
