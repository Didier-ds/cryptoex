<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => (string) $this->id,
            'uuid' => $this->uuid,
            'fullname' => $this->fullname,
            'email'  => $this->email,
            'phone' => $this->phone,
            'verified_at' => $this->email_verified_at
        ];
    }
}
