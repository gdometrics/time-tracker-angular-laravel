<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

use Illuminate\Support\Facades\Request;

class UsersController extends Controller
{
    // Gets all users in the users table and returns them
    public function index()
    {
      $users = User::all();

      return $users;
    }

    // Grab all the data passed into the request and save a new record
    public function store()
    {
      $data = Request::all();
      $user = new User();
      $user->fill($data);
      $user->save();
    }

    // Grab all the data passed into the request and fillthe database record with the new data
    public function update($id)
    {
      $user = User::find($id);
      $data = Request::all();
      $user->fill($data);
      $user->save();
    }

    public function destroy($id)
    {
      $user = User::find($id);

      $user->delete();
    }
}
