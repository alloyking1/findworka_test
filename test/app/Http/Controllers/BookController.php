<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class BookController extends Controller
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
        // 'X-RapidAPI-Host: kvstore.p.rapidapi.com',
        // 'X-RapidAPI-Key: 7xxxxxxxxxxxxxxxxxxxxxxx',
        'Content-Type: application/json'
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        // echo $response . PHP_EOL;
        return response($response);
        
    }
}
