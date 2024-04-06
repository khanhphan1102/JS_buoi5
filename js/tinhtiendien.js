

/**
 * input: hoTenHoDan, soKw
 * 
 * output: innerHoTen ,innerSoKw
 */

function tinhTienDien() {
    let hoTenHoDan = document.getElementById('hoTenHoDan').value;
    let soKw = document.getElementById('soKw').value * 1;
    let tongTienDien = 0;

    if (soKw <= 50) {
        tongTienDien = soKw * 500;
    } else if ( soKw > 50 && soKw <= 100) {
        tongTienDien = (50 * 500) + ((soKw - 50) * 650);
    } else if ( soKw > 100 && soKw <= 200) {
        tongTienDien = 50 * (500 + 650) + ((soKw - 100) * 850);
    } else if ( soKw > 200 && soKw <= 350) {
        tongTienDien = 50 * (500 + 650) + (100 * 850) + ((soKw - 200) * 1100);  
    } else if (soKw > 350 ) { 
        tongTienDien = 50 * (500 + 650) + (100 * 850) + (150 * 1100) + ((soKw - 350) * 1300);
    }
    document.getElementById('innerHoTen').innerHTML =`<h5 style="color:red"> Họ tên Hộ dân : </h5>
                                                       <h5 style="color:blue">${hoTenHoDan}</h5>`;
    document.getElementById('innerSoKw').innerHTML=`<h5 style="color:red"> Số tiền phải đóng : </h5>
                                                      <h5 style="color:blue">${tongTienDien.toLocaleString()} đồng</h5>`;
}