<?php

namespace App\Dispenser;

abstract class Converter
{
    public static function stringToDateTimeImmutable(string $string): \DateTimeImmutable
    {
        return new \DateTimeImmutable(date('d-m-Y H:i:s O', strtotime($string)));
    }
}
