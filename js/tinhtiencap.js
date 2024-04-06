

/**input: maKhachHang, loaiKhachHang, soKetNoi, soKenhCaoCap
 * 
 * phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap
 * AnHienKetNoi
 * 
 * output: tongHoaDon
*/ 

function tinhHoaDon() {
    let maKhachHang = document.getElementById('maKhachHang').value;
    let loaiKhachHang = document.getElementById('loaiKhachHang').value;
    let soKetNoi = document.getElementById('soKetNoi').value * 1;
    let soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;

    let phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap;
    let tongHoaDon = 0;

    if (loaiKhachHang === 'doanhNghiep') {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        phiThueKenhCaoCap = soKenhCaoCap * 50;
    } else if (loaiKhachHang === 'caNhan') {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = soKenhCaoCap * 7.5;
    }

    tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
    document.getElementById('innerMaKhachHang').innerHTML = `<h5 style="color:red"> Mã KH : </h5>
                                                            <h5 style="color:blue">${maKhachHang}</h5>`;
    document.getElementById('innerSoKetNoi').innerHTML = `<h5 style="color:red"> Số kết nối : </h5>
                                                            <h5 style="color:blue">${soKetNoi}</h5>`;
    document.getElementById('innerSoKenhCaoCap').innerHTML = `<h5 style="color:red"> Số kênh cao cấp : </h5>
                                                            <h5 style="color:blue">${soKenhCaoCap}</h5>`;
    document.getElementById('innerTongHoaDon').innerHTML = `<h5 style="color:red"> Tổng hóa đơn : </h5>
                                                            <h5 style="color:blue">${tongHoaDon}💲</h5>`;

}

function AnHienKetNoi() {
    let loaiKhachHang = document.getElementById('loaiKhachHang').value;
    let soKetNoi = document.getElementById('soKetNoi');
    let titleSoKetNoi = document.getElementById('titleSoKetNoi');
    let innerSoKetNoi = document.getElementById('innerSoKetNoi');

    if (loaiKhachHang === 'doanhNghiep') {
        soKetNoi.style.display = 'inline-block';
        titleSoKetNoi.style.display = 'inline-block';
        innerSoKetNoi.style.display = 'inline-block';
    } else {
        soKetNoi.style.display = 'none';
        titleSoKetNoi.style.display = 'none';
        innerSoKetNoi.style.display = 'none';
    }
}