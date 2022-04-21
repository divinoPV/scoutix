<?php

namespace App\DataFixtures;

use App\Entity\News;
use Doctrine\Persistence\ObjectManager;

final class Newsures extends Fixturabs
{
    public const REFERENCE = 'news_';

    public const NUMBER_ELEMENT = 1;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(News::class, self::NUMBER_ELEMENT, function (News $news) {
            $news;
        }, self::REFERENCE);
    }
}
