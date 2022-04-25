import { ref, reactive, watch, computed, onMounted, onUnmounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { ExactCardImg } from './cards'
import { usePage, useForm, Head } from '@inertiajs/inertia-vue3'
import { tablet } from './breakpoints.js'
import stepsCrementer from './stepsCrementer.js'
import loader from './Loading.js'
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
        case 'paid':
            color = 'green'
            break
        case 'cancelled':
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
    Head,
    statusColor,
    reactive,
    tablet,
    computed,
    onMounted,
    onUnmounted,
    usePage,
    stepsCrementer,
    Inertia,
    loader,
    useForm,
    ExactCardImg,
    isValidEmail,
    isValidFullName,
    confirmPassword,
    isValidPWd,
}