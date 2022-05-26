<?php

namespace App\Contract\Beable;

interface Periodablact
{
    public function getStartDate(): ?\DateTimeImmutable;

    public function setStartDate(?\DateTimeImmutable $startDate): static;

    public function getEndDate(): ?\DateTimeImmutable;

    public function setEndDate(?\DateTimeImmutable $endDate): static;
}
