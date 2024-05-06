<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'user_id'=>2,
            'title' => 'Desarrollador Web Senior',
            'description' => 'Estamos buscando un desarrollador web senior con al menos 5 años de experiencia en desarrollo web utilizando tecnologías como PHP, Laravel, HTML, CSS y JavaScript.'
        ]);

        Post::create([
            'user_id'=>2,
            'title' => 'Diseñador Gráfico Junior',
            'description' => 'Buscamos un diseñador gráfico junior creativo y apasionado para unirse a nuestro equipo. Debe tener experiencia en diseño de logotipos, materiales de marketing y diseño de sitios web.'
        ]);
    }
}
