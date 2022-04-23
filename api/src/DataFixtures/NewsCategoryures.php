<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\NewsCategory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class NewsCategoryures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'news_category_';

    public const NUMBER_ELEMENT = 5;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(NewsCategory::class, self::NUMBER_ELEMENT, function (NewsCategory $newsCategory) {
            $newsCategory->setTitle(Faker::title(3));
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            Userures::class,
        ];
    }
}
