<template>
    <div class="w-full h-full min-h-screen sm:p-12 xs:p-4">
        <div class="container bg-blue-200 shadow-lg rounded space-y-2 m-12 md:mx-auto md:w-1/4 sm:p-6 sm:w-3/4 xs:w-auto xs:m-0 xs:p-2">
            <div class="text-gray-700 sm:text-base xs:text-sm">
                <ul class="sm:space-y-2 xs:space-y-1">
                    <li class="flex justify-between text-black pb-6 sm:text-2xl xs:text-xl">Face Shape Calculator</li>
                    <li class="flex justify-between">
                        <div>Gender</div>
                        <select v-model="gender" id="gender" name="gender" class="rounded text-blue-400 px-2 text-center">
                            <option disabled value="" id="default">Please Select</option>
                            <option value="male" id="male">Male</option>
                            <option value="female" id="female">Female</option>
                        </select>
                    </li>
                    <li class="flex justify-between py-2">
                        <div v-show="gender === ''">
                            <img src="https://uploads-cdn.omnicalculator.com/images/face-shape/measure/Measure.png"
                                width="500" height="250" />
                        </div>
                        <div v-if="gender === 'male'">
                            <img src="https://uploads-cdn.omnicalculator.com/images/face-shape/measure/MeasureM.png"
                                width="500" height="200" />
                        </div>
                        <div v-else-if="gender === 'female'">
                            <img src="https://uploads-cdn.omnicalculator.com/images/face-shape/measure/MeasureF.png"
                                width="500" height="200" />
                        </div>
                    </li>
                    <li class="flex justify-between text-xl xs:text-lg text-black pb-2">Face measurements</li>
                    <li class="flex justify-between items-center">
                        <div class="w-64">Forehead width</div>
                        <input v-model="foreheadWidth" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 xs:h-6">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between xs:items-center">
                        <div class="w-64">Cheeks width</div>
                        <input v-model="cheeksWidth" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 xs:h-6">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between xs:items-center">
                        <div class="w-64">Jawline length</div>
                        <input v-model="jawlineLength" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 xs:h-6">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between xs:items-center">
                        <div class="w-64">Face length</div>
                        <input v-model="faceLength" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 xs:h-6">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between space-x-2 pt-2 xs:items-center">
                        <label>How sharp are your features?</label>
                        <select v-model="features" id="features" class="rounded text-center px-2 text-blue-400 md:h-8 xs:h-6">
                            <option disabled value="" id="default2">Please Select</option>
                            <option value="sharp" id="sharp">Sharp</option>
                            <option value="somewhat" id="somewhat">Somewhat</option>
                            <option value="round" id="round">Round</option>
                        </select>
                    </li>
                    <li class="flex justify-between font-semibold text-black sm:pt-6 xs:pb-2">
                        <div v-show="resultShow">{{ result }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const foreheadWidth = ref("");
const cheeksWidth = ref("");
const jawlineLength = ref("");
const faceLength = ref("");

const gender = ref("");
const features = ref("");
const inch = ref("");


const result = computed(() => {
    if (faceLength.value > cheeksWidth.value && foreheadWidth.value > jawlineLength.value && features === 'round') {
        return 'Your face shape is oval';
    } else if (faceLength.value === cheeksWidth.value && features === 'round') {
        return 'Your face shape is round';
    } else if (faceLength.value > cheeksWidth.value && jawlineLength.value === foreheadWidth.value && features === 'somewhat') {
        return 'Your face shape is oblong';
    } else if (faceLength.value === cheeksWidth.value && jawlineLength.value > 20) {
        return 'Your face shape is square';
    } else if (jawlineLength.value > cheeksWidth.value && cheeksWidth.value > foreheadWidth.value && features === 'sharp') {
        return 'Your face shape is triangle';
    } else if (faceLength.value > 15 && features === 'sharp') {
        return 'Your face shape is diamond';
    } else if (foreheadWidth.value === cheeksWidth.value && features === 'sharp') {
        return 'Your face shape is heart';
    } else {
        return 'Your face is round';
    }
});

const resultShow = computed(() => {
    if (foreheadWidth.value != "" && cheeksWidth.value != "" && jawlineLength.value != "" && faceLength.value != "" && features.value != "") {
        return result.value;
    }
})

</script>

