<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Periodable
{
    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: false)]
    protected ?\DateTimeImmutable $startDate;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: false)]
    protected ?\DateTimeImmutable $endDate;

    public function getStartDate(): ?\DateTimeImmutable
    {
        return $this->startDate;
    }

    public function setStartDate(?\DateTimeImmutable $startDate): static
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeImmutable
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeImmutable $endDate): static
    {
        $this->endDate = $endDate;

        return $this;
    }
}
