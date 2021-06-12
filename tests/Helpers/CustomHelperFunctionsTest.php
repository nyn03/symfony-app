<?php
declare(strict_types = 1);

namespace App\Tests\Helpers;

use PHPUnit\Framework\TestCase;
use App\Helpers\CustomHelperFunctions;

class CustomHelperFunctionsTest extends TestCase
{
    /** @test */
    public function ItFailsWhenAllArrayElementsAreNotSame()
    {
        $this->assertFalse(CustomHelperFunctions::validateArrayDataType([1,2,'abc'], 'is_numeric'));
    }

    /** @test */
    public function ItSucceedWhenAllArrayElementsAreSame()
    {
        $this->assertTrue(CustomHelperFunctions::validateArrayDataType([1,2,3], 'is_numeric'));
    }
}