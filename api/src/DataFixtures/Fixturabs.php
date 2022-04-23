<?php

namespace App\DataFixtures;

use App\Contract\Entity\Entityact;
use App\Dispenser\Faker;
use App\Entity\User;
use App\Enum\Rolum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Collections\{ArrayCollection, Collection};
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

        foreach (\range(1, $count) as $i) {
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

    protected function createFromRange(
        string $class,
        int $range,
        callable $callback,
        string|bool $reference = false,
        bool $lifeCycle = false
    ): Collection {
        $collections = new ArrayCollection;

        foreach (\range(self::START, $range) as $i) {
            $callback($object = new $class, $i);
            $collections->add($object);
            $lifeCycle && $this->lifeCycle($object);
            $this->manager->persist($object);
            $reference && $this->addReference($reference.$i, $object);
        }

        $this->manager->flush();

        return $collections;
    }

    protected function randReference(string $class, string $referenceItem = null): Entityact
    {
        return $this->getReference(
            (null !== $referenceItem ? $class::REFERENCE[$referenceItem] : $class::REFERENCE)
                . \random_int(
                    self::START,
                    (null !== $referenceItem ? $class::NUMBER_ELEMENT[$referenceItem] : $class::NUMBER_ELEMENT) - 1
                )
        );
    }

    protected function lifeCycle(Entityact $object): Entityact
    {
        $admins = $this->manager->getRepository(User::class)->findByRole(Rolum::Admin->value);
        $status = \random_int(0, 100);

        return $object
            ->setArchived($archived = (10 < $status and $status <= 20))
            ->setDeleted($deleted = ($status <= 10))
            ->setArchivedBy($archived ? $this->faker->randomElement($admins) : null)
            ->setCreatedBy($this->faker->randomElement($admins))
            ->setDeletedBy($deleted ? $this->faker->randomElement($admins) : null)
            ->setArchivedAt($archived ? Faker::dateTimeImmutable() : null)
            ->setCreatedAt(Faker::dateTimeImmutable())
            ->setDeletedAt($deleted ? Faker::dateTimeImmutable() : null)
        ;
    }
}
