<template>
    <div id="cardlet" class="flex justify-between px-1 py-2 items-center">
        <div class="cardlet_property flex items-center">
            <div class="cardlet_box w-16 p-3 border rounded-md"><img class="w-14" src="/images/cards/amazon.png" alt=""></div>
            <div class="cardlet_details mx-4">
                <p class="work">Amazon Card</p>
                <p class="text-tiny">On 29, Sept 2020</p>
            </div>
        </div>
        <div class="cardlet_price">
            <p class="font-medium">$300</p>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Cardlet',
    props: ['data']
}
</script>
