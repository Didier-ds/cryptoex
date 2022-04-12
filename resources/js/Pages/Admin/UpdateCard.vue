<template>
    <main-layout>
        <div class="mx-auto">
            <div class="flex flex-row justify-between items-center mx-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        Update Card
                    </h2>
                </div>
            </div>
            <div
                class="w-10/12 mx-auto rounded-lg border mt-8 md:p-4 shadow-lg p-2">
                <form @submit.prevent="submit">
                    <div class="md:grid grid-cols-2">
                        <div class="m-2">
                            <p>Please Select your giftcard</p>
                            <select
                                id="giftcard"
                                v-model="form.card"
                                name="giftcard">
                                <option value="" selected>
                                    --Please Select your giftcard--
                                </option>
                                <option
                                    v-for="card in newGiftcards"
                                    :key="card"
                                    :value="card">
                                    {{ card }}
                                </option>
                            </select>
                        </div>
                        <div class="m-2">
                            <p>Please Select your giftcard category</p>
                            <select
                                id="category"
                                v-model="form.category"
                                name="category">
                                <option value="" selected>
                                    --Please Select your giftcard category--
                                </option>
                                <option
                                    v-for="category in categories"
                                    :key="category"
                                    :value="category.type">
                                    {{ category.type }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="md:grid grid-cols-2 items-center">
                        <div class="m-2">
                            <q-input
                                v-model="form.rate"
                                required
                                type="number"
                                outlined
                                placeholder="Rate" />
                        </div>
                        <div class="m-2">
                            <span class="block work">Rate</span>
                            <span class="font-bold text-green-800 ibm text-xl"
                                >&#8358;{{ rate }}</span
                            >
                        </div>
                    </div>
                    <q-btn
                        color="secondary"
                        :disabled="form.processing"
                        class="my-2 mx-auto"
                        label="Upgrade"
                        type="submit" />
                </form>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import { ref, computed, watch, useForm } from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const props = defineProps({
    giftcards: {
        type: Array,
        default: () => [],
    },
})
const categories = ref(null)
const form = useForm({
    card: 'Select Giftcard',
    category: 'Select Giftcard Category',
    uuid: null,
    rate: null,
})

watch(
    () => form.card,
    () => {
        categories.value = props.giftcards.filter(
            (card) => card.name === form.card
        )
    }
)

const rate = computed(() => {
    const selectedCard = props.giftcards.find(
        (card) => card.name === form.card && card.type === form.category
    )
    form.uuid = selectedCard ? selectedCard.uuid : null
    return selectedCard ? selectedCard.rate : 0
})

const newGiftcards = computed(() => {
    let i
    const giftcards = props.giftcards.map((any) => any.name)
    const newArr = []
    const setObj = {}
    for (i = 0; i < giftcards.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(setObj, giftcards[i])) {
            newArr.push(giftcards[i])
            setObj[giftcards[i]] = true
        }
    }
    return newArr
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
:root {
    --select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);
}
select {
    width: 100%;
    min-width: 15ch;
    //   max-width: 30ch;
    border: 1px solid lightgrey;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    outline: none;
    margin: 0.5em 0;
}
select::-ms-expand {
    display: none;
}
</style>
