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
        $collection_name = 'api/books/1';
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
     * @param $title
     * @return $reponse
     */

    protected function saveBook(Request $request){

        $book= Book::where('name', $request->name)->get();
        if($book->isEmpty()){
            $saveBook = Book::create([
                'name' => $request->name,
                'author' => $request->author[0],
            ]);
            return response($saveBook);
        }else{
            $book= Book::where('name', $request->name)->first();
            return response()->json($book, 200);
        }
    }
}
