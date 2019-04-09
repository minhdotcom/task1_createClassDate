function setDate() {
    var day = Number(prompt("Nhap ngay: "));
    date.setDay(day);
    var month = Number(prompt("Nhap thang: "));
    date.setMonth(month);
    var year = Number(prompt("Nhap nam"));
    date.setYear(year);
}

function getDateToString() {
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getYear();
    console.log("" + day + month + year);
    alert("Ngay vua nhap la " + day + "/" + month + "/" +year);
}

