<?php

namespace App\Tests\Validators;

use PHPUnit\Framework\TestCase;
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
    public function throwsExceptionOnInvalidaParameters()
    {
        $parameters = ['page' => 0];
        $validator = new ApiRequestParameterValidator();
        $this->expectException(ApiInvalidParameterException::class);
        $validator->validate($parameters);
    }

    /** @test */
    public function NoExceptionsThrownForValidParameters()
    {
        $parameters = ['location' => 1, 'page' => 1];
        $validator = new ApiRequestParameterValidator();
        $this->assertNull(
            $validator->validate($parameters)
        );
    }
}