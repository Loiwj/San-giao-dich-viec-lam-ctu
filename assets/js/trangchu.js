
new WOW().init();
$(".was-validated").submit(function (e) {
    e.preventDefault()
    var isDisable = true
    sessionStorage.setItem("isDisable", isDisable)
    location.reload()
});

if (sessionStorage.getItem("isDisable") == 'true') {
    $(".my-cv").removeClass("disabled ").addClass("yellow-cl");
    $(".my-login-out").addClass("display-none ");

} else {
    $(".my-cv").addClass("disabled ").removeClass("yellow-cl");
    $(".my-login-out").removeClass("display-none ");
}


$(".form-search").submit(function (e) {
    e.preventDefault();
    var searchValue = {
        province: $(".province").val(),
        job: $(".job").val()
    }
    console.log(searchValue);
});