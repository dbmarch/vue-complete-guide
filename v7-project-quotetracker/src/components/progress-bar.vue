<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="buffer"></div>
            <div class="bar-title">Quotes Added</div>
            <div
                class="progress-bar bg-info"
                role="progressbar"
                v-bind:style="barSize"
                aria-valuemin="0"
                aria-valuemax="100"
            >{{count}}/10</div>
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
                height: '30px',
                lineHeight: '30px',
                borderRadius: '10px',
                verticalAlign: 'middle',
                fontSize: '2rem'
                
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
.bar-title {
	font-weight: bold;
	font-size: 3rem;
}
.buffer {
	height: 25px;
}
</style>
