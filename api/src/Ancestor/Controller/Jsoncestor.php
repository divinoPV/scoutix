<?php

namespace App\Ancestor\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class Jsoncestor extends AbstractController
{
    public function __construct(
        protected readonly EntityManagerInterface $entityManager,
        protected readonly SerializerInterface $serializer,
        protected readonly TranslatorInterface $translator,
    ) {
    }
}
