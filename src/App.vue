<template>
    <div class="position-absolute h-100 w-100 d-flex justify-content-center">
        <thermometer :min="0" :max="1200" :goal="1000" :value="500" :format="value => `$${value.toFixed(2)}`" statistics ticks intervals />
    </div>
</template>

<script>
import Thermometer from './Thermometer/Thermometer';

export default {

    components: {
        Thermometer
    }

};
</script>

<style lang="scss">
</style>
