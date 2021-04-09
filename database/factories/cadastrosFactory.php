<?php

namespace Database\Factories;

use App\Models\cadastros;
use Illuminate\Database\Eloquent\Factories\Factory;

class cadastrosFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = cadastros::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'NmRazao' => $this->faker->name,
            'NmFantasia'=> $this->faker->name,
            'Email' =>   $this->faker->unique()->safeEmail,
            'idTipo' => $this->faker->numberBetween(1, 10),
        ];
    }
}
