<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Fetch list of Books from external API.
     * @param none
     * @return $result
     */

    public function fetchBook(){
        $result = Http::get('https://anapioficeandfire.com/api/characters/583');
        return response()->json($result, 200);
    }
}
