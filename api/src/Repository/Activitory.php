<?php

namespace App\Repository;

use App\Entity\Activity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Activity|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activity|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activity[]    findAll()
 * @method Activity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class Activitory extends ServiceEntityRepository
{
    public const ALIAS = 'a';

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activity::class);
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
