<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Administrador',
            'email' => 'user@admin.com',
            'password' => bcrypt('123456'),
        ]);

        $roleAdmin = Role::all();
        $admin->roles()->attach($roleAdmin);

        $companies = [
            [
                'name' => 'Universidad Peruana Unión',
                'email' => 'upeujuliaca@gmail.com',
                'password' => bcrypt('123456'),
            ],
            [
                'name' => 'TechSolutions Inc.',
                'email' => 'info@techsolutions.com',
                'password' => bcrypt('123456'),
            ],
            [
                'name' => 'FashionHub',
                'email' => 'info@fashionhub.com',
                'password' => bcrypt('123456'),
            ],
            [
                'name' => 'FinanceConsult',
                'email' => 'info@financeconsult.com',
                'password' => bcrypt('123456'),
            ],
        ];

        foreach ($companies as $companyData) {
            $company = User::create($companyData);
            $roleCompany = Role::where('roleName', 'company')->first();
            $company->roles()->attach($roleCompany);
        }

        $user = User::create([
            'name' => 'Usuario',
            'email' => 'user@user.com',
            'password' => bcrypt('123456'),
        ]);

        $roleUser = Role::where('roleName', 'user')->first();
        $user->roles()->attach($roleUser);
    }

}
