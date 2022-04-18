<?php

namespace App\Contract\Beable;

interface Usernameablact
{
    public function getUsername(): ?string;

    public function setUsername(?string $username): Usernameablact;
}
