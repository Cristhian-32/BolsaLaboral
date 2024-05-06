<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostPostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $posts = Post::all();
        //return $tags;
        return response()->json([
            'success' => true,
            'data' => $posts,
            'message' => 'All Content'
        ]);
    }

    public function show(Post $post)
    {
        $post = Post::find($post);
        return response()->json($post);
    }

    public function store(PostPostRequest $request)
    {
        $post = Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request['title'],
            'description' => $request['description']
        ]);

        return response()->json([
            'success' => true,
            'data' => Post::all(),
            'message' => "Record saved successfully!",
        ], 200);
    }

    public function update(PostPostRequest $request, Post $post)
    {
        $post->update($request->all());

        return response()->json([
            'success' => true,
            'data' => Post::all(),
            'message' => "Record updated successfully!",
        ], 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json([
            'success' => true,
            'data' => $post,
            'message' => "Record deleted successfully!",
        ], 200);
    }
}
