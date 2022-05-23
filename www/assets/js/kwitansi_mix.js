var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        role: localStorage.role,
     
    },
    methods: {
       


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
            const url = 'https://api.dianmandirigrup.co.id/results_mix' ;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        users.push(item);
                    });

                    if (localStorage.role == 1) {
                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.no_kwitansi,
                                user.date,
                                user.kode_barang,
                                user.harga_modal,
                                user.harga_jual,
                                user.jumlah,
                                user.pcs,
                                user.seri
                            ]).draw(false)
                        })

                    } else {
                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.date,
                                user.time,
                                user.username,
                                '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button>'
                            ]).draw(false)
                        })

                    }


                })
        



    }
});

