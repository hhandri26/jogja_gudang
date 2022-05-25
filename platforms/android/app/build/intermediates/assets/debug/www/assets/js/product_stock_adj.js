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
      
       
        save:function(){
          
            axios.post('adj_item', {items:app1.details}, optionAxiosPublic)
            .then(res3 => {
                alert('Data berhasil Update');
               window.location.href = "";



            }).catch(err => {
                console.log(err);
            });

        }
       
        


    },
    mounted() {
        axios.get('all_stock',optionAxiosPublic)
          .then((res) => {
            app1.details = res.data.values;
          })
        .catch((e) => {

        })
       



    }
});
