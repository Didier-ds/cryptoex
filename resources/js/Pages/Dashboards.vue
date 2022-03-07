<template>
    <main-layout>
        <div id="view">
            <div class="flex flex-col py-2 px-4 px-6">
                <h2 class="text-lg pt-4 work big font-bold capitalize">
                    Hello, {{ $page.props.user.fullname }}
                </h2>
                <p class="text-grey-600 font-medium">
                    Lets Make Trading easy for you
                </p>
                <div
                    class="grid_container my-4 md:grid gap-4 grid-cols-2">
                    <div class="menu_btn_container my-4">
                        <inertia-link
                            href="/giftcards"
                            class="action_btn select-none rounded-md flex flex-col justify-center items-center p-4 bg-white border shadow-md giftcard_btn p-ripple lightcyan">
                            <div class="card-logo w-16 my-3">
                                <img
                                    class="w-full"
                                    :src="'./images/cards/gift.svg'"
                                    alt="" />
                            </div>
                            <div class="card-details text-center text-white">
                                <p
                                    class="relative tracking-wider work big text-black font-medium">
                                    Giftcards
                                </p>
                            </div>
                        </inertia-link>
                        <inertia-link
                            href="/"
                            class="action_btn select-none rounded-md flex flex-col justify-center dark items-center p-4 bg-white border shadow-md bitcoin_btn p-ripple lightcyan">
                            <div class="card-logo w-16 my-3">
                                <img
                                    class="w-full"
                                    :src="'./images/cards/bitcoin.svg'"
                                    alt="" />
                            </div>
                            <div class="card-details text-center text-white">
                                <p
                                    class="relative tracking-wider work big text-white font-medium">
                                    Bitcoin
                                </p>
                            </div>
                        </inertia-link>
                        <div
                            id="live_chat"
                            class="action_btn justify-center items-center flex flex-row rounded-md py-4 px-2 bg-white">
                            <div class="card_logo mx-4 my-3">
                                <img
                                    class="w-full"
                                    :src="'./images/cards/24.svg'"
                                    alt="" />
                            </div>
                            <div class="live_chat_text">
                                <span class="block font-medium sm:text-base">
                                    Chat With One of Our Agents Now
                                </span>
                                <span class="block text-tiny sm:text-sm">
                                    Typically Responds Within 5mins
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="transactions_container my-4">
                        <h2 class="font-bold work big">TRANSACTIONS</h2>

                        <Empty>You Have No Gift Card Transations</Empty>

                        <!-- <div class="cardlets ">
                        <Cardlet :data = "cardlet" v-for="i in 4" :key="i" />
                    </div> -->
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
#view {
    font-family: 'DM Sans', sans-serif;
}
.card_logo {
    max-width: 6rem;
}
@media (max-width: 425px) {
    .card_logo {
        max-width: 4rem;
    }
}
.menu_btn_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 500px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

@media (min-width: 768px) {
    .big {
        font-size: 1.25rem;
    }
}
.hour_circle {
    padding: 2rem;
    //: 2rem;
    border: 10px solid #33c3d3;
}
.giftcard_btn {
    grid-area: 1 / 1 / 2 / 2;
    max-height: 15rem;
    min-height: 12rem;
}
.bitcoin_btn {
    grid-area: 1 / 2 / 2 / 3;
}

#live_chat {
    grid-area: 2 / 1 / 3 / 3;
    min-height: 100px;
    max-height: 8rem;
    background-color: #deeffe;
}
.dark {
    background-color: #04172a;
}
</style>
