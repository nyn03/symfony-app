<?php

namespace App\Validators;

use App\Exeptions\ApiInvalidParameterException;
use Symfony\Component\HttpFoundation\Response;

class ApiRequestParameterValidator
{
    public const VALID_QUERY_PARAMS = [
        'location',
        'hdd',
        'ram',
        'storage'
    ];

    public function validate(array $filters)
    {
        if (!empty(array_diff(array_keys($filters),self::VALID_QUERY_PARAMS))) {
            throw new ApiInvalidParameterException("Invalid parameters!", Response::HTTP_BAD_REQUEST);
        }
    }
}