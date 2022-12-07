
//
// Tìm phần tử cha của Element
function getParent(element, selector) {
  if (element.matches(".mtb")) {
    return element;
  }
  while (element) {
    if (!element.parentElement) {
      return null;
    }
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}
// Xử lí sự kiện khi click vào thẻ input thêm checked
function handlecheck(parentElement) {
  var inputElement = parentElement.querySelector("input");

  if (inputElement.checked == true) {
    inputElement.checked = false;
  } else {
    inputElement.checked = true;
  }
}
function handleInput (ele){
  if(ele.classList.contains('imChecked')){
    ele.classList.remove('imChecked');
    ele.setAttribute('checked',false);
  }
  else{
    ele.setAttribute('checked',true);
    ele.classList.add('imChecked');
  }
}
// Hàm jquery xủ7 lí sự kiện click trực tiếp vào thẻ input radio
// bật tắt checked radio
function handleInput (value){
$(document).on("click", value, function () {
  thisRadio = $(this);
  if (thisRadio.hasClass("imChecked")) {
    thisRadio.removeClass("imChecked");
    thisRadio.prop("checked", false);
  } else {
    thisRadio.prop("checked", true);
    thisRadio.addClass("imChecked");
  }
});
}
handleInput("input[name='postdate']");



// lắng nghe sự kiện click
document.addEventListener("click", function (e) {
  if(e.target.tagName.toLowerCase() === 'input')
{
}
  else{
    let parentInput = getParent(e.target, ".mtb");
   if(parentInput ) {
    handlecheck(parentInput);
  }
}
});
var buttonJob = document.getElementById("btn_filter_job");
buttonJob.addEventListener("click", function () {
  let inputNodelist = document.querySelectorAll("input");
  let inputChecked = Array.from(inputNodelist).filter(function (input) {
    if (input.checked == true) {
      return input;
    }
  });
  if(inputChecked){
  switch(Number(inputChecked[0].value)){
    case 0:{
      window.location.href = "./congviec_page1.html"
      break;
    }
    case 1:{
      window.location.href = "./dichvutaichinh.html";
      break;
    }
    case 2:{
      window.location.href = "./truyenthong.html";
      break;
    }
    case 3:{
      window.location.href = "./hangtieudungvabanle.html"
      break;
    }
    case 4:{
      window.location.href = "./khachsanvadulich.html"
      break;
    }
    case 5:{
      window.location.href = "./kythuat_congnghe.html"
      break;
    }
    case 6:{
      window.location.href = "./xaydung.html"
      break;
    }
    case 7:{
      window.location.href = "./vantai.html"
      break;
    }
    case 8:{
      window.location.href = "./dichvu.html"
      break;
    }
    case 9:{
      window.location.href = "./giaodichkhachhang.html"
      break;
    }
    case 10:{
      window.location.href = "./bophanhotro.html"
      break;
    }
    case 11:{
      window.location.href = "./kythuat.html"
      break;
    }
    case 12:{
      window.location.href = "./yte.html"
      break;
    }
    case 13:{
      window.location.href = "./sanxuat.html"
      break;
    }
    case 14:{
      window.location.href = "./hotrosanxuat.html"
      break;
    }
    case 15:{
      window.location.href = "./nhansu.html"
      break;
    }
    case 16:{
      window.location.href = "./kinhdoanh.html"
      break;
    }
    case 17:{
      window.location.href = "./phiendich.html"
      break;
    }
   
  }
}
else{
  window.location.href = "./congviec_page1.html"
}
});


