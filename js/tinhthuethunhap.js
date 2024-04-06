

/**
 * input: hoTen, tongThuNhap, soNguoiPhuThuoc
 * 
 *    thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
 * 
 * output: thuePhaiTra
 */

function tinhThueThuNhap() {

    let hoTen = document.getElementById('hoTen').value;
    let tongThuNhap = document.getElementById('tongThuNhap').value * 1;
    let soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;
    let thueSuat = 0;

    let thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    if (thuNhapChiuThue <= 60000000) {
        thueSuat = 0.05;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        thueSuat = 0.1;
    } else if (thuNhapChiuThue > 12000000 && thuNhapChiuThue <= 210000000) {
        thueSuat = 0.15;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thueSuat = 0.2;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thueSuat = 0.25;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thueSuat = 0.3;
    } else {
        thueSuat = 0.35;
    }

    let thuePhaiTra = thuNhapChiuThue * thueSuat;
    document.getElementById('innerHoTenCaNhan').innerHTML = `<h5 style="color:red"> Họ và Tên : </h5>
                                                             <h5 style="color:blue">${hoTen}</h5>`;
    document.getElementById('innerThueThuNhap').innerHTML = `<h5 style="color:red"> Số thuế phải đóng : </h5>
                                                             <h5 style="color:blue">${thuePhaiTra.toLocaleString()} đồng</h5>`;
}