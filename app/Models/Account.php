<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    protected $table = "accounts";
    protected $guarded = [];
    protected $fillable = [
        'uuid',
        'bank_name',
        'account_number',
        'account_name'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
