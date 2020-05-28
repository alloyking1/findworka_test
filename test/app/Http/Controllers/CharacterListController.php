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

        // $id = $request->book_id;
        // $value = $request->character_url;
        // $ifExist = Character::where('book_id', $id)->get();

        // if($ifExist->isEmpty()){
        //     foreach($value as $content){
        //         $insert = Character::create([
        //             'book_id' => $id,
        //             'character_url' => $content,
        //         ]);
        //     }

        //     return response()->json([
        //         'data'=> $insert,
        //         'message' => 'character list added'
        //     ], 200);
        // }else{
        //     return response()->json([
        //         'message' => 'data already exist'
        //     ]);
        // }

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

    public function fetch(Request $request){
        $characterList = Character::where('book_id', $request->id)->get();
        return response()->json($characterList, 200);
    }
}
