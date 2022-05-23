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
            this[data].push({})
        },
        doRemoveSub:function(data,index){
            this[data].splice(index, 1);

        },
       
        save:function(){
            var data = {
                header : app1.header,
                detail : app1.details
            };
            axios.post('mix_kwitansi', data, optionAxiosPublic)
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
