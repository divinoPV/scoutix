<?php

namespace App\Contract\Beable;

interface LifeCycleablact
{
    public function isArchived(): ?bool;

    public function setArchived(?bool $archived): static;

    public function isDeleted(): ?bool;

    public function setDeleted(?bool $deleted): static;
}
