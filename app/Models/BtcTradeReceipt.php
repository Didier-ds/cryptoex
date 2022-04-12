<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BtcTradeReceipt extends Model
{
    use HasFactory;
    protected $table = "btc_trade_receipts";

    protected $fillable = ['uuid', 'amount', 'filename', 'user_id', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
