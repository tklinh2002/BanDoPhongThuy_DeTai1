$(document).ready(function(){
    $("*").hover(function(){
        var position = $("*").scrollTop();
        if(position >=170)
        {
            $("#scrollspy").css("position","fixed").delay(2000);
        }
        else{
            $("#scrollspy").css("position","relative");
        }
    });

    
    // kt ten
    function kiemTraHoTen(){
        let hoten = $("#txtHT").val();
        let regex= /^([A-Z]{1}[a-z]+){1}((\s{1}[A-Z]{1}[a-z]+)*)$/;
        if(hoten.length==0){
            $("#errorHT").html("Họ tên không được rỗng");
            return false;
        }
        if(!regex.test(hoten)){
            $("#errorHT").html("Chữ đầu viết hoa");
            return false;
        }
        $("#errorHT").html("*");
        return true;
    };
    $("#txtHT").blur(kiemTraHoTen)
    // kt ngày
    
    // kt email
    function kiemTraMail(){
        let mail = $("#txtEmail").val();
        let regex = /^[A-Z]{1}[A-Za-z0-9]*@.*$/
        if(mail.length==0){
            $("#errorEmail").html("Mail không được rỗng");
            return false;
        }
        if(!regex.test(mail)){
            $("#errorEmail").html("có dạng mẫu xxxxxx@iuh.edu.vn");
            return false;
        }
        $("#errorEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(kiemTraMail)
    // kt phone

    function kiemTraDT() {
        var regex = /0(9|3|7)[0-9]{8}/;
        var dt = $("#txtDT").val().trim();
        if(dt.length==0){
            $("#errorDT").html("điện thoại không được rỗng");
            return false;
        }
        if (!regex.test(dt)) {
            $("#errorDT").html("đầu số 09 hoặc 03 hoặc 07 và đủ 10 số");
          return false;
        } else {
            $("#errorDT").html("*");
          return true;
        }
      }
      $("#txtDT").blur(kiemTraDT)

      function kiemTraDC() {

        var dc = $("#txtDC").val().trim();
        if(dc.length==0){
            $("#errorDC").html("Địa chỉ không được rỗng");
            return false;
        }
        
            $("#errorDC").html("*");
            return true;
      
      }
      $("#errorDC").blur(kiemTraDC)

      $("#datHang").click(function(){
        if(kiemTraDC()&&kiemTraDT()&& kiemTraHoTen() && kiemTraMail()){
            alert("đặt hàng thành công");
            var myw = window.open("../html/home.html","_self");
        }else{
            alert("nhập đầy đủ thông tin")
        }

      });
});