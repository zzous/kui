import { ref, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useCommFunc() {
    const router = useRouter();
    //모달 데이터
    const $Modal = inject('$Modal');
    const dayJS = inject('dayJS');
    const goToPage = (params) => {
        router.push(params);
    };

    /**
     * 페이지 새로고침
     * 
     * 
    */
    const pageReload = () => {
        router.go(0);
    };
    /**
     * 파일 다운로드
     * @params
     * @url
    */
    const exelFileDown = async (params, url) => {
        console.log('파일다운로드', params, url);
        try {
            console.log(params);
            const response = await _downExcel(url, params);
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const fileName = decodeURIComponent(response.headers['content-disposition']?.split('filename="')[1].slice(0, -1));
            const downurl = window.URL.createObjectURL(blob);
            console.log(blob, fileName);
            const a = document.createElement('a');
            console.log(downurl);
            a.href = downurl;
            a.download = fileName;
            a.click();
            a.remove();
            window.URL.revokeObjectURL(downurl);
        } catch (error) {
            console.log(error);
        }
    };
    /**
     * 파일 다운로드
     * 
     * @item Sn
    */
    const fileDownload = async (item) => {
        try {
            const response = await _fileDownload(item);
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            const match = /filename="(.+?)"/.exec([response.headers['content-disposition']]);
            const filename = decodeURI(match ? match[1] : null);
            console.log(filename);
            a.href = url;
            a.download = filename;
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.log(error);
        }
    };
    const chartColorSet = {
        blue: '#36a2eb',
        red: '#ff6384',
        green: '#4bc0c0',
        orange: '#ff9f40',
        purple: '#9966ff',
        yellow: '#ffcd56',
        blue2: '#3664eb',
        red2: '#ff3284',
        green2: '#4b8ec0',
        orange2: '#ff6d40',
        purple2: '#9934ff',
        yellow2: '#ff9b56'
    };

    return {
        goToPage,
        pageReload,

        $Modal,
        dayJS,
        exelFileDown,
        chartColorSet
        


    };
}