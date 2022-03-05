<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cardlet extends Model
{
    use HasFactory;

    protected $table = "cardlets";

    protected $fillable = ['uuid', 'name', 'type', 'amount', 'status', 'comment', 'image'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(CardletImage::class);
    }
}
