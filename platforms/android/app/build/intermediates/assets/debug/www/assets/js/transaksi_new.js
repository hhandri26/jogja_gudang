var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        details: [],
        header: {
            no_resi: '',
            province_name: '',
            city_name: '',
            district_name: '',
            alamat_member: '',
            total_all: '',
            amount_shipping: '',
            total_berat: '',
            amount: '',
            bukti_transfer: '',
        },
        cetak:'',
        role:localStorage.role
    },
    methods: {
        detail_vue: function (id) {
            this.total_all = 0;
            this.amount_shipping = 0;
            this.total_berat = 0;
            this.amount = 0;
            axios.get('transaction/header_detail/' + id, optionAxiosPublic)
                .then(res => {
                    this.header.no_resi = res.data.values[0].no_resi;                    
                    this.header.alamat_member = res.data.values[0].alamat_member;        
                    this.header.amount_shipping = res.data.values[0].amount_shipping;                    
                    this.header.amount = res.data.values[0].amount;
                    this.header.bukti_transfer = res.data.values[0].bukti_transfer;

                    var district_id = {
                        district_id: res.data.values[0].district_id,
                      };

                    axios.post('ongkir/district_name' ,{district_id}, optionAxiosPublic)
                    .then(res3 => {
                        var parse = JSON.parse(res3.data.values);
                        var gg = parse.rajaongkir.results;
                        app1.header.province_name = gg.province;
                        app1.header.city_name = gg.city;
                        app1.header.district_name = gg.subdistrict_name;
                        


                    }).catch(err => {
                        console.log(err);
                    });

                  
                    axios.get('transaction/detail/' + res.data.values[0].transaction_number, optionAxiosPublic)
                    .then(res2 => {
                        app1.details = res2.data.values;
                        var count = 0;
                        var count_berat = 0;
                        if (res.data.values[0].courier == 'keep') {
                            app1.header.amount_shipping = 0;

                        } 
                        app1.cetak +='Tanggal :' + res.data.values[0].date +'\n'+'Waktu :'+ res.data.values[0].time + '\n' + 'Member :' +  res.data.values[0].first_name + '\n' + 'Alamat :' + app1.header.province_name +' ' + app1.header.city_name +' ' + app1.header.district_name+' ' + app1.header.alamat_member+'\n'+ 'Admin :' + '\n' + res.data.values[0].username + '\n \n \n' ;

                        Object.entries(res2.data.values).forEach(([key, val]) => {
                            count += val.sub_total;
                            count_berat += val.berat;
                            app1.cetak +=val.product_nama + 'X' + val.qty +' '+ app1.$options.filters.thousand(val.sub_total) + '\n \n \n';
                        });

                        app1.cetak +='Sub Total :' + count + '\n' + 'Total Berat :' + count + '\n \n \n \n \n \n \n';
                        app1.header.total_all = Number(count);
                        app1.header.total_berat = count_berat;
                        


                    }).catch(err => {
                        console.log(err);
                    });
                  

                }).catch(err => {
                    console.log(err);
                });

            

        },
        refresh() {
            let data = [];
            var role = localStorage.role;
            var no = localStorage.phone_number;
            if (role == '1') {
                let users = [];

                this.dataTable = $('#table-data').DataTable({
                    rowReorder: {
                        selector: 'td:nth-child(2)'
                    },
                    responsive: true
                });
                const url = 'https://api.dianmandirigrup.co.id/new_mobile/' + 0;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        data.forEach(item => {
                            users.push(item);
                        });

                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.date,
                                user.time,
                                user.username,
                                '<button href="#" class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" class="btn btn-danger"> Hapus </a>'
                            ]).draw(false)
                        })
                    })
            } else {
                let users = [];

                this.dataTable = $('#table-data').DataTable({
                    rowReorder: {
                        selector: 'td:nth-child(2)'
                    },
                    responsive: true
                });
                const url = 'https://api.dianmandirigrup.co.id/new_mobile/' + 0;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        data.forEach(item => {
                            users.push(item);
                        });

                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.date,
                                user.time,
                                user.username,
                                '<button href="#" class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" class="btn btn-danger"> Hapus </a>'
                            ]).draw(false)
                        })
                    })


            }


        },


    },
    mounted() {
        let data = [];
        var role = localStorage.role;
        var no = localStorage.phone_number;
        if (role == '1') {
            let users = [];

            this.dataTable = $('#table-data').DataTable({
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            });
            const url = 'https://api.dianmandirigrup.co.id/new_mobile/' + 0;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        users.push(item);
                    });

                    users.forEach(user => {
                        this.dataTable.row.add([
                            user.transaction_number,
                            user.first_name,
                            user.date,
                            user.time,
                            user.username,
                            '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" class="btn btn-danger"> Hapus </a>'
                        ]).draw(false)
                    })
                })
        } else {
            let users = [];

            this.dataTable = $('#table-data').DataTable({
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            });
            const url = 'https://api.dianmandirigrup.co.id/new_mobile/' + 0;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        users.push(item);
                    });

                    users.forEach(user => {
                        this.dataTable.row.add([
                            user.transaction_number,
                            user.first_name,
                            user.date,
                            user.time,
                            user.username,
                            '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" class="btn btn-danger"> Hapus </a>'
                        ]).draw(false)
                    })
                })


        }



    }
});

function detail(id) {
    app1.detail_vue(id)
}