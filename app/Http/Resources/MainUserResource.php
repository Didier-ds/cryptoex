<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MainUserResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => (string) $this->id,
            'uuid' => $this->uuid,
            'fullname' => $this->fullname,
            'email'  => $this->email,
            'phone' => $this->phone,
            'account' => $this->account
        ];
    }
}
