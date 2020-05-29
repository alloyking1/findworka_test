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
    Route::get('/get/all', 'ApiBookController@allBooks');
    Route::get('/get/single/{id}', 'ApiBookController@singleBook');
    Route::post('/add/comment/{id}', 'CommentController@SaveComment');
    Route::get('/comment/fetch/count/{id}', 'CommentController@CommentCounting');
    Route::get('/fetch/characterlist/', 'CharacterListController@call');
    Route::get('/character/fetch/{id}', 'CharacterListController@fetch');
});