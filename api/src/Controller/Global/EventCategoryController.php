<?php

namespace App\Controller\Global;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventCategorytory;

final class EventCategoryController extends AbstractController
{
    public function __invoke(EventCategorytory $repoEventCateg)
    {
        $eventCategories = $repoEventCateg->findAvailable();

        return $eventCategories;
    }
}
