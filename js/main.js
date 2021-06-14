/**1.
 * INPUT:
 *
 * PROGRAMMING:
 * Chẵn :n%2 == 0
 * lẽ : n%2 != 0
 * OUTPUT:
 * Print number
 */
var n = 1;
sochan = "";
sole = "";
while (n < 100) {
  if (n % 2 == 0 && n != 98) {
    sochan += n + ",";
  } else if (n == 98) {
    sochan += n;
  }
  if (n % 2 != 0 && n != 99) {
    sole += n + ",";
  } else if (n == 99) {
    sole += n;
  }
  n++;
}
document.getElementById("chẵn").innerHTML = sochan;
document.getElementById("lẽ").innerHTML = sole;
chan = "";
le = "";
for (var i = 1; i < 100; i++) {
  if (i % 2 == 0 && i != 98) {
    chan += i + ",";
  } else if (i == 98) {
    chan += i;
  }
  if (i % 2 != 0 && i != 99) {
    le += i + ",";
  } else if (i == 99) {
    le += i;
  }
}
document.getElementById("chẵn1").innerHTML = chan;
document.getElementById("lẽ1").innerHTML = le;
/**2.
 * INPUT:n>1
 * PROGRAMMING:
 * 1.Dom nút
 * 2.Tính tổng số chẵn
 *  -if i %2 ==0 tongSoChan += i
 * OUTPUT:
 * Tổng các số chẵn
 */
document.getElementById("tinhTongSoChan").onclick = function (event) {
  event.preventDefault();
  var num = document.getElementById("num").value * 1;
  tongSoChan = 0;
  tongSoChan1 = 0;
  i = 1;
  while (i <= num) {
    if (i % 2 == 0) {
      tongSoChan += i;
    }
    i++;
  }
  for (var j = 1; j <= num; j++) {
    if (j % 2 == 0) {
      tongSoChan1 += j;
    }
  }
  document.getElementById("tong").innerHTML = "Tổng số chẵn là :" + tongSoChan;
  document.getElementById("tong2").innerHTML =
    "Tổng số chẵn là :" + tongSoChan1;
};

/**3.
 * INPUT:
 * PROGRAMMING:
 * count =0
 * if so % 3==0 count ++
 * OUTPUT:
 */
count = 0;
count1 = 0;
so = 0;
while (so <= 1000) {
  if (so % 3 == 0) {
    count++;
  }
  so++;
}
document.getElementById("chia3").innerHTML =
  "Số lượng số chia hết 3 là: " + count;

for (var i = 0; i <= 1000; i++) {
  if (i % 3 == 0) {
    count1++;
  }
}
document.getElementById("chia3for").innerHTML =
  "Số lượng số chia hết 3 là: " + count1;
/**
 * INPUT:
 * PROGRAMMING:
 * n =0
 * while(tong <10000){
 * n++
 * tong+=n
 * }
 * OUTPUT:
 *
 */
var n = 0;
var tong = 0;
while (tong < 10000) {
  n++;
  tong += n;
}
console.log("Số nguyên dương nhỏ nhất là : " + n);
var div = document.createElement("p");
div.innerHTML = "Số nguyên dương nhỏ nhất là : " + n;
document.getElementById("chia3for").appendChild(div);
/**
 * INPUT:x+x*x+x*x*x+....
 * 2 số x và n
 * PROGRAMMING:
 * var x
 * var n
 *  tạo hàm Tính tích x^n
 * tạo hàm tính Tổng các tích
 *
 *
 *
 * }
 *
 * OUTPUT:
 *
 */
function tinhTich(x, n) {
  var tich = 1;
  for (var i = 0; i < n; i++) {
    tich *= x;
  }
  return tich;
}
// console.log(tinhTich(2, 0));
function tinhTong(x, n) {
  var sum = 0;
  for (var j = 1; j < n + 1; j++) {
    sum += tinhTich(x, j);
  }
  return sum;
}
console.log(tinhTong(2, 3));
document.getElementById("tinhTong").onclick = function (event) {
  event.preventDefault();
  var X = document.getElementById("X").value * 1;
  var N = document.getElementById("N").value * 1;
  var show = tinhTong(X, N);
  document.getElementById("show").innerHTML = "Tổng là: " + show;
};
/**
 * INPUT:
 * Số n
 * PROGRAMMING:
 * Tạo hàm tinhGiaiThua
 *    for i = 1; i < n + 1; i++
 *    giaiThua *=i
 *    return
 * OUTPUT:
 * Giai thừa 1*2*..*n
 *
 */

function tinhGiaiThua(n) {
  var giaiThua = 1;
  for (var i = 1; i < n + 1; i++) {
    giaiThua *= i;
  }
  return giaiThua;
}

document.getElementById("tinhGiaiThua").onclick = function (event) {
  event.preventDefault();

  var sogiaiThua = document.getElementById("giaithua").value * 1;
  var showGiaiThua = tinhGiaiThua(sogiaiThua);
  document.getElementById("showGiaiThua").innerHTML = showGiaiThua;
};
/**
 * INPUT:
 * PROGRAMMING:
 * 1.Dom nut
 * 2.for i=1 i<11
 * 3.tao div
 *
 * OUTPUT:
 *
 */
document.getElementById("addDiv").onclick = function () {
  for (var i = 1; i < 11; i++) {
    console.log(i);
    var div = document.createElement("p");
    div.innerHTML = i;
    div.id = i;
    document.getElementById("showDiv").appendChild(div);
    // Cach 2
    // var taoDiv = "<div id='" + i + "'>" + i + "</div>";
    // document.getElementById("showDiv").innerHTML += taoDiv;
    if (i % 2 == 0) {
      document.getElementById(i).style.backgroundColor = "red";
    } else {
      document.getElementById(i).style.backgroundColor = "blue";
    }
  }
};

/**
 * INPUT:
 * n
 *  btn để dom
 * PROGRAMMING:
 * 1.Dom
 * 2.tạo hàm chuaSo
 *    - var daySo=1
 *          daySo+=","+n
 * return daySo
 * 3.For(var i=2 ;i<n;i++){
 *        chuaSo(i)
 * }
 * OUTPUT:
 * Print 1.2....n
 */
document.getElementById("showArr").onclick = function (event) {
  event.preventDefault();
  var n = document.getElementById("array").value * 1;
  if (!n) {
    alert("nhập số đi ,lớn hơn 0 nhé!!");
    return;
  }
  var daySo = 1;
  for (var i = 2; i < n + 1; i++) {
    daySo += chuaSo(i);
  }
  document.getElementById("inArr").innerHTML = daySo;
};

function chuaSo(n) {
  return "," + n;
}
