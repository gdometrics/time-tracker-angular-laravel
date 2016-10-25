<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// A route group allow us to hava a prefix, in this case application
Route::group(array('prefix' => 'api'), function()
{
  Route::resource('time', 'TimeEntriesController');
  Route::resource('users', 'UsersController');
});
