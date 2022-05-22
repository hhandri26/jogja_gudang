var app = new Vue({
    el: '#app',
    data: {
        transaksi_new: 0,
        transaksi_prosess: 0,
        transaksi_packing: 0,
        transaksi_send: 0
    },
    created: function () {

    },
   
    methods: {

    },
    mounted() {
        var role = localStorage.role;
        var no = localStorage.phone_number;
        if (role == '1') {
            axios.get('countnew/' + 0,optionAxiosPublic).then(function (resp) {

                    this.transaksi_new = resp.data.values[0].qty;
                })
                .catch(function (err) {
                    console.log(err);
                });

                axios.get('countprosess/' + 0, optionAxiosPublic).then(function (resp) {


                    this.transaksi_prosess = resp.data.values[0].qty;
                })
                .catch(function (err) {
                    console.log(err);
                });

                axios.get('countpacking/' + 0, optionAxiosPublic).then(function (resp) {


                    this.transaksi_packing = resp.data.values[0].qty;
                })
                .catch(function (err) {
                    console.log(err);
                });

                axios.get('countsend/' + 0, optionAxiosPublic).then(function (resp) {


                    this.transaksi_send = resp.data.values[0].qty;
                })
                .catch(function (err) {
                    console.log(err);
                });

        } else {
            axios.get('countnew/' + no, optionAxiosPublic).then(function (resp) {


                this.transaksi_new = resp.data.values[0].qty;
            })
            .catch(function (err) {
                console.log(err);
            });

            axios.get('countprosess/' + no, optionAxiosPublic).then(function (resp) {


                this.transaksi_prosess = resp.data.values[0].qty;
            })
            .catch(function (err) {
                console.log(err);
            });

            axios.get('countpacking/' + no, optionAxiosPublic).then(function (resp) {


                this.transaksi_packing = resp.data.values[0].qty;
            })
            .catch(function (err) {
                console.log(err);
            });

            axios.get('countsend/' + no, optionAxiosPublic).then(function (resp) {


                this.transaksi_send = resp.data.values[0].qty;
            })
            .catch(function (err) {
                console.log(err);
            });

        }

    },

});