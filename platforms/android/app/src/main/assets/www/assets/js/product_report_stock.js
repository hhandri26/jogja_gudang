var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        details: [],        
        cetak: '',
        role: localStorage.role,
       
    },
    methods: {
       cetak_excel:function(){
      

       },
        refresh: function () {
           window.location.href ='';





        },


    },
    mounted() {
        let data = [];
        var role = localStorage.role;
        var no = localStorage.phone_number;      
        let users = [];
        this.dataTable = $('#table-data').DataTable({
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true
        });
        const url = 'https://api.dianmandirigrup.co.id/all_stock_mobile';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    users.push(item);
                });
                app1.details = users;

                users.forEach(user => {
                    this.dataTable.row.add([
                        user.product_name,
                        user.product_code,
                        user.qty
                        
                    ]).draw(false)
                })

                
            })


        



    }
});

