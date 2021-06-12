<?php
declare(strict_types = 1);

namespace App\Helpers;

class CustomHelperFunctions
{
    public static function validateArrayDataType($array, $predicate): bool
    {
        return array_filter($array, $predicate) === $array;
    }
}
