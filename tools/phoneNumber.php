<?php

if ($_POST) {
    require_once "phone_number.php";
    die();
}

define('title', '电话号码查询');
require_once 'header.php';
?>
    <div id="jt_content">

        <div class="container mt-5" id="jt_container">
            <div class="form-row justify-content-center">
                <div class="form-group col-12 col-sm-6">
                    <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
                    <input class="form-control fa text-center" type="search" id="phone_number_input" minlength="2"
                           maxlength="15" placeholder="单位名称、简称或者号码&nbsp;&nbsp;&#xf015;&nbsp;&nbsp;&#xf095;&nbsp;&nbsp;&#xf3cd;">
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <a href="javascript:" class="mx-2 btn btn-success" id="phone_name_search">
                    <i class="fa fa-home">&nbsp;&nbsp;</i>按名称搜索</a>
                <a href="javascript:" class="mx-2 btn btn-danger" id="phone_number_search">
                    <i class="fa fa-phone">&nbsp;&nbsp;</i>
                    <i class="fa fa-mobile-alt">&nbsp;&nbsp;</i>按号码搜索</a>
            </div>
        </div>


        <div class="container mt-4" id="phone_search_result">
            <span class="font-weight-bold text-success">查询结果</span>
            <div class="mt-1 p-5 border border-info rounded"></div>
        </div>


        <div class="container mt-3">

            <div class="p-3 border border-info rounded">
                <div class="my-2 form-row">
                    <div class="form-group col-12 col-sm-12 col-md-3">
                        <label class="sr-only" for="phone_name">名称&nbsp;<i class="fa fa-home"></i></label>
                        <input class="form-control fa text-success text-center" type="text" id="phone_name"
                               minlength="4" maxlength="9" placeholder="单位名称&nbsp;&#xf015;">
                    </div>

                    <div class="form-group col-12 col-sm-6 col-md-4">
                        <label class="sr-only" for="tel_number">座机号码&nbsp;<i class="fa fa-phone"></i></label>
                        <input class="form-control fa text-success text-center" type="tel" id="tel_number"
                               minlength="12" maxlength="12" placeholder="座机电话号码&nbsp;&#xf095;">
                    </div>
                    <div class="form-group col-12 col-sm-6 col-md-5">
                        <label class="sr-only" for="mobile_number">手机号码&nbsp;<i class="fa fa-mobile-alt"></i></label>
                        <input class="form-control fa text-success text-center" type="tel" id="mobile_number"
                               minlength="11" maxlength="15" placeholder="手机电话号码&nbsp;&#xf3cd;">
                    </div>

                </div>

                <div class="my-2 d-flex justify-content-center">
                    <button class="mx-2 btn btn-primary rounded-circle d-none" type="button" id="phone_number_add"
                            title="添加一行"><i class="fa fa-plus-circle"></i></button>
                    <button class="btn btn-lg btn-primary" id="phone_number_submit">提交新号码</button>
                </div>

            </div>
        </div>


        <div class="fixed-bottom container text-center">
            <a class="text-danger font-weight-bold" href="javascript:">我要填写新号码</a>
        </div>

    </div>


<?php
require_once 'footer.php';
?>