<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\News;
use App\Enum\PublicationStatum;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

final class Newsures extends Fixturabs implements DependentFixtureInterface
{
    public const REFERENCE = 'news_';

    public const NUMBER_ELEMENT = 100;

    protected function generate(ObjectManager $manager): void
    {
        $this->create(News::class, self::NUMBER_ELEMENT, function (News $news) {
            $news
                ->setContent(Faker::content())
                ->setReleasedAt(Faker::dateTimeImmutable('now', '3 months'))
                ->setTags(Faker::tags())
                ->setTitle(Faker::title(10))
                ->setAuthor($this->randReference(Userures::class, 'admin'))
                ->setCategory($this->randReference(NewsCategoryures::class))
                ->setState(PublicationStatum::random())
            ;
        }, self::REFERENCE, true);
    }

    public function getDependencies(): array
    {
        return [
            NewsCategoryures::class,
            Userures::class,
        ];
    }
}
