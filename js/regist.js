$(document).ready(function() {
  
  function KiemTraDN() {
    var s = document.getElementById("txtDN").value.trim();
    var re1 = /[a-zA-Z0-9]{6,}/;
    if (!re1.test(s)) {
      spDN.innerHTML = "sai ten dang nhap chữ và số và lớn hơn 6 ký tự";
      return false;
    } else {
      spDN.innerHTML = "*";
      return true;
    }
  }
  $("#txtDN").blur(KiemTraDN);

  function kiemTraMK() {
    var re2 =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var s = document.getElementById("txtMK").value.trim();
    if (!re2.test(s)) {
      spMK.innerHTML = "Gồm chữ hoa, chữ thường, ký tự đặc biệt và 8 ký tự";
      return false;
    } else {
      spMK.innerHTML = "*";
      return true;
    }
  }
  $("#txtMK").blur(kiemTraMK);
  
  function kiemTraNLMK() {
    var s = document.getElementById("txtMK").value.trim();
    var s2 = document.getElementById("txtNLMK").value.trim();
    if (s !=s2) {
      spNLMK.innerHTML = "mật khẩu không khớp";
      return false;
    } else {
      spNLMK.innerHTML = "*";
      return true;
    }
  }

  $("#txtNLMK").blur(kiemTraNLMK);

  function KiemTraHT() {
    var re = /^[A-Z]{1}[a-z]*(\s{1}[A-Z]{1}[a-z]*)+/;
    var s = document.getElementById("txtHT").value.trim();
    if (!re.test(s)) {
      spHT.innerHTML = "Chữ cái đầu viết hoa";
      return false;
    } else {
      spHT.innerHTML = "*";
      return true;
    }
  }
  $("#txtHT").blur(KiemTraHT);

  function KiemNgaySinh() {
    var ns = new Date(document.getElementById("txtNS").value);
    var today = new Date();

    if (eval(today.getFullYear() - ns.getFullYear()) < 18) {
      spNS.innerText = "tuổi phải lớn hơn 18 tuổi";
      return false;
    } else {
      spNS.innerText = "*";
      return true;
    }
  }
  $("#txtNS").blur(KiemNgaySinh);

  function kiemTraDT() {
    re = /0(9|3|7)[0-9]{8}/;
    s = document.getElementById("txtDT").value.trim();
    if (!re.test(s)) {
      spDT.innerHTML = "đầu số 09 hoặc 03 hoặc 07 và đủ 10 số";
      return false;
    } else {
      spDT.innerHTML = "*";
      return true;
    }
  }
  $("#txtDT").blur(kiemTraDT);

  function kiemTraDC() {
    s = document.getElementById("txtDC").value.trim();
    if (s.length == 0) {
        spDC.innerHTML = "không được để rỗng";
      return false;
    } else {
        spDC.innerHTML = "*";
      return true;
    }
  }
  $("#txtDC").blur(kiemTraDC);

  function kiemTraEmail() {
    s = document.getElementById("txtMail").value.trim();
    let re = /^[A-Za-z]{1}[A-Za-z0-9]+(@gmail.com)$/
    if (s.length == 0) {
        spMail.innerHTML = "không được để rỗng";
      return false;
    } 
    if (!re.test(s)) {
      spMail.innerHTML = "chữ đầu viết hoa Axxx@gmail.com";
      return false;
  }else {
        spMail.innerHTML = "*";
      return true;
    }
  }
  $("#txtMail").blur(kiemTraEmail);

  function kiemTraDT() {
    re = /0(9|3|7)[0-9]{8}/;
    s = document.getElementById("txtDT").value.trim();
    if (!re.test(s)) {
      spDT.innerHTML = "đầu số 09 hoặc 03 hoặc 07 và đủ 10 số";
      return false;
    } else {
      spDT.innerHTML = "*";
      return true;
    }
  }
  $("#txtDT").blur(kiemTraDT);

  $("#btnDK").click(function(){
    var i = 1;
    if (
      KiemTraDN() &&
      kiemTraMK() &&
      kiemTraNLMK() &&
      KiemTraHT() &&
      KiemNgaySinh() &&
      kiemTraDT()&&
      kiemTraDC() &&
      kiemTraEmail()
    ) {
      var row = "<tr>";
          row+=  "<td>"+(i++)+"</td>";
          row+=  "<td>"+$("#txtDN").val().trim()+"</td>";
          row+=  "<td>"+$("#txtHT").val().trim()+"</td>";
          row+=  "<td>"+$("#txtNS").val().trim()+"</td>";
          row+=  "<td>"+$("#gt:checked").val().trim()+"</td>";
          row+=  "<td>"+$("#txtDC").val().trim()+"</td>";
          row+=  "<td>"+$("#txtDT").val().trim()+"</td>";
          row+=  "<td>"+$("#txtMail").val().trim()+"</td>";
          row+=   "</tr>";
      $("#tbody").append(row);
    }else{
        alert("Nhập đầy đủ thông tin");
    }
  });
});