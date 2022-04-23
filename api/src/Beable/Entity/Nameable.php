<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Nameable
{
    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
    protected ?string $firstName;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $maidenName = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $matronym = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $middleName = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: false)]
    protected ?string $patronym;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $thirdName = null;

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getMaidenName(): ?string
    {
        return $this->maidenName;
    }

    public function setMaidenName(?string $maidenName): static
    {
        $this->maidenName = $maidenName;

        return $this;
    }

    public function getMatronym(): ?string
    {
        return $this->matronym;
    }

    public function setMatronym(?string $matronym): static
    {
        $this->matronym = $matronym;

        return $this;
    }

    public function getMiddleName(): ?string
    {
        return $this->middleName;
    }

    public function setMiddleName(?string $middleName): static
    {
        $this->middleName = $middleName;

        return $this;
    }

    public function getPatronym(): ?string
    {
        return $this->patronym;
    }

    public function setPatronym(?string $patronym): static
    {
        $this->patronym = $patronym;

        return $this;
    }

    public function getThirdName(): ?string
    {
        return $this->thirdName;
    }

    public function setThirdName(?string $thirdName): static
    {
        $this->thirdName = $thirdName;

        return $this;
    }
}
