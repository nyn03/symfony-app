<?php

namespace App\Validators;

use Symfony\Component\HttpFoundation\Response;
use App\Exceptions\ApiInvalidParameterException;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validation;

class ApiRequestParameterValidator
{
    public function validate(array $filters)
    {
        $contraint = new Assert\Collection(
            [
                'page' => [
                    new Assert\NotBlank([
                        'message' => 'page should not be blank'
                    ]),
                    new Assert\Type(
                        [
                            'type' => 'numeric',
                            'message' => 'page should be numeric'
                        ]),
                    new Assert\GreaterThan([
                            'value' => '0',
                            'message' => 'page should be greater than 0'
                        ])
                ],
            ]);

        $validator = Validation::createValidator();
        $violations = $validator->validate(
            [
                'page' => $filters['page'] ?? null
            ],
            $contraint
        );

        foreach ($violations as $violation) {
            throw new ApiInvalidParameterException($violation->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}