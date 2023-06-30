<template>
    <div class="w-full h-full min-h-screen p-12">
        <div class="container p-6 w-1/4 sm:w-3/4 m-12 mx-auto bg-blue-200 shadow-lg rounded space-y-2">
            <div class="text-gray-700">
                <ul class="space-y-2">
                    <li class="flex justify-between text-2xl text-black pb-6">Face Shape Calculator</li>
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
                    <li class="flex justify-between text-xl text-black pb-2">Face measurements</li>
                    <li class="flex justify-between items-center">
                        <div class="w-64">Forehead width</div>
                        <input v-model="foreheadWidth" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 ">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between">
                        <div class="w-64">Cheeks width</div>
                        <input v-model="cheeksWidth" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 ">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between">
                        <div class="w-64">Jawline length</div>
                        <input v-model="jawlineLength" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 ">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between">
                        <div class="w-64">Face length</div>
                        <input v-model="faceLength" type="number" placeholder="15" class="rounded text-right bg-blue-200 outline-none"/>
                        <select v-model="inch" class="rounded text-center text-blue-400 ">
                            <option disabled value="" id="default">cm</option>
                            <option value="cm">cm</option>
                            <option value="inch">inch</option>
                        </select>
                    </li>
                    <li class="flex justify-between space-x-2 pt-2">
                        <label>How sharp are your features?</label>
                        <select v-model="features" id="features" class="rounded text-center px-2 text-blue-400">
                            <option disabled value="" id="default2">Please Select</option>
                            <option value="sharp" id="sharp">Sharp</option>
                            <option value="somewhat" id="somewhat">Somewhat</option>
                            <option value="round" id="round">Round</option>
                        </select>
                    </li>
                    <li class="flex justify-between pt-6 font-semibold text-black">
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

