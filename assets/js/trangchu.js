
$(".form-search").submit(function (e) {
    e.preventDefault();
    var searchValue = {
        province: $(".province").val(),
        job: $(".job").val()
    }
    console.log(searchValue);
    switch (searchValue.province) {
        case "Tất cả":
            window.location = "./congviec.html"
            break;

        default:
            break;
    }
});


