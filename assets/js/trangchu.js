

    new WOW().init();


    $(".was-validated").submit(function (e) {
        e.preventDefault()
       var isDisable = true
        sessionStorage.setItem("isDisable", isDisable)
        location.reload()
    });

    if (sessionStorage.getItem("isDisable")=='true') {
        console.log(sessionStorage.getItem("isDisable"));
        $(".my-cv").removeClass("disabled");
        $(".my-login-out").addClass("display-none");
console.log('xoa');
    } else {
        console.log('them lại');
        $(".my-cv").addClass("disabled");
        $(".my-login-out").removeClass("display-none");        
        
    }


