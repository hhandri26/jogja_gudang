var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        editedItem: {
            id: '',
            product_name: '',
            product_code: '',
            product_category_id: '',
            product_img: '',
            product_description: '',
            product_price: '',
            product_status: '',
            product_weight: '',
            product_price_modal:''
            
            
        },
        category:[],
        grosir:[]
      
       
    },
    methods: {
        addRowSub:function(data){
            this[data].push({})
        },
        doRemoveSub:function(data,index){
            this[data].splice(index, 1);

        },
        delete_item: function (id) {
            //console.log('hapus');
            var item = {
                id: id,
            };

            axios.post('product_delete', item, optionAxiosPublic)
                .then(res3 => {
                    alert('berhasil menghapus Data');
                    window.location.href = "";
                }).catch(err => {
                    console.log(err);
                });

        },
        save:function(){
            
            var item = app1.editedItem;
            var grosir = app1.grosir;
            if(app1.editedItem.id !==''){
                axios.post('product_edit', {item, grosir}, optionAxiosPublic)
                .then(res3 => {
                    alert('Data berhasil Diupdate');
                   window.location.href = "";
    
    
    
                }).catch(err => {
                    console.log(err);
                });

            }else{
                axios.post('product', {item, grosir}, optionAxiosPublic)
                .then(res3 => {
                    alert('Data berhasil Ditambahkan');
                   window.location.href = "";
    
    
    
                }).catch(err => {
                    console.log(err);
                });

            }
           

        },
        uploadfile:function(){
            this.file = this.$refs.image.files[0];
            let formData = new FormData();
            formData.append('file',  this.file);
            let headers = {
                 'content-type': 'multipart/form-data',
                 'Content-Type': 'application/json',
                };
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


            axios.post('https://api.dianmandirigrup.co.id/upload_file',formData,{headers: headers})
            .then(res => {
                  this.editedItem.product_category_img   = res.data[0].mediaSource;                
            }).catch(err => {
            console.log(err);
            })

        },
        edit: function (id) {

            axios.get('product/' +id, optionAxiosPublic)
                .then(res2 => {
                    app1.editedItem.id                  =  res2.data.values[0].id;
                    app1.editedItem.product_name        =  res2.data.values[0].product_name;
                    app1.editedItem.product_code        =  res2.data.values[0].product_code;
                    app1.editedItem.product_category_id =  res2.data.values[0].product_category_id;
                    app1.editedItem.product_img         =  res2.data.values[0].product_img;
                    app1.editedItem.product_description =  res2.data.values[0].product_description;
                    app1.editedItem.product_price       =  res2.data.values[0].product_price;
                    app1.editedItem.product_status      =  res2.data.values[0].product_status;
                    app1.editedItem.product_weight      =  res2.data.values[0].product_weight;
                    app1.editedItem.product_price_modal =  res2.data.values[0].product_price_modal;
                    console.log(res2.data.values[0].product_price_modal)
                    app1.grosir = [];
                    axios.get('findproductgrosir/' + id,optionAxiosPublic)
                    .then(res => {
                        app1.grosir = res.data.values;
                    }).catch(err => {
                        console.log(err);
                    })
            }).catch(err => {
                console.log(err);
            });            


        },
        delete_grosir:function(target,index,id){
            var item = {
                id: id,
            };

            axios.post('grosir_delete', item, optionAxiosPublic)
            .then(res3 => {
                alert('berhasil menghapus Data');
            }).catch(err => {
                console.log(err);
            });
            this[target].splice(index, 1);

        },
        refresh: function () {
           window.location.href ='';
        },
        clear:function(){
            app1.editedItem = {
                id: '',
                product_name: '',
                product_code: '',
                product_category_id: '',
                product_img: '',
                product_description: '',
                product_price: '',
                product_status: '',
                product_weight: '',
                product_price_modal:''

            }
        }


    },
    mounted() {
          
        let users = [];
        this.dataTable = $('#table-data').DataTable({
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true
        });
        const url = 'https://api.dianmandirigrup.co.id/product_mobile';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    users.push(item);
                });

             
                users.forEach(user => {
                    this.dataTable.row.add([
                        user.product_name,
                        user.product_code,
                        user.product_price,
                        user.product_price_modal,
                        user.product_weight,
                        '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="edit(' + user.id + ')"> Edit </button> <a href="#" class="btn btn-danger" onclick="hapus(' + user.id + ')"> Hapus </a>'
                    ]).draw(false)
                })

                
            })

            axios.get('product/catagories', optionAxiosPublic)
            .then(res3 => {
                console.log(res3.data.values)
                app1.category = res3.data.values;
            }).catch(err => {
                console.log(err);
            });


        



    }
});

function edit(id) {
    app1.edit(id)
}

function hapus(id) {
    app1.delete_item(id)

}