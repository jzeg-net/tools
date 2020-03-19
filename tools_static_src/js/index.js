/** 分类列表导航 **/
let jt_category = document.querySelector('#jt_category');
let jt_category_btn = jt_category.querySelectorAll('.btn');

jt_category.addEventListener('click', function (e) {
  let target = e.target;
  if (target.classList.contains('btn')) {
    jt_category_btns(target);
    jt_category_(target);
  }
});

function jt_category_btns(e) {
  let id = e.id;
  for (let x = jt_category_btn.length, i = 0; i < x; i++) {
    if (jt_category_btn[i].id !== id) {
      jt_category_btn[i].classList.remove('active');
    } else {
      jt_category_btn[i].classList.add('active');
    }
  }
}

function jt_category_(e) {
  let id = e.id;
  let classList = e.classList;
  let all_collapse = document.querySelectorAll('#jt_list>[class*="collapse-"]');
  for (let index in all_collapse) {
    if (all_collapse.hasOwnProperty(index)) if (all_collapse[index].classList.contains('show')) all_collapse[index].classList.remove('show');
  }
  // $("#jt_list .tools-collapse").collapse("hide");
  if (id !== 'tools-collapse' && classList.contains('btn')) {
    $('#jt_list>.' + id).collapse('show');
  } else {
    $('#jt_list .tools-collapse').collapse('show');
  }
}
