/** 增加号码 **/
let add_new_number = document.querySelector("#add_new_number");
let phone_number_submit = document.querySelector("#phone_number_submit");

let add_phone_number_form = document.querySelector("#add_phone_number_form");

let add_phone_number_url = "/phone_number/index.php";


if (add_new_number) add_new_number.addEventListener("click", function (e) {
    create_form_add_init();
    e.target.parentNode.removeChild(e.target);
    add_phone_number_form.classList.remove("d-none");
    add_phone_number_form.classList.toggle("show");
});
if (phone_number_submit) phone_number_submit.addEventListener("click", add_phone_number);

function phone_number_data() {
    let phone_name_all = document.querySelectorAll(".phone_name");
    let tel_number_all = document.querySelectorAll(".tel_number");
    let mobile_number_all = document.querySelectorAll(".mobile_number");
    let regional = document.querySelectorAll("input[name=regional]");

    let result = {};

    for (let x = regional.length, i = 0; i < x; i++) {
        if (true === regional[i].checked) {
            result["info"] = {regional: regional[i].value};
        }
    }

    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        result[i] = {
            phone_name: phone_name_all[i].value,
            tel_number: tel_number_all[i].value,
            mobile_number: mobile_number_all[i].value,
        };
    }
    return JSON.stringify(result);
}

function create_form_add_init() {
    create_form_div();
    create_btn_add();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
}

function create_form_add() {
    create_form_div();
    create_btn_del();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
}

function create_form_div() {
    let div = document.createElement("div");
    div.className = "mb-5 mb-sm-4 mb-md-3 form-row add_phone_number_form";
    add_phone_number_form.insertBefore(div, phone_number_submit.parentElement);
}

function create_phone_name() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-12 col-md-3";

    label.className = "sr-only";
    label.setAttribute("for", "phone_name_" + id_timestamp);
    label.innerHTML = "单位名称&nbsp;";

    i.className = "fa fa-home";

    input.className = "form-control fa text-success text-center phone_name";
    input.id = "phone_name_" + id_timestamp;
    input.type = "text";
    input.setAttribute("minlength", "4");
    input.setAttribute("maxlength", "15");
    input.placeholder = "单位名称 ";
    input.addEventListener("input", function () {
        custom_input_check(RegExp_rules.chinese_name, "请输入单位的中文名称 例如：\n掘进一队", this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_tel_number() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-6 col-md-4";

    label.className = "sr-only";
    label.setAttribute("for", "tel_number_" + id_timestamp);
    label.innerHTML = "座机电话号码&nbsp;";

    i.className = "fa fa-phone";

    input.className = "form-control fa text-success text-center tel_number";
    input.id = "tel_number_" + id_timestamp;
    input.type = "tel";
    input.setAttribute("minlength", "12");
    input.setAttribute("maxlength", "12");
    input.placeholder = "座机电话号码 ";
    input.addEventListener("input", function () {
        custom_input_check(RegExp_rules.tel_number, "请输入正确格式的座机号码 例如：\n0319-1234567", this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_mobile_number() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-6 col-md-5";

    label.className = "sr-only";
    label.setAttribute("for", "mobile_number_" + id_timestamp);
    label.innerHTML = "手机电话号码&nbsp;";

    i.className = "fa fa-mobile-alt";

    input.className = "form-control fa text-success text-center mobile_number";
    input.id = "mobile_number_" + id_timestamp;
    input.type = "tel";
    input.setAttribute("minlength", "11");
    input.setAttribute("maxlength", "15");
    input.placeholder = "手机电话号码 ";
    input.addEventListener("input", function () {
        custom_input_check(RegExp_rules.mobile_number, "请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678", this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_btn_add() {
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.className = "position-relative text-success";
    a.href = "javascript:";
    a.title = "添加新的一行";
    a.id = "phone_number_add";

    i.className = "position-absolute fa fa-plus-circle phone_number_add";
    i.style.top = "11px";
    i.style.right = "0px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", create_form_add);

}

function create_btn_del() {
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.className = "position-relative text-danger";
    a.href = "javascript:";
    a.title = "删除当前行";

    i.className = "position-absolute fa fa-minus-circle phone_number_del";
    i.style.top = "11px";
    i.style.right = "0px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    });
}

function add_phone_number() {
    let data = phone_number_data();
    console.log(data);

    $.ajax({
        method: "post",
        url: add_phone_number_url,
        dataType: "json",
        timeout: 5000,
        beforeSend: add_spinner_icon(phone_number_submit),
        data: {
            data: data,
        },
        success: function (data) {
            let result = data.result;
            remove_spinner_icon(phone_number_submit);
            get_number_stored();
            result ? bootstrapModalJs('', result, '', '', true) : "";
            console.log(data);
            if (data["data"]) {
                bootstrapModalJs('', JSON.stringify(data["data"]), '', '', true);
            }
        },
        error: function (data) {
            if (data.statusText === "timeout") {
                bootstrapModalJs('', '连接服务器超时，请尝试重新提交。', '', '', true);
            } else if (data.statusText === "OK" && data.responseText !== "") {
                bootstrapModalJs('', data.responseText, '', '', true);
                console.log(data);
            } else {
                bootstrapModalJs('', '失败', '', '', true);
                console.log(data);
            }
        }
    });
}


/** 获取存储数量 **/
let number_stored = document.querySelector("#number_stored");
// if (number_stored) get_number_stored();
if (number_stored) number_stored.addEventListener("click", get_number_stored);

function get_number_stored() {
    $.ajax({
        type: "post",
        url: "/phone_number/number_stored.php",
        dataType: "json",
        timeout: 3000,
        data: {
            number_stored: "1",
        },
        beforeSend: add_spinner_icon(number_stored, "border", "primary", "left"),
        success: function (data) {
            remove_spinner_icon(number_stored);
            number_stored.innerHTML = "当前号码存储数量" + data + "条";
        },
        error: function (data) {
            number_stored.innerHTML = data.responseText;
        }
    });
}


/** ReCAPTCHA **/
if (phone_number_submit) phone_number_submit.addEventListener("click", function () {
    set_recaptcha_action("test11");
});


/** 搜索 **/
let phone_number_input = document.querySelector("#phone_number_input");
let phone_name_search_btn = document.querySelector("#phone_name_search_btn");
let phone_number_search_btn = document.querySelector("#phone_number_search_btn");
let number_list = document.querySelector("#number_list");
let search_url = "/phone_number/phone_number_search.php";

if (phone_name_search_btn) {
    phone_name_search_btn.addEventListener('click', function () {
        check_search_value("name");
    });
}
if (phone_number_search_btn) {
    phone_number_search_btn.addEventListener('click', function () {
        check_search_value("number");
    });
}

function check_search_value(check_type) {
    let search_value = phone_number_input.value;
    if (search_value.length === 0) {
        bootstrapModalJs('', '请输入您要查询的单位名称或号码', '', '', true);
        return false;
    } else {
        search_query(check_type);
    }
}

function search_query(search_type = "name") {
    let search_value = phone_number_input.value;
    let search_data = {
        search_type: search_type,
        search_value: search_value,
    };
    ajax_search(search_data);
}

function ajax_search(search_data) {
    $.ajax({
        type: "post",
        url: search_url,
        data: search_data,
        dataType: "json",
        success: function (data) {
            get_search_result(data);
        },
        error: function (data) {
            let responseText = data.responseText;
            let status = data.status;
            if (status === 500 && responseText === "") {
                bootstrapModalJs('', "查询失败，网络连接出错", '', '', true);
            } else if (status <= 500 && responseText !== "") {
                bootstrapModalJs('', responseText, '', '', true);
            } else {
                bootstrapModalJs('', "未知查询错误", '', '', true);
            }
            console.log(data);
        }
    });
}

function get_search_result(data) {
    let data_length = data.length;
    if (data_length) {
        processing_search_result(data);
    } else {
        bootstrapModalJs('', "暂时没有找到您要查找的号码", '', '', true);
    }
}

function processing_search_result(data) {
    let i;
    number_list.innerHTML = "";
    for (i in data) {
        create_number_list(data[i]);
    }
    number_list_child();
    $(".number i").tooltip();
    clipboard_copy_number();
}

function create_number_list(data) {
    let div = document.createElement("div");

    let name = data["phone_name"];
    let tel_number = data["tel_number"];
    let mobile_number = data["mobile_number"];

    div.className = "mb-3 py-1 py-md-2 row  border rounded align-items-center number_list";

    div.appendChild(create_number_list_name(name));
    div.appendChild(create_number_list_number(tel_number, "tel"));
    div.appendChild(create_number_list_number(mobile_number, "mobile"));

    number_list.appendChild(div);
}

function create_number_list_name(name) {
    let span = document.createElement("span");
    let span_name = document.createElement("span");
    let ul = document.createElement("ul");

    let li = document.createElement("li");
    let i = document.createElement("i");

    span.className = "col-12 col-lg-4";
    ul.className = "mb-0 list-unstyled";

    li.className = "number_name mb-2";

    span_name.innerHTML = name;

    i.className = "mr-2 fa fa-home text-info";
    i.style.cursor = "pointer";

    span.appendChild(ul);
    ul.appendChild(li);
    li.append(span_name);
    li.insertBefore(i, li.firstChild);

    return span;
}

function create_number_list_number(number, number_type) {
    let span = document.createElement("span");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let span_number = document.createElement("span");
    let i_number_icon = document.createElement("i");
    let i_clipboard_copy_icon = document.createElement("i");

    span.className = "col-12 col-sm-5 col-md-4 col-lg-3";
    ul.className = "mb-0 list-unstyled";

    span_number.innerHTML = number;

    number_type === "tel" ? li.className = "number mb-2" : li.className = "number mb-2 text-none text-sm-right";

    number_type === "tel" ? i_number_icon.className = "ml-3 fa fa-phone-alt text-success" : i_number_icon.className = "ml-3 fa fa-mobile-alt text-success";
    i_number_icon.style.cursor = "pointer";
    i_number_icon.title = "拨打号码";
    i_number_icon.addEventListener("click", function () {
        window.location.href = "tel://" + number;
    });

    i_clipboard_copy_icon.className = "clipboard_copy ml-3 far fa-clipboard text-success";
    i_clipboard_copy_icon.title = "复制号码";
    i_clipboard_copy_icon.style.cursor = "pointer";

    span.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span_number);
    li.appendChild(i_clipboard_copy_icon);
    li.appendChild(i_number_icon);

    return span;
}

function number_list_child() {
    let number_list_child_odd = document.querySelectorAll("#number_list div:nth-child(odd)");
    let number_list_child_even = document.querySelectorAll("#number_list div:nth-child(even)");
    for (let x = number_list_child_odd.length, i = 0; i < x; i++) {
        number_list_child_odd[i].style.background = "whitesmoke";
    }
    for (let x = number_list_child_even.length, i = 0; i < x; i++) {
        number_list_child_even[i].style.background = "aliceblue";
    }
}

function clipboard_copy_number() {
    let clipboard_copy = document.body.querySelectorAll(".clipboard_copy");

    for (let x = clipboard_copy.length, i = 0; i < x; i++) {
        clipboard_copy[i].addEventListener("click", function () {
            let clipboard = new ClipboardJS(".clipboard_copy", {
                text: function (trigger) {
                    return trigger.previousElementSibling.innerHTML;
                }
            });
            clipboard.on('success', function (e) {
                bootstrapModalJs("", "已经成功复制&nbsp;" + e.text, "", "", true);
                clipboard.destroy();
            });

            clipboard.on('error', function (e) {
                bootstrapModalJs("", "复制失败,请尝试手动复制", "", "", true);
                clipboard.destroy();
            });
        });
    }

}
