<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BtcRateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'rate' => $this->rate,
            'uuid' => $this->uuid,
            'updated_at' => $this->updated_at
        ];
    }
}
