<template>
    <div class="ui-data-filter">
        <div class="form-item">
            <div class="item">
                <label>어드민 구분</label>
                <span class="input">
                    <span class="dv">
                        <select class="custom-select sm">
                            <option value="전체">전체</option>
                        </select>
                    </span>
                </span>
            </div>
            <div class="item">
                <label>권한레벨</label>
                <span class="input">
                    <span class="dv">
                        <select class="custom-select sm">
                            <option value="전체">전체</option>
                        </select>
                    </span>
                </span>
            </div>
            <div class="item">
                <label>조회조건</label>
                <span class="input">
                    <span class="dv">
                        <select class="custom-select sm">
                            <option value="선택">선택</option>
                        </select>
                    </span>
                    <span class="dv">
                        <input type="text" class="form-control sm">
                    </span>
                </span>
            </div>
            <div class="btn-filter-set">
                <button type="button" class="btn btn-sm">
                    <span class="ico-reload sg"></span>
                    <span class="offscreen">초기화</span>
                </button>
                <button type="button" class="btn btn-sm">
                    <span class="ico-search"></span>검색</button>
            </div>
        </div>
    </div>
    <div class="ui-section flex align-start">
        <div class="ui-section wp-30">
            <div class="ui-title-3">
                <h3>사용자</h3>
            </div>
            <div class="ui-content">
                <div class="tbl-wrap">
                    <div id="myGrid" class="ag-theme-alpine"></div>
                    <ul class="pagination">
                        <li class="page-item first">
                            <button type="button" class="page-link">
                                <span class="offscreen">맨처음</span>
                            </button>
                        </li>
                        <li class="page-item prev">
                            <button type="button" class="page-link">
                                <span class="offscreen">이전</span>
                            </button>
                        </li>
                        <li class="page-item active">
                            <button type="button" class="page-link">1</button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="page-link">2</button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="page-link">3</button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="page-link">4</button>
                        </li>
                        <li class="page-item next">
                            <button type="button" class="page-link">
                                <span class="offscreen">다음</span>
                            </button>
                        </li>
                        <li class="page-item last">
                            <button type="button" class="page-link">
                                <span class="offscreen">마지막</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ui-section wp-70">
            <div class="ui-title-3">
                <h3>메뉴목록</h3>
            </div>
            <div class="ui-content">
                <div class="tbl-wrap">
                    <div class="table-list">
                        <table class="table list">
                            <caption>메뉴목록</caption>
                            <colgroup>
                                <col style="width: 220px">
                                <col style="width: 560px">
                                <col style="width: auto">
                                <col style="width: 170px">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" class="t-left">
                                        <span class="checkbox">
                                            <input id="menuChk1" name="menuGroup" type="checkbox">
                                            <label for="menuChk1">메뉴명</label>
                                        </span>
                                    </th>
                                    <th scope="col">메뉴 상세 권한</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="table-scroller">
                            <table class="table list">
                                <caption>메뉴목록</caption>
                                <colgroup>
                                    <col style="width: 220px">
                                    <col style="width: 560px">
                                    <col style="width: auto">
                                    <col style="width: 170px">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree">
                                                <span class="checkbox">
                                                    <input id="menuChk2" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk2">1뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-2">
                                                <span class="checkbox">
                                                    <input id="menuChk3" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk3">2뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk2-1" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-2" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-3" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-4" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-5" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-6" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-7" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명3뎁스메뉴명3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk3-1" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-2" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-3" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-4" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-5" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-6" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-7" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree">
                                                <span class="checkbox">
                                                    <input id="menuChk2" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk2">1뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-2">
                                                <span class="checkbox">
                                                    <input id="menuChk3" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk3">2뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk1-1" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-2" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-3" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-4" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-5" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-6" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk1-7" name="authorityGroup1"
                                                    type="checkbox">
                                                <label for="authChk1-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk2-1" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-2" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-3" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-4" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-5" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-6" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk2-7" name="authorityGroup2"
                                                    type="checkbox">
                                                <label for="authChk2-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                    <tr>
                                        <td class="t-left">
                                            <div class="menu-tree dep-3">
                                                <span class="checkbox">
                                                    <input id="menuChk4" name="menuGroup"
                                                        type="checkbox">
                                                    <label for="menuChk4">3뎁스메뉴명3뎁스메뉴명3뎁스메뉴명</label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="checkbox">
                                                <input id="authChk3-1" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-1">등록</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-2" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-2">수정</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-3" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-3">조회</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-4" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-4">삭제</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-5" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-5">다운로드</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-6" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-6">승인</label>
                                            </span>
                                            <span class="checkbox">
                                                <input id="authChk3-7" name="authorityGroup3"
                                                    type="checkbox">
                                                <label for="authChk3-7">마스킹해제</label>
                                            </span>
                                        </td>
                                        <td>webmaster@ocare.com</td>
                                        <td>2022-10-13 16:53:04</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="btn-bottom-set flex justify-center">
                    <button type="button" class="btn btn-sl posi">저장</button>
                </div>
            </div>
        </div>
    </div>
</template>