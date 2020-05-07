<template>
    <div class="weather">
        <img :src="img" alt="">
        <div>
            <p class="tmp">{{tmp}}℃</p>
            <p class="type">{{type}}</p>
        </div>
    </div>
</template>


<script>
import yin from '../../../static/img/yin.png'
export default {
    data() {
        return {
            tmp:" ",
            type:" ",
            img:yin
        }
    },
    methods: {
        getWeather () {
            this.axios({
                url:"https://free-api.heweather.net/s6/weather/now",
                method:"get",
                header:"Access-Control-Allow-Origin:*",
                params:{
                    location:'shaoxing',
                    key:"de2a825fbf67412195bd86c087668dd0"
                }
            }).then ( res => {
                this.tmp = res.data.HeWeather6[0].now.tmp
                this.type = res.data.HeWeather6[0].now.cond_txt
                this.img = `https://cdn.heweather.com/cond_icon/${res.data.HeWeather6[0].now.cond_code}.png`
            })
        }
    },
    mounted() {
        this.getWeather()
    },
}
</script>

<style lang="scss">
    .weather{
        height: 100%;
        width: 90%;
        background-color: rgba(7, 44, 77, 0.7);
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        padding: 0 5%;
        .tmp{
            font-size: 32px;
        }
        .type{
            font-size: 18px;
            text-align: right;
        }
    }
</style>