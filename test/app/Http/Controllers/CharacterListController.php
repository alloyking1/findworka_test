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
        return $request->all();

        foreach ($request->character_url as $value) {
            
            $save = Character::create([
                'book_id' => $request->id,
                'character_url' => $request->character_url,
            ]);
    
        }

        return response()->json([
            'data'=> $save,
            'message' => 'comment added'
        ], 200);
    }
}
