var app1 = new Vue({
    el: '#app1',
    data: {
        dataTable: null,
        editedItem: {
            id:'',
            product_category_code: '',
            product_category_name: '',
            product_category_img:''
            
            
        },
      
       
    },
    methods: {
        delete_item: function (id) {
            console.log('hapus');
            var item = {
                id: id,
            };

            axios.post('product/catagories_delete', item, optionAxiosPublic)
                .then(res3 => {
                    alert('berhasil menghapus Data');
                    window.location.href = "";
                }).catch(err => {
                    console.log(err);
                });

        },
        save:function(){
            
            var data = app1.editedItem;
            if(app1.editedItem.id !==''){
                axios.post('product/catagories_edit', data, optionAxiosPublic)
                .then(res3 => {
                    alert('Data berhasil Diupdate');
                   window.location.href = "";
    
    
    
                }).catch(err => {
                    console.log(err);
                });

            }else{
                axios.post('product/catagories', data, optionAxiosPublic)
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

            axios.get('product/catagories/' +id, optionAxiosPublic)
                .then(res2 => {
                    app1.editedItem.id = res2.data.values[0].id;
                    app1.editedItem.product_category_code=  res2.data.values[0].product_category_code;
                    app1.editedItem.product_category_name=  res2.data.values[0].product_category_name;
                    app1.editedItem.product_category_img=  res2.data.values[0].product_category_img;
            }).catch(err => {
                console.log(err);
            });            


        },
        refresh: function () {
           window.location.href ='';
        },


    },
    mounted() {
          
        let users = [];
        this.dataTable = $('#table-data').DataTable({
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true
        });
        const url = 'https://api.dianmandirigrup.co.id/product/catagories_mobile/';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    users.push(item);
                });

             
                users.forEach(user => {
                    this.dataTable.row.add([
                        user.product_category_code,
                        user.product_category_name,
                        '<button class="btn btn-info" data-toggle="modal" data-target="#tesModal" onclick="edit(' + user.id + ')"> Edit </button> <a href="#" class="btn btn-danger" onclick="hapus(' + user.id + ')"> Hapus </a>'
                    ]).draw(false)
                })

                
            })


        



    }
});

function edit(id) {
    app1.edit(id)
}

function hapus(id) {
    app1.delete_item(id)

}