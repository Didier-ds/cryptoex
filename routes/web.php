<?php

use App\Http\Controllers\UserAccountController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\CardletController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\UserBankDetailsController;
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
     Route::get('/upload/{uuid}', [CardsController::class, 'isType'])->name('card.isType');
     Route::get('/user/transactions', [CardletController::class, 'userCardlets']);  // To get user cardlet
     Route::post('/users/cardlets-make/{Carduuid}', [CardletController::class, 'store']);  // To create cardlet
     Route::get('/user/profile', [UserAccountController::class, 'index'])->name('account.index');
     Route::get('/get-banks', [UserBankDetailsController::class, 'getBanks'])->name('bank.getBanks');
     Route::get('/user/bank-account', [UserBankDetailsController::class, 'create'])->name('bank.create');
     Route::post('/user/bank-account', [UserBankDetailsController::class, 'store'])->name('bank.store');
    });
    
Route::middleware(['bank_account_check', 'auth:sanctum', 'verified'])->group(function(){
    Route::get('/giftcards', [CardsController::class, 'index'])->name('card.index');
    Route::get('/upload/{uuid}', [CardsController::class, 'isType'])->name('card.isType');
});

require 'admin.php';