<?php

namespace App\Enum\Http;

enum Methodum: string
{
    public const CONNECT = 'CONNECT';
    public const DELETE = 'DELETE';
    public const GET = 'GET';
    public const HEAD = 'HEAD';
    public const OPTIONS = 'OPTIONS';
    public const PATCH = 'PATCH';
    public const POST = 'POST';
    public const PURGE = 'PURGE';
    public const PUT = 'PUT';
    public const TRACE = 'TRACE';
}
