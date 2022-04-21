<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Enum\Genderum;
use App\Enum\Rolum;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class Userures extends Fixturabs
{
// bin/console d:f:l -n --group=Userures --group=Activityures

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
        foreach ([
            ['role' => Rolum::Admin->value, 'reference' => self::REFERENCE['admin'], 'number' => self::NUMBER_ELEMENT['admin']],
            ['role' => Rolum::Moderator->value, 'reference' => self::REFERENCE['moderator'], 'number' => self::NUMBER_ELEMENT['moderator']],
            ['role' => Rolum::Guest->value, 'reference' => self::REFERENCE['guest'], 'number' => self::NUMBER_ELEMENT['guest']],
            ['role' => Rolum::User->value, 'reference' => self::REFERENCE['user'], 'number' => self::NUMBER_ELEMENT['user']]
        ] as $item) {
            if ($item['role'] !== Rolum::Admin->value) {
                $this->userLifeCycle($this->createUser($item['role'], $item['reference'], $item['number']));
            } else {
                $this->createUser($item['role'], $item['reference'], $item['number']);
            }
        }
    }

    private function createUser(string $role, string $reference, int $element): Collection
    {
        return $this->create(User::class, $element, function (User $user) use ($role) {
            $user
                ->setGender($gender = (90 <= \random_int(0, 100)
                    ? (\rand(0, 1) ? Genderum::Female : Genderum::Male)
                    : $this->faker->randomElement(Genderum::cases())
                ))
                ->setFirstName($this->faker->firstName())
                ->setMaidenName(Genderum::Female === $gender ? $this->faker->lastName() : null)
                ->setMatronym(20 <= \random_int(0, 100) ? $this->faker->lastName() : null)
                ->setMiddleName($middleName = (70 <= \random_int(0, 100) ? $this->faker->firstName() : null))
                ->setPatronym($this->faker->lastName())
                ->setThirdName($middleName ? (40 <= \random_int(0, 100) ? $this->faker->firstName() : null) : null)
                ->setAddressCity($this->faker->city())
                ->setAddressComplement($this->faker->address())
                ->setAddressCountry($this->faker->country())
                ->setAddressDepartment($this->faker->word())
                ->setAddressNumber(\random_int(1, 2_000))
                ->setAddressState($this->faker->word())
                ->setAddressStreet($this->faker->address())
                ->setAddressZipCode($this->faker->postcode())
                ->setBirth(\DateTimeImmutable::createFromMutable($this->faker->dateTimeBetween('-100 years', '-18 years')))
                ->setBirthCity($this->faker->city())
                ->setBirthZipCode($this->faker->postcode())
                ->setFax(30 <= \random_int(0, 100) ? '0'.\random_int(1, 5).\random_int(10_00_00_00, 99_99_99_99) : null)
                ->setLandline(60 <= \random_int(0, 100) ? '0'.\random_int(1, 5).\random_int(10_00_00_00, 99_99_99_99) : null)
                ->setMobile('0'.\random_int(6,9).\random_int(10_00_00_00, 99_99_99_99))
                ->setUsername($this->faker->username())
                ->setRoles([$role])
                ->setEmail($this->faker->email())
                ->setPassword($this->passwordHasher->hashPassword($user, self::PASSWORD))
            ;
        }, $reference);
    }

    private function userLifeCycle(Collection $users): void
    {
        foreach ($users->getValues() as $user) $this->lifeCycle($user);
    }
}
