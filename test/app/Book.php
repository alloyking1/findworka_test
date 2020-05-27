<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


use App\Book;
use App\Comment;

class Book extends Model
{
    /**
     * mass fillable fields 
     */

    protected $fillable =[
        'name','author'
    ];



    /**
     * Relationship between comments and post
     */

    public function BookComments(){
        return $this->hasMany('App\Comment', 'book_id');
        // return $this->hasMany('App\Comment');
    }
}

