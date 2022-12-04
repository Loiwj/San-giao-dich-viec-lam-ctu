var LoadPostDateSort = {
  status: "success",
  total: 6,
  lstPostTime: [
    {
      ngaydangId: 1, 
      tenngaydang: "Mới nhất",
      sogio: 1,
    },
    {
      ngaydangId: 2,
      tenngaydang: "1 Ngày trước",
      sogio: 24,
    },
    {
      ngaydangId: 3,
      tenngaydang: "7 Ngày trước",
      sogio: 168,
    },
    {
      ngaydangId: 4,
      tenngaydang: "14 Ngày trước",
      sogio: 336,
    },
    {
      ngaydangId: 5,
      tenngaydang: "30 Ngày trước",
      sogio: 720,
    },
    {
      ngaydangId: 6,
      tenngaydang: "Tất cả",
      sogio: 0,
    },
  ],
};
var LoadJobTimeSort = {
  status: "success",
  total: 6,
  lstJobTimeType: [
    {
      loaicvId: 1,
      tenloai: "Toàn thời gian",
    },
    {
      loaicvId: 2,
      tenloai: "Bán thời gian",
    },
    {
      loaicvId: 3,
      tenloai: "Thực tập",
    },
    {
      loaicvId: 4,
      tenloai: "Tình nguyện",
    },
    {
      loaicvId: 5,
      tenloai: "Tự do",
    },
    {
      loaicvId: 6,
      tenloai: "Khác",
    },
  ],
};
var LoadJobGroupSort = {
  status: "success",
  total: 17,
  lstJobGroup: [
    {
      nhomnganhId: 1,
      tennhomnganh: "Dịch vụ Tài chính",
      iconnhom: null,
    },
    {
      nhomnganhId: 2,
      tennhomnganh: "Truyền thông",
      iconnhom: null,
    },
    {
      nhomnganhId: 3,
      tennhomnganh: "Hàng tiêu dùng & bán lẻ",
      iconnhom: null,
    },
    {
      nhomnganhId: 4,
      tennhomnganh: "Khách sạn & du lịch",
      iconnhom: null,
    },
    {
      nhomnganhId: 5,
      tennhomnganh: "Kỹ thuật - công nghệ",
      iconnhom: null,
    },
    {
      nhomnganhId: 6,
      tennhomnganh: "Xây dựng",
      iconnhom: null,
    },
    {
      nhomnganhId: 7,
      tennhomnganh: "Vận tải",
      iconnhom: null,
    },
    {
      nhomnganhId: 8,
      tennhomnganh: "Dịch vụ",
      iconnhom: null,
    },
    {
      nhomnganhId: 9,
      tennhomnganh: "Giao dịch khách hàng",
      iconnhom: null,
    },
    {
      nhomnganhId: 10,
      tennhomnganh: "Bộ phận hỗ trợ",
      iconnhom: null,
    },
    {
      nhomnganhId: 11,
      tennhomnganh: "Kỹ thuật",
      iconnhom: null,
    },
    {
      nhomnganhId: 12,
      tennhomnganh: "Y tế",
      iconnhom: null,
    },
    {
      nhomnganhId: 13,
      tennhomnganh: "Sản xuất",
      iconnhom: null,
    },
    {
      nhomnganhId: 14,
      tennhomnganh: "Hỗ trợ sản xuất",
      iconnhom: null,
    },
    {
      nhomnganhId: 16,
      tennhomnganh: "Nhân sự",
      iconnhom: null,
    },
    {
      nhomnganhId: 17,
      tennhomnganh: "Kinh doanh",
      iconnhom: null,
    },
    {
      nhomnganhId: 18,
      tennhomnganh: "Phiên dịch ",
      iconnhom: null,
    },
  ],
};
var LoadJobExperienceSort = {
  status: "success",
  total: 7,
  lstExperience: [
    {
      kinhNghiemId: 1,
      tenKn: "Sinh viên mới ra trường",
    },
    {
      kinhNghiemId: 2,
      tenKn: "Dưới 1 năm",
    },
    {
      kinhNghiemId: 3,
      tenKn: "Từ 1 tới < 2 năm",
    },
    {
      kinhNghiemId: 4,
      tenKn: "Từ 2 tới < 3 năm",
    },
    {
      kinhNghiemId: 5,
      tenKn: "Từ 3 tới < 5 năm",
    },
    {
      kinhNghiemId: 6,
      tenKn: "Trên 5 năm",
    },
    {
      kinhNghiemId: 7,
      tenKn: "Sinh viên",
    },
  ],
};
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
function handlecheck(parentElement, target) {
  var inputElement = parentElement.querySelector("input");

  if (inputElement.checked == true) {
    inputElement.checked = false;
  } else {
    inputElement.checked = true;
  }
}
// Hàm jquery xủ7 lí sự kiện click trực tiếp vào thẻ input radio
// bật tắt checked radio
$(document).on("click", "input[name='postdate']", function () {
  thisRadio = $(this);
  if (thisRadio.hasClass("imChecked")) {
    thisRadio.removeClass("imChecked");
    thisRadio.prop("checked", false);
  } else {
    thisRadio.prop("checked", true);
    thisRadio.addClass("imChecked");
  }
});
// lắng nghe sự kiện click
document.addEventListener("click", function (e) {
  var parentInput = getParent(e.target, ".mtb");
  if (parentInput) {
    handlecheck(parentInput);
  }
});
var buttonJob = document.getElementById("btn_filter_job");
buttonJob.addEventListener('click',function(){
  let inputNodelist = document.querySelectorAll("input");
  let inputChecked = Array.from(inputNodelist).filter(function(input){
    if(input.checked==true){
      return input;
    }
  })
  for(let i=0;i<inputChecked.length;i++){
    console.log((inputChecked[i]).value);
  }
})
