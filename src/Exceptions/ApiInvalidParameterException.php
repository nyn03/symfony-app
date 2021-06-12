<?php

declare(strict_types=1);

namespace App\Exceptions;

use Symfony\Component\Routing\Exception\InvalidParameterException;

class ApiInvalidParameterException extends InvalidParameterException
{
    public function __construct(string $message = '', int $code = 0)
    {
        parent::__construct($message, $code);
    }
}