<?php

namespace App\DataFixtures;

use App\Dispenser\Faker;
use App\Entity\User;
use App\Enum\Genderum;
use App\Enum\Rolum;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class Userures extends Fixturabs
{
    public const REFERENCE = [
        'admin' => 'admin_',
        'moderator' => 'moderator_',
        'guest' => 'guest_',
        'user' => 'user_',
    ];

    public const NUMBER_ELEMENT = [
        'admin' => 4,
        'moderator' => 8,
        'guest' => 16,
        'user' => 56,
    ];

    public const PASSWORD = 'Azerty1234&.';

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    protected function generate(ObjectManager $manager): void
    {
        foreach (['lauraagss', 'divino', 'spacelocust'] as $item) {
            $this->createUser(Rolum::Admin->value, self::REFERENCE['admin'], 1, $item);
        }

        foreach ([
            ['role' => Rolum::Admin->value, 'reference' => self::REFERENCE['admin'], 'number' => self::NUMBER_ELEMENT['admin']],
            ['role' => Rolum::Moderator->value, 'reference' => self::REFERENCE['moderator'], 'number' => self::NUMBER_ELEMENT['moderator']],
            ['role' => Rolum::Guest->value, 'reference' => self::REFERENCE['guest'], 'number' => self::NUMBER_ELEMENT['guest']],
            ['role' => Rolum::User->value, 'reference' => self::REFERENCE['user'], 'number' => self::NUMBER_ELEMENT['user']]
        ] as $item) {
            $item['role'] !== Rolum::Admin->value
                ? $this->userLifeCycle($this->createUser($item['role'], $item['reference'], $item['number']))
                : $this->createUser($item['role'], $item['reference'], $item['number'])
            ;
        }
    }

    private function createUser(string $role, string $reference, int $element, string $name = null): Collection
    {
        return $this->create(User::class, $element, function (User $user) use ($role, $name) {
            $user
                ->setGender($gender = (Faker::weightingBoolean(90)
                    ? (\rand(0, 1) ? Genderum::Female : Genderum::Male)
                    : Genderum::randomIdentities()
                ))
                ->setFirstName($name ?? $this->faker->firstName())
                ->setMaidenName(Genderum::Female === $gender ? $this->faker->lastName() : null)
                ->setMatronym(Faker::weightingBoolean(20) ? $this->faker->lastName() : null)
                ->setMiddleName($middleName = (Faker::weightingBoolean(70) ? $this->faker->firstName() : null))
                ->setPatronym($this->faker->lastName())
                ->setThirdName($middleName ? (Faker::weightingBoolean(40) ? $this->faker->firstName() : null) : null)
                ->setAddressCity($this->faker->city())
                ->setAddressComplement($this->faker->address())
                ->setAddressCountry($this->faker->country())
                ->setAddressDepartment($this->faker->word())
                ->setAddressNumber(\random_int(1, 2_000))
                ->setAddressState($this->faker->word())
                ->setAddressStreet($this->faker->address())
                ->setAddressZipCode($this->faker->postcode())
                ->setBirth(Faker::dateTimeImmutable('-120 years', '-18 years'))
                ->setBirthCity($this->faker->city())
                ->setBirthGender(Genderum::randomOrganics())
                ->setBirthZipCode($this->faker->postcode())
                ->setFax(Faker::weightingBoolean(30) ? Faker::phoneNumber(1, 5) : null)
                ->setLandline(Faker::weightingBoolean(60) ? Faker::phoneNumber(1, 5) : null)
                ->setMobile(Faker::phoneNumber(6, 9))
                ->setUsername($name ?? $this->faker->username())
                ->setRoles([$role])
                ->setEmail(null !== $name ? $name.'@scoutix.ovh' : $this->faker->email())
                ->setPassword($this->passwordHasher->hashPassword($user, self::PASSWORD))
            ;
        }, null !== $name ? $reference.$name : $reference);
    }

    private function userLifeCycle(Collection $users): void
    {
        foreach ($users->getValues() as $user) $this->lifeCycle($user);
    }
}
