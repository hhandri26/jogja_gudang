var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        details: [],
        header: {
            product_id: '',
            qty: ''
        },
        cetak: '',
        role: localStorage.role,
        product:[]
    },
    methods: {
        addRowSub:function(data){
            if(this.header.product_id !=='' && this.header.qty!==0){
                var id = app1.header.product_id;
                var qty_fsk = app1.header.qty;
                axios.get('get_qty_sistem_product/'+ id,optionAxiosPublic)
                .then((res) => {
                    this[data].push({    
                        id:res.data.values[0].id,
                        product_name:res.data.values[0].product_name,
                        product_code:res.data.values[0].product_code,
                        qty_sistem:res.data.values[0].qty,
                        produk_harga:res.data.values[0].product_price,
                        qty_fisik:qty_fsk                
                    });
                })
                .catch((e) => {

                })
                
                
                 
                this.produk_id           ="";
                this.qty                 =0;
            }
           
        },
        doRemoveSub:function(data,index){
            this[data].splice(index, 1);

        },
       
        save:function(){
          
            axios.post('add_stock', {details:app1.details}, optionAxiosPublic)
            .then(res3 => {
                alert('Data berhasil ditambahkan');
               window.location.href = "";



            }).catch(err => {
                console.log(err);
            });

        }
       
        


    },
    mounted() {
        axios.get('product',optionAxiosPublic)
          .then((res) => {
            app1.product = res.data.values;
          })
        .catch((e) => {

        })
       



    }
});
