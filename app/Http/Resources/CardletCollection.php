<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardletCollection extends JsonResource
{

    public function toArray($request)
    {

        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'type' => $this->type,
            'rate' => $this->rate,
            'code' => $this->code,
            'satus' => $this->status,
            'comment' => $this->comment,
            'image_url' => $this->image

        ];
    }
}
