export default {

    methods: {

        percentage(value) {
            return !value ? 0 : Math.round(value / ((this.goal || this.max) - this.min) * 100);
        }

    }

};