<?php

namespace App\Enum;

use App\Beable\Enum\Trumpable;

enum Activityum: string
{
    use Trumpable;

    const NAME = 'activity';

    case AccompanyingCompanions = 'accompanying_companions';
    case PedagogicalAssistant = 'pedagogical_assistant';
    case GroupChaplain = 'group_chaplain';
    case TerritorialChaplain = 'territorial_chaplain';
    case HeadOfMission = 'head_of_mission';
    case CommunicationOfficer = 'communication_officer';
    case StewardshipOfficer = 'stewardship_officer';
    case LogisticsOfficer = 'logistics_officer';
    case HealthOfficer = 'health_officer';
    case HeadOfUnit = 'head_of_unit';
    case Cleophas = 'cleophas';
    case TerritorialDelegate = 'territorial_delegate';
    case Impeesa = 'impeesa';
    case GroupManager = 'group_manager';
    case DeputyGroupLeader = 'deputy_group_leader';
    case HeadOfDepartment = 'head_of_department';
    case LeprechaunManager = 'leprechaun_manager';
    case GroupSecretary = 'group_secretary';
    case TerritorialSecretary = 'territorial_secretary';
    case GroupTreasurer = 'group_treasurer';
    case TerritorialTreasurer = 'territorial_treasurer';
}
