<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Comment;
use App\Book;



class CommentController extends Controller
{
    /**
     * saves a comment 
     * @param $_REQUEST
     * @return $response
     */

    public function SaveComment(Request $request){
        $validate = Validator::make($request->all(),[
            'comment_body' => 'required|string|max:225'
        ]);

        if($validate->fails()){
            return response()->json([
                'message'=> 'All fields are required'
            ], 422);
        }

        $save = Comment::create([
            'book_id' => $request->book_id,
            'comment_body' => $request->comment_body,
        ]);

        return response()->json([
            'data'=> $save,
            'message' => 'comment added'
        ], 200);

    }

    
    /**
     * fetch comment belonging to particular post 
     * @param NULL
     * @return $response
     */

    public function CommentCounting(Request $request){
        $comments = Comment::where('book_id',$request->id)->get();
        $count = count($comments);
        return response()->json([$comments, $count], 200);
    }
}
