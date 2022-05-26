<?php

namespace App\Repository;

use App\Entity\Locality;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Locality|null find($id, $lockMode = null, $lockVersion = null)
 * @method Locality|null findOneBy(array $criteria, array $orderBy = null)
 * @method Locality[]    findAll()
 * @method Locality[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class Localitytory extends ServiceEntityRepository
{
    public const ALIAS = 'l';

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Locality::class);
    }

    /** TODO: create Ancestor for that */
    public function byFields(array $fields, int $id = -1): ?array
    {
        $qb = $this
            ->createQueryBuilder(self::ALIAS)
            ->select(...$fields)
        ;

        return -1 !== $id
            ? $qb
                ->where(self::ALIAS.'.id = :id')
                ->setParameter('id', $id)
                ->getQuery()
                ->getOneOrNullResult()
            : $qb
                ->getQuery()
                ->getResult()
            ;
    }
}
