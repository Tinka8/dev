<template>
    <div class="w-full min-h-screen overflow-hidden bg-cute-pink md:pt-20 sm:pt-10 xs:pt-2">
        <div class="text-cute-black md:w-2/6 md:h-full md:mx-auto sm:w-1/2 xs:w-2/3">
            <div class="flex flex-col">
                <header class="md:py-10 md:text-5xl md:text-left sm:py-8 sm:text-3xl xs:text-2xl">
                    <h1>tina818</h1>
                </header>
                <div class="relative flex flex-col divide-y-2 divide-black" 
                    v-for="post in data.posts" :key="post.title"
                >
                    <div class="sm:py-2 sm:pr-2 xs:pr-1 xs:py-2">
                        <div class="flex justify-between  md:text-sm sm:text-xs xs:text-xxs text-cute-brown">
                            <div class="uppercase">{{ post.type }}</div>
                            <div>
                                <span v-for="info in post.info" :key="info">
                                    {{ info }}
                                </span>
                            </div>
                        </div>
                        <h2 class="md:text-3xl md:pt-1 sm:text-2xl sm:pt-2 xs:pt-1 xs:text-lg">
                            <router-link :to="post.url" v-if="post.url">{{ post.title }}</router-link>
                            <span v-else>
                                {{ post.title }}
                            </span>
                        </h2>
                        <div class="md:py-8 md:text-base sm:py-6 sm:text-sm xs:py-4 xs:text-xs">
                            {{ post.content }}
                        </div>
                        <div class="uppercase text-cute-brown md:text-sm sm:text-xs xs:text-xxs">
                            <span v-for="tag in post.tags" :key="tag">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                    <div class="relative"></div>
                    <div class="w-0.5 bg-black h-[200vh] absolute right-0"></div>
                </div>
                <div class="relative">
                    <div class="absolute translate-x-full -translate-y-3/4 -right-4">
                        <!-- rok -->
                        <div class="h-3/4"></div>
                        <div class="md:text-3xl sm:text-xl xs:text-base">2023</div>
                    </div>
                </div>
                <div class="md:pb-32 sm:pb-16 xs:pb-10"></div>      
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref({
    "posts": []
});

axios.get('http://localhost:3000/posts').then((response) => {
    data.value.posts = response.data;
});

axios.get("https://tina.rozklad.dev/api").then((response) => {
    data.value.posts = response.data.posts;
});

</script>