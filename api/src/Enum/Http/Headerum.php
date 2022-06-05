<?php

namespace App\Enum\Http;

enum Headerum: string
{
    public const ACCEPT = 'Accept';
    public const ACCEPT_ENCODING = 'Accept-Encoding';
    public const CONTENT_TYPE = 'Content-Type';
    public const RANGE = 'Range';
    public const X_HTTP_METHOD_OVERRIDE = 'X-HTTP-Method-Override';
}
