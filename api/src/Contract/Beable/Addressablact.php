<?php

namespace App\Contract\Beable;

interface Addressablact
{
    function getAddressCity(): ?string;

    function setAddressCity(?string $addressCity): static;

    function getAddressComplement(): ?string;

    function setAddressComplement(?string $addressComplement): static;

    function getAddressCountry(): ?string;

    function setAddressCountry(?string $addressCountry): static;

    function getAddressDepartment(): ?string;

    function setAddressDepartment(?string $addressDepartment): static;

    function getAddressNumber(): ?string;

    function setAddressNumber(?string $addressNumber): static;

    function getAddressState(): ?string;

    function setAddressState(?string $addressState): static;

    function getAddressStreet(): ?string;

    function setAddressStreet(?string $addressStreet): static;

    function getAddressZipCode(): ?string;

    function setAddressZipCode(?string $addressZipCode): static;
}
