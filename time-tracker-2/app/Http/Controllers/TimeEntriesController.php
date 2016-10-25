<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\TimeEntry;

use Illuminate\Support\Facades\Request;

class TimeEntriesController extends Controller
{
    // Gets time entries and eager loads their associated Users
    public function index()
    {
      $time = TimeEntry::with('user')->get();

      return $time;
    }
}
