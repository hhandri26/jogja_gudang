var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        role: localStorage.role,
        total_penjualan:0,
        laba:0,
        start_date:'',
        end_date:'',
        data:[]
     
    },
    methods: {
        post:function(){
            var item = {
                start_date: app1.start_date,
                end_date:app1.end_date

            };
            var count_total_penjualan = 0;
            var count_laba = 0;

            axios.post('transaction/report_mobile', item, optionAxiosPublic)
                .then(res3 => {
                  app1.data = res3.data.values;
                  Object.entries(res3.data.values).forEach(([key, val]) => {
                    count_total_penjualan += val.hargajual;
                    count_laba += val.product_price_modal * val.qty;
                   
                });
                app1.total_penjualan =count_total_penjualan;
                app1.laba = count_laba;
                }).catch(err => {
                    console.log(err);
                });

        }
       


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
         
        



    }
});

