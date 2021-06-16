<template>
    <div class="page-wrap">
        <div style="padding: 15px 0px 10px 0px">
            <h2>會員分眾</h2>
        </div>
        <div class="flex-div function-bar">
            <div class="flex-div left-bar">
                <div class="inline-grid-div w-full i-search">
                    <div>
                        <input
                            placeholder="請輸入分類標題或建立者" />
                    </div>
                    <div>
                        <img src="@/assets/images/search.png"/>
                    </div>
                </div>
                <div class="w-full">
                    <input class="i-checkbox" type="checkbox"/>
                    <label>僅我創建</label>
                </div>
            </div>
            <div class="h-full inline-grid-div right-bar">
                    <div class="flex-div bar-item">
                        <a>新增群體</a>
                    </div>
                    <div class="flex-div bar-item">
                        <div class="update-time">2021.06.11 14:59</div>
                        <div class="flex-div items-center">
                            <span>數據更新</span>
                            <img src="@/assets/images/timeupdated.png" width="25"/>
                        </div>
                    </div>
                    <div class="flex-div bar-item">
                        <span>排序</span>
                        <img src="@/assets/images/sort.png" width="25"/>
                    </div>
            </div>
        </div>
        <div>
            <div style="height: 73vh; overflow-y: auto; margin-bottom: 15px">
                <template v-for="(data) in tableDatas">
                    <div class="table-block">
                        <table style="height: 100px" border="1" @click="detail">
                            <tbody>
                                <tr>
                                    <td class="align-middle text-gray" style="padding: 0 20px">
                                        <span>{{ data.id }}</span>
                                    </td>
                                    <td class="align-middle" style="width: 55%">
                                        <div class="flex-div flex-column">
                                            <div class="title">
                                                <span>{{ data.title }}</span>
                                            </div>
                                            <div class="text-gray">
                                                <span>{{ data.content }}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle" style="width: 7%">
                                        <div class="h-full justify-evenly flex-div flex-column">
                                            <div class="text-right text-gray">
                                                會員數
                                            </div>
                                            <div class="text-right" style="font-size: 28px">
                                                {{ data.memberNum }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle" style="width: 18%">
                                        <div class="h-full justify-evenly flex-div flex-column">
                                            <div class="text-right text-gray">
                                                創建時間
                                            </div>
                                            <div class="text-right">
                                                {{ data.created_ts }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle" style="width: 7%">
                                        <div class="h-full justify-evenly flex-div flex-column">
                                            <div class="text-right text-gray">
                                                建立者
                                            </div>
                                            <div class="text-right">
                                                <span>{{ data.creator }}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle" style="width: 8%; padding: 0 20px">
                                        <div class="h-full justify-around flex-div flex-column">
                                            <div class="text-right">
                                                <img class="pin-icon" :class="{'is-pinned': data.is_pinned}"/>
                                            </div>
                                            <div class="flex-div text-right justify-end items-center">
                                                <span>查看</span>
                                                <img width="30px" src="@/assets/images/arrow-right.png"/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </template>
            </div>
        </div>
        <div class="t-pagiantion">
            <h2>pagiantion</h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'memberFoucus',
    data() {
        return {
            tableDatas: [
                {
                    id: '1234',
                    title: '分群-近1月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken',
                    is_pinned: true
                },
                {
                    id: '1235',
                    title: '分群-近2月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1236',
                    title: '分群-近3月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken',
                    is_pinned: true
                },
                {
                    id: '1237',
                    title: '分群-近4月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1238',
                    title: '分群-近5月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1239',
                    title: '分群-近6月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1240',
                    title: '分群-近7月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1241',
                    title: '分群-近8月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                },
                {
                    id: '1242',
                    title: '分群-近9月預期購買美股',
                    content: '測試永豐定期定額專案淺在客戶背著背著',
                    memberNum: 399,
                    created_ts: '2021.06.10 14:59',
                    creator: 'Ken'
                }
            ]
        }
    },

    created() {
        console.log(this.$route)
    },

    methods: {
        detail() {
            this.$router.push({
                path: '/userData/memberFocus/components/detail'
            })
        }
    }
}

</script>