//验证手机号
function checkMobile(str) {
  var re = /^1\d{10}$/;
  return re.test(str);
}
//验证验证码
function checkCode(str) {
  var re = /^\d{4}$/;
  return re.test(str);
}
//验证密码
function checkPassword(str, min, max) {
  return str.length >= min && str.length <= max;
}
