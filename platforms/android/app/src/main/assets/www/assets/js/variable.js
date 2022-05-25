const base_link = location.origin + '/';
const base_url = base_link;//"https://aogjkt.mawarsharon.com/admin/";
//const baseApi = 'http:localhost:3030/';
const baseApi = 'https://api.dianmandirigrup.co.id/';
const optionAxios  = {
	baseURL: baseApi,
	headers: {'Authorization': "Bearer "+ localStorage.token, 'Content-Type':'application/json'}
}

const optionAxiosPublic  = {
	baseURL: baseApi,
	headers: {'Content-Type':'application/json','Access-Control-Allow-Origin' : '*'}
}

const optionAxiosUpload  = {
	baseURL: baseApi,
	headers: {'Authorization':"Bearer "+ localStorage.token, 'Accept':'application/json', 'Content-Type':'multipart/form-data'}
}
var navApp;

var debug = false;
function checkTokenValid(){
	if(localStorage.token==undefined || localStorage.token==''){
		return false;
	}else{
		return true;
	}
}
$(document).ready(function() {
	var loading =$('#loading').hide();

});

var loading = $('#loading');
if(typeof VueSelect !== 'undefined'){
	Vue.component('v-select', VueSelect.VueSelect);
}

var lastTimeBackPress=0;
var timePeriodToExit=2000;

function onBackKeyDown(e){
    e.preventDefault();
    e.stopPropagation();
    if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
        navigator.app.exitApp();
    }else{
        window.plugins.toast.showWithOptions(
            {
              message: "Press again to exit.",
              duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
              position: "bottom",
              addPixelsY: -40  // added a negative value to move it up a bit (default 0)
            }
          );
        
        lastTimeBackPress=new Date().getTime();
    }
};

document.addEventListener("backbutton", onBackKeyDown, false);

document.addEventListener("deviceready", function(e){
        console.log(navigator.connection.type);
        document.addEventListener("offline", function(e){
                            alert("NO_NETWORK");

        }, false);  
}, false); 
