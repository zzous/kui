<template>
    <div class="flex align-start">
        <div class="radio-group btn-group" v-if="optionsType">
            <template v-for="(item, index) in state.selectDayValue" :key="index">
                <span class="radio" @change="setFromDate(item.value)">
                    <input :id="'dateType' + index" v-model="state.dayType" :value="item.value" name="dategroup"
                        type="radio">
                    <label :for="'dateType' + index">{{ item.label }}</label>
                </span>
            </template>
            <span class="radio" @click="setFromDate('self')">
                <input id="self" v-model="state.self" name="dategroup" type="radio" value="직접입력">
                <label for="self">직접입력</label>
            </span>
        </div>
        <div class="ui-datepicker-range">
        <template v-if="!singleType">
            <div class="ui-datepicker">
                <Date :disabled="state.pickerStatus" :enable-time-picker="false" :format="state.dateFormat"
                    :model-value="pickerData.date.from" locale="ko" @update:model-value="setFromDate" />
            </div>
            <span class="ui-coupler">~</span>
        </template>
            <div class="ui-datepicker">
                <Date :disabled="state.pickerStatus" :enable-time-picker="false" :format="state.dateFormat"
                    :model-value="pickerData.date.to" locale="ko" @update:model-value="setToDate" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCommFunc } from '@/_setting/helper';
const {  dayJS, goToPage } = useCommFunc();
const props = defineProps({
    dayOpionType: String,
    optionsType: Boolean,
    singleType: Boolean,
    setDay: {
        type: Date,
        default: () => new Date()
    }
});
const emit = defineEmits(['selectDay']);

const state = reactive({
    dateFormat: 'yyyy-MM-dd',
    pickerStatus: true,
    dayType: '',
    self: '',
    selectDayValue: [
        { label: '1년', value: 'year' },
        { label: '6개월', value: 'month6' },
        { label: '1개월', value: 'month' },
        { label: '일주일', value: 'week' },
        { label: '당일', value: 'day' }
    ]
});
const pickerData = ref({
    date: {
        from: null,
        to: new Date()
    }
});

const setFromDate = (value) => {
    const day = props.setDay.getTime();
    state.dayType = value;
    state.pickerStatus = props.optionsType;

    switch (value) {
        case 'year':
            pickerData.value.date.from = day - 3600 * 1000 * 24 * 365;
            break;
        case 'month6':
            pickerData.value.date.from = day - 3600 * 1000 * 24 * 180;
            break;
        case 'month':
            pickerData.value.date.from = day - 3600 * 1000 * 24 * 30;
            break;
        case 'week':
            pickerData.value.date.from = day - 3600 * 1000 * 24 * 7;
            break;
        case 'day':
            pickerData.value.date.from = day - 3600 * 1000 * 24;
            break;
        case 'self':
            state.pickerStatus = false;
            break;
        default:
            pickerData.value.date.from = value;
            state.pickerStatus = false;
    }
    emit('selectDay', pickerData.value.date.from, pickerData.value.date.to);
};

const setToDate = (value) => {
    state.pickerStatus = false;
    pickerData.value.date.to = value;
    emit('selectDay', pickerData.value.date.from, pickerData.value.date.to);
};

const initDate = () => {
    if (props.singleType) {
        setToDate(pickerData.value.date.to);
    } else {
        setFromDate(props.dayOpionType);
    }
};

onMounted(() => {
    initDate();
});
</script>