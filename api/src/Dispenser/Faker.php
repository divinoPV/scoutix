<?php

namespace App\Dispenser;

use Faker\Factory;

abstract class Faker
{
    public static function content(int $maxChars = 8191): string
    {
        return Factory::create()->text($maxChars);
    }

    public static function dateTimeImmutable(
        string $start = '-1 year',
        string $end = 'now',
        string $timezone = null
    ): \DateTimeImmutable {
        return \DateTimeImmutable::createFromMutable(Factory::create()->dateTimeBetween($start, $end, $timezone));
    }

    public static function tags(int $nb = 3): array
    {
        foreach (\range(1, $nb) as $i) $tags[] = Factory::create()->words(\random_int(1, 5), true);

        return $tags;
    }

    public static function title(int $nb = 5): string
    {
        return Factory::create()->words($nb, true);
    }

    public static function phoneNumber(int $indicativeMin, int $indicativeMax): string
    {
        return '0'.\random_int($indicativeMin, $indicativeMax).\random_int(10_00_00_00, 99_99_99_99);
    }

    public static function weightingBoolean(int $weighting): bool
    {
        return $weighting <= \random_int(0, 100);
    }
}
