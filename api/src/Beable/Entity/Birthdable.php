<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Birthdable
{
    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: false)]
    protected ?\DateTimeImmutable $birth;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
    protected ?string $birthCity;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
    protected ?string $birthZipCode;

    public function getBirth(): ?\DateTimeImmutable
    {
        return $this->birth;
    }

    public function setBirth(?\DateTimeImmutable $birth): static
    {
        $this->birth = $birth;

        return $this;
    }

    public function getBirthCity(): ?string
    {
        return $this->birthCity;
    }

    public function setBirthCity(?string $birthCity): static
    {
        $this->birthCity = $birthCity;

        return $this;
    }

    public function getBirthZipCode(): ?string
    {
        return $this->birthZipCode;
    }

    public function setBirthZipCode(?string $birthZipCode): static
    {
        $this->birthZipCode = $birthZipCode;

        return $this;
    }
}
