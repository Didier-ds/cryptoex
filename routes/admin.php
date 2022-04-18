<?php

use App\Http\Controllers\Admin\AdminCardletController;
use App\Http\Controllers\Admin\AdminCardNameController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\CardsController;
use App\Http\Controllers\Admin\CurrencyController;
use App\Http\Controllers\Admin\ReceiptTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\BtcVendorController;
use App\Http\Controllers\BtcTransferProofController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['role:admin', 'auth:sanctum', 'verified'],'prefix' => 'admin'], function () {
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard.index');
    Route::get('cardlets', [AdminCardletController::class, 'index'])->name('cardlet.index');
    Route::get('cardlets/{id}', [AdminCardletController::class, 'show'])->name('cardlet.show');
    Route::patch('cardlets/{id}', [AdminCardletController::class, 'update'])->name('cardlet.update');
    Route::get('giftcards', [CardsController::class, 'index'])->name('cards.index');
    Route::get('giftcards/create', [CardsController::class, 'create'])->name('cards.create');
    Route::get('cardname/create', [AdminCardNameController::class, 'index'])->name('cardnames.index');
    Route::post('cardname/create', [AdminCardNameController::class, 'store'])->name('cardnames.store');
    Route::get('receipt/create', [ReceiptTypeController::class, 'index'])->name('receipt.index');
    Route::post('receipt/create', [ReceiptTypeController::class, 'store'])->name('receipt.store');
    Route::get('currency/create', [CurrencyController::class, 'index'])->name('currency.index');
    Route::post('currency/create', [CurrencyController::class, 'store'])->name('currency.store');
    Route::post('giftcards/create', [CardsController::class, 'store'])->name('cards.store');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/{user_id}', [UserController::class, 'show'])->name('users.show');
    Route::get('/update/giftcards', [CardsController::class, 'update'])->name('cards.update');
    Route::patch('update/giftcards/{uuid}', [CardsController::class, 'cardRateChange'])->name('cards.cardRateChange');
    Route::get('/giftcard/category/{uuid}', [CardsController::class, 'isType'])->name('card.isType');
    Route::get('btc-vendors', [BtcVendorController::class, 'index'])->name('btc-vendors.index');
    Route::get('/btc-vendors/create', [BtcVendorController::class, 'create'])->name('btc-vendors.create');
    Route::post('/btc-vendors/create', [BtcVendorController::class, 'store'])->name('btc-vendors.store');
    Route::get('/bitcoin-proofs', [BtcTransferProofController::class, 'admin_index'])->name('btc-vendors.admin_index');
    Route::get('/bitcoin-proofs/{id}', [BtcTransferProofController::class, 'admin_show'])->name('btc-vendors.admin_show');



    Route::post('login', 'AdminLoginController@login')->name('login.post');
    Route::get('login', [AdminLoginController::class, 'index'])->name('login.index');
});

