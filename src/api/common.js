export function _uploadEditFile(formData) {
    console.log('파일업로드에디터용', formData);
    // return $api({
    //     url: '/common/api/v1/file/upload/editor',
    //     method: 'post',
    //     data: formData,
    //     timeout: 6000
    // });
}


export function _uploadFile(formData) {
    console.log('파일업로드', formData);
    // return $api({
    //     url: '/common/api/v1/file/upload',
    //     method: 'post',
    //     data: formData,
    //     timeout: 6000
    // });
}

export const _fileDownload = async (params) => {
    console.log('파일다운로드', params);
    // return await $api.get(`/common/api/v1/file/download/${params}`, { responseType: 'blob' });
};


export const _downExcel = async (url, params) => {
    console.log('엑셀다운로드', params);
    // return await $api.post(`${url}`, params, { responseType: 'blob' });
};



export const _imgDownload = async (params) => {
    console.log('이미지다운로드', params);
    // return await $api.post('/common/api/v1/logManagement/downloadLog/create', params);
};