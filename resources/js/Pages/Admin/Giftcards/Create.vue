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
                <div class="p-4 grid grid-cols-2 space-x-4">
                    <q-input v-model="form.name" standout type="text" outlined label="Giftcard Name"/>
                    <q-input v-model="form.type" type="text" outlined label="Category"/>
                </div>
                <div class="p-4 grid grid-cols-2 space-x-4">
                    <q-input v-model="form.rate" standout type="text" outlined label="Rate"/>
                    <q-input v-model="form.country" type="text" outlined label="Country"/>
                </div>
                <div class="p-4 grid grid-cols-2 space-x-4">
                    <q-input v-model="form.min" standout type="text" outlined label="Min"/>
                    <q-input v-model="form.max" type="text" outlined label="Max"/>
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
import {useForm} from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const form = useForm({
    name: '',
    type:'',
    rate: '',
    country: '',
    min: '',
    max: ''
})

const submit = () => {
    form.transform((data) => ({
        ...data,
    }))
        // eslint-disable-next-line no-undef
        .patch(`/admin/update/giftcards/${form.uuid}`, {
            onFinish: () => {
                form.reset('rate')
                $q.notify({
                    type: 'positive',
                    message: 'Card Rate Updated',
                    position: 'top-right',
                })
            },
        })
}
</script>

<style lang="scss" scoped>

</style>