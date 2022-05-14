<template>
    <div> 
        <input  v-model="search" @input="handleSearchInput" placeholder="Search">
        <button @click="handleClear" class="c-button">Clear</button>
    </div>
</template>

<script>
export default {
    name: "v-table-filter",
    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearchInput() {
            this.$emit('handle-search', this.search);
        },
        handleClear(){
            this.search = ''
            this.handleSearchInput()
        }
        


    }
}
</script>
