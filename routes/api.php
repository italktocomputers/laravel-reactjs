<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingPageController;

Route::get('/subscribe', [LandingPageController::class, 'test']);
Route::post('/subscribe', [LandingPageController::class, 'subscribe']);
