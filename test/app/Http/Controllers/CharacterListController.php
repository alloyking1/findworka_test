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
        // $value = $request->character_url;


        $id = $request->book_id;
        $value = $request->character_url;

        foreach($value as $content){
            $insert = Character::create([
                'book_id' => $id,
                'character_url' => $content,
            ]);
        }

        return $insert;


        return response()->json([
            'data'=> $save,
            'message' => 'comment added'
        ], 200);
    }

     /**
     * fetch character list 
     * @param $_REQUEST
     * @return $response
     */

    public function fetch(Request $request){
        $characterList = Character::where('book_id',$request->id)->get();
        return response()->json($characterList, 200);
    }
}
