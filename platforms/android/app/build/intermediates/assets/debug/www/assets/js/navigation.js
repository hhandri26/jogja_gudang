var navigation = new Vue({
    el: '#navigation',
    data: {
        role: localStorage.role,
    },
    created: function () {

    },

    methods: {

    },
    mounted() {


    },
    template: `<ul class="nav" v-if="role == 1" >
    <li class="nav-item nav-profile">
        <a href="dashboard.html" class="nav-link" >
            <div class="nav-profile-image" style="margin: auto;">
                <img src="img/logo.png" alt="profile" />
                <span class="login-status online"></span>
            </div>


        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="dashboard.html">
            <i class="mdi mdi-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic1" aria-expanded="false"
            aria-controls="ui-basic">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Transaksi</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic1">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_new.html">Transaksi Baru</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_prosess.html">Transkasi Prosess</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_packing.html">Transkasi Di Packing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_send.html">Transkasi Dikirm</a>
                </li>

            </ul>
        </div>
    </li>
    <li class="nav-item" >
        <a class="nav-link" data-toggle="collapse" href="#ui-basic2" aria-expanded="false"
            aria-controls="ui-basic2">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Barang</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic2">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="product_category.html">Kategori Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_master.html">Master barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_gallery.html">Galeri Barang</a>
                </li>
               

            </ul>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic3" aria-expanded="false"
            aria-controls="ui-basic3">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Gudang</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic3">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="product_stock.html">Input Stok Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_stock_adj.html">Penyesuaian Stok barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_report_stock.html">Report Stok Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kwitansi.html">Input Kwitansi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kwitansi_mix.html">Kelolah Mix Barang</a>
                </li>
               

            </ul>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="setting_printer.html">
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Setting Printer </span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="setting_printer.html">
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Kelola User </span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"  onclick='logout()'>
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Log out </span>
        </a>
    </li>


</ul>
<ul class="nav" v-else-if="role == 2" >
    <li class="nav-item nav-profile">
        <a href="dashboard.html" class="nav-link" >
            <div class="nav-profile-image" style="margin: auto;">
                <img src="img/logo.png" alt="profile" />
                <span class="login-status online"></span>
            </div>


        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="dashboard.html">
            <i class="mdi mdi-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic1" aria-expanded="false"
            aria-controls="ui-basic">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Transaksi</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic1">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_new.html">Transaksi Baru</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_prosess.html">Transkasi Prosess</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_packing.html">Transkasi Di Packing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="transaksi_send.html">Transkasi Dikirm</a>
                </li>

            </ul>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="setting_printer.html">
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Setting Printer </span>
        </a>
    </li>
   
    <li class="nav-item">
        <a class="nav-link" href="#"  onclick='logout()'>
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Log out </span>
        </a>
    </li>


</ul>

<ul class="nav" v-else >
    <li class="nav-item nav-profile">
        <a href="dashboard.html" class="nav-link" >
            <div class="nav-profile-image" style="margin: auto;">
                <img src="img/logo.png" alt="profile" />
                <span class="login-status online"></span>
            </div>


        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="dashboard.html">
            <i class="mdi mdi-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
        </a>
    </li>
   
    <li class="nav-item" >
        <a class="nav-link" data-toggle="collapse" href="#ui-basic2" aria-expanded="false"
            aria-controls="ui-basic2">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Barang</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic2">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="product_category.html">Kategori Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_master.html">Master barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_gallery.html">Galeri Barang</a>
                </li>
               

            </ul>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic3" aria-expanded="false"
            aria-controls="ui-basic3">
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
            <span class="menu-title">Gudang</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic3">
            <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                    <a class="nav-link" href="product_stock.html">Input Stok Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_stock_adj.html">Penyesuaian Stok barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product_report_stock.html">Report Stok Barang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kwitansi.html">Input Kwitansi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kwitansi_mix.html">Kelolah Mix Barang</a>
                </li>
               

            </ul>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="setting_printer.html">
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Setting Printer </span>
        </a>
    </li>
    
    <li class="nav-item">
        <a class="nav-link" href="#"  onclick='logout()'>
            <i class="mdi mdi-contacts menu-icon"></i>
            <span class="menu-title">Log out </span>
        </a>
    </li>


</ul>`

});