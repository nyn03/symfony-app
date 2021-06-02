<?php

namespace App\Test\Validators;

use PHPUnit\Framework\TestCase;
use App\Exeptions\ApiInvalidParameterException;
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
    public function throwsExceptionOnInvalidaParameters()
    {
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $validator->validate(['invalid_parameter']);
    }
}