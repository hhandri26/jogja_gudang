var loginApp = new Vue({
	el: '#loginApp',
	data: {
		email: '',
		password: ''
	},
	created: function () {
		loading.show();
	},
	methods: {
		doLogin: function (callback) {
			loading.show();
			if (this.email == '' || this.password == '') {
				swal("Error!", 'email atau password tidak boleh kosong', "error").then((value) => {
					loading.hide();
				});
				return false;
			} else {
				axios.post('auth/signin', {
					email: this.email,
					password: this.password
				}, optionAxiosPublic)
					.then(function (resp) {
						if (resp.status == 200) {
                            if(resp.data.status==200){
                                localStorage.token = resp.data.token;
                                window.location.href="dashboard.html";

                            }else{
                                swal("Error!", 'email atau password tidak sesuai', "error").then((value) => {

                                });
                            }
                            
						} else {
							swal("Error!", 'email atau password tidak sesuai', "error").then((value) => {

							});
						}
					})
					.catch(function (error) {
						loading.hide();
						if (callback !== undefined) {
							callback(300, error.response);
						} else {
							swal("Error!", 'email atau password tidak sesuai', "error").then((value) => {

							});
						}

					});
					return false;
			}
		}
	}
});