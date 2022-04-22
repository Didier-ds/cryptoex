<?php

use App\Http\Controllers\UserAccountController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\BtcTransferProofController;
use App\Http\Controllers\CardletController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\UserBankDetailsController;
use App\Models\Cardlet;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/registers', function () {
//     return Inertia::render('Login2');
// });
// hasRole
 Route::middleware(['auth:sanctum', 'verified'])->group(function(){
     Route::get('/', [OverviewController::class, 'index'])->name('dashboard');
     Route::get('/giftcards', [CardsController::class, 'index'])->name('card.index');
     Route::get('/upload/{uuid}', [CardsController::class, 'isType'])->name('card.isType');
     Route::post('user/btc-transfer-proof-make/{uuid}', [BtcTransferProofController::class, 'store'])->name('proof.store');// To upload user btc transfer proof
     Route::get('/user/transactions/giftcards', [CardletController::class, 'userCardlets']); 
     Route::get('/user/transactions/bitcoins', [BtcTransferProofController::class, 'index']);   
     Route::post('/users/cardlets-make/{Carduuid}', [CardletController::class, 'store']);  // To create cardlet
     Route::get('/settings/profile', [UserAccountController::class, 'index'])->name('account.index');
     Route::get('/settings/banks', [UserAccountController::class, 'banks'])->name('account.banks');
     Route::get('/get-banks', [UserBankDetailsController::class, 'getBanks'])->name('bank.getBanks');
     Route::get('/user/bank-account', [UserBankDetailsController::class, 'create'])->name('bank.create');
     Route::post('/user/bank-account', [UserBankDetailsController::class, 'store'])->name('bank.store');
    });
    
Route::middleware(['bank_account_check', 'auth:sanctum', 'verified'])->group(function(){
    Route::get('/giftcards', [CardsController::class, 'index'])->name('card.index');
    Route::get('/upload/{uuid}', [CardsController::class, 'isType'])->name('card.isType');
    Route::get('/sell-bitcoin', [BtcTransferProofController::class, 'create'])->name('btc-receipt.create');
});

require 'admin.php';