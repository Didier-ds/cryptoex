<template>
    <div id="overlay" @click="closeModal">
        <div id="box" class="w-11/12 mx-auto p-2 z-20 rounded-sm">
            <p>Modal</p>
            <form @submit.prevent="submit">
                <div>
                        <p class="my-1 work font-medium">Card Price Range</p>
                        <div class="q-mt-xl">
                            <q-range
                                name="price_range"
                                v-model="range"
                                :min="0"
                                :max="1000"
                                label-always />
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <q-input
                            v-model="range.min"
                            class="m-2 px-2 border rounded"
                            type="number"
                            dense
                            borderless
                            label="min" />
                        <q-input
                            v-model="range.max"
                            class="m-2 px-2 border rounded"
                            type="number"
                            dense
                            borderless
                            label="max" />
                    </div>
                    <div class="mb-2">
                            <label
                                for="type"
                                class="my-1 work font-medium pb-2">
                                Card Rate
                            </label>
                            <q-input
                                v-model="form.rate"
                                class="px-2 border rounded"
                                type="number"
                                dense
                                borderless
                                label="rate" />
                            <!-- <q-input @update:model-value="val => { form.image = val[0] }" class="m-2" standout type="file" @change="handleChange" outlined label="icon_url"/> -->
                        </div>
                    <div class="flex p-4">
                    <q-btn
                        color="primary"
                        label="Submit"
                        type="submit"
                        :disabled="form.processing"
                        class="mx-auto"
                        no-cap />
                </div>
            </form>
        </div>
       </div>
</template>
<script setup>
import { ref, computed, useForm } from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()

// import Modal from '@/Jetstream/Modal.vue'
// import CategoryCard from '@/components/Admin/CategoryCard.vue'
// const props = defineProps({
//     categories: {
//         type: Array,
//         default: () => [],
//     },
//     cardname: {
//         type: Object,
//         default: () => {},
//     },
// })
const emit = defineEmits(['toggleModal'])
const closeModal = () => {
    emit('toggleModal')
}
const form = useForm({
    name: '',
    type: '',
    country: '',
    rate: '',
    min: 50,
    max: 100,
})
const range = ref({
    min: 50,
    max: 100,
})
const submit = () => {
    // form.filename = `https://drive.google.com/uc?id=${form.filename}`
    const { min, max } = range.value
    form.min = min
    form.max = max
    form.transform((data) => ({
        ...data,
    }))

        // eslint-disable-next-line no-undef
        .post(`/admin/giftcards/create`, {
            onSuccess: () => {
                form.reset()
                $q.notify({
                    type: 'positive',
                    message: 'Receipt Created',
                    position: 'top-right',
                })
            },
            onError: (errors) => {
                console.log(errors)
            },
        })
}
</script>
<style lang="scss" scoped>
#overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 300;
    background-color: #00000026;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
}
#box {
    margin: 0 auto;
    width: 90%;
    max-width: 47.375rem;
    display: flex;
    flex-direction: column;
    min-height: 0;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
    background: #fff;
}
@media (max-width: 425px) {
    #box {
        margin: 1em;
        // width: 100%;
        // min-height: 100vh;
        // border-radius: 0;
    }
}
</style>
