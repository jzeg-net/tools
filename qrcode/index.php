<?php

define('title', '灵活码');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
  <div class="mb-4" id="jt_lhm_toolbar">
    <div class="mb-3">
      <h1 class="mb-0 d-inline-block h6 font-weight-bolder">
        <a class="text-reset text-decoration-none" href="/qrcode/" title="灵活码">灵活码</a>
      </h1>
      <i class="fa-fw fa fa-qrcode"></i>
    </div>
    <div class="mb-3 row no-gutters">
      <div class="col-12">
        <div class="mb-2 justify-content-center d-flex btn-toolbar" id="lhm_tabs_link">
          <div class="btn-group btn-group-sm">
            <a class="btn btn-outline-warning" href="#lhm_scrollspy-definition">定义</a>
            <a class="btn btn-outline-warning" href="#lhm_scrollspy-description">简介</a>
            <a class="btn btn-outline-warning" href="#lhm_scrollspy-supportList">支持列表</a>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                安全保障
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="d-block border-0 rounded-0 btn btn-outline-warning" href="#lhm_scrollspy-safety">安全</a>
                <a class="d-block border-0 rounded-0 btn btn-outline-warning" href="#lhm_scrollspy-guarantee">保障</a>
              </div>
            </div>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                定价
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="d-block border-0 rounded-0 btn btn-outline-warning" href="#lhm_scrollspy-price">价格</a>
                <a class="d-block border-0 rounded-0 btn btn-outline-warning"
                   href="#lhm_scrollspy-price-methods">付费方式</a>
                <a class="d-block border-0 rounded-0 btn btn-outline-warning"
                   href="#lhm_scrollspy-price-discount">折扣</a>
                <a class="d-block border-0 rounded-0 btn btn-outline-warning" href="#lhm_scrollspy-price-renew">续费</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="px-2 py-3 rounded bg-dark bg_square tab-content small text-white-50" id="lhm_tabs_pane"
             style="height: 10rem;overflow: auto;overflow: overlay;">
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-definition">
            <h6 class="font-weight-bolder">定义</h6>
            <div>
              <div>同一个二维码，在不更换的情况下，自主维护更新扫描结果的内容，即称为灵活码。</div>
              <div>扫描结果的内容包含但不限于：二维码图片、文字标题和文字简介。</div>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-description">
            <h6 class="font-weight-bolder">简介</h6>
            <div>
              <span class="mb-2 d-block">灵活码可以解决：创建微信群A后，通过本工具将微信群A生成的二维码图片上传，额外可以添加灵活码标题和灵活码文字介绍，提交后获得新的灵活码图片X，由灵活码图片X替代原本的微信群A的二维码，即可进行宣传，微信群A人数满了以后，您将微信群B生成的二维码图片通过灵活码维护页面，修改灵活码图片X的信息，灵活码X的内容会更新为修改后的微信群B的二维码图片，之前宣传内容随之更新，至此，您无需再进行重复宣传微信群B的二维码图片，节约多种成本。</span>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-supportList">
            <h6 class="font-weight-bolder">支持列表</h6>
            <div>
              <span class="d-block">灵活码目前支持二维码内容：</span>
              <ul>
                <li>支付宝群二维码</li>
                <li>钉钉群二维码</li>
                <li>微信群二维码</li>
                <li>QQ群二维码</li>
              </ul>
            </div>
          </div>
          <div class="mb-3 tab-pane fade active show" id="lhm_scrollspy-safety">
            <h6 class="font-weight-bolder">安全信息</h6>
            <div>
              <span>灵活码工具为防止网络钓鱼类信息，二维码只允许阿里系、字节跳动系、腾讯系等知名公司旗下的社群二维码图片，其他公司旗下软件生成的二维码，暂不支持。</span>
              <span class="d-block">如有知名可信赖类型的社交软件可提交反馈，如可信赖会增加支持。</span>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-guarantee">
            <h6 class="mb-1 font-weight-bolder">服务保障</h6>
            <div>
              <span>灵活码工具为网络工具，需要公共网络服务器提供计算资源，目前本着方便用户的远景，提供的产品价格未核算各种成本，粗略收费。仍是提供全天候（7&times;24小时）的不间断访问服务。</span>
              <span>我们的服务器使用阿里云ECS服务器，成本不算太高，但仍可能达不到收支平衡，我们保证所有付费使用的朋友，灵活码持久有效可用，但不能保证永久可以续费。</span>
              <span>如遇见不可抗、不可控的恶意网络攻击，服务器异常时，灵活码技术团队会尽全力保证灵活码的有效可用性，为此技术团队可能会短暂停止有效可用服务，转换更高性能的服务器，从而提供有效可用的访问服务。</span>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-price">
            <h6 class="font-weight-bolder">价格</h6>
            <div>
              <div>初次制作灵活码免费，当修改灵活码结果时需要付费，需要支付网络资源维护费10元。</div>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-price-methods">
            <h6 class="font-weight-bolder">付费方式</h6>
            <div>
              <div class="text-success">实行先管理，后付费方式。</div>
              <div class="text-muted">
                在需要重新更新灵活码内容时，可以直接登录，进行调整灵活码的结果内容（二维码图片、文字标题和文字简介），新的灵活码结果内容会进入审核阶段（审核阶段新二维码立刻生效可用），
              </div>
              <div class="text-muted">15分钟内完成付费，审核通过，15分钟后，未付费的灵活码，停止使用，无有效扫描结果。</div>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-price-discount">
            <h6 class="font-weight-bolder">折扣</h6>
            <div>
              <div>后续维护时根据初次价格依次向下降低1折费用（费用递减10%），最低价格为初次费用的5折（50%）。</div>
              <div>例如：第一次付费修改灵活码结果内容时的价格为10元，第二次修改时的价格为9元（10元-10元&times;10%=9元）</div>
            </div>
          </div>
          <div class="mb-3 tab-pane fade" id="lhm_scrollspy-price-renew">
            <h6 class="font-weight-bolder">续费</h6>
            <div><span>暂时不保证永久可以续费</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 px-2 py-3 rounded bg-danger bg_square_x small text-white-50" id="lhm-free"
         style="height: 8rem;overflow: auto;overflow: overlay;">
      <span class="d-block h5 text-center">免费活动</span>
      <div>灵活码工具正在试运营，免费开放使用，所有人都可以免费制作，有问题请积极反馈。</div>
      <div>试运营期间创建的灵活码，有效期自生成之日起2个月内（31&times;2=62天）可自由维护调整。</div>
      <div>试运营期间创建的灵活码，在免费活动结束后将会保留。</div>
    </div>
    <div class="mb-3 p-3 border rounded" id="lhm_make">
      <div class="mb-1 font-weight-bolder text-warning">制作灵活码</div>
      <form action="img.php" method="post" enctype="multipart/form-data">
        <div class="form-group">
          <div class="custom-file">
            <input class="custom-file-input" type="file" name="qrcode_img" id="qrcode_img" accept="image/jpeg,image/png"
                   required>
            <label class="custom-file-label text-truncate" for="qrcode_img" data-browse="浏览">二维码图片</label>
          </div>
          <div class="form-text small text-muted">
            <span>提示：上传要转到的二维码图片文件</span>
            <span class="d-block">查看图片要求</span>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="qrcode_title">灵活码标题</label>
            </div>
            <input class="form-control" type="text" name="qrcode_title" id="qrcode_title" placeholder="灵活码标题"
                   maxlength="10" value="默认标题" required>
          </div>
          <div class="form-text small text-muted">
            <span>提示：文字上限15个</span>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="qrcode_description">灵活码介绍</label>
            </div>
            <textarea class="form-control" type="text" name="qrcode_description" id="qrcode_description" rows="6"
                      cols="" wrap="soft" maxlength="150" placeholder="灵活码介绍" required>默认介绍</textarea>
          </div>
          <div class="form-text small text-muted">
            <span>提示：文字上限150个</span>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="qrcode_password">管理密码</label>
            </div>
            <input class="form-control" type="password" name="qrcode_password" id="qrcode_password" value="000000" required placeholder="复杂并牢记密码">
          </div>
          <div class="form-text small text-muted">
            <span>提示：请务必牢记这个密码，密码是您唯一调整灵活码信息的方式。</span>
          </div>
        </div>
        <div class="form-group text-center">
          <input class="btn btn-sm btn-outline-success" type="submit" name="" id="submit" value="开始制作">
        </div>
      </form>
    </div>
    <div class="d-flex p-2 border justify-content-center">
      <a class="mx-2" target="_blank" href="/qrcode/manage.php" title="管理灵活码">管理</a>
      <a class="mx-2" target="_blank" href="/qrcode/editor.php" title="编辑灵活码">样式编辑</a>
      <a class="mx-2" target="_blank" href="/qrcode/q.php?q=LHM-1582813209" title="灵活码示例">示例</a>
    </div>
  </div>
</div>
<div>
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>
