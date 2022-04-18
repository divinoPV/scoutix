<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait Addressable
{
    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressCity;

    #[ORM\Column(Types::STRING, length: 255, nullable: true)]
    protected ?string $addressComplement = null;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressCountry;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressDepartment;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressNumber;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressState;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressStreet;

    #[ORM\Column(Types::STRING, length: 255, nullable: false)]
    protected ?string $addressZipCode;

    public function getAddressCity(): ?string
    {
        return $this->addressCity;
    }

    public function setAddressCity(?string $addressCity): static
    {
        $this->addressCity = $addressCity;

        return $this;
    }

    public function getAddressComplement(): ?string
    {
        return $this->addressComplement;
    }

    public function setAddressComplement(?string $addressComplement): static
    {
        $this->addressComplement = $addressComplement;

        return $this;
    }

    public function getAddressCountry(): ?string
    {
        return $this->addressCountry;
    }

    public function setAddressCountry(?string $addressCountry): static
    {
        $this->addressCountry = $addressCountry;

        return $this;
    }

    public function getAddressDepartment(): ?string
    {
        return $this->addressDepartment;
    }

    public function setAddressDepartment(?string $addressDepartment): static
    {
        $this->addressDepartment = $addressDepartment;

        return $this;
    }

    public function getAddressNumber(): ?string
    {
        return $this->addressNumber;
    }

    public function setAddressNumber(?string $addressNumber): static
    {
        $this->addressNumber = $addressNumber;

        return $this;
    }

    public function getAddressState(): ?string
    {
        return $this->addressState;
    }

    public function setAddressState(?string $addressState): static
    {
        $this->addressState = $addressState;

        return $this;
    }

    public function getAddressStreet(): ?string
    {
        return $this->addressStreet;
    }

    public function setAddressStreet(?string $addressStreet): static
    {
        $this->addressStreet = $addressStreet;

        return $this;
    }

    public function getAddressZipCode(): ?string
    {
        return $this->addressZipCode;
    }

    public function setAddressZipCode(?string $addressZipCode): static
    {
        $this->addressZipCode = $addressZipCode;

        return $this;
    }
}
