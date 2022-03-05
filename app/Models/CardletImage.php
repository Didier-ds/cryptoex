<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardletImage extends Model
{   
    protected $fillable = ['cardlet_id', 'filename'];

    public function cardlet()
        {
        return $this->belongsTo('App\Cardlet');
        }
}
