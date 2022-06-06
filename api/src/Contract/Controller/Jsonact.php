<?php

namespace App\Contract\Controller;

use App\Enum\Http\ContentTypum;
use App\Enum\Http\Headerum;

interface Jsonact
{
    public const HEADER = [Headerum::CONTENT_TYPE => ContentTypum::JSON];
}
