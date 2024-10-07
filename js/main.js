// For va ternary operatorga oid
// 1-misol
// 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 5 ga bo‘linadigan bo‘lsa, "5 ga bo‘linadi", 3 ga bo‘linadigan bo‘lsa, "3 ga bo‘linadi", ikkalasiga ham bo‘linadigan bo‘lsa, "5 va 3 ga bo‘linadi" deb
// for (let i = 1; i <= 50; i++) {
//     let result = (i % 15 === 0) ? "5 va 3 ga bo‘linadi" :
//         (i % 5 === 0) ? "5 ga bo‘linadi" :
//             (i % 3 === 0) ? "3 ga bo‘linadi" :
//                 i;
//     console.log(result);
// }

// 2-misol
// Belgilangan diapazondagi juft sonlar yig'indisini hisoblash
// **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 30 va 70 orasidagi juft sonlarning yig‘indisini hisoblang. Har bir son uchun bu son juft yoki toq ekanligini ternary operator yordamida aniqlash
// let sum = 0;

// for (let i = 30; i <= 70; i++) {
//   (i % 2 === 0) && (sum += i);
// }

// console.log("Juft sonlarning yig‘indisi:", sum);

// 4-misol
// 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 2 yoki 7 ga bo‘linadigan bo‘lsa, bu son "maxsus son" deb belgilash

// for(let i = 1; i<=100; i++){
//     let res = (i%2 == 0 || i%7==0 )?    `Maxsus son`:i;
//     console.log(res);
// }

// Break continue ga oid
// 1-misol
// for (let i = 1; i <= 100; i++) {
//     if (i == 25) {
//         break
//     }
//     console.log(i);
// }

// 2-misol
// for(let i = 1; i<=20; i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(i);
// }

// 3-misol
// for (let i = 1; i <= 50; i++) {
//     if (i > 30) {
//         break
//     }
//     console.log(i);
// }

// Switch case ga oid misollar
// 1-misol
// let day = +prompt("Hafta kunini kiriting");
// switch (day) {
//     case 1:
//         console.log("Dushanba");

//         break;

//     case 2:
//         console.log("Seshanba");

//         break;
//     case 3:
//         console.log("Chorshanba");

//         break;
//     case 4:
//         console.log("Payshanba");

//         break;
//     case 5:
//         console.log("Juma");

//         break;
//     case 6:
//         console.log("Shanba");

//         break;
//     case 7:
//         console.log("Yakshanba");

//         break;

//     default:
//         console.log("BUnday hafta kuni yoq");
//         break;
// }

// 2-misol
// let season = +prompt("Oy raqamini kiriting");

// switch (season) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");

//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");

//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");

//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");

//         break;

//     default:
//         console.log("Bunday oy fasli mavjud emas");
//         break;
// }

// 3-misol
// let baho = +prompt("Bahoni kiriting");
// switch (baho) {
//     case 1:
//         console.log("Juda yomon");
//         break;
//     case 2:
//         console.log("Yomon");
//         break;

//     case 3:
//         console.log("Qoniqarli");
//         break;

//     case 4:
//         console.log("Yaxshi");
//         break;

//     case 5:
//         console.log("A'lo");
//         break;

//     default:
//         console.log("Bunday baho mavjud emas");
//         break;
// }

// 4-misol
// let tarif = +prompt("Tarif raqamini kiriting");
// switch (tarif) {
//     case 1:
//         console.log('Ekonom');

//         break;

//     case 2:
//         console.log('Standar');

//         break;
//     case 3:
//         console.log('Premium');

//         break;
//     default:
//         console.log('Bunday tarif mavjud emas');
//         break;
// }

// 5-misol
// let meva = +prompt('Meva raqamini kiriting');

// switch (meva) {
//     case 1:
//         console.log('Olma');
//         break;
//     case 2:
//         console.log('Apelsin');
//         break;
//     case 3:
//         console.log('Banan');
//         break;
//     case 4:
//         console.log('Uva');
//         break;

//     default:
//         console.log('Bunday meva mavjud emas');
//         break;
// }

// 6-misol
// let password = +prompt("Parolni kiriting");
// switch (password) {
//     case 1:
//         console.log('Parolni tiklash');
//         break;

//     case 2:
//         console.log('Parolni o`zgartirish');
//         break;
//     case 3:
//         console.log('Chiqish');
//         break;
//     default:
//         console.log("Mavjud emas");
//         break;
// }

// While operator misollar
// 1-misol
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// 2-misol
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 3-misol
// let number = +prompt('Son kiriting: ');
// while (number < 0) {
//     alert('Musbat son kiriting!');
//     number = +prompt('Son kiriting: ');
// }

// 4-misol
// let i = 1;
// while (i <= 20) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// 5-misol
// let num = +prompt("son");
// let raqamlarYigindisi = 0;
// while (num > 0) {
//     let number = num % 10;
//     raqamlarYigindisi += number;
//     num = Math.floor(num / 10)
// }
// console.log("Raqamlar yig'indisi: " + raqamlarYigindisi)

// 6-misol
// let num = +prompt("son");
// while (num >= 1) {
//     console.log(num);
//     num /= 2;
// }

// 7-misol
// let son = +prompt("Son kiriting: ");

// let raqamlar = "";

// while (son > 0) {
//     let raqam = son % 10;
//     if (raqam % 2 !== 0) {
//         raqamlar += raqam + " ";
//     }
//     son = Math.floor(son / 10);
// }

// console.log("Toq raqamlar: " + raqamlar.trim());

// 8-misol
// let num1 = +prompt("Boshlang'ich son")
// let num2 = +prompt("Yakuniy son")

// while (num1 >= num2) {
//     if (num1 % 3 == 0) {
//         console.log(num1);
//     }
//     num1++;
// }

// 9-misol
// let num = +prompt("son")
// let teskarison = 0;

// while (num > 0) {
//     let number = num % 10;
//     teskarison = teskarison * 10 + number;
//     num = Math.floor(num / 10)
// }

// console.log('teskari son ' + teskarison);

// 11-misol
// let num  = +prompt('son');

// let raqamlarkopaytmasi = 1;
// if(num==0){
//     raqamlarkopaytmasi = 0;

// }

// while(num>0){
//     let number = num %10;
//     raqamlarkopaytmasi *=number;
//     num  = Math.floor(num/10)
// console.log('Raqamlar ko`paytmasi ' + raqamlarkopaytmasi);
// }

// do…while.  doir misollar
// 1-misol
// let g = 1;
// do {
//     console.log(g);
//     g++;
// } while (g <= 10)
// // 2-misol
// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1) {
// }

// 3-misol
// let number = +prompt('Son kiriting: ');
// do {
//     alert('Musbat son kiriting!');
//     number = +prompt('Son kiriting: ');

// } while (number < 0)

// 4-misol
// let a = 1;
// do {
//     if (a % 2 == 0) {
//         console.log(a);
//     }
//     a++;

// } while (a <= 20)

// 5-misol
// let num = +prompt("son");
// let raqamlarYigindisi = 0;
// do {
//     let number = num % 10;
//     raqamlarYigindisi += number;
//     num = Math.floor(num / 10)
//     console.log("Raqamlar yig'indisi: " + raqamlarYigindisi)

// } while (num > 0)

// 6-misol
// let num = +prompt("son");
// do {

//     console.log(num);
//     num /= 2;
// }
// while (num >= 1)

// 7 - misol
// let son = +prompt("Son kiriting: ");

// let raqamlar = "";

// do {

//     let raqam = son % 10;
//     if (raqam % 2 !== 0) {
//         raqamlar += raqam + " ";
//     }
//     son = Math.floor(son / 10);
//     console.log("Toq raqamlar: " + raqamlar.trim());
// }  while (son > 0)

// 8-misol
// let num1 = +prompt("Boshlang'ich son")
// let num2 = +prompt("Yakuniy son")

// do {
//     if (num1 % 3 == 0) {
//         console.log(num1);
//     }
//     num1++;

// }
// while (num1 >= num2)

// 9-misol
// let num = +prompt("son")
// let teskarison = 0;

// do {
//     let number = num % 10;
//     teskarison = teskarison * 10 + number;
//     num = Math.floor(num / 10)
//     console.log('teskari son ' + teskarison);

// }  while (num > 0)

// 11-misol
let num = +prompt("son");

let raqamlarkopaytmasi = 1;
if (num == 0) {
  raqamlarkopaytmasi = 0;
}

do {
  let number = num % 10;
  raqamlarkopaytmasi *= number;
  num = Math.floor(num / 10);
  console.log("Raqamlar ko`paytmasi " + raqamlarkopaytmasi);
} while (num > 0);

// Qo`shimcha misollar
// 1 -misol
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 0 || i % 3 == 0) {
//         console.log("Maxsus son");
//     } else {
//         console.log(Math.sin(i));
//     }
// }

// // 2-misol
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0 || i % 10 == 0) {
//         console.log("5 ga va 10 ga bo'linadi ");
//     } else {
//         console.log("Hech qaysisiga bolinmaydi");
//     }
// }

// 3-misol
// 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son toq bo‘lsa, uning 10 ga bo‘lgan qoldig'ini (Math.floorMod) hisoblang, aks holda "Juft son" deb chop etish

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 1) {
//         console.log(Math.floor(i));
//     } else {
//         console.log("Juft son");
//     }
// }

// // Matematik operatsiyalar va shartli tekshiruvlar
// 1-misol
// for (let i = 1; i <= 30; i++) {
// if (i % 2 == 0) {
//         console.log(Math.sin(i));
//     } else {
//         console.log(Math.cos(i));
//     }
// }

// 2-misol
// let sum = 0
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0 || i % 3 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 3-misol
// for(let i = 1; i<=25; i++){
//     if(i%4==0){
//         console.log(Math.sqrt(i));
//     }
// }

// 4-misol
// 1 dan 20 gacha bo‘lgan sonlar orasidan 5 ga bo‘linadigan barcha sonlarni tekshiring. Agar son 5 ga bo‘linadigan bo‘lsa, uning kub ildizini (Math.cbrt) chop etish
// for (let i = 1; i <= 20; i++) {
//     if (i % 5 == 0) {
//         console.log(Math.cbrt(i));
//     }
// }

// 5-misol
// 1 dan 40 gacha bo‘lgan sonlarni tekshiring va agar son juft bo‘lsa, "Juft son" deb chop eting, aks holda sonni 3 ga ko‘paytiring va natijani chop etish
// for (let i = 1; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log("Juft son");
//     } else {
//         console.log(i * 3);
//     }
// }

// 6-misol
// 1 dan 30 gacha bo‘lgan sonlarni tekshiring va faqat 2 ga bo‘linadigan sonlarni toping. Har bir sonning sinus qiymatini (Math.sin) chop etish
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 0) {
//         console.log(Math.sin(i));
//     }
// }
// 7-misol
// 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 2 ga bo‘linadigan bo‘lsa, sonning kvadratini (Math.pow) hisoblang, aks holda sonning kvadrat ildizini (Math.sqrt) aniqlash
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(Math.pow(i));
//     } else {
//         console.log(Math.sqrt(i));
//     }
// }
// 8-misol
// 100 dan 200 gacha bo‘lgan sonlar orasidan faqat toq sonlarni toping va ularning kub ildizini (Math.cbrt) hisoblash
// for (let i = 100; i <= 200; i++) {
//     if (i % 2 == 1) {
//         console.log(Math.cbrt(i));
//     }
// }

// 9-misol
// 5 dan 50 gacha bo‘lgan sonlarni tekshirib, har bir son uchun 5 ga bo‘linishini tekshiring va uning kubini hisoblang (Math.pow)
// for (let i = 5; i <= 50; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }

// }

// Mantiqiy operatsiyalar va arifmetikani qo‘llash
// 1-misol
// 1 dan 25 gacha bo‘lgan sonlarni tekshirib, toq sonlarni 3 ga ko‘paytiring, juft sonlarni esa 2 ga bo‘ling. Har bir holatda natijani chop eting
// for (let i = 1; i <= 25; i++) {
//     if (i % 2 == 1) {
//         console.log(i * 3);
//     } else if (i % 2 == 0) {
//         console.log(i / 2);
//     }
// }

// 2-misol
// // 1 dan 20 gacha bo‘lgan sonlarni tekshiring. Agar son manfiy bo‘lsa, uning qiymatini ijobiy son bilan almashtiring (Math.abs) va natijani chop etish
// for (let i = 1; i <= 20; i++) {
//     if (i > 0) {
//         console.log(Math.abs(i));
//     }
// }

// 3-misol
// Foydalanuvchi 50 dan katta bo‘lgan son kiritganda, sonning sinus yoki kosinus qiymatini (Math.sin yoki Math.cos) toping va natijani chop etish
// let num = +prompt("son");
// if (num > 50) {
//     console.log(Math.sin(num) || Math.cos(num));
// }

// 4-misol
// 1 dan 40 gacha bo‘lgan sonlarni tekshirib, faqat juft sonlarni toping va ularning kvadrat ildizini (Math.sqrt) hisoblash
// for (let i = 1; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log(Math.sqrt(i));
//     }
// }

// 5-misol
// 10 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 7 ga bo‘linadigan sonlarni tanlang va ularning logarifmini (Math.log) hisoblash
// for (let i = 10; i <= 100; i++) {
//     if (i % 7 == 0) {
//         console.log(Math.log(i));
//     }
// }

// 6-misol
// 1 dan 30 gacha bo‘lgan sonlarni tekshirib, agar son musbat bo‘lsa, uning kvadrat ildizini (Math.sqrt) hisoblang, aks holda sonni o‘zgartirmasdan chop etish
// for (let i = 1; i <= 30; i++) {
//     if (i > 0) {
//         console.log(Math.sqrt(i));
//     }
// }

// 7-misol
// 20 dan 60 gacha bo‘lgan sonlarni tekshirib, faqat 3 ga bo‘linadigan sonlar uchun ularning uchinchi darajasini (Math.pow) chop etish
// for (let i = 20; i <= 60; i++) {
//     if (i % 3 == 0) {
//         console.log(i ** 3);
//     }
// }

// 8-misol
// Foydalanuvchi tomonidan kiritilgan har qanday sonni tekshiring va agar son 10 va 50 orasida bo‘lsa, uning kub ildizini (Math.cbrt) chop eting, aks holda sonni ko'paytirish
// let num = +prompt("son");
// if(num>10 && num<50){
//     console.log(Math.cbrt(num));
// }

// 9-misol
// 1 dan 50 gacha bo‘lgan sonlarni tekshirib, faqat toq sonlarni tanlang va ularning kvadrat ildizini (Math.sqrt) hisoblash
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 1) {
//         console.log(Math.sqrt(i));
//     }
// }

// 10-misol
// Foydalanuvchi kiritgan sonni tekshirib, agar son musbat bo‘lsa, uning qiymatini 10 ga bo‘ling va natijani chop eting, aks holda "Musbat emas" deb chiqarish
// let num = +prompt("son")
// if(num>0){
//     console.log(num/10);
// } else{
//     console.log("Musbat son emas");
// }
