/** 搜索 **/
create_search_result();
let search_btn = document.querySelector('#search_btn');
let search_regional_dropdown_menu = document.querySelector('#search_regional_dropdown_menu');
let search_regional = document.querySelector('#search_regional');
let search_result_number_list = document.querySelector('#search_result_number_list');

if (search_btn) search_btn.addEventListener('click', click_search_btn);

if (search_regional_dropdown_menu) search_regional_dropdown_menu.addEventListener('click', toggle_search_regional_dropdown_btn_text);

function toggle_search_regional_dropdown_btn_text(e) {
    let target = e.target;
    if (target.tagName === 'LABEL') {
        search_regional.innerText = target.innerText;
    }
}

function click_search_btn(e) {
    let target = e.target;
    let search_options = {
        clicked_btn: target,
    };
    if (target.tagName === 'A') {
        add_spinner_icon(target);
        if (target.classList.contains('name')) {
            search_options['search_type'] = 'name';
        } else if (target.classList.contains('number')) {
            search_options['search_type'] = 'number';
        }
        check_search(search_options);
    }
}

function check_search(options) {
    let search_input_value = check_search_input_value();
    let search_regional_value = check_regional_value('search_regional', '请选择您要查询的区域<br><i class="mt-2 text-muted fa-2x fa-fw fas fa-map-signs"></i>');
    if (search_input_value && search_regional_value) {
        options.search_input_value = search_input_value;
        options.search_regional_value = search_regional_value;
        search_query(options);
    } else {
        remove_spinner_icon(options.clicked_btn);
    }
}

function check_search_input_value() {
    let phone_number_input = document.querySelector('#phone_number_input');
    let minlength = phone_number_input.getAttribute('minlength');
    let maxlength = phone_number_input.getAttribute('maxlength');
    let search_value = phone_number_input.value;
    let search_value_length = search_value.length;

    if (search_value_length >= minlength && search_value_length <= maxlength) {
        return search_value;
    } else {
        if (search_value_length === 0) {
            bootstrapModalJs('', create_small_center_text('请输入您要查询的单位名称或号码<br><i class="mt-2 text-muted fa-2x fa-fw fas fa-home"></i><i class="mt-2 text-muted fa-2x fa-fw fas fa-phone"></i><i class="mt-2 text-muted fa-2x fa-fw fas fa-mobile-alt"></i>', 'danger'), '', 'sm', true);
        } else if (search_value_length < minlength) {
            bootstrapModalJs('', create_small_center_text('输入的内容过短<br>最少输入3个汉字或者数字', 'danger'), '', 'sm', true);
        } else if (search_value_length > maxlength) {
            bootstrapModalJs('', create_small_center_text('输入的内容过长<br>最多输入10个汉字或者数字', 'danger'), '', 'sm', true);
        }
        return false;
    }
}

function check_regional_value(input_name, tip_text) {
    let regional_list = document.querySelectorAll('input[name=' + input_name + ']');
    let regional_value;
    let regional_array = [];

    for (let x = regional_list.length, i = 0; i < x; i++) {
        regional_array.push(regional_list[i].value);
        if (true === regional_list[i].checked) {
            regional_value = regional_list[i].value;
        }
    }
    if (!regional_array.includes(regional_value)) {
        bootstrapModalJs('', create_small_center_text(tip_text, 'danger'), '', 'sm', true);
        return false;
    } else {
        return regional_value;
    }
}

function search_query(search_options) {
    let search_type = search_options.search_type;
    let search_regional = search_options.search_regional_value;
    let search_value = search_options.search_input_value;
    let search_data = {
        search_type: search_type,
        search_regional: search_regional,
        search_value: search_value,
    };
    ajax_search(search_data, search_options.clicked_btn);
}

function ajax_search(search_data, clicked_btn) {
    let search_url = '/phone_number/phone_number_search.php';

    $.ajax({
        type: 'post',
        url: search_url,
        data: search_data,
        dataType: 'json',
        success: function (data) {
            remove_spinner_icon(clicked_btn);
            get_search_result(data);
        },
        error: function (data) {
            remove_spinner_icon(clicked_btn);
            ajax_error(data);
            ajax_error_fun_debug(data, 'search_number');
        },
    });
}

function get_search_result(data) {
    let data_length = data.length;
    if (data_length) {
        processing_search_result(data);
    } else {
        bootstrapModalJs('', create_small_center_text('暂时没有找到您要查找的号码', 'danger'), '', 'sm', true);
    }
}

function processing_search_result(data) {
    search_result_number_list.innerHTML = '';
    for (let index in data) {
        if (data.hasOwnProperty(index)) create_search_result_number_list(data[index]);
    }
    $('.number i').tooltip();
    dial_search_result_number();
    copy_search_result_number();
}

function create_search_result() {
    let search_result = document.createElement("div");
    let span = document.createElement("span");
    let search_result_number_list = document.createElement("div");

    search_result.className = 'mt-5';
    search_result.id = 'search_result';

    span.className = 'small font-weight-bold text-success';
    span.innerHTML = '查询结果';

    search_result_number_list.className = 'mt-1 pt-3';
    search_result_number_list.id = 'search_result_number_list';

    search_result.appendChild(span);
    search_result.appendChild(search_result_number_list);
    jt_container.insertBefore(search_result, jt_container.firstElementChild.nextElementSibling);
}

function create_search_result_number_list(data) {
    let div = document.createElement('div');
    let div1 = document.createElement('div');

    let name = data['phone_name'];
    let tel_number = data['tel_number'];
    let mobile_number = data['mobile_number'];

    // div.className = 'pulse animated hvr-icon-pop mb-3 py-1 py-md-2 row  border rounded align-items-center number_list';
    div.className = 'container pulse animated mb-3 py-1 py-md-2 border rounded number_list';
    div1.className = 'hvr-icon-pop row align-items-center';

    div1.appendChild(create_search_result_number_list_name(name));
    div1.appendChild(create_search_result_number_list_number(tel_number, 'tel'));
    div1.appendChild(create_search_result_number_list_number(mobile_number, 'mobile'));

    div.appendChild(div1);
    search_result_number_list.appendChild(div);
}

function create_search_result_number_list_name(name) {
    let span = document.createElement('span');
    let span_name = document.createElement('span');
    let ul = document.createElement('ul');

    let li = document.createElement('li');
    let i = document.createElement('i');

    span.className = 'col-12 col-lg-4';
    ul.className = 'mb-0 list-unstyled';

    li.className = 'number_name mb-2';

    span_name.innerHTML = name;

    i.className = 'mr-2 fas fa-home text-info hvr-icon';
    i.style.cursor = 'pointer';

    span.appendChild(ul);
    ul.appendChild(li);
    li.append(span_name);
    li.insertBefore(i, li.firstChild);

    return span;
}

function create_search_result_number_list_number(number, number_type) {
    let span = document.createElement('span');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let span_number = document.createElement('span');
    let i_number_icon = document.createElement('i');
    let i_clipboard_copy_icon = document.createElement('i');

    span.className = 'col-12 col-sm-5 col-md-4 col-lg-3';
    ul.className = 'mb-0 list-unstyled';

    span_number.innerHTML = number;

    number_type === 'tel' ? li.className = 'hvr-icon-grow-rotate number mb-2' : li.className = 'hvr-icon-grow-rotate number mb-2 text-none text-sm-right';

    i_number_icon.className = 'ml-2 fa-fw fas fa-phone-volume text-success hvr-icon dial_number';
    i_number_icon.title = '拨打号码';
    i_number_icon.style.cursor = 'pointer';

    i_clipboard_copy_icon.className = 'ml-3 fa-fw far fa-copy text-success hvr-icon clipboard_copy';
    i_clipboard_copy_icon.title = '复制号码';
    i_clipboard_copy_icon.style.cursor = 'pointer';

    span.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span_number);
    li.appendChild(i_clipboard_copy_icon);
    li.appendChild(i_number_icon);

    return span;
}

function dial_search_result_number() {
    search_result_number_list.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('dial_number') || target.className.indexOf('dial_number') !== -1) {
            let number = target.previousElementSibling.previousElementSibling.innerHTML;
            window.location.href = 'tel://' + number;
        }
    });
}

function copy_search_result_number() {
    search_result_number_list.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('clipboard_copy') || target.className.indexOf('clipboard_copy') !== -1) {
            let clipboard = new ClipboardJS('.clipboard_copy', {
                text: function (trigger) {
                    return trigger.previousElementSibling.innerHTML;
                },
            });
            clipboard.on('success', function (e) {
                bootstrapModalJs('', clipboard_success_text(e), '', 'sm', true);
                clipboard.destroy();
            });

            clipboard.on('error', function (e) {
                bootstrapModalJs('', clipboard_error_text(e), '', 'sm', true);
                clipboard.destroy();
            });
        }

    });

    function clipboard_success_text(e) {
        return '<div class="text-center text-success">已经成功复制&nbsp;' + '<span>' +
            `${e.text}` +
            '</span></div>';
    }

    function clipboard_error_text(e) {
        return '<div class="text-center text-danger">复制失败,请尝试手动复制' + '<span>' +
            `${e}` +
            '</span></div>';
    }

}


/** 增加号码 **/
let add_new_number = document.querySelector('#add_new_number');
let add_number_submit;
let add_number_form;

if (add_new_number) add_new_number.addEventListener('click', show_add_number_form);

function show_add_number_form() {
    add_new_number.removeEventListener('click', show_add_number_form);
    create_add_number_form();
    add_number_submit = document.querySelector('#add_number_submit');
    add_number_form = document.querySelector('#add_number_form');

    create_add_form_init();
    create_add_regional('button');
    create_add_number_form_close();
}

function dispose_add_number_form() {
    jt_container.removeChild(add_number_form);
    add_new_number.addEventListener('click', show_add_number_form);
}

function verify_add_number_data() {
    let number = check_number_data();
    let regional = check_regional_data();
    return !!(number && regional);
}

function check_number_data() {
    let phone_name_all = document.querySelectorAll('.phone_name');
    let tel_number_all = document.querySelectorAll('.tel_number');
    let mobile_number_all = document.querySelectorAll('.mobile_number');
    let all_verify_events = [].concat(phone_name_all, tel_number_all, mobile_number_all);
    let check_result = [];

    for (let x = all_verify_events.length, i = 0; i < x; i++) {
        for (let y = all_verify_events[i].length, j = 0; j < y; j++) {
            if (all_verify_events[i][j].classList.contains('is-valid')) {
                check_result.push(true);
            } else if (all_verify_events[i][j].classList.contains('is-invalid')) {
                check_result.push(false);
            } else if (!all_verify_events[i][j].classList.contains('is-invalid') && !all_verify_events[i][j].classList.contains('is-valid')) {
                all_verify_events[i][j].classList.add('is-invalid');
                check_result.push(false);
            }
        }
    }
    return !check_result.includes(false);
}

function check_regional_data() {
    return check_regional_value('add_regional', '请选择您所添加号码的区域');
}

function add_number_data() {
    let phone_name_all = document.querySelectorAll('.phone_name');
    let tel_number_all = document.querySelectorAll('.tel_number');
    let mobile_number_all = document.querySelectorAll('.mobile_number');
    let regional_all = document.querySelectorAll('input[name=add_regional]');

    let result = {};

    for (let x = regional_all.length, i = 0; i < x; i++) {
        if (true === regional_all[i].checked) {
            result['info'] = {regional: regional_all[i].value};
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

function create_add_number_form() {
    let add_number_form = document.createElement("div");
    let number_stored = document.createElement("div");
    let a = document.createElement("a");

    add_number_form.className = 'mt-5 px-4 py-3 text-center border border-info rounded';
    add_number_form.id = 'add_number_form';

    a.href = 'javascript:';
    a.className = 'my-2 btn btn-primary';
    a.id = 'add_number_submit';
    a.innerHTML = '提交新号码';
    a.addEventListener('click', add_number);

    number_stored.className = 'text-right';
    number_stored.id = 'number_stored';

    add_number_form.appendChild(a);
    add_number_form.appendChild(number_stored);
    jt_container.appendChild(add_number_form);
}

function create_add_number_form_close() {
    let close_btn = create_close_btn(dispose_add_number_form);
    add_number_form.insertBefore(close_btn, add_number_form.firstChild);
}

function create_add_form_init() {
    create_add_form_div();
    create_add_btn_add();
    create_add_phone_name();
    create_add_tel_number();
    create_add_mobile_number();
    input_shadow();
}

function create_add_form() {
    create_add_form_div();
    create_add_btn_del();
    create_add_phone_name();
    create_add_tel_number();
    create_add_mobile_number();
    input_shadow();
}

function create_add_form_div() {
    let div = document.createElement('div');
    div.className = 'mb-5 mb-sm-4 mb-md-3 form-row add_phone_number_form';
    add_number_form.insertBefore(div, add_number_submit);
}

function create_add_btn_add() {
    let a = document.createElement('a');
    let i = document.createElement('i');

    a.className = 'position-relative text-success hvr-icon-grow';
    a.href = 'javascript:';
    a.id = 'phone_number_add';

    i.className = 'position-absolute fa-fw fas fa-plus-circle hvr-icon phone_number_add';
    i.title = '添加新的一行';
    i.style.top = '8px';
    i.style.right = '-3px';
    $(i).tooltip();

    a.appendChild(i);
    add_number_submit.previousElementSibling.appendChild(a);

    a.addEventListener('click', create_add_form);
}

function create_add_btn_del() {
    let a = document.createElement('a');
    let i = document.createElement('i');

    a.className = 'position-relative text-danger hvr-icon-grow';
    a.href = 'javascript:';

    i.className = 'position-absolute fa-fw fas fa-minus-circle hvr-icon phone_number_del';
    i.title = '删除当前行';
    i.style.top = '8px';
    i.style.right = '-3px';
    $(i).tooltip();

    a.appendChild(i);
    add_number_submit.previousElementSibling.appendChild(a);

    a.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    });
}

function create_add_phone_name() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-12 col-md-3';

    label.className = 'sr-only';
    label.setAttribute('for', 'phone_name_' + id_timestamp);
    label.innerHTML = '单位名称&nbsp;';

    i.className = 'fa-fw fas fa-home';

    input.className = 'form-control form-control-sm fas text-success text-center phone_name';
    input.id = 'phone_name_' + id_timestamp;
    input.type = 'text';
    input.setAttribute('minlength', '4');
    input.setAttribute('maxlength', '15');
    input.placeholder = '单位名称 ';
    input.addEventListener('input', function () {
        check_regexp_input_value(RegExp_rules.phone_name, '请输入单位的中文名称 例如：\n掘进一队', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_number_submit.previousElementSibling.appendChild(div);
}

function create_add_tel_number() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-6 col-md-4';

    label.className = 'sr-only';
    label.setAttribute('for', 'tel_number_' + id_timestamp);
    label.innerHTML = '座机电话号码&nbsp;';

    i.className = 'fas fa-phone';

    input.className = 'form-control form-control-sm fas text-success text-center tel_number';
    input.id = 'tel_number_' + id_timestamp;
    input.type = 'tel';
    input.setAttribute('minlength', '12');
    input.setAttribute('maxlength', '12');
    input.placeholder = '座机电话号码 ';
    input.addEventListener('input', function () {
        check_regexp_input_value(RegExp_rules.tel_number, '请输入当地正确格式的座机号码 例如：\n0319-2061234\n0319-2089123\n······ 等更多正确格式', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_number_submit.previousElementSibling.appendChild(div);
}

function create_add_mobile_number() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-6 col-md-5';

    label.className = 'sr-only';
    label.setAttribute('for', 'mobile_number_' + id_timestamp);
    label.innerHTML = '手机电话号码&nbsp;';

    i.className = 'fas fa-mobile-alt';

    input.className = 'form-control form-control-sm fas text-success text-center mobile_number';
    input.id = 'mobile_number_' + id_timestamp;
    input.type = 'tel';
    input.setAttribute('minlength', '11');
    input.setAttribute('maxlength', '15');
    input.placeholder = '手机电话号码 ';
    input.addEventListener('input', function () {
        check_regexp_input_value(RegExp_rules.mobile_number, '请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_number_submit.previousElementSibling.appendChild(div);
}

function create_add_regional(type) {
    let div = document.createElement('div');
    let regionOptions = {
        'dp': '东庞',
        'gq': '葛泉',
        'xdw': '显德汪',
        'xm': '邢煤',
        'xd': '邢东',
        'zc': '章村',
    };

    if (type === 'radio') {
        div.className = 'row no-gutters mb-3 mb-sm-4 mb-md-4 row-cols-2 row-cols-sm-3 row-cols-md-6';
    } else if (type === 'button') {
        div.className = 'mb-3 mb-sm-4 mb-md-4 btn-group btn-group-sm btn-group-toggle';
        div.setAttribute('data-toggle', 'buttons');
    }
    div.id = 'add_regional';

    if (type === 'radio') {
        for (let index in regionOptions) {
            if (regionOptions.hasOwnProperty(index)) {
                div.appendChild(create_add_regional_input_radio(index, regionOptions[index]));
            }
        }
    } else if (type === 'button') {
        for (let index in regionOptions) {
            if (regionOptions.hasOwnProperty(index)) {
                div.appendChild(create_add_regional_button_group_radio(index, regionOptions[index]));
            }
        }
    }

    add_number_form.insertBefore(div, add_number_form.firstChild);
}

function create_add_regional_input_radio(input_value, label_text, check_status = false) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    div.className = 'mb-2 mb-sm-0 custom-control custom-radio';

    input.className = 'custom-control-input';
    input.type = 'radio';
    input.id = 'add_regional_' + input_value;
    input.name = 'add_regional';
    input.value = input_value;
    if (check_status === true) input.checked = true;

    label.className = 'custom-control-label';
    label.setAttribute('for', input.id);
    label.innerHTML = label_text;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

function create_add_regional_button_group_radio(input_value, label_text, check_status = false) {
    let label = document.createElement('label');
    let input = document.createElement('input');

    input.type = 'radio';
    input.id = 'add_regional_' + input_value;
    input.name = 'add_regional';
    input.value = input_value;
    if (check_status === true) input.checked = true;

    label.className = 'btn btn-outline-secondary';
    label.setAttribute('for', input.id);
    label.innerHTML = label_text;

    label.appendChild(input);

    return label;
}

function add_number() {
    add_spinner_icon(add_number_submit);
    let verify = verify_add_number_data();
    if (verify === true) {
        let data = add_number_data();

        const v3_site_key = '6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv';
        const url = 'https://www.recaptcha.net/recaptcha/api.js?render=';

        const action = 'add_new_number';

        $.getScript(url + v3_site_key, function () {
            grecaptcha.ready(function () {
                grecaptcha.execute(v3_site_key, {action: action})
                    .then(function (token) {
                        console.log(token);
                        ajax_phone_number(data, token, action);
                    });
            });
        });
    } else {
        bootstrapModalJs('', create_small_center_text('您输入的号码有点不符合格式<br>请修改后再提交', 'danger'), '', 'sm', true);
        remove_spinner_icon(add_number_submit);
    }
}

function ajax_phone_number(data, g_recaptcha_token, g_recaptcha_action) {
    let add_phone_number_url = '/phone_number/index.php';

    $.ajax({
        method: 'post',
        url: add_phone_number_url,
        dataType: 'json',
        timeout: 5000,
        data: {
            data: data,
            g_recaptcha: {
                token: g_recaptcha_token,
                action: g_recaptcha_action,
            },
        },
        success: function (data) {
            remove_spinner_icon(add_number_submit);
            get_ajax_result(data);
            get_number_stored();
        },
        error: function (data) {
            remove_spinner_icon(add_number_submit);
            ajax_error(data);
            ajax_error_fun_debug(data, 'phone_number_error');
        },
    });

}

function get_ajax_result(result) {
    console.log(result);

    ajax_success(result, 'add_number');
    if (result['error'].length !== 0) {
        ajax_success_fun_debug(result, 'phone_number_success_error');
    }
}

function ajax_success(success_result, message_name) {
    if (success_result['message']['g_recaptcha']['verify'] === true) {
        if (success_result['message'].hasOwnProperty(message_name)) {
            if (success_result['message'][message_name].hasOwnProperty('failure')) {
                let message = '<span>' +
                    '提交失败' +
                    '<br>' +
                    '错误代码：' +
                    success_result['error']['errno'] +
                    '</span>';
                bootstrapModalJs('', create_small_center_text(message, 'danger'), '', 'sm', true);
            }

            if (success_result['message'][message_name].hasOwnProperty('repeat')) {

            }

            if (success_result['message'][message_name].hasOwnProperty('success')) {
                let message = '<span>' +
                    '您提交的' + success_result['message'][message_name]['success'] + '个号码已经成功被收录' +
                    '</span>';
                bootstrapModalJs('', create_small_center_text(message, 'danger'), '', 'sm', true);
            }
        }
    } else {
        let message = '<span>' +
            '服务器判断您的评分太低,<br>没有收录您刚刚提交的号码。' +
            '</span>';
        bootstrapModalJs('', create_small_center_text(message, 'danger'), '', '', true);
    }

}

function ajax_success_fun_debug(success_result, error_name) {
    if (fundebug) {
        let success_error = success_result['error'].hasOwnProperty('error') ? JSON.stringify(success_result['error']['error']) : '';
        let success_errno = success_result['error'].hasOwnProperty('errno') ? JSON.stringify(success_result['error']['errno']) : '';
        let success_data = success_result['error'].hasOwnProperty('data') ? JSON.stringify(success_result['error']['data']) : '';
        fundebug.notify(error_name, success_error);
        fundebug.notify(error_name, success_errno);
        fundebug.notify(error_name, success_data);
    }
}

function ajax_error(error_result) {
    let status = error_result.status;
    let statusText = error_result.statusText;
    let readyState = error_result.readyState;
    let responseText = error_result.responseText;
    let status_array = [200, 500];
    console.log(error_result);

    if (readyState === 4) {
        if (status === 500 && responseText === '' && statusText === 'Internal Server Error') {
            bootstrapModalJs('', create_small_center_text('服务器出错', 'danger'), '', 'sm');
        } else if (statusText === 'timeout') {
            bootstrapModalJs('', create_small_center_text('服务器连接超时1', 'danger'), '', 'sm');
        } else if (status === 200 && RegExp_rules.mysqli_1045.test(responseText)) {
            bootstrapModalJs('', create_small_center_text('数据库连接出错', 'danger'), '', 'sm');
        } else if (status === 200 && responseText !== '') {
            bootstrapModalJs('', create_small_center_text(responseText, 'danger'), '', '', false, true);
        } else {
            bootstrapModalJs('', create_small_center_text('失败', 'danger'), '', 'sm');
        }
    }

    if (readyState === 0 || status === 0) {
        if (statusText === 'error') {
            bootstrapModalJs('', create_small_center_text('服务器刚刚关闭', 'danger'), '', 'sm', true);
        } else if (statusText === 'timeout') {
            bootstrapModalJs('', create_small_center_text('服务器连接超时2', 'danger'), '', 'sm', true);
        }
    }

    if (false === status_array.includes(status)) {
        if (fundebug) fundebug.notify('状态码异常超限，请查看', document.location.href, {
            metaData: {
                location: document.location,
                readyState: readyState,
            },
        });
    }
}

function ajax_error_fun_debug(error_result, error_name) {
    if (fundebug) {
        fundebug.notify(error_name, JSON.stringify(error_result));
    }
}

function check_regexp_input_value(RegExp_rules_name, error_text, element) {
    let RegExp_result = RegExp_rules_name.test(element.value);
    if (!RegExp_result) {
        validation_invalid_div(element, error_text);
        input_error(element);
    } else {
        input_success(element);
        remove_validation_div(element);
    }
}

function input_shadow() {
    add_number_form.removeEventListener('mouseover', input_form_control_add_shadow);
    add_number_form.removeEventListener('mouseout', input_form_control_remove_shadow);
    add_number_form.removeEventListener('focus', input_form_control_add_shadow);
    add_number_form.removeEventListener('blur', input_form_control_remove_shadow);

    add_number_form.addEventListener('mouseover', input_form_control_add_shadow);
    add_number_form.addEventListener('mouseout', input_form_control_remove_shadow);
    add_number_form.addEventListener('focus', input_form_control_add_shadow);
    add_number_form.addEventListener('blur', input_form_control_remove_shadow);
}

function input_form_control_add_shadow(e) {
    let target = e.target;
    if (target.classList.contains('form-control')) {
        add_shadow(target);
    }
}

function input_form_control_remove_shadow(e) {
    let target = e.target;
    if (target.classList.contains('form-control')) {
        remove_shadow(target);
    }
}


/** 获取存储数量 **/
let number_stored = document.querySelector('#number_stored');
// if (number_stored) get_number_stored();
if (number_stored) number_stored.addEventListener('click', get_number_stored);

function get_number_stored() {
    $.ajax({
        type: 'post',
        url: '/phone_number/number_stored.php',
        dataType: 'json',
        timeout: 3000,
        data: {
            number_stored: '1',
        },
        complete: add_spinner_icon(number_stored, 'border', 'primary', 'left'),
        success: function (data) {
            remove_spinner_icon(number_stored);
            number_stored.innerHTML = '当前号码存储数量' + data + '条';
        },
        error: function (data) {
            number_stored.innerHTML = data.responseText;
        },
    });
}


/** ReCAPTCHA **/
// if (phone_number_submit) phone_number_submit.addEventListener("click", function () {
//     set_recaptcha_action("test11");
// });
