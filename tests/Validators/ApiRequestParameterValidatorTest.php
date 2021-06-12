<?php
declare(strict_types=1);

namespace App\Tests\Validators;

use PHPUnit\Framework\TestCase;
use App\Constants\ValidationMessages;
use App\Exceptions\ApiInvalidParameterException;
use App\Validators\ApiRequestParameterValidator;

class ApiRequestParameterValidatorTest extends TestCase
{
    /** @test */
    public function hasRequestParameterValidatorTest()
    {
        $validator = new ApiRequestParameterValidator();

        $this->assertInstanceOf(ApiRequestParameterValidator::class, $validator);
    }

    /** @test */
    public function throwsExceptionOnMissingParameters()
    {
        $parameters = [
            'page' => 0
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $validator->validate($parameters);
    }

    /** @test */
    public function throwsExceptionOnInvalidPageParameter()
    {
        $parameters = [
            'location' => 1,
            'hdd' => '',
            'ram' => '4,8,12',
            'storage' => '250,1000',
            'page' => 0
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::PAGE_NUMBER_SHOULD_BE_GREATER_THAN_ZERO);
        $validator->validate($parameters);
    }

    /** @test */
    public function NoExceptionsThrownForValidParameters()
    {
        $parameters = [
            'location' => 1,
            'hdd' => '',
            'ram' => '4,8,12',
            'storage' => '250,1000',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->assertNull(
            $validator->validate($parameters)
        );
    }
    
    /** @test */
    public function ItThrowsExceptionWithMessageForInvalidRamValuesParameters()
    {
        $parameters = [
            'location' => 1,
            'hdd' => '',
            'ram' => 'abc,8,12',
            'storage' => '250,1000',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::EXPECTED_NUMERIC_VALUES_FOR_RAM);
        $validator->validate($parameters);
    }

    /** @test */
    public function ItThrowsExceptionWithMessageForInvalidStorageValuesParameters()
    {
        $parameters = [
            'location' => 1,
            'hdd' => '',
            'ram' => '',
            'storage' => 'abc,1000',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::EXPECTED_NUMERIC_VALUES_FOR_STORAGE);
        $validator->validate($parameters);
    }

    /** @test */
    public function ItThrowsExceptionWithMessageForMinValueGreaterThanMaxValueStorageParameters()
    {
        $parameters = [
            'location' => 1,
            'hdd' => '',
            'ram' => '',
            'storage' => '1000,0',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::INVLID_RANGE_VALUES_FOR_STORAGE);
        $validator->validate($parameters);
    }
}