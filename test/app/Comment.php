<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * mass fillable fields 
     */

    protected $fillable =[
        'comment_body','book_id'
    ];
}
