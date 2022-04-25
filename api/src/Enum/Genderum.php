<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum Genderum: string
{
    use Trumpable;

    const NAME = 'gender';

    case Agender = 'agender';
    case Bigender = 'bigender';
    case Female = 'female';
    case Ferms = 'hermaphrodite_female';
    case Genderfluid = 'genderfluid';
    case Genderqueer = 'genderqueer';
    case Herms = 'hermaphrodite';
    case Intergender = 'intergender';
    case Male = 'male';
    case Merms = 'hermaphrodite_male';
    case Pangender = 'pangender';
    case Transgender = 'transgender';

    /** see five sexes proposed by Anne Fausto-Sterling */
    public static function organics(): array
    {
        return [
            self::Female,
            self::Ferms,
            self::Herms,
            self::Male,
            self::Merms,
        ];
    }

    public static function identities(): array
    {
        return [
            self::Agender,
            self::Bigender,
            self::Female,
            self::Genderfluid,
            self::Genderqueer,
            self::Intergender,
            self::Male,
            self::Pangender,
            self::Transgender,
        ];
    }

    public static function randomOrganics(): static
    {
        return static::organics()[\array_rand(static::organics())];
    }

    public static function randomIdentities(): static
    {
        return static::identities()[\array_rand(static::identities())];
    }
}
