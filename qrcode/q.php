<?php
if ($_POST) {
  unset($_POST);
  die('参数非法');
} elseif ($_GET) {
  unset($_GET);
} else {
  die('非法访问');
}

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">-->
  <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  <title>灵活码结果</title>
</head>
<body class="min-vh-100"
      style="background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 60%,#ffebb2),linear-gradient(70deg,#dbedff 32%,#d2ffde);">
<div class="py-4 container-fluid" id="test" style="min-height:120vh;">
  <div class="mb-1 font-weight-bolder text-center text-success" style="font-size: large;">
    <span class="" id="title"></span>
  </div>
  <div class="mb-4 p-2 shadow rounded-lg border bg-light small text-muted"
       style="line-height:1.4rem;letter-spacing:0.08rem;text-indent: 2rem;">
    <span id="description"></span>
  </div>
  <div class="text-center">
    <img src="data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
         class="img-thumbnail shadow-lg" id="qrcode" style="max-height: 15rem;">
  </div>
</div>

<div class="pb-2 container-fluid text-center">
  <div class="mb-2 clearfix" id="jt_feedback">
    <a class="float-left btn btn-sm btn-outline-dark make" href="javascript:" target="_blank"
       title="我也要制作灵活码">我也要制作灵活码</a>
    <a class="float-right btn btn-sm btn-outline-dark report" href="javascript:" title="举报">举报</a>
  </div>
  <div class="small text-black-50">灵活码工具由杰格网提供技术支持</div>
</div>

<div class="d-none">
  <!--    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>-->
  <!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>-->
  <script src="/static/js/jquery.min.js"></script>
  <script src="/static/js/bootstrap.bundle.min.js"></script>

  <script>
    let query = 'LHM-001';
    let url = 'query.php';

    $.ajax({
      method: 'post',
      url: url,
      dataType: 'json',
      timeout: 4000,
      data: {query: query},
      success: function (data) {
        console.log(data);
        if (0 === data.length) {
          let data = {
            'title': '没有找到你扫描的灵活码',
            'description': '请确认您的灵活码是否到期，可以使用管理密码进行维护，扫描下面二维码进行管理。',
            'img_path': '/static/img/lhm-manage.png',
          };
          set_qrcode_info(data);
          set_admin_img(data);
        } else {
          set_qrcode_info(data[0]);
          set_qrcode_img(data[0]);
        }
      },
      error: function (error) {
        console.log(error);
      },
    });

    function set_qrcode_info(data) {
      let title = document.querySelector('#title');
      let description = document.querySelector('#description');
      let img_title = data['title'];
      let img_description = data['description'];

      title.innerText = img_title;
      description.innerText = img_description;
    }

    function set_qrcode_img(data) {
      let qrcode = document.querySelector('#qrcode');
      let protocol = window.location.protocol;
      let host = window.location.host;
      let img_path = data['img_path'];

      qrcode.src = protocol + '//' + host + '/upload' + img_path;
      qrcode.alt = data['title'];
    }

    function set_admin_img(data) {
      let qrcode = document.querySelector('#qrcode');
      // let protocol = window.location.protocol;
      // let host = window.location.host;
      qrcode.src = data['img_path'];
      qrcode.alt = data['title'];
    }

  </script>
  <script>
    let jt_feedback = document.querySelector('#jt_feedback');
    jt_feedback.addEventListener('click', function (e) {
      let e_target = e.target;
      if (e_target.classList.contains('make')) {
        window.open(location.origin + '/qrcode/')
      } else if (e_target.classList.contains('report')) {
        alert('举报功能制作中，可先自行联系管理员');
      }
    })
  </script>
</div>
</body>
</html>
