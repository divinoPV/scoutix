<?php

namespace App\Repository;

use App\Entity\NewsCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsCategory[]    findAll()
 * @method NewsCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class NewsCategorytory extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsCategory::class);
    }
}
