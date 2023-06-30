<template>
    <div class="w-full min-h-screen pt-20 sm:pt-10 overflow-hidden bg-cute-pink">
        <div class="w-2/6 sm:w-1/2 h-full mx-auto text-cute-black">
            <div class="flex flex-col">
                <header class="py-10 sm:py-8 text-5xl sm:text-3xl text-left">
                    <h1>tina818</h1>
                </header>
                <div class="relative flex flex-col divide-y-2 divide-black" 
                    v-for="post in data.posts" :key="post.title"
                >
                    <div class="py-2 pr-2">
                        <div class="flex justify-between pb-1 text-sm sm:text-xs text-cute-brown">
                            <div class="uppercase">{{ post.type }}</div>
                            <div>
                                <span v-for="info in post.info" :key="info">
                                    {{ info }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-3xl sm:text-2xl sm:pt-2">
                            <router-link :to="post.url" v-if="post.url">{{ post.title }}</router-link>
                            <span v-else>
                                {{ post.title }}
                            </span>
                        </h2>
                        <div class="py-8 sm:py-6 sm:text-sm">
                            {{ post.content }}
                        </div>
                        <div class="text-sm sm:text-xs uppercase text-cute-brown">
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
                        <div class="text-3xl sm:text-xl">2023</div>
                    </div>
                </div>
                <div class="pb-32 sm:pb-16"></div>      
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref({
    "posts": [
       
    ]
});

axios.get('http://localhost:3000/posts').then((response) => {
    data.value.posts = response.data;
});

</script>