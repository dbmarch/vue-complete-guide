<template>
    <div>
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input
                id="firstname"
                class="form-control"
                type="text"
                :value="firstName"
                @input="nameChanged(true, $event)"
            >
        </div>
        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
                class="form-control"
                id="lastname"
                type="text"
                :value="lastName"
                @input="nameChanged(false, $event)"
            >
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
    data() {
        return {
        }
    },
    computed: {
        firstName() {
            console.log (this.value)
            return this.value.split(" ")[0];
        },
        lastName() {
            return this.value.split(" ")[1];
        }
    },
    methods: {
        nameChanged(isFirst, event) {
            let name = '';
            if (isFirst) {
                name = event.target.value + ' ' + this.lastName;
            } else {
                name = this.firstName + ' ' + event.target.value;
            }
            console.log ('emit ', name)
            this.$emit('input', name)
        }
        // submit () {
        //     console.log ('submit: ', this.firstName, this.lastName)
        //     this.$emit('input', [this.firstName, this.lastName].join(' '))

        // }

    },
    watch: {
    }

}
</script>

<style scoped>
</style>
