if (!checkTokenValid()) {
  window.location ="login.html";
  } else {
    if(localStorage.token !== undefined || localStorage.token!==''){
     
      window.location = "dashboard.html";
    }else{
      window.location ="login.html";
    }
  }