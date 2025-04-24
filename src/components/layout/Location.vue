<template>
    <div class="head-content">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <span>홈</span>
            </li>
            <li class="breadcrumb-item" v-for="(location, index) in locations" :key="index">
                <span>
                    {{ location }}
                </span>
            </li>
        </ol>
        <div class="ui-title-2">
            <h2>{{ locations[locations.length - 1] }}</h2>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps({
    locations: {
        type: Array,
        default: [],
    },
    
});
const state = reactive({
   
});
const contentNew = (params) => {
    let width = window.screen.availWidth + 150;
    console.log(width);
    window.open(`${params}_new`, '_blank', `width=${width}`);
};
</script>