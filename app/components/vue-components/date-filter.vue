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
import chartDataFromInput from '../../helpers/date-filter'

export default {
    name: "DateFilterComponent",
    emits: ['response'],
    mounted() {

    },
    data() {
        return {
            startDate: null,
            endDate: null,
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
            
        }

    },
    methods: {
        formatDate(dateInMs) {
            return moment(dateInMs).format("YYYY-MM-DD");
        },
        handleInput(event){


            // Make the inputs date to milliseconds
            let startMilliseconds = new Date(this.startDate).getTime();
            let endMilliseconds = new Date(this.endDate).getTime();

            // validation condition
            if (endMilliseconds < startMilliseconds) {
                
                if (this.startDate && this.endDate) {

                    this.startDate = this.minDate;
                    this.endDate = this.maxDate;
                    alert('Start date should be bigger than end date');
                }
            }

            // Emit the new chart data
            this.$emit('response', chartDataFromInput(this.startDate, this.endDate, this.chartData))

        },
        
    }
    
    
}

</script>