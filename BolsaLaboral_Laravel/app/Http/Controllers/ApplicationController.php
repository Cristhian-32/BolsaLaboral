<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplicationPostRequest;
use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $applications = Application::all();
        //return $tags;
        return response()->json([
            'success' => true,
            'data' => $applications,
            'message' => 'All Content'
        ]);
    }

    public function show(Application $application)
    {
        $application = Application::find($application);
        return response()->json($application);
    }

    public function store(ApplicationPostRequest $request)
    {
        $application = Application::create([
            'user_id' => auth()->user()->id,
            'post_id' => $request['post_id'],
        ]);

        return response()->json([
            'success' => true,
            'data' => Application::all(),
            'message' => "Record saved successfully!",
        ], 200);
    }

    public function update(ApplicationPostRequest $request, Application $application)
    {
        $application->update($request->all());

        return response()->json([
            'success' => true,
            'data' => Application::all(),
            'message' => "Record updated successfully!",
        ], 200);
    }

    public function destroy(Application $application)
    {
        $application->delete();
        return response()->json([
            'success' => true,
            'data' => $application,
            'message' => "Record deleted successfully!",
        ], 200);
    }
}
