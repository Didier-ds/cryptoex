<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
        DB::table("cards")->insert([
            "name" => $faker->randomElement(["amazon", "itunes", "bestbuy"]),
            "type" => $faker->randomElement(["cash receipt", "e code", "debit receipt"]),
            "rate" => $faker->numberBetween(250, 500),
            'uuid' => Str::uuid()
        ]);
    }
}
