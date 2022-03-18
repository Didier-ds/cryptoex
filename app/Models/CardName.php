<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardName extends Model
{
    use HasFactory;
    protected $table = 'cardnames';
    protected $fillable = [
        'uuid',
        'name',
        'filename'
    ];
}
