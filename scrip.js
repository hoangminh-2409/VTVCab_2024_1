// Bài 1

function phanloaihocsinh() {
  let diem = document.getElementById("diemso").value;
  let res = document.getElementById("ketQua");

  if (diem >= 90) {
    res.textContent = "Xuất sắc";
  } else if (diem >= 80 && diem < 90) {
    res.textContent = "Giỏi";
  } else if (diem >= 70 && diem < 80) {
    res.textContent = "Khá";
  } else if (diem >= 60 && diem < 70) {
    res.textContent = "Trung bình";
  } else {
    res.textContent = "Yếu";
  }
}

// Bài 2

function checkYear() {
  let year = document.getElementById("yearInput").value;
  let result = document.getElementById("result");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = year + " là năm nhuận.";
  } else {
    result.textContent = year + " không phải là năm nhuận.";
  }
}
