<template>
    <div> 
        <input v-model="search" placeholder="Search">
        <button @click="modifyURL" class="c-button">Clear</button>
    </div>
</template>

<script>
export default {
    name: "TableFilterComponent",
    data() {
        return {
            search: ''
        }
    },
    methods: {
        modifyURL(){
            console.log(this.$router)
        }
    }
}
</script>
