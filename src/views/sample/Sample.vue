<template>
    <div style="min-height:100vh">
        <div class="example_header">
            <h1>KB Admin 가이드</h1>
        </div>

        <div class="example">
            <div class="example_menu">
                <ul>
                    <li v-for="(item, index) in state.menulist" :key="index" @click="onChangeExample(item)"
                        :class="{ active: state.currentmenu === item.value }">
                        {{ item.label }}
                    </li>
                </ul>
            </div>
            <div class="example_con">
                <component :is="currentMenu.component" :sample-props="currentMenu.props" />
            </div>

        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted, markRaw, watch, ref } from 'vue';
const state = reactive({
    menulist: [
        { label: '기본 템플릿', value: 'example0', component: 'example0', props: {title: '기본템플릿'} },
        { label: '모달', value: 'example1', component: 'example1', props: {title: '모달'} },
        { label: '리스트 테이블', value: 'example2', component: 'example2', props: {title: '리스트 테이블'} },
        { label: '검색 박스', value: 'example3', component: 'example3', props: {title: '검색 박스'} },
    ],
})
const currentMenu =ref({
    component: 'example0',
    props: { title: '기본템플릿'},
})
const onChangeExample = async (value) => {
    console.log(value.props)
    try {
        const component = await import(`./sample/${value.component}.vue`);
        currentMenu.value.component = markRaw(component.default);
        currentMenu.value.props = value.props;
    } catch (error) {
        console.error('컴포넌트 로드 실패:', error);
  }
}
watch(() => currentMenu.value.component, (newComponent) => {
  if (typeof newComponent === 'string') {   
    onChangeExample(newComponent);
  }
});
onMounted(() => {
    onChangeExample(currentMenu.value);
})
</script>

<style>
.example_header {
    background: #253349;
    height: 60px;
}

.example_header>h1 {
    max-width: 1200px;
    margin: 0px auto;
    padding-left: 20px;
    display: flex;
    align-items: center;
    position: relative;
    line-height: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: left;
}

.example {
    max-width: 1200px;
    margin: 0px auto 30px;
    display: flex;
    height: calc(100% - 60px);

}

.dec_sample {
    padding: 10px;
}

.dec_sample>.btn {
    display: inline-block;
}

.dec_sample>.btn+.btn {

    margin-left: 10px;
}

.example_menu {
    width: 200px;
    border-right: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    padding-top: 0px;
    flex-shrink: 0;
}

.example_menu>ul>li {
    padding: 9px 5px 9px 20px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

}

.example_menu>ul>li.active {
    background: #f7f7f7
}

.example_con {
    padding: 20px 0 0 40px;
    flex: 1 1 auto
}

.example .gap {
    overflow: hidden;
    width: 100%;
}

.example .gap>h2 {
    margin: 0 0 15px;
    font-size: 18px;
    font-weight: bold;
}

.example .gap .sample {
    margin: 15px 0 25px;
}

.example .guides .sample {
    margin: 0x 0 15px;
    background: #282c34;
    border-radius: 6px;
    padding: 10px 20px 0
}

.example .guides .sample pre code {
    color: #d19a66;
    font-family: Consolas, monospace !important;
}

.example .dec {
    color: #6bacce
}

.example .dec strong {
    font-weight: 700;
    color: #ff3232
}

.example .container {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
}

.example .container .sLeft {
    width: 0;
}

.example .container .sRight {
    width: 100%;
    height: 100%;
}

.list-move {
    transition: transform 0.5s;
}

.guideTitle {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  background-color: #f2f2f2;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 30px 0;
}
.guidewrap{width:100%; height:100%;position: relative; }
.guidetop{width:100%; height:50px;background:#1C2536;padding:0 20px; color:#fff; font-size:20px; font-weight:700;display: flex; align-items: center; position: absolute; left:0; top:0;}
.guidecontentwrap{width:100%; height:100%; display:flex; padding-top:50px}
.guidelnb{flex:0 0 200px;position: relative;}
.guidelnb .menulist {position: relative; z-index: 3;}
.guidelnb .menulist > ul > li{ padding:15px 20px; border-bottom:solid 1px #ddd; position: relative; }
.guidelnb .menulist > ul > li > span{display: block;position: relative; z-index:2;}
.guidelnb .menulist > ul > li:after{content:""; display: block; width:15px; height:15px; position: absolute; right:20px; top:17px;background:url('/common/images/icon-arrow-right.svg') 0 0/100%}
.guidelnb .menulist > ul > li.active{font-weight:700;}
.guidelnb .menulist > ul > li.active:before{content:''; display:block; width:100%; height:100%;background: #ddd;position: absolute; left:0px; top:0px;}
.guidecontent{overflow-y:auto}
.guidelnb:after{content:''; width:13px; height:100%; background:url('/common/images/footer-bg.png') repeat-y -65px; position: absolute; right:0; top:0;}
.guidetitle{color:#000; font-size:25px;font-weight:700; border-bottom:solid 1px #000; padding-bottom:10px; position: relative;}

.btn-sample{height:30px; background:#1297F2; color:#fff; font-size:12px; font-weight:700; border-radius:5px; line-height:28px; padding:0 15px;}
.guidetitle .btn-sample{position: absolute; right:0; top:0}
.guidememo{padding:20px;}
.guidememo .memotitle{font-size:16px; font-weight:700;  background:url('/common/images/icon-ribbon.svg') no-repeat left center; padding-left:20px; margin-bottom:20px}
.memolist{margin-left:24px}
.memolist li{position: relative; padding-left:10px; margin-top:10px;}
.memolist li:nth-of-type(1){margin-top:0px}
.memolist li:after{content:''; display: block; width:3px; height:3px; border-radius:50%; background:#666; position: absolute; left:0; top:7px;}
.codewrap{padding:20px;}
.codetitle{font-size:16px; font-weight:700; width:100%; padding:20px 20px 20px 50px; background: url('/common/images/icon-arrow-up.svg') no-repeat 26px center;position: relative;}
.codetitle > span{font-size:16px; font-weight:700; width:calc(100% - 70px); display:block; cursor: pointer;}
.codetitle .btn{position: absolute; right:0; top:17px}
.code{background: #282c34;border-radius: 6px;padding: 10px 20px; height: auto; transition: all .3s;}
code{color: #FFCB6B;;font-family: Consolas, monospace !important;}
.up.codewrap .codetitle{ background: url('/common/images/icon-arrow-down.svg') no-repeat 26px center; border:solid 1px; border-radius:5px;}
.up.codewrap .codetitle + .code{height:0; transition: all .3s; padding:0 20px}
.up.codewrap .codetitle + .code pre{display: none;}
.up.codewrap .codetitle .btn{display: none;}
.tagstyle{color:#F07178; font-weight:700;}
.code.CSS code{color:#C3E88D}
.code.HTML code{color:#F07178;}
.code.JS code{color:#89DDFF;}
</style>