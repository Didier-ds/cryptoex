<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currencies extends Model
{
    use HasFactory;
    protected $table = 'currencies';
    protected $fillable = [
        'name',
        'asset_type',
        'country_code',
        'symbol',
        'currency',
        'icon_url'
    ];
}
