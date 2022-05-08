<?php

namespace App\Tests\Integration;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Dispenser\Faker;
use App\Entity\User;
use App\Enum\Genderum;
use App\Enum\Rolum;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;

class AuthenticationTest extends ApiTestCase
{
    use ReloadDatabaseTrait;

    const URL = 'http://scoutix.co/';

    const EMAIL = 'test@scoutix.co';

    const PASSWORD = 'Azerty1234&.';

    public function testLogin(): void
    {
        $client = self::createClient();

        $user = (new User)
            ->setGender(Genderum::Male)
            ->setFirstName('test')
            ->setMaidenName(null)
            ->setMatronym(null)
            ->setMiddleName(null)
            ->setPatronym('test')
            ->setThirdName(null)
            ->setAddressCity('Compiègne')
            ->setAddressComplement(null)
            ->setAddressCountry('France')
            ->setAddressDepartment('Oise')
            ->setAddressNumber(\random_int(1, 2_000))
            ->setAddressState('Hauts-de-France')
            ->setAddressStreet('123 rue de la république')
            ->setAddressZipCode('60200')
            ->setBirth(Faker::dateTimeImmutable('-120 years', '-18 years'))
            ->setBirthCity('Compiègne')
            ->setBirthGender(Genderum::randomOrganics())
            ->setBirthZipCode('60200')
            ->setFax(Faker::weightingBoolean(30) ? Faker::phoneNumber(1, 5) : null)
            ->setLandline(Faker::weightingBoolean(60) ? Faker::phoneNumber(1, 5) : null)
            ->setMobile(Faker::phoneNumber(6, 9))
            ->setUsername('test')
            ->setRoles([Rolum::Admin->value])
            ->setEmail(self::EMAIL)
        ;

        $user->setPassword(
            $this->getContainer()->get('security.password_hasher')->hashPassword($user, self::PASSWORD)
        );

        $manager = $this->getContainer()->get('doctrine')->getManager();
        $manager->persist($user);
        $manager->flush();

        // retrieve a token
        $response = $client->request('POST', self::URL.'authentication_token', [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'username' => self::EMAIL,
                'password' => self::PASSWORD,
            ],
        ]);

        $json = $response->toArray();
        $this->assertResponseIsSuccessful();
        $this->assertArrayHasKey('token', $json);

        // test not authorized
        $client->request('GET', self::URL);
        $this->assertResponseStatusCodeSame(401);

        // test authorized
        $client->request('GET', self::URL, ['auth_bearer' => $json['token']]);
        $this->assertResponseIsSuccessful();
    }
}
