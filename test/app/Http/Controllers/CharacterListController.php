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

    public function save(Request $request){

        $id = $request->book_id;
        $value = $request->character_url;
        $ifExist = Character::where('book_id', $id)->get();

        if($ifExist->isEmpty()){
            foreach($value as $content){
                $insert = Character::create([
                    'book_id' => $id,
                    'character_url' => $content,
                ]);
            }

            return response()->json([
                'data'=> $insert,
                'message' => 'character list added'
            ], 200);
        }else{
            return response()->json([
                'message' => 'data already exist'
            ]);
        }
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
