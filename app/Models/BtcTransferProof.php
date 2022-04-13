<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BtcTransferProof extends Model
{
    use HasFactory;
    protected $table = "btc_transfer_proofs";

    protected $fillable = ['uuid', 'amount', 'filename', 'vendor_name', 'rate', 'user_id', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
