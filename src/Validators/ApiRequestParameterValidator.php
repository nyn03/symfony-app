<?php
declare(strict_types=1);

namespace App\Validators;

use App\Constants\ValidationMessages;
use App\Helpers\CustomHelperFunctions;
use Symfony\Component\Validator\Validation;
use Symfony\Component\HttpFoundation\Response;
use App\Exceptions\ApiInvalidParameterException;
use Symfony\Component\Validator\Constraints as Assert;

class ApiRequestParameterValidator
{
    public function validate(array $filters)
    {
        $contraint = new Assert\Collection([
                'location' => [
                    new Assert\Required()
                ],
                'hdd' => [
                    new Assert\Required()
                ],
                'ram' => [
                    new Assert\Required()
                ],
                'storage' => [
                    new Assert\Required()
                ],
                'page' => [
                    new Assert\NotBlank([
                        'message' => ValidationMessages::PAGE_SHOULD_NOT_BE_BLANK
                    ]),
                    new Assert\Type([
                        'type' => 'numeric',
                        'message' => ValidationMessages::PAGE_SHOULD_BE_AN_INTEGER
                    ]),
                    new Assert\GreaterThan([
                        'value' => '0',
                        'message' => ValidationMessages::PAGE_NUMBER_SHOULD_BE_GREATER_THAN_ZERO
                    ])
                ]
            ]);

        $validator = Validation::createValidator();
        $violations = $validator->validate(
            $filters,
            $contraint
        );

        foreach ($violations as $violation) {
            throw new ApiInvalidParameterException($violation->getMessage(), Response::HTTP_BAD_REQUEST);
        }
        
        if (false === filter_var($filters['page'], FILTER_VALIDATE_INT))
        {
            throw new ApiInvalidParameterException(
                ValidationMessages::PAGE_SHOULD_BE_AN_INTEGER,
                Response::HTTP_BAD_REQUEST
            );
        }

        if (!empty($filters['location']) && false === filter_var($filters['location'], FILTER_VALIDATE_INT)) {
            throw new ApiInvalidParameterException(
                ValidationMessages::LOCATION_SHOULD_AN_INTEGER,
                Response::HTTP_BAD_REQUEST
            );
        }

        if (!empty($filters['hdd']) && false === filter_var($filters['hdd'], FILTER_VALIDATE_INT)) {
            throw new ApiInvalidParameterException(
                ValidationMessages::HDD_SHOULD_BE_AN_INTEGER,
                Response::HTTP_BAD_REQUEST
            );
        }        

        if (
            !empty($filters['ram']) &&
            false === CustomHelperFunctions::validateArrayDataType(explode(',', $filters['ram']), 'is_numeric')
        ) {
            throw new ApiInvalidParameterException(
                ValidationMessages::EXPECTED_NUMERIC_VALUES_FOR_RAM,
                Response::HTTP_BAD_REQUEST
            );
        }

        if (!empty($filters['storage'])) {
            $storageRange = explode(',', $filters['storage']);

            if (false === CustomHelperFunctions::validateArrayDataType($storageRange, 'is_numeric')) {
                throw new ApiInvalidParameterException(
                    ValidationMessages::EXPECTED_NUMERIC_VALUES_FOR_STORAGE,
                    Response::HTTP_BAD_REQUEST
                );
            }

            if (count($storageRange) !== 2) {
                throw new ApiInvalidParameterException(
                    ValidationMessages::EXACTLY_TWO_VALUES_ARE_EXPECTED_FOR_STORAGE,
                    Response::HTTP_BAD_REQUEST
                );
            }

            if ($storageRange[0] > $storageRange[1]) {
                throw new ApiInvalidParameterException(
                    ValidationMessages::INVLID_RANGE_VALUES_FOR_STORAGE,
                    Response::HTTP_BAD_REQUEST
                );
            }
        }
    }
}