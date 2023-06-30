<template>
    <div class="bg-black w-full h-full min-h-screen">
        <div class="w-3/4 sm:w-full xs:w-full xs:p-4 m-auto p-10">
            <div @keydown.prevent.space="playing = !playing" @keydown.right="currentTime += 10"
                @keydown.left="currentTime -= 10">

                <video ref="video"></video>

                <div class="space-x-2 pt-1 flex items-center">
                    <button @click="playing = !playing"
                        class="bg-green-700 hover:bg-green-600 rounded px-4 py-1 text-white">
                        <div v-if="playing">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                        </div>
                        <div v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        </div>
                    </button>


                    <button @click="muted = !muted" class="bg-green-700 hover:bg-green-600 rounded px-4 py-1 text-white">
                        <div v-if="muted">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </div>
                        <div v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </div>
                    </button>

                    <div class="text-sm ml-2 text-white xs:text-xs">
                        {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
                    </div>

                </div>
                <div class="text-white">
                    <div>current {{ currentTime }}</div>
                    <div>duration {{ duration }}</div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useMediaControls } from '@vueuse/core';

const video = ref()
const { playing, currentTime, duration, volume, muted } = useMediaControls(video, {
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm',
})


function formatDuration(seconds) {
    return new Date(1000 * seconds).toISOString().slice(14, 19)
}

onMounted(() => {
    volume.value = 0.5
    currentTime.value = 60
})
</script>