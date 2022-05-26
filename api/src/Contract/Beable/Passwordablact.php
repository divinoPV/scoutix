<?php

namespace App\Contract\Beable;

interface Passwordablact
{
    public function getPassword(): ?string;

    public function setPassword(?string $password): static;
}
