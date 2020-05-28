<?php

namespace App;
use App\Book;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * mass fillable fields 
     */

    protected $fillable =[
        'comment_body','client_ip','book_id'
    ];

    /**
     * Relationship between comments and post
     */

     public function comments(){
        return $this->belongsTo('App\ApiBookController', 'book_id');
     }
}
