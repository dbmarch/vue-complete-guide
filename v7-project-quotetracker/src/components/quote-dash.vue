<template>
    <div class="quote-dash">
        <div class="row">
            <div class="col-xs-12">
                <div>Quote Dashboard</div>
            </div>
        </div>
        <div class="row" v-for="quote in quotes">
            <div class="col-xs-12">{{quote}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quotes: []
    }

}
</script>

<style scoped>
.quote-dash {
	margin: 30px 0px;
}
</style>
