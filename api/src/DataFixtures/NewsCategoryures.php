<?php

namespace App\DataFixtures;

use App\Entity\NewsCategory;
use Doctrine\Persistence\ObjectManager;

final class NewsCategoryures extends Fixturabs
{
    public const REFERENCE = 'news_category_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(NewsCategory::class, self::NUMBER_ELEMENT, function (NewsCategory $newsCategory) {
            $newsCategory;
        }, self::REFERENCE);
    }
}
