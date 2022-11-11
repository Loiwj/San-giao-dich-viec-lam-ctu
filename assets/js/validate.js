//* Đối tượng Validator
function Validator(options) {

    var selectorRules = {}
    //*Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage
        //todo lấy qua các rule của selector
        var rules = selectorRules[rule.selector]
        //todo Lập qua từng rule & kiểm tra
        for (let i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](formElements.querySelector(rule.selector + ':checked'))
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)//* input người dùng nhập vào
            }
            if (errorMessage) {
                break
            }
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.closest(options.formGroupSelector).classList.add('invalid')
        }
        else {
            errorElement.innerText = '';
            inputElement.closest(options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage //todo Ép kiểu sang bolen
    }
    var formElements = document.querySelector(options.form);
    if (formElements) {
        //todo Khi submit form
        formElements.onsubmit = function (e) {
            e.preventDefault()
            var isFormValid = true
            //todo Lập qua từng rule và validate
            options.rules.forEach((rule) => {
                var inputElement = formElements.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })
            //todo Nếu không có lỗi
            if (isFormValid) {
                //todo Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var EnableInputs = formElements.querySelectorAll('[name]:not([disable])')
                    //todo Array.form(EnableInputs) chuyển từ node list sang array
                    var formValue = Array.from(EnableInputs).reduce(function (values, input) {
                        switch (input.type) {
                            case 'checked':
                            case 'radio':
                                if (input.checked) {
                                    values[input.name] = input.value
                                }

                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                };
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break;
                                case 'file':
                                    values[input.name] = input.files
                                    break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    options.onSubmit(formValue)
                } else {//todo Trường hợp submit với hành vi mặc định
                    formElements.submit()
                }
            }
        }
        //todo Lập qua sự kiện và xử lý ( Lắng nghe sự kiện blur, input,...)
        options.rules.forEach((rule) => {
            //? Khắc phục tình trạng ghi đè
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)//todo nếu như nó đã là mảng rồi thì push thêm phần tử nửa
            } else {
                selectorRules[rule.selector] = [rule.test]//*todo Lưu lại các rules cho mỗi ô input dưới dạng mảng
            }
            var inputElements = formElements.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElement) {
                //todo Xử lí trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                //todo Xử lí trường người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.closest(options.formGroupSelector).classList.remove('invalid')
                }
            })
        })
    }
}

//* Định nghĩa các rules
//todo Nguyên tắc của các rules
//! Nếu có lỗi => return messege Lỗi
//? Nếu hợp lệ => không trả về (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Vui lòng nhập lại trường này"
            //todo trim() dùng để loại bỏ dấu cách 2 đầu của chuỗi, nếu toàn đấu cách thì xoá hết
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {

            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập lại không chính xác'
        }
    }
}

