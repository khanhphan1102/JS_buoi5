

/**
 * input: Điểm chuẩn, điểm 3 môn, khu vực, đối tượng
 * 
 * output: innerHTML đậu/rớt, TongDiem
 */

function KetQua() {
    let diemChuan = document.getElementById('diemChuan').value * 1;
    let diemMonToan = document.getElementById('diemMonToan').value * 1;
    let diemMonVan = document.getElementById('diemMonVan').value * 1;
    let diemMonAnh = document.getElementById('diemMonAnh').value * 1;
    let tongDiemBaMon = diemMonToan + diemMonVan + diemMonAnh;
    let ketQua = 0;

    if (diemMonToan <= 0 || diemMonVan <= 0 || diemMonAnh <= 0) {

        let diemLiet = 'Điểm liệt';
        document.getElementById('innerKetQua').innerHTML = `
        <h5 style="color:red">${diemLiet}</h5>`;
        xetTrungTuyen(ketQua, diemChuan);

    } else if (0 < diemMonToan <= 10 && 0 < diemMonVan <= 10 && 0 < diemMonAnh <= 10) {

        ketQua = tongDiemBaMon + KhuVucVaDoiTuong(khuVuc, doiTuong);
        document.getElementById('innerKetQua').innerHTML = `
        <h5 style="color:green"> Tổng điểm : </h5>
        <h5 style="color:blue">${ketQua}</h5>`;
        xetTrungTuyen(ketQua, diemChuan);

    }
}

function KhuVucVaDoiTuong(khuVuc, doiTuong) {

    let diemKhuVuc = document.getElementById('khuVuc').value * 1;
    let diemDoiTuong = document.getElementById('doiTuong').value * 1;
    return diemKhuVuc + diemDoiTuong;
}

function xetTrungTuyen(ketQua, diemChuan) {

    if (ketQua <= diemChuan) {

        let xetTrungTuyen = 'Rớt';
        document.getElementById('innerXetTuyen').innerHTML = `
        <h5 style="color:red">${xetTrungTuyen}</h5>`;

    } else if (ketQua >= diemChuan) {
        let xetTrungTuyen = 'Trúng tuyển';
        document.getElementById('innerXetTuyen').innerHTML = `
        <h5 style="color:green">${xetTrungTuyen} ☑️</h5>`;
    }
    return xetTrungTuyen;
}