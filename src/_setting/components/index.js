import { AgGridVue } from 'ag-grid-vue3'
import VueDatePicker from '@vuepic/vue-datepicker'
import DefaultModal from '@/components/modal/DefaultModal.vue'
import PageNavigation from '@/components/ui/PageNavigation.vue'
import ListTable from '@/components/ui/ListTable.vue'
import SearchBox from '@/components/ui/SearchBox.vue'
import InputText from '@/components/ui/InputText.vue'
import InputCheck from '@/components/ui/InputCheck.vue'
import FormLine from '@/components/ui/FormLine.vue'
import FormFile from '@/components/ui/FormFile.vue'
import Textarea from '@/components/ui/Textarea.vue'
import DatePicker from '@/components/ui/DatePicker.vue'
import ChartPie from '@/components/ui/ChartPie.vue'
import ChartBar from '@/components/ui/ChartBar.vue'
import ChartLine from '@/components/ui/ChartLine.vue'
import ChartBubble from '@/components/ui/ChartBubble.vue'

export const registerComponents = (app) => {
    app.component('DefaultModal', DefaultModal)
    app.component('AgGridVue', AgGridVue)
    app.component('PageNavigation', PageNavigation)
    app.component('ListTable', ListTable)
    app.component('SearchBox', SearchBox)
    app.component('Date', VueDatePicker)
    app.component('DatePicker', DatePicker)
    app.component('InputText', InputText)
    app.component('InputCheck', InputCheck)
    app.component('FormLine', FormLine)
    app.component('FormFile', FormFile)
    app.component('Textarea', Textarea)
    app.component('ChartPie', ChartPie)
    app.component('ChartBar', ChartBar)
    app.component('ChartLine', ChartLine)
    app.component('ChartBubble', ChartBubble)
} 