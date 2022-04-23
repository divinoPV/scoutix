<?php

namespace App\Contract\Beable;

interface Addressablact
{
    function getAddressCity(): ?string;

    function setAddressCity(?string $addressCity): Addressablact;

    function getAddressComplement(): ?string;

    function setAddressComplement(?string $addressComplement): Addressablact;

    function getAddressCountry(): ?string;

    function setAddressCountry(?string $addressCountry): Addressablact;

    function getAddressDepartment(): ?string;

    function setAddressDepartment(?string $addressDepartment): Addressablact;

    function getAddressNumber(): ?string;

    function setAddressNumber(?string $addressNumber): Addressablact;

    function getAddressState(): ?string;

    function setAddressState(?string $addressState): Addressablact;

    function getAddressStreet(): ?string;

    function setAddressStreet(?string $addressStreet): Addressablact;

    function getAddressZipCode(): ?string;

    function setAddressZipCode(?string $addressZipCode): Addressablact;
}
