<?php

namespace App\Beable\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

trait Communicable
{
    #[Assert\Length(exactly: 10)]
    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    protected ?string $fax = null;

    #[Assert\Length(exactly: 10)]
    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    protected ?string $landline = null;

    #[Assert\Length(exactly: 10)]
    #[ORM\Column(type: Types::STRING, length: 10, nullable: false)]
    protected ?string $mobile;

    public function getFax(): ?string
    {
        return $this->fax;
    }

    public function setFax(?string $fax): static
    {
        $this->fax = $fax;

        return $this;
    }

    public function getLandline(): ?string
    {
        return $this->landline;
    }

    public function setLandline(?string $landline): static
    {
        $this->landline = $landline;

        return $this;
    }

    public function getMobile(): ?string
    {
        return $this->mobile;
    }

    public function setMobile(?string $mobile): static
    {
        $this->mobile = $mobile;

        return $this;
    }
}
