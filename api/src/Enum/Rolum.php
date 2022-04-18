<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum Rolum: string
{
    use Trumpable;

    const NAME = 'role';

   case Admin = 'admin';
   case Guest = 'guest';
   case Moderator = 'moderator';
   case User = 'user';
}
