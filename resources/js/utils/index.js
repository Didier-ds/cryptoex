import { ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { ExactCardImg } from './cards'
import { usePage, useForm } from '@inertiajs/inertia-vue3'
import {
    isValidEmail,
    isValidFullName,
    isValidPWd,
    confirmPassword,
} from './validate.js'
export {
    ref,
    computed,
    usePage,
    Inertia,
    useForm,
    ExactCardImg,
    isValidEmail,
    isValidFullName,
    confirmPassword,
    isValidPWd,
}