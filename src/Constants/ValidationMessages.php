<?php
declare(strict_types=1);

namespace App\Constants;

class ValidationMessages
{
    public const EXPECTED_NUMERIC_VALUES_FOR_RAM = 'Numeric values are expected for ram';
    public const EXPECTED_NUMERIC_VALUES_FOR_STORAGE = 'Numeric values are expected for storage';
    public const EXACTLY_TWO_VALUES_ARE_EXPECTED_FOR_STORAGE = 'Exactly 2 values expected for storage';
    public const INVLID_RANGE_VALUES_FOR_STORAGE = 'Invalid range values for storage';
    public const PAGE_NUMBER_SHOULD_BE_GREATER_THAN_ZERO = 'Page number should be greater than 0';
    public const PAGE_SHOULD_NOT_BE_BLANK = 'Page should not be blank';
    public const PAGE_SHOULD_BE_AN_INTEGER = 'Page should be an integer';
    public const LOCATION_SHOULD_AN_INTEGER = 'Location should be an integer';
    public const HDD_SHOULD_BE_AN_INTEGER = 'HDD type should be an integer';
}