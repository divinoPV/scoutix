<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\Activity;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Activityures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'activity_';

    public const NUMBER_ELEMENT = 40;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(Activity::class, self::NUMBER_ELEMENT, function (Activity $activity) {
            $activity->setTitle(Faker::title(3));
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Userures::class,
        ];
    }
}
