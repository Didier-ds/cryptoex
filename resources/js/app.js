require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import MaxWidthContainer from "@/components/reusables_/MaxWidthContainer.vue";
import { Quasar } from "quasar";
import store from './store';
import quasarUserOptions from "./quasar-user-options";
const appName = "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return (
            createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(store)
            .use(Quasar, quasarUserOptions)
            .component("InertiaLink", Link)
            .component("MaxWidthContainer", MaxWidthContainer)
            // eslint-disable-next-line no-undef
            .mixin({ methods: { route } })
            .mount(el)
        );
    },
});

InertiaProgress.init({ color: "#00c2ff" });