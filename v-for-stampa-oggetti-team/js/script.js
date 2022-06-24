var app = new Vue(
    {
        el: '#root',
        data: {
            teams: [
                {
                    name: 'Ascoli',
                    founded: 1898,
                    coach: {
                        name: 'Christian Bucchi'
                    }
                },
                {
                    name: 'Milan',
                    founded: 1899,
                    coach: {
                        name: 'Stefano Pioli'
                    }
                },
                {
                    name: 'ASD Porto S.Elpidio Calcio',
                    founded: null,
                    coach: null
                },
            ]
        },
        methods: {
        }
    }
);
