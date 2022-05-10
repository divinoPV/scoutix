<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class Usertory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function findByRole(string $role): array
    {
        $admins = $this
            ->createQueryBuilder('u')
            ->getQuery()
            ->getResult();

        foreach ($admins as $key => $admin) if ($admin->getRoles()[0] !== $role) unset($admins[$key]);

        return $admins;
    }

    public function findAvailable()
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.deleted = :val')
            ->setParameter('val', false)
            ->getQuery()
            ->getResult()
            ;
    }
}
