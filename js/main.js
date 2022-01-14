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

function sapxep() {
    var numA = Number(document.getElementById("numA").value);
    var numB = Number(document.getElementById("numB").value);
    var numC = Number(document.getElementById("numC").value);

    var arrange = "";
    // c<b<a 
    if (numA > numB && numA > numC) {
        console.log(numC + "<" + numB + "<" + numA);
        arrange = numC + "<" + numB + "<" + numA;
        // b<c<a
    } else if (numA > numB && numC > numB) {
        console.log(numB + "<" + numC + "<" + numA);
        arrange = numB + "<" + numC + "<" + numA;
        // b<a<c
    } else if (numA > numB && numC > numA) {
        console.log(numB + "<" + numA + "<" + numC);
        arrange = numB + "<" + numA + "<" + numC;
        // c<a<b
    } else if (numB > numA && numB > numC) {
        console.log(numC + "<" + numA + "<" + numB);
        arrange = numC + "<" + numA + "<" + numB;
        // a<c<b
    } else if (numB > numC && numC > numA) {
        console.log(numA + "<" + numC + "<" + numB);
        arrange = numA + "<" + numC + "<" + numB;
        // a<b<c
    } else {
        console.log(numA + "<" + numB + "<" + numC);
        arrange = numA + "<" + numB + "<" + numC;
    }
    document.getElementById("result").innerHTML = arrange;
}
document.getElementById("sapxep").onclick = sapxep;




/**    BÀI 2 - Chào hỏi
 * Khôi 1: Input
 * bo, me, anh, em
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến: bo, me, anh, em
 *  B2: Lấy giá trị radio từ form
 *  B3: Kiểm tra thanhvien
 *  B4: đưa ra loiChao
 *  B5: hiển thị kết quả => console.log
 *
 * Khôi 3: Output
 *  loichao
 */



//  Lấy giá trị radio từ form
function xinChao() {
    var bo = document.getElementById("bo");
    var me = document.getElementById("me");
    var anh = document.getElementById("anh");
    var em = document.getElementById("em");

    var thanhVien = "";
    var loiChao = "";

    if (bo.checked) {
        thanhVien = "bo";
    } else if (me.checked) {
        thanhVien = "me";
    } else if (anh.checked) {
        thanhVien = "anh";
    } else if (em.checked) {
        thanhVien = "em";
    } else {
        alert("Chưa chọn thành viên ");
    }
    console.log(thanhVien);

    switch (thanhVien) {
        case "bo":
            if (thanhVien = "bo") {
                loiChao = "Xin chào Bố";
            }
            break;
        case "me":
            if (thanhVien = "me") {
                loiChao = "Xin chào Mẹ";
            }
            break;
        case "anh":
            if (thanhVien = "anh") {
                loiChao = "Xin chào Anh Trai";
            }
            break;
        case "em":
            if (thanhVien = "em") {
                loiChao = "Xin chào Em Gái";
            }
            break;
        default:
            break;
    }
    document.getElementById("result2").innerHTML = loiChao;
}
document.getElementById("hello").onclick = xinChao;



/**   BÀI 3 - xuất ra số lẻ và số chẵn
 * Khôi 1: Input
 * num1, num2. num3
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến: num1, num2. num3
 *  B2: Lấy giá trị từ form
 *  B3: Kiểm tra 
 *  num1 % 2 = 0 => chẵn => countChan++
 *  num2 % 2 = 0 => chẵn => countChan++
 *  num3 % 2 = 0 => chẵn => countChan++
 * => countChan (số lượng số chẵn)
 * => countLe = 3 - countChan; (số lượng số lẻ)
 *  B4: hiển thị kết quả => console.log
 *
 * Khôi 3: Output
 *  soDaDem
 */


//  Lấy giá trị  từ form
function demSo() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);

    var countLe = 0;
    var countChan = 0;

    if (num1 % 2 == 0) {
        countChan++
    }
    if (num2 % 2 == 0) {
        countChan++
    }
    if (num3 % 2 == 0) {
        countChan++
    }
    console.log(countChan);

    countLe = 3 - countChan;
    soDaDem = "Có " + countChan + " số chẵn, " + countLe + " số lẻ";
    document.getElementById("result3").innerHTML = soDaDem;
}
document.getElementById("count").onclick = demSo;

/**   BÀI 4 - xuất ra số lẻ và số chẵn
 * Khôi 1: Input
 * canh1, canh2. canh3
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến: canh1, canh2. canh3
 *  B2: Lấy giá trị từ form
 *  B3: Kiểm tra 
 *  
 * 
 *  B4: hiển thị kết quả => console.log
 *
 * Khôi 3: Output
 *  loaiTamGiac
 */


//  Lấy giá trị  từ form

function tamGiac() {
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);
    var loaiTamGiac = "";

    if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
        loaiTamGiac = "tam giác cân"
    }
    if (canh1 == canh2 == canh3) {
        loaiTamGiac = "tam giác đều"
    }
    if (Math.pow(canh1, 2) + Math.pow(canh2, 2) == Math.pow(canh3, 2) || Math.pow(canh1, 2) + Math.pow(canh3, 2) == Math.pow(canh2, 2) || Math.pow(canh2, 2) + Math.pow(canh3, 2) == Math.pow(canh2, 2)) {
        loaiTamGiac = "tam giác vuông"
        document.getElementById("result4").innerHTML = loaiTamGiac;
    }
} document.getElementById("tamGiac").onclick = tamGiac;