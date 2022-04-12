<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BtcVendor extends Model
{
    use HasFactory;
    protected $table = "btc_vendors";

    protected $fillable = ['uuid', 'name', 'rate', 'address', 'filename'];

}
