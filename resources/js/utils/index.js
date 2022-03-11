import { ref, reactive, watch, computed, onMounted, onUnmounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { ExactCardImg } from './cards'
import { usePage, useForm } from '@inertiajs/inertia-vue3'
import { tablet } from './breakpoints.js'
import {
    isValidEmail,
    isValidFullName,
    isValidPWd,
    confirmPassword,
} from './validate.js'
export {
    ref,
    watch,
    reactive,
    tablet,
    computed,
    onMounted,
    onUnmounted,
    usePage,
    Inertia,
    useForm,
    ExactCardImg,
    isValidEmail,
    isValidFullName,
    confirmPassword,
    isValidPWd,
}
