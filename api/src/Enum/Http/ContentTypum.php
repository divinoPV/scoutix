<?php

namespace App\Enum\Http;

enum ContentTypum: string
{
    public const APPLICATION = 'application/';

    public const JSON = self::APPLICATION . 'json';
    public const URL_ENCODED = self::APPLICATION . 'x-www-form-urlencoded';
    public const XML = self::APPLICATION . 'xml';
}
