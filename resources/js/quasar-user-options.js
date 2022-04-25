// import './quasar.variables.sass'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import { Notify, Loading, LoadingBar } from 'quasar'
// To be used on app.use(Quasar, { ... })
const primary = '#00C2FF'
export default {
    config: {
        brand: {
            primary, //'#DE3618',
            secondary: '#04172a',
            // ... or all other brand colors
        },
        loading: {
            /* look at QuasarConfOptions from the API card */
        },
        notify: {
            /* look at QuasarConfOptions from the API card */
        },
        // loadingBar: {
        //     size: '3px',
        //     color: 'primary',
        // },
    },
    plugins: {
        Loading,
        Notify,
        // LoadingBar,
    },
}