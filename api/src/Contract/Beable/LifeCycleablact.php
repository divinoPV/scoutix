<?php

namespace App\Contract\Beable;

interface LifeCycleablact
{
    public function isArchived(): ?bool;

    public function setArchived(?bool $archived): LifeCycleablact;

    public function isDeleted(): ?bool;

    public function setDeleted(?bool $deleted): LifeCycleablact;
}
