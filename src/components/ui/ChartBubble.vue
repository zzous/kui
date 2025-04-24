<template>
    <div class="chartWrap">
        <Bubble ref="chartRef" :data="state.data" :height="state.height" :options="state.options" />
    </div>
</template>

<script setup>
/** chart */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LinearScale,
    Colors,
    PointElement
} from 'chart.js';

import { Bubble } from 'vue-chartjs';
import { computed, reactive, ref, onMounted } from 'vue';

import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels';

// ChartJS 등록
ChartJS.register(
    LinearScale, 
    PointElement, 
    Title, 
    Tooltip, 
    Legend, 
    Colors, 
    ChartJSPluginDatalabels
);

// props 정의
const props = defineProps({
    dataSets: Array,
    labels: Array,
    options: Object,
    height: {
        type: Number,
        default: 300
    }
});

const defalutOption = reactive({});
const chartRef = ref(null);
const state = reactive({
    // isShow: false,
    data: computed(() => ({
        labels: props.labels,
        datasets: props.dataSets
    })),
    options: computed(() => Object.assign(defalutOption, props.options)),
    height: computed(() => props.height ?? 300)
});

onMounted(() => {
    console.log('mounted chart >', state.data);
});

const chartResize = (obj) => {
    if (obj && state.height !== obj?.height) {
        chartRef.value.chart._resize(
            obj.width ?? chartRef.value.chart.width, 
            obj.height ?? state.height
        );
    }
};
</script>
