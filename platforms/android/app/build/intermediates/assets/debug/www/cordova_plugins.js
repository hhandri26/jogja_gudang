cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.Toast",
    "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
    "pluginId": "cordova-plugin-x-toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "cordova-plugin-btprinter.BluetoothPrinter",
    "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
    "pluginId": "cordova-plugin-btprinter",
    "clobbers": [
      "BTPrinter"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-statusbar": "2.4.3",
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-x-toast": "2.7.2",
  "phonegap-plugin-barcodescanner": "8.1.0",
  "cordova-plugin-btprinter": "0.1.0-dev"
};
// BOTTOM OF METADATA
});