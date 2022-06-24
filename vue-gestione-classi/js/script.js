var app = new Vue(
    {
        el: '#root',
        data: {
            imageName: 'saturn.jpg',
            imageIsGray: false,
            imageIsSmall: false
        },
        methods: {
            changeGray() {
                // if(this.imageIsGray) {
                //     this.imageIsGray = false;
                // } else {
                //     this.imageIsGray = true;
                // }

                // this.imageIsGray = this.imageIsGray === true ? false : true;

                this.imageIsGray = !this.imageIsGray;
            },
            changeSize() {
                this.imageIsSmall = !this.imageIsSmall;
            }
        }
    }
);
