<?php

namespace App\Dispenser;

abstract class Checker
{
    public static function emptyStringReturnNull(mixed $data): mixed
    {
        return '' === \trim($data) ? null : $data;
    }

    public static function execStaticMethodIfNotNull(mixed $data, string $namespace, string $method): mixed
    {
        if (null === self::emptyStringReturnNull($data)) return null;

        return $namespace::$method($data);
    }
}
