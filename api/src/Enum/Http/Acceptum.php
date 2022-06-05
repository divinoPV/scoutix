<?php

namespace App\Enum\Http;

enum Acceptum: string
{
    public const APPLICATION = 'application/';

    public const JSON = self::APPLICATION . 'json';
    public const JSON_INDENT_2 = self::APPLICATION . 'json;indent=2';
    public const XML = self::APPLICATION . 'xml';
}
