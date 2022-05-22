Vue.filter('thousand', function(value) {
	if (value) {
		x = value.toString();
		var pattern = /(-?\d+)(\d{3})/;
		while (pattern.test(x))
			x = x.replace(pattern, "$1,$2");
		return x;
	}else{
		return '0';
	}
});