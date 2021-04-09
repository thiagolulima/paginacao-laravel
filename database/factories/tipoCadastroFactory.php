<?php

namespace Database\Factories;

use App\Models\tipocadastro;
use Illuminate\Database\Eloquent\Factories\Factory;

class tipoCadastroFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = tipocadastro::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'descricao' => $this->faker->sentence(6),
        ];
    }
}
