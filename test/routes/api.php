<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



/*
|--------------------------------------------------------------------------
| Books Routes
|--------------------------------------------------------------------------
|
| A route group that contains all endpoint used in the test
|
*/

Route::prefix('book')->group(function(){
    Route::get('/fetch', 'ApiBookController@fetchBook');
    Route::post('/save', 'ApiBookController@saveBook');
    Route::get('/add/comment/{id}', 'CommentController@SaveComment');
});