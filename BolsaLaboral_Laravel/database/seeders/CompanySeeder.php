<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name' => 'Universidad Peruana Unión',
            'ruc' => '202020202026',
            'address' => 'Av. Brasil',
            'phone' => '99744848',
            'email'=> 'upeujuliaca@gmail.com',
            'user_id'=>2
        ]);

        Company::create([
            'name' => 'TechSolutions Inc.',
            'ruc' => '123456789012',
            'address' => '123 Main St',
            'phone' => '555-123-4567',
            'email'=> 'info@techsolutions.com',
            'user_id'=>3
        ]);

        Company::create([
            'name' => 'FashionHub',
            'ruc' => '987654321098',
            'address' => '456 Fashion Ave',
            'phone' => '555-987-6543',
            'email'=> 'info@fashionhub.com',
            'user_id'=>4
        ]);

        Company::create([
            'name' => 'FinanceConsult',
            'ruc' => '246813579135',
            'address' => '789 Wall St',
            'phone' => '555-789-1234',
            'email'=> 'info@financeconsult.com',
            'user_id'=>5
        ]);


    }
}
