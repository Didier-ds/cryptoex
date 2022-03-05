<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'card' => [
                'id' => (string) $this->id,
                'uuid' => $this->uuid,
                'name' => $this->name,
                'type' => $this->type,
                'rate' => $this->rate,
            ]
        ];
    }
}
