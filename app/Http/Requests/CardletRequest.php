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
            'code' => 'required|string|unique:cardlets',
            'comment' => 'required|string',
            'images' => 'required|array|min:1|max:5',
            'images.*' => 'required|string|mimes:jpeg,png,jpg,svg|max:1024'
        ];
    }
}
