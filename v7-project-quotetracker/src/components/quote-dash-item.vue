<template>
    <div class="quote">{{quote}}</div>
</template>

<script>
export default {
    props: {
        quote: ""
    }

}
</script>

<style>
.quote {
	text-decoration: italic;
	border: 1px solid #ccc;
}
</style>
