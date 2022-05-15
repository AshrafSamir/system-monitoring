<template>
    <div>
        <label for="start">Start date:</label>
        <input type="date" id="start"   @input="handleInput" v-model="startDate"     :min="minDate" :max="maxDate">

        <label for="start">End date:</label>
        <input type="date" id="End"  @input="handleInput"    v-model="endDate"  :min="minDate" :max="maxDate">
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "DateFilterComponent",
    emits: ['response'],
    mounted() {

    },
    data() {
        return {
            startDate: '',
            endDate: '',
        }
    },
    computed: {
        chartData(){
            return this.$store.getters.getPerformance;
        },
        minDate(){
            const dates = this.chartData.map(object => {
                    return object.date_ms;
                });

            return this.formatDate(Math.min(...dates));
        },
        maxDate(){
            const dates = this.chartData.map(object => {
                    return object.date_ms;
                });

            return this.formatDate(Math.max(...dates));
            
        },
        chartDataFromInput(){

            // take start date and end date convert it to milliseconds
            
            let startDate = new Date(this.startDate); 
            let endDate = new Date(this.endDate); 
            let startMilliseconds = startDate.getTime();
            let endMilliseconds = endDate.getTime();

            // validation condition
            if(endMilliseconds < startMilliseconds){
                this.startDate = this.minDate
                this.endDate = this.maxDate
                alert("Start date should be bigger than end date")
            }

            //  then filter and return new data
            const newChartData =  this.chartData.filter(item => {
               return  (item.date_ms >= startMilliseconds) && (item.date_ms <= endMilliseconds)
            })

            return newChartData

        }

    },
    methods: {
        formatDate(dateInMs) {
            return moment(dateInMs).format("YYYY-MM-DD");
        },
        handleInput(event){
            this.$emit('response', this.chartDataFromInput)
        },
        
    }
    
    
}
</script>