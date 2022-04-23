<?php

namespace App\Dispenser;

abstract class Sluggifier
{
    public static function slugify(string $string): string
    {
        return strtolower(
            preg_replace('/[\s_]/', '',
                preg_replace('/[\s-]+/', ' ',
                    preg_replace('/[^a-z0-9_\s-]/', '-', $string)
                )
            )
        );
    }
}
