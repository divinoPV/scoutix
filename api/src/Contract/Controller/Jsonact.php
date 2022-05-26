<?php

namespace App\Contract\Controller;

interface Jsonact
{
    public const SERIALIZE_FORMAT = 'json';

    public const HEADER = ['Content-Type' => "application/json"];
}
