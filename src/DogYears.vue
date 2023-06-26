
<template>
    <div class="w-full h-full min-h-screen p-12 bg-gray-200">
        <div class="container mx-auto w-1/4 bg-white rounded shadow-md">
            <div class="flex space-x-4">
                <div>
                    <div v-if="age < 18">
                        <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2023/02/23142013/Alaskan-Malamute-puppy-laying-down-outdoors.jpg"
                            alt="puppy" width="200" height="200" class="rounded-s-lg" />
                    </div>
                    <div v-else-if="age < 50">
                        <img src="https://doggyboho.co.uk/wp-content/uploads/2021/07/duckling-yellow-harbour-slicker-doggy-boho.jpg"
                            alt="doggy" width="200" height="200" class="rounded-s-lg" />
                    </div>
                    <div v-else>
                        <img src="https://www.cesarsway.com/wp-content/uploads/2015/06/AdobeStock_222480718.jpeg"
                            alt="senior doggy" width="200" height="200" class="rounded-s-lg" />
                    </div>
                </div>
                <div class="py-2 space-y-2">
                    <div>Vek psa</div>
                    <input v-model="dogAge" type="number" min="1" max="50" placeholder="1"
                        class="border rounded w-24 px-2" />
                    <div class="pt-4">Ludsky vek: <span class="font-bold">{{ age }} rokov</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dogAge = ref("");


const age = computed(() => {
    if (dogAge.value === "") {
        return 0;
    } else if (dogAge.value === 1) {
        return dogAge.value * 10.5;
    } else if (dogAge.value === 2) {
        return dogAge.value * 10.5;
    } else {
        return ((dogAge.value - 2) * 4) + 21;
    }
});

</script>