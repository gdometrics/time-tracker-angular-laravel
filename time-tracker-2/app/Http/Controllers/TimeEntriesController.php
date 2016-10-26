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

    // Grab all the data passed into the request and save a new record
    public function store()
    {
      $data = Request::all();
      $timeentry = new TimeEntry();
      $timeentry->fill($data);
      $timeentry->save();
    }

    // Grab all the data passed into the request and fillthe database record with the new data
    public function update($id)
    {
      $timeentry = TimeEntry::find($id);
      $data = Request::all();
      $timeentry->fill($data);
      $timeentry->save();
    }

    public function destroy($id)
    {
      $timeentry = TimeEntry::find($id);

      $timeentry->delete();
    }


}
