<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardNameResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'card' => [
                'id' => (string) $this->id,
                
                'name' => $this->name,
                
            ]
        ];
    }
}
