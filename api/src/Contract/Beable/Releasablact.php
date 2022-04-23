<?php

namespace App\Contract\Beable;

interface Releasablact
{
    public function getReleasedAt(): ?\DateTimeImmutable;

    public function setReleasedAt(?\DateTimeImmutable $releasedAt): Releasablact;
}
