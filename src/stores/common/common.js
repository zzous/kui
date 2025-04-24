import { defineStore } from 'pinia'
import { ref } from 'vue'


const GET_URL = '/api/api'
export const useCommonStore = defineStore('useCommon', () => {
    const value = ref(null);
    async function getList(params) {
        try {
          const response = await $api.get(GET_URL, params);
          value.value = response.data || []
          return response.data
        } catch (e) {
          console.error(e)
          return false
        }
      }
    return {
        value,
        getList
    }
})