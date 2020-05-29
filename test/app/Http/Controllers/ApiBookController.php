<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class ApiBookController extends Controller
{
    /**
     * Fetch list of Books from external API .
     * @param none
     * @return $reponse
     */

    public function fetchBook(){

        $url = 'https://anapioficeandfire.com/';
        $collection_name = 'api/books';
        $request_url = $url . '/' . $collection_name;

        $curl = curl_init($request_url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        return response($response);
        
    }

    /**
     * save list of Books from external API to DB if not already existing .
     * @param $request
     * @return $reponse
     */

    protected function saveBook(Request $request){

        $find= Book::where('name', $request->bookName)->get();
        if($find->isEmpty()){
            $saveBook = Book::create([
                'name' => $request->bookName,
                'author' => $request->bookAuthor[0],
            ]);
            return response()->json($saveBook, 200);
        }else{
            $fetchbook= Book::where('name', $request->bookName)->first();
            return response()->json($fetchbook, 200);
        }
    }


    /**
     * Get list of books saved in DB
     * @param NULL
     * @return array of books
     */

     public function allBooks(){
        $books= Book::all();
        return response()->json($books, 200);
     }


     /**
     * Get a single book and its comments
     * @param NULL
     * @return array of books
     */
    public function singleBook(Request $request){
        $comments = Book::find($request->id)->BookComments;
            
        $post = Book::find($request->id);
        return response()->json([$comments, $post], 200);
    }
}
