<template>
    <div>
        <div class="ui-grid-top-guide t-right">
            <span class="ess"></span> 표시는 필수항목입니다.
        </div>
        <div class="tbl-wrap mt-10">
            <table class="table reg">
                <colgroup>
                    <col style="width: 120px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">다운로드날짜</th>
                        <td>2023-11-11</td>
                    </tr>
                    <tr>
                        <th scope="row">요청자</th>
                        <td>홍길동</td>
                    </tr>
                    <tr>
                        <th scope="row">다운로드 사유<span class="ess"><span class="offscreen">필수입력</span></span></th>
                        <td>
                            <div class="reg-group">
                                <div class="reg-item">
                                    <textarea id="textarea" class="form-control" placeholder="파트너 기업분석 보고를 위해 다운로드 합니다."
                                        style="height: 200px"></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">압축 비밀번호<span class="ess"><span class="offscreen">필수입력</span></span></th>
                        <td>
                            <div class="reg-group inline">
                                <div class="reg-item">
                                    <input type="password" class="form-control w-150">
                                    <span class="input-guide inline">영문 대/소문자, 숫자, 특수문자 포함 9~16자리</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex space-between mt-10">
            <p>다운로드한 개인정보를 처리목적 달성 후 파기하며, 안전하게 관리하지<br> 않아 발생하는 책임은 담당자(이름)에게 있음을 동의합니다.</p>
            <span class="checkbox">
                <input id="chk1" name="chkGroup" type="checkbox">
                <label for="chk1">동의합니다.</label>
            </span>
        </div>
    </div>
</template>