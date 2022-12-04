
$(".form-search").submit(function (e) {
    e.preventDefault();
    var searchValue = {
        province: $(".province").val(),
        job: $(".job").val()
    }
    console.log(searchValue);
    switch (searchValue.province) {
        case "Tất cả":
            
            break;

        default:
            break;
    }
});


