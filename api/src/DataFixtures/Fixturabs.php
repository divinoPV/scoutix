<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Enum\Rolum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ObjectManager;
use Faker\{Factory, Generator};

abstract class Fixturabs extends Fixture
{
    public const START = 1;

    protected Generator $faker;
    private ObjectManager $manager;

    public function load(ObjectManager $manager): void
    {
        $this->manager = $manager;
        $this->faker = Factory::create();

        $this->generate($manager);
    }

    abstract protected function generate(ObjectManager $manager): void;

    protected function create(
        string $class,
        int $count,
        callable $callback,
        string|bool $reference = false,
        bool $lifeCycle = false
    ): Collection {
        $collections = new ArrayCollection;

        foreach (range(1, $count) as $i) {
            $callback($object = new $class, $i);
            $collections->add($object);
            $lifeCycle && $this->lifeCycle($object);
            $this->manager->persist($object);
            $reference && $this->addReference($reference.$i, $object);
        }

        $this->manager->flush();

        return $collections;
    }

    protected function createFromArray(
        string $class,
        array $array,
        callable $callback,
        string|bool $reference = false,
        bool $lifeCycle = false
    ): Collection {
        $collections = new ArrayCollection;

        foreach ($array as $key => $element) {
            $callback($object = new $class, $element->value, $key);
            $collections->add($object);
            $lifeCycle && $this->lifeCycle($object);
            $this->manager->persist($object);
            $reference && $this->addReference($reference.$key, $object);
        }

        $this->manager->flush();

        return $collections;
    }

    protected function randReference(string $class): object
    {
        return $this->getReference($class::REFERENCE . \random_int(self::START, $class::NUMBER_ELEMENT - 1));
    }

    protected function randEnumReference(string $class, string $enum): object
    {
        return $this->getReference($class::REFERENCE . \random_int(0, count($enum::cases()) - 1));
    }

    protected function lifeCycle(object $object): object
    {
        $admins = $this->manager->getRepository(User::class)->findByRole(Rolum::Admin->value);
        $status = \random_int(0, 100);

        return $object
            ->setArchived($archived = (10 < $status and $status <= 20))
            ->setDeleted($deleted = ($status <= 10))
            ->setArchivedBy($archived ? $this->faker->randomElement($admins) : null)
            ->setCreatedBy($this->faker->randomElement($admins))
            ->setDeletedBy($deleted ? $this->faker->randomElement($admins) : null)
            ->setArchivedAt($archived ? \DateTimeImmutable::createFromMutable($this->faker->dateTimeBetween('-1 year')) : null)
            ->setCreatedAt(\DateTimeImmutable::createFromMutable($this->faker->dateTimeBetween('-1 year')))
            ->setDeletedAt($deleted ? \DateTimeImmutable::createFromMutable($this->faker->dateTimeBetween('-1 year')) : null)
        ;
    }
}
