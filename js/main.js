/**    BÀI 1
 * Khôi 1: Input
 * nguyen1, nguyen2, nguyen3
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến:
 * nguyen1, nguyen2, nguyen3
 *  B2: Lập công thức tính toán 
 *  
 *  B3: hiển thị kết quả => console.log
 * 
 * Khôi 3: Output
 * 
 */



var nguyen1 = Number(document.getElementById("nguyen1").value);
var nguyen2 = Number(document.getElementById("nguyen2").value);
var nguyen3 = Number(document.getElementById("nguyen3").value);
const soSanh = [nguyen1, nguyen2, nguyen3];

console.log(sapxep(a, b));

function sapxep(a, b) {
    return a - b;
}
document.getElementById("sapxep") = onclick = sapxep;

/**    BÀI 2 - Chào hỏi
 * Khôi 1: Input
 * bo, me, anh, em
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến: bo, me, anh, em  
 *  B2: Lấy giá trị radio từ form
 *  B3: Kiểm tra thanhvien
 *  B5: hiển thị kết quả => console.log
 * 
 * Khôi 3: Output
 *  loichao
 */



//  Lấy giá trị radio từ form
var bo = document.getElementById("bo");
var me = document.getElementById("me");
var anh = document.getElementById("anh");
var em = document.getElementById("em");

var thanhVien = "";

// radioCar.checked == true
if (bo.checked) {
    thanhVien = "bo";
} else if (me.checked){
    thanhVien = "me";
} else if (anh.checked){
    thanhVien = "anh";
} else if (em.checked){
    thanhVien = "em";
} else {
    alert("Chưa chọn thành viên ");
}
console.log(thanhVien);
