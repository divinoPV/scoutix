<?php

namespace App\Contract\Beable;

interface Emailablact
{
    public function getEmail(): ?string;

    public function setEmail(?string $email): static;
}
