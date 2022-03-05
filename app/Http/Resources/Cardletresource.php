<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cardletresource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'cardlet' => [
                'id' => (string) $this->id,
                'uuid' => $this->uuid,
                'name' => $this->name,
                'type' => $this->type,
                'rate' => $this->rate,
                'code' => $this->code,
                'satus' => $this->status,
                'comment' => $this->comment,
                'image_url' => $this->image
            ]
        ];
    }
}
