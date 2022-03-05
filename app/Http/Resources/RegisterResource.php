<?php

namespace App\Http\Resources;

use App\Models\Konstants;
use Illuminate\Http\Resources\Json\JsonResource;

class RegisterResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'code' => Konstants::STATUS_OK,
            'status' => Konstants::MSG_OK,
            'message' => Konstants::MESSAGE_CEHECK_MAIL_LINK
        ];
    }
}
