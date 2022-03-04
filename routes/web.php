<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\CardsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
// Route::get('/registers', function () {
//     return Inertia::render('Login2');
// });
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    if(Auth::user()->hasRole('admin')) {
        return Inertia::render('Admin/Dashboard');
    } else {
        return Inertia::render('Dashboards');
    }
})->name('dashboard');
// hasRole
 Route::middleware(['auth:sanctum', 'verified'])->group(function(){
     Route::get('/giftcards', [CardsController::class, 'index'])->name('card.index');
     Route::get('/upload/{name}', [CardsController::class, 'isType'])->name('card.isType');
 });

require 'admin.php';