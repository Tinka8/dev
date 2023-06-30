<template>
    <div class="sm:relative xs:relative">
        <div class="sm:absolute sm:w-full sm:translate-y-3/4 xs:absolute xs:translate-y-2/4">
            <div class="py-10 xs:py-0 text-center">
                <input v-model="word"
                    class="focus:ring-2 ring-pink-300 ring-inset text-3xl border-2 py-2 px-4 xs:p-0 xs:m-10 border-indigo-600 rounded-md xs:w-3/4" />
            </div>
            <div v-if="isPalindrome" class="py-10 text-center bg-fuchsia-800 text-white">
                Slovo je palindrom
            </div>
            <div v-else class="py-10 text-center bg-gray-50 text-gray-800">
                Slovo není palindrom
            </div>
        </div>
    </div>
</template> 

<script setup>
import { ref, computed } from "vue";

const word = ref("");


const isPalindrome = computed(() => {
    const reversed = word.value.split("").reverse().join("");
    return word.value === reversed;
}, true);

</script>