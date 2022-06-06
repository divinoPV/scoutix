<?php

namespace App\Repository;

use App\Entity\Scope;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Scope|null find($id, $lockMode = null, $lockVersion = null)
 * @method Scope|null findOneBy(array $criteria, array $orderBy = null)
 * @method Scope[]    findAll()
 * @method Scope[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class Scopetory extends ServiceEntityRepository
{
    public const ALIAS = 's';

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Scope::class);
    }

    public function findAvailable(): array
    {
        return $this->createQueryBuilder(self::ALIAS)
            ->where(self::ALIAS.'.deleted = :deleted')
            ->setParameter('deleted', false)
            ->orderBy(self::ALIAS.'.createdAt')
            ->getQuery()
            ->getResult()
        ;
    }
}
