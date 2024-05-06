<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AsistenciaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\TagController;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function () {
    Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('register/user', [AuthController::class, 'registerUser']);
    Route::post('register/company', [AuthController::class, 'registerCompany']);
    Route::post('register/admin', [AuthController::class, 'registerAdmin']);
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
   // Route::get('/profile', [AuthController::class, 'userProfile']);
    //Route::resource('/asistenciapa', AsistenciapaController::class);
    });

    //Rutas para Administradores (acceso total)
    Route::group(['middleware' => ['auth:api', 'role:admin']], function () {
        Route::apiResource('posts', PostController::class);
        Route::apiResource('applications', ApplicationController::class);

    });

    //Rutas para Empresas
    Route::group(['middleware' => ['auth:api', 'role:company']], function () {
        Route::apiResource('posts', PostController::class);
    });

    //Rutas para Usuarios
    Route::group(['middleware' => ['auth:api', 'role:user']], function () {
        Route::apiResource('applications', ApplicationController::class);
    });
//Route::apiResource('tags', TagController::class);
