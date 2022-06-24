// Al click su un button un testo 
// appare e scompare:
//    - versione 1: l'elemento viene aggiunto e rimosso dal dom
//    - versione 2: l'elemento viene mostrato e nascosto nel dom
var app = new Vue(
    {
        el: '#root',
        data: {
            textIsVisible: true
        },
        methods: {
            toggleText() {
                this.textIsVisible = !this.textIsVisible;
            }
        }
    }
);
