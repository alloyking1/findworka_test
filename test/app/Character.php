<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    //fillables
    public $fillable = [
        'book_id','character_url'
    ];
}
