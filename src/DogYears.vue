
<template>
    <div class="w-full h-full min-h-screen bg-gray-200 md:p-12 sm:p-0 xs:p-0">
        <div class="md:w-1/4 sm:w-3/5  sm:relative xs:w-screen">
            <div class="flex space-x-4 container mx-auto bg-white rounded-lg shadow-md  md:translate-x-full md:left-2/4 sm:absolute sm:translate-x-40 sm:translate-y-full xs:absolute xs:-translate-x-2 xs:translate-y-full xs:-right-2">
                <div class="">
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
                <div class="sm:py-2 sm:space-y-2 xs:p-0 xs:space-y-0">
                    <div>Vek psa</div>
                    <input v-model="dogAge" type="number" min="1" max="50" placeholder="1"
                        class="border rounded sm:w-24 px-2 xs:w-16" />
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