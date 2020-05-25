<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * mass fillable fields 
     */

    protected $fillable =[
        'name','author'
    ];
}

