<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Character;

class CharacterListController extends Controller
{
     /**
     * saves character list 
     * @param $_REQUEST
     * @return $response
     */

    public function call(Request $request){

        $url = 'https://anapioficeandfire.com/';
        $collection_name = 'api/characters';
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
     * fetch character list 
     * @param $_REQUEST
     * @return $response
     */

    public function callFIlter(Request $request){
        $url = 'https://anapioficeandfire.com/';
        $collection_name = 'api/characters';
        $filter = $request->param;
        $request_url = $url . '/' . $collection_name. '/?'. $filter;

        $curl = curl_init($request_url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        return response($response);
    }

    protected function cURL(){

    }
}
