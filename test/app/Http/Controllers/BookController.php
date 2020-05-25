<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class BookController extends Controller
{
    /**
     * Fetch list of Books from external API.
     * @param none
     * @return $result
     */

    public function fetchBook(){

        // $client = new \GuzzleHttp\Client();
        // $request = $client->get('https://anapioficeandfire.com/api/books/1');
        // $response = $request->getBody()->getContents();
        // return response()->json($response->json(), 200);

        $url = 'https://anapioficeandfire.com/api/books/1';

        
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_TIMEOUT => 30000,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                // Set Here Your Requesred Headers
                'Content-Type: application/json',
            ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            print_r(json_decode($response));
        }

        return response()->json($response, 200);
    }
}
