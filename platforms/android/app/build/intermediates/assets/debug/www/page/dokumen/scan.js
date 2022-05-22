function scan(){
    cordova.plugins.barcodeScanner.scan(  function (result) {
        if(!result.cancelled)
        {
            window.location.href="list.html"
        }
        else
        {
          alert("You have cancelled scan");
        }
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
    );
}