<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <div>Quote Dashboard</div>
            </div>
        </div>
        <div class="row" v-for="quote in quotes">
            <div class="col-xs-12">1{{quote}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quotes: [
            "Quote 1",
            "Quote 2",
            "Quote 3",
            "Quote 4",
            "Quote 5"
        ]
    }

}
</script>

<style scoped>
</style>
