// import './quasar.variables.sass'

import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import { Notify, Loading } from "quasar";
// To be used on app.use(Quasar, { ... })
export default {
    config: {
        brand: {
            primary: "#00C2FF", //'#DE3618',
            // ... or all other brand colors
        },
        loading: {
            /* look at QuasarConfOptions from the API card */
        },
        notify: {
            /* look at QuasarConfOptions from the API card */
        },
    },
    plugins: {
        Loading,
        Notify,
    },
};