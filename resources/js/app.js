require('./bootstrap')

import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import MaxWidthContainer from '@/components/reusables_/MaxWidthContainer.vue'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import BaseCard from '@/components/Base/BaseCard.vue'
import BaseBtn from '@/components/Base/BaseBtn.vue'
import GoBack from '@/components/reusables_/GoBack.vue'
const appName = 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return (
            createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(store)
            .use(Quasar, quasarUserOptions)
            .component('InertiaLink', Link)
            .component('GoBack', GoBack)
            .component('BaseCard', BaseCard)
            .component('BaseBtn', BaseBtn)
            .component('MaxWidthContainer', MaxWidthContainer)
            // eslint-disable-next-line no-undef
            .mixin({ methods: { route } })
            .mount(el)
        )
    },
})

InertiaProgress.init({ color: '#00c2ff' })