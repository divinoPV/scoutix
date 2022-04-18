<?php

namespace App\Repository;

use App\Entity\LocalityType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LocalityType|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocalityType|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocalityType[]    findAll()
 * @method LocalityType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class LocalityTypetory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocalityType::class);
    }
}
