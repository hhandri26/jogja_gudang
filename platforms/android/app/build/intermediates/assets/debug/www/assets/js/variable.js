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
	headers: {'Content-Type':'application/json'}
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


