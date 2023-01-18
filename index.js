let arrN = [];
document.getElementById('btnNhapso').onclick = function () {
    let valuE = +document.getElementById('nhapsoN').value;
    arrN.push(valuE)
    document.getElementById('nhapso').innerHTML = arrN;
}

// Bài tập 1:
document.getElementById('btnTinhtong').onclick = function () {
    let sum = 0;
    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] > 0) {
            sum += arrN[i]
        }
    }
    document.getElementById('ketqua1').innerHTML = " Tổng các số dương: " + sum
}
// Bài tập 2:
document.getElementById('btnDemso').onclick = function () {
    let dem = 0;
    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] > 0) dem += 1
    }
    document.getElementById("ketqua2").innerHTML = " Số dương: " + dem;
}

// Bài tập 3:
document.getElementById('btnTimso').onclick = function () {
    let min = arrN[0];
    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] < min) {
            min = arrN[i]
        }
    }
    document.getElementById('ketqua3').innerHTML = " Số nhỏ nhất: " + min;
}
// Bài tập 4
document.getElementById('btnTimsoduong').onclick = function () {
    let arrMin = [];
    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] > 0) {
            arrMin.push(arrN[i]);
        }
    }
    if (arrMin.length > 0) {
        let total = arrMin[0];
        for (let i = 0; i < arrMin.length; i++) {
            if (arrMin[i] < total) {
                total = arrMin[i]
            }
        } document.getElementById('ketqua4').innerHTML = ' Số dương nhỏ nhất là: ' + total
    } else {
        document.getElementById('ketqua4').innerHTML = ' Không có số dương trong mảng'
    }
}
// Bài tập 5
document.getElementById('btnTimsochan').onclick = function () {
    let lastEven = 0;

    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] % 2 == 0) {
            lastEven = arrN[i]
            document.getElementById('ketqua5').innerHTML = " Số chẵn cuối cùng: " + lastEven;
        } 
    }
    if(lastEven === 0){
        document.getElementById('ketqua5').innerHTML = " Không có số chẵn trong mảng"
    }
}

// Bài tập 6 
function change (x, y){
    let vitrix = 0;
    for(let i = 0; i < arrN.length; i++){
        vitrix = arrN[x]
        arrN[x] = arrN[y]
        arrN[y] = vitrix
    }
    return arrN;
}
document.getElementById('btnDoicho').onclick = function(){
    let vitri1 = document.getElementById('vitri1').value;
    let vitri2 = document.getElementById('vitri2').value;
    let done = change(vitri1, vitri2)

    document.getElementById('ketqua6').innerHTML = 'Mảng sau khi đổi: ' + done
    console.log(done)
}

// Bài tập 7
document.getElementById('btnSapxep').onclick = function(){
    arrN.sort(function(a,b){return a - b})
    document.getElementById('ketqua7').innerHTML = arrN
}

// Bài tập 8
function kiemtraSNT(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true
    }
    if (n % 2 === 0) {
        return false
    }
    let SNT = true
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0)
            return false
    }
    return SNT;
}
document.getElementById('btnTimsoNt').onclick = function(){
    let prime = [];
    for(let i = 0; i < arrN.length; i++){
        if(kiemtraSNT(arrN[i])){
            prime.push(arrN[i]);
            break
        }
    }
    if(prime.length == 0){
        document.getElementById('ketqua8').innerHTML = -1;
    }else{
        document.getElementById('ketqua8').innerHTML = " " +  prime[0]
    }
}

// Bài tập 9
let arrN2 = [];
document.getElementById('btnNhapso2').onclick = function () {
    let valuE = +document.getElementById('nhapsoN2').value;
    arrN2.push(valuE)
    document.getElementById('nhapso2').innerHTML = arrN2;
}
document.getElementById('demsonguyen').onclick = function(){
    let total2 = 0;
    for(let i = 0; i < arrN2.length; i++){
        if(Number.isInteger(arrN2[i]) ){
            total2 += 1
        }
    }
    document.getElementById('ketqua9').innerHTML = "Số nguyên: " + total2
}
// Bài tập 10
document.getElementById('btnSosanh').onclick = function(){
    let soDuong = 0;
    let soAm = 0;
    for( let i = 0; i < arrN.length; i++){
        if(arrN[i] > 0){
            soDuong +=1
        }else if(arrN[i] < 0){
            soAm += 1
        }else{
            continue
        }
    }
    if(soDuong > soAm){
        document.getElementById('ketqua10').innerHTML = "Số dương > Số âm"
    }else if(soDuong < soAm){
        document.getElementById('ketqua10').innerHTML = "Số dương < Số âm"
    }else{
        document.getElementById('ketqua10').innerHTML = "Số dương = Số âm"
    }
}