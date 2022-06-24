var app = new Vue(
    {
        el: '#root',
        data: {
            counter: 0,
            autoplayClock: null,
        },
        methods: {
            increaseCounter() {
                this.counter++;
            },
            stopCounter() {
                clearInterval(this.autoplayClock);
                this.autoplayClock = null;
            },
            startAutoplay() {
                this.autoplayClock = setInterval(this.increaseCounter, 1000);
            }
        },
        mounted() {
            this.startAutoplay();
        }
    }
);