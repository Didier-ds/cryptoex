<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CardletRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|unique:cardlets',
            'type' => 'required|string|unique:cards',
            'country' => 'required|string',
            'rate' => 'required|string',
            'min' => 'required|string',
            'max' => 'required|string'
        ];
    }
}
