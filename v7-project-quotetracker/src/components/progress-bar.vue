<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="buffer"></div>
            <div>Progress Bar: {{count}}</div>
            <div
                class="progress-bar bg-info"
                role="progressbar"
                v-bind:style="barSize"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
            <div class="buffer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            myStyle : {
                width: 0,
                height: '20px',
                borderRadius: '5px'
            }
        }
    },
    props: {
        count: 0
    },
    computed: {
        barSize () {
            this.myStyle.width =  10 * this.count + '%'
            console.log (this.myStyle.width)
            return (this.myStyle);
        }
    }

}
</script>

<style scoped>
.buffer {
	height: 15px;
}
</style>
