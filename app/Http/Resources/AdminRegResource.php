<?php

namespace App\Http\Resources;

use App\Models\Konstants;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminRegResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'status' => Konstants::MSG_OK,
            'type' => Konstants::ROLE_ADMIN,
            'message' => Konstants::MESSAGE_ADMIN_CHECK_MAIL,
            'admin' => [
                'admin_email' => $request[Konstants::EMAIL],
                'admin_password' => $request[Konstants::PWORD]
            ]
        ];
    }
}
