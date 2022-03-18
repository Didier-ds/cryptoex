<template>
    <admin-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium work text-lg capitalize">
                    Create A New giftcard
                </p>
            </div>
            <form class="shadow-lg border max-w-xl mx-auto overflow-hidden work sm:rounded-lg m-4" @submit.prevent="submit">
                <p class="font-medium p-4 work text-lg capitalize">
                    Create A New giftcard
                </p>
                <JetValidationErrors class="px-2"/>
                <div class="">
                    <div class=" grid sm:grid-cols-2 ">
                        <q-input v-model="form.name" class="m-2" standout type="text" outlined label="Giftcard Name"/>
                        <q-input v-model="form.filename" class="m-2" type="text" outlined label="Type"/>
                    </div>
                    <!-- <div class=" grid sm:grid-cols-2 ">
                        <q-input v-model="form.rate" class="m-2" standout type="text" outlined label="Rate"/>
                        <q-input v-model="form.country" class="m-2" type="text" outlined label="Country"/>
                    </div>
                    <div class=" grid sm:grid-cols-2 ">
                        <q-input v-model="form.min" class="m-2" standout type="text" outlined label="Min"/>
                        <q-input v-model="form.max" class="m-2" type="text" outlined label="Max"/>
                    </div> -->
                </div>
                <div class="flex p-4">
                    <q-btn color="primary" label="Submit" type="submit" :disabled="form.processing" class="mx-auto" no-cap/>
                </div>
            </form>
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import {useForm} from '@/utils'
 import { useQuasar } from 'quasar'
 const $q = useQuasar()
const form = useForm({
    name: '',
    filename:'',
    // rate: '',
    // country: '',
    // min: '',
    // max: ''
})

const submit = () => {
    form.filename = `https://drive.google.com/uc?id=${form.filename}`
    form.transform((data) => ({
        ...data,
    }))
    
        // eslint-disable-next-line no-undef
        .post(`/admin/cardname/create`, {
            onSuccess: () => {
                form.reset()
                $q.notify({
                    type: 'positive',
                    message: 'Card Created',
                    position: 'top-right',
                })
            },
            onError: errors => {console.log(errors)},
        })
}
</script>

<style lang="scss" scoped>

</style>