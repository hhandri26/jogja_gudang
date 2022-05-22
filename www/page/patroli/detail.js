function home(){
    $('#stage1').show();
    $('#stage2').hide();
    $('#stage3').hide();
};

function refresh(){
    window.location.href="";
}
var app = new Vue({
    el:'#app',
    data:{
        location :[],
        detail   :[],
        list_form:[],
        template_question_id:'',
        qr_code  :'',
        data:{
            pintu:'',
            lampu:'',
            lantai:''
        },
        id_detail:''        
    },

    computed:{
    },

    methods:{
        moment:function(){
            return moment();
        },
        start_patroli:function(area_id){
            $('#stage1').hide();
            $('#stage2').show();
            loading.show(); 
            var id                  = localStorage.user_id;   
            axios.post('patroli/get_detail_patroli', {id: id, area_id:area_id}, optionAxios).then(function(resp){
                app.detail = resp.data.sub;
                loading.hide();
            }).catch(function (error) {
                loading.hide();
                console.log(error);
            });
            

        },
        scan:function(id_detail, template_question_id){
            app.template_question_id = template_question_id;
            cordova.plugins.barcodeScanner.scan(function (result) {
                if(!result.cancelled)
                {
                    loading.hide();
                    app.id_detail = id_detail;
                    var qr = result.text;
                    axios.post('patroli/check_valid_qr', {qr: qr}, optionAxios).then(function(resp){
                        if(resp.data.ada =='ada'){
                            swal("success!", 'Check Point Anda' + resp.data.checkpoint_name, "success").then((value) => {
                            });
                            app.qr_code = resp.data.qrcode;
                            $('#stage1').hide();
                            $('#stage2').hide();
                            app.get_data_form();
                            $('#stage3').show();
                        }else{
                            swal("error!", 'Maaf area tidak di Temukan', "error").then((value) => {
                                app.id_detail = '';
                                app.list_form=[];
                            });

                        }
                       
                        
                    }).catch(function (error) {
                        app.id_detail = '';
                        app.list_form=[];
                        loading.hide();
                        console.log(error);
                    });
                }
                else
                {
                  alert("You have cancelled scan");
                  app.id_detail = '';
                  app.list_form=[];
                }
              },
              function (error) {
                  alert("Scanning failed: " + error);
                  app.id_detail = '';
                  app.list_form=[];
              }
            );
        },
        get_data_form:function(){
            axios.post('patroli/get_form', {template_question_id:app.template_question_id}, optionAxios).then(function(resp){
                if(resp.data.status =='success'){
                    app.list_form = resp.data.data;
                }else{
                    swal("error!", 'Periksa jaringan anda', "error").then((value) => {
                    });
                    loading.hide();
                }
               
                
            }).catch(function (error) {
                if(error == 'token_not_provided')
                {
                    swal("error!", 'Sessi login anda telah habis', "error").then((value) => {
                    });
                    loading.hide();
                }
               
                console.log(error);
            });

        },
        step3:function(){
            loading.show();
            axios.post('patroli/save_patroli', {id_detail:app.id_detail, pintu:app.data.pintu, lampu:app.data.lampu, lantai:app.data.lantai}, optionAxios).then(function(resp){
                if(resp.data.status =='success'){
                    swal("success!", 'Submited', "success").then((value) => {
                    });
                    loading.hide();
                   
                    window.location.href='';
                    $('#stage1').hide();
                    $('#stage2').show();
                    $('#stage3').hide();
                }else{
                    swal("error!", 'Periksa jaringan anda', "error").then((value) => {
                    });
                    loading.hide();

                }
               
                
            }).catch(function (error) {
                if(error == 'token_not_provided')
                {
                    swal("error!", 'Sessi login anda telah habis', "error").then((value) => {
                    });
                    loading.hide();
                }
               
                console.log(error);
            });

        }      

    },

    created:function(){
        loading.show();        
        var id                  = localStorage.user_id; 
        //   
        axios.post('patroli/get_area_patroli', {id: id}, optionAxios).then(function(resp){
            app.location = resp.data.detail;
            loading.hide();
        }).catch(function (error) {
            loading.hide();
            
            swal("error!", 'Sessi login anda telah habis', "error").then((value) => {
                localStorage.clear();
                window.location ="../../login.html";
            });
           
           
            //loading.hide();
            console.log(error);
        });
        // coba get form
        axios.post('patroli/get_form', {template_question_id:1}, optionAxios).then(function(resp){
            if(resp.data.status =='success'){
                app.list_form = resp.data.data;
            }else{
                swal("error!", 'Periksa jaringan anda', "error").then((value) => {
                });
                loading.hide();
            }
           
            
        }).catch(function (error) {
            if(error == 'token_not_provided')
            {
                swal("error!", 'Sessi login anda telah habis', "error").then((value) => {
                });
                loading.hide();
            }
           
            console.log(error);
        });

      
    },
    filters:{
        moment: function(date){
            return this.moment(date).format('dddd, MMMM YYYY HH:mm');
        },
        striphtml:function(value){
            var div = document.createElement("div");
            div.innerHTML = value;
            var text = div.textContent || div.innerText || "";
            return text;
        }
    },
    mounted:function() {
      
        
    },


})