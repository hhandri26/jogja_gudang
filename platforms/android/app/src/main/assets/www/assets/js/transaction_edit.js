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
            status_bayar: '',
            id: '',
            kurir_id: '',
            first_name: '',
            province_id: '',
            city_id: '',
            district_id: '',
            address: '',
            member_id:''
        },
        price_ongkir_list: [],
        cetak: '',
        courier2: '',
        role: localStorage.role,
        status_bayar: [{
                text: 'PAID',
                value: 'PAID'
            },
            {
                text: 'failure',
                value: 'failure'
            },
            {
                text: 'PROSES',
                value: 'PROSES'
            },
            {
                text: 'PENDDING',
                value: 'pending'
            },
            {
                text: 'PACKING',
                value: 'PACKING'
            },
            {
                text: 'SEND',
                value: 'SEND'
            },

        ],
        province: [],
        city: [],
        district: [],
        kurir: [{
                id: 'ncs',
                text: 'NCS',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'ide',
                text: 'ID Express',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'pos',
                text: 'POS Indonesia',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'lion',
                text: 'Lion Parcel',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'sicepat',
                text: 'SiCepat Express',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'antaraja',
                text: 'ANTERAJA',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'sentral',
                text: 'Sentral Cargo',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'jne',
                text: 'Jalur Nugraha Ekakurir',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'tiki',
                text: 'Citra Van Titipan Kilat',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'wahana',
                text: 'Wahana Prestasi Logistik',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'jnt',
                text: 'J&T Express',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },
            {
                id: 'keep',
                text: 'Pilih Nanti',
                image: 'http://ncskurir.com/wp-content/uploads/2018/05/LOGO-NCS-e1525624030279.png'
            },


        ],
        kurir_id: '',
    },
    methods: {
        delete_item: function (id) {
            var item = {
                id: id,
            };

            axios.post('transaction_delete_mobile', item, optionAxiosPublic)
                .then(res3 => {
                    alert('berhasil menghapus transaksi');
                    window.location.href = "";
                }).catch(err => {
                    console.log(err);
                });

        },
        save: function () {
            var no_resi = '';
            if (app1.header.no_resi !== null) {
                no_resi = app1.header.no_resi;
            }
            var data = {
                id: app1.header.id,
                no_resi_pengiriman: no_resi,
                status: app1.header.status_bayar,
                province_id : app1.header.province_id,
                city_id : app1.header.city_id,
                district_id : app1.header.district_id,
                courier : app1.kurir_id,
                address : app1.header.address,
                amount_shipping : app1.header.amount_shipping,
                first_name:app1.header.first_name,
                member_id:app1.header.member_id
            };
            axios.post('transaction/update_header', data, optionAxiosPublic)
                .then(res3 => {
                    alert('Data berhasil Diupdate');
                    window.location.href = "";



                }).catch(err => {
                    console.log(err);
                });

        },
        detail_vue: function (id) {
            this.total_all = 0;
            this.amount_shipping = 0;
            this.total_berat = 0;
            this.amount = 0;
            this.cetak = '';
            this.header = {
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
                status_bayar: '',
                id: '',
                kurir_id: '',
                first_name: '',
                province_id: '',
                city_id: '',
                district_id: '',
                address: '',
                member_id:''
            };
            axios.get('transaction/header_detail/' + id, optionAxiosPublic)
                .then(res => {

                    app1.header.no_resi = res.data.values[0].no_resi_pengiriman;
                    app1.header.id = res.data.values[0].id;
                    app1.header.address = res.data.values[0].address;
                    app1.header.amount_shipping = res.data.values[0].amount_shipping;
                    app1.header.amount = res.data.values[0].amount;
                    app1.header.bukti_transfer = res.data.values[0].bukti_transfer;
                    app1.header.courier = res.data.values[0].courier;
                    app1.header.first_name = res.data.values[0].first_name;
                    app1.header.member_id = res.data.values[0].member_id;
                    app1.kurir_id = res.data.values[0].courier;


                    var district_id = {
                        district_id: res.data.values[0].district_id,
                    };
                    if (res.data.values[0].district_id) {
                        axios.post('ongkir/district_name', {
                                district_id
                            }, optionAxiosPublic)
                            .then(res3 => {
                                var parse = JSON.parse(res3.data.values);
                                var gg = parse.rajaongkir.results;
                                app1.header.province_name = gg.province;
                                app1.header.city_name = gg.city;
                                app1.header.district_name = gg.subdistrict_name;

                                axios.get('transaction/detail/' + res.data.values[0].transaction_number, optionAxiosPublic)
                                    .then(res2 => {
                                        app1.details = res2.data.values;
                                        var count = 0;
                                        var count_berat = 0;
                                        if (res.data.values[0].courier == 'keep') {
                                            app1.header.amount_shipping = 0;

                                        }
                                        app1.cetak += 'Tanggal :' + res.data.values[0].date + '\n' + 'Waktu :' + res.data.values[0].time + '\n' + 'Member :' + res.data.values[0].first_name + '\n' + 'Alamat :' + app1.header.province_name + ' ' + app1.header.city_name + ' ' + app1.header.district_name + ' ' + app1.header.alamat_member + '\n' + 'Admin :' + '\n' + res.data.values[0].username + '\n \n \n';

                                        Object.entries(res2.data.values).forEach(([key, val]) => {
                                            count += val.sub_total;
                                            count_berat += val.berat;
                                            app1.cetak += val.product_nama + 'X' + val.qty + ' ' + app1.$options.filters.thousand(val.sub_total) + '\n';
                                        });

                                        app1.cetak += 'Sub Total :' + count + '\n' + 'Total Berat :' + count_berat + '\n \n \n \n \n \n \n';
                                        app1.header.total_all = Number(count);
                                        app1.header.total_berat = count_berat;



                                    }).catch(err => {
                                        console.log(err);
                                    });



                            }).catch(err => {
                                console.log(err);
                            });

                    } else {
                        axios.get('transaction/detail/' + res.data.values[0].transaction_number, optionAxiosPublic)
                            .then(res2 => {
                                app1.details = res2.data.values;
                                var count = 0;
                                var count_berat = 0;
                                if (res.data.values[0].courier == 'keep') {
                                    app1.header.amount_shipping = 0;

                                }
                                app1.cetak += 'Tanggal :' + res.data.values[0].date + '\n' + 'Waktu :' + res.data.values[0].time + '\n' + 'Member :' + res.data.values[0].first_name + '\n' + 'Alamat :' + app1.header.province_name + ' ' + app1.header.city_name + ' ' + app1.header.district_name + ' ' + app1.header.alamat_member + '\n' + 'Admin :' + '\n' + res.data.values[0].username + '\n \n \n';

                                Object.entries(res2.data.values).forEach(([key, val]) => {
                                    count += val.sub_total;
                                    count_berat += val.berat;
                                    app1.cetak += val.product_nama + 'X' + val.qty + ' ' + app1.$options.filters.thousand(val.sub_total) + '\n';
                                });

                                app1.cetak += 'Sub Total :' + count + '\n' + 'Total Berat :' + count_berat + '\n \n \n \n \n \n \n';
                                app1.header.total_all = Number(count);
                                app1.header.total_berat = count_berat;



                            }).catch(err => {
                                console.log(err);
                            });

                    }







                }).catch(err => {
                    console.log(err);
                });



        },
        refresh: function () {
            window.location.href = '';
        },

        get_city: function () {
            axios.post('ongkir/city', {
                    provinsi_id: app1.header.province_id
                }, optionAxiosPublic)
                .then(res => {

                    let parse = JSON.parse(res.data.values);
                    app1.city = parse.rajaongkir.results;


                }).catch(err => {
                    console.log(err);
                })

        },
        get_district: function () {
            axios.post('ongkir/district', {
                    city_id: app1.header.city_id
                }, optionAxiosPublic)
                .then(res => {

                    let parse = JSON.parse(res.data.values);
                    app1.district = parse.rajaongkir.results;


                }).catch(err => {
                    console.log(err);
                })

        },
        count_ongkir_price: function () {

            if (app1.header.district_id !== '') {

                app1.price_ongkir_list = [];
                var kurir = app1.kurir_id;
                var des = app1.header.district_id;
                var w = app1.header.total_berat;
                var dat = {
                    origin: 551,
                    des: des,
                    weight: w,
                    courier: kurir

                };


                axios.post('ongkir/count_price', dat, optionAxiosPublic)
                    .then(res => {
                        let parse = JSON.parse(res.data.values);
                        app1.price_ongkir_list = parse.rajaongkir.results[0].costs;

                    }).catch(err => {
                        console.log(err);
                    })


            } else {
                alert('silahkan lengkapi alamat !')

            }





        },
        min_qty: function (id, qty, i, id_detail) {
            var minimum_order = 0;
            axios.get('findproductgrosir/' + id, optionAxiosPublic)
                .then(res => {
                    minimum_order = res.data.values[0].product_min_qty;

                    if (qty > minimum_order) {
                        if (qty <= minimum_order || qty == 0) {
                            app1.details[i].qty = minimum_order;

                        } else {
                            app1.details[i].qty -= minimum_order;
                            var dat = {
                                id: id,
                                qty: minimum_order
                            };
                            axios.post('findProductGrosirCount', dat, optionAxiosPublic)
                            .then(res => {
                                //console.log(res.data.values[0].price)
                                app1.details[i].harga = res.data.values[0].price;
                                app1.details[i].sub_total = res.data.values[0].price * app1.details[i].qty;
                                // berat
                                axios.get('product/' + id, optionAxiosPublic).then(res => {
                                    let resp = res.data.values[0];
                                    app1.details[i].berat -= resp.product_weight;

                                    // update database
                                    var data ={
                                        id:id_detail,
                                        qty:app1.details[i].qty,
                                        berat:app1.details[i].berat,
                                        harga:app1.details[i].harga,
                                        sub_total:app1.details[i].harga * app1.details[i].qty 

                                    };
                                    axios.post('transaction/update_detail', data, optionAxiosPublic).then(res => {
                                    }).catch(err => {
                                        console.log(err);
                                    });
                                   

                                }).catch(err => {
                                    console.log(err);
                                });
                                
                                
                                // min stok
                                axios.post('add_stok_front', dat, optionAxiosPublic).then(res => {
                                }).catch(err => {
                                    console.log(err);
                                });



                            }).catch(err => {

                                console.log(err);
                            });
                      

                        }
                    } else {
                        alert('Jumlah Stok Tidak Sama dengan Kelipatan Grosir')
                    }

                }).catch(err => {

                    console.log(err);
                });


        },
        add_qty: function (id, qty, i, id_detail) {

            //  console.log(qty);
            var stok = 0;
            var minimum_order = 0;
            var qty_2 = qty;
            var id_2 = id;
            var id_detail2 = id_detail;
            axios.get('findproductgrosir/' + id, optionAxiosPublic)
                .then(res => {
                    minimum_order = res.data.values[0].product_min_qty;
                    axios.get('get_qty_sistem_product/' + id, optionAxiosPublic)
                        .then(res => {
                            stok = res.data.values[0].qty;

                            if (qty_2 <= stok - minimum_order) {
                                app1.details[i].qty += minimum_order;

                                 // berat
                                axios.get('product/' + id_2, optionAxiosPublic).then(res => {
                                    let resp = res.data.values[0];
                                    app1.details[i].berat += resp.product_weight;

                                     // update database
                                    var data ={
                                        id:id_detail2,
                                        qty:app1.details[i].qty,
                                        berat:app1.details[i].berat,
                                        harga:app1.details[i].harga,
                                        sub_total:app1.details[i].harga * app1.details[i].qty 

                                    };
                                    axios.post('transaction/update_detail', data, optionAxiosPublic).then(res => {
                                    }).catch(err => {
                                        console.log(err);
                                    });

                                }).catch(err => {
                                    console.log(err);
                                });
                                
                               

                                // min stok

                                var dat = {
                                    id: id_2,
                                    qty: minimum_order
                                };
                                axios.post('min_stock', dat, optionAxiosPublic).then(res => {
    
                                }).catch(err => {
                                    console.log(err);
                                    }
                                );

                                var dat = {
                                    id: id,
                                    qty: qty_2
                                };
                                axios.post('findProductGrosirCount', dat, optionAxiosPublic)
                                    .then(res => {
                                        app1.details[i].harga = res.data.values[0].price;
                                        app1.details[i].sub_total = res.data.values[0].price * app1.details[i].qty;
                                    }).catch(err => {
                                        console.log(err);
                                    });
                            } else {
                                  alert('stok tidak tersedia')

                            }
                        }).catch(err => {
                            console.log(err);
                        });

                }).catch(err => {

                    console.log(err);
                });






        },
        delete_detail: function (id,index) {
            const index2 = app1.details.indexOf(index)         
            
            var data ={
                id:id,
            };
            var dat2 = {
                id: index.product_id,
                qty: index.qty


            };
            axios.post('transaction/delete_detail', data, optionAxiosPublic).then(res => {
                axios.post('add_stok_front', dat2, optionAxiosPublic).then(res => {
                    app1.details.splice(index2, 1)
                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {               
              
                console.log(err);
            });

        },
        add_ongkir: function (value) {
            app1.header.amount_shipping = value;

        },
        scan: function () {
            cordova.plugins.barcodeScanner.scan(function (result) {
                    if (!result.cancelled) {

                        app1.header.no_resi = result.text;

                    } else {
                        alert("You have cancelled scan");
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
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
            const url = 'https://api.dianmandirigrup.co.id/new_all/' + 0;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        users.push(item);
                    });

                    if (localStorage.role == 1) {
                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.courier,
                                user.date,
                                user.time,
                                user.username,
                                '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" onclick="hapus(' + user.transaction_number + ')" class="btn btn-danger"> Hapus </a>'
                            ]).draw(false)
                        })

                    } else {
                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.courier,
                                user.date,
                                user.time,
                                user.username,
                                '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button>'
                            ]).draw(false)
                        })

                    }


                })
        } else {
            let users = [];

            this.dataTable = $('#table-data').DataTable({
                rowReorder: {
                    selector: 'td:nth-child(2)'
                },
                responsive: true
            });
            const url = 'https://api.dianmandirigrup.co.id/new_all/' + no;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        users.push(item);
                    });

                    if (localStorage.role == 1) {
                        users.forEach(user => {
                            this.dataTable.row.add([
                                user.transaction_number,
                                user.first_name,
                                user.date,
                                user.time,
                                user.username,
                                user.courier,
                                '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button> <a href="#" class="btn btn-danger" onclick="hapus(' + user.transaction_number + ')"> Hapus </a>'
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
                                user.courier,
                                '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="detail(' + user.id + ')"> Detail </button>'
                            ]).draw(false)
                        })

                    }
                })


        }

        axios.get('ongkir/province', optionAxiosPublic)
            .then(res3 => {
                var parse = JSON.parse(res3.data.values)
                app1.province = parse.rajaongkir.results;
            }).catch(err => {
                console.log(err);
            });






    }
});

function detail(id) {
    app1.detail_vue(id)
}

function hapus(id) {
    app1.delete_item(id)

}