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
const statusColor = (status) => {
    let color
    switch (status) {
        case 'pending':
            color = 'orange'
            break
        case 'success':
            color = 'green'
            break
        case 'failed':
            color = 'red'
            break
        default:
            color = 'orange'
    }
    return color
}
export {
    ref,
    watch,
    statusColor,
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
