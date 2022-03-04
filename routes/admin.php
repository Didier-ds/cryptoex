<?php

use App\Http\Controllers\Admin\AdminCardletController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\CardsController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['role:admin', 'auth:sanctum', 'verified'],'prefix' => 'admin'], function () {
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard.index');
    Route::get('cardlets', [AdminCardletController::class, 'index'])->name('cardlet.index');
    Route::get('giftcards', [CardsController::class, 'index'])->name('cards.index');
    Route::get('/giftcard/category/{name}', [CardsController::class, 'isType'])->name('card.isType');
    Route::post('login', 'AdminLoginController@login')->name('login.post');
    Route::get('login', [AdminLoginController::class, 'index'])->name('login.index');
});
