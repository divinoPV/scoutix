<?php

namespace App\Contract\Beable;

interface Roleablact
{
    public function getRoles(): array;

    public function setRoles(array $roles): static;
}
