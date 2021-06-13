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
    public function ItThrowsExceptionOnMissingParameters()
    {
        $parameters = [
            'page' => 0
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $validator->validate($parameters);
    }

    /** @test */
    public function ItThrowsExceptionWhenZeroPassedAsPageNumber()
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

    /** @test */
    public function ItThrowsExceptionWithMessageForInvalidLocation()
    {
        $parameters = [
            'location' => 'abc',
            'hdd' => '',
            'ram' => '',
            'storage' => '',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::LOCATION_SHOULD_AN_INTEGER);
        $validator->validate($parameters);
    }

    /** @test */
    public function ItThrowsExceptionWithMessageForInvalidHDDType()
    {
        $parameters = [
            'location' => '',
            'hdd' => 'abc',
            'ram' => '',
            'storage' => '',
            'page' => 1
        ];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $this->expectErrorMessage(ValidationMessages::HDD_SHOULD_BE_AN_INTEGER);
        $validator->validate($parameters);
    }

     /** @test */
     public function ItThrowsExceptionWithMessageForNonIntegerPage()
     {
         $parameters = [
             'location' => '',
             'hdd' => 'abc',
             'ram' => '',
             'storage' => '',
             'page' => 1.1
         ];
         $validator = new ApiRequestParameterValidator();
         $this->expectException(ApiInvalidParameterException::class);
         $this->expectErrorMessage(ValidationMessages::PAGE_SHOULD_BE_AN_INTEGER);
         $validator->validate($parameters);
     }
}