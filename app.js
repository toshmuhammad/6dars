let = 1

let k = 7
let n = 5

for (let i = 0; i < n; i++) {
    console.log(i, k);
}

// For 2 start
// let narx = 10000

// for (let i = 1; i < 11; i++) {
//     console.log(`${i / 10} kg = ${+((i / 10) * narx).toFixed(2)} so'm`);
// }
// For 2 end

// For 3 start
// let n = parseInt(prompt("bironta son kiriting"));

// if (n > 0) {
//     let S = 0;
//     for (let i = n; i <= 2 * n; i++) {
//         S += i ** 2;
//     }

//     console.log("S =", S);
//     alert("S = " + S);
// } else {
//     console.log("n musbat son bo'lishi kerak");
//     alert("n musbat son bo'lishi kerak");
// }
// For 3 end

// For 4 start
// let N = parseInt(prompt("raqam kiriting"));

// if (N > 0) {
//     let S = 0;
//     for (let i = 1; i <= N; i++) {
//         S += i ** (N - i + 1);
//     }
    
//     console.log("S =", S);
//     alert("S = " + S);
// } else {
//     console.log("N musbat son bo'lishi kerak");
//     alert("N musbat son bo'lishi kerak");
// }
// For 4 end

// For 5 start
// let A = parseInt(prompt("a soni kiriting"));
// let B = parseInt(prompt("b sonni kiriting"));

// if (A < B) {
//     for (let i = A; i <= B; i++) {
//         let output = "";
//         for (let j = 0; j < i; j++) {
//             output += i + " ";
//         }
//         console.log(output.trim());
//         alert(output.trim());
//     }
// } else {
//     console.log("A < B bo'lishi kerak!");
//     alert("A < B bo'lishi kerak!");
// }
// For 5 end

// For 6 start
// let son = 50

// for (let i = 1; i <= son; i++) {
//     if (50 % i == 0)
//     console.log(i);
// }
// For 6 end



// For 1

// let a = 10
// let b = 20

// for (let i = a; i <= b; i++) {
//     console.log(i);
// }

// For 2

// let num = +prompt('son kiriting')
// for (let i = num; i >= 1; i--) {
//     console.log(i);
// }

// For 3

// let narx = 5000

// for (let i = 1; i < 11; i++) {
//     console.log(`${i} kg = ${+((i) * narx).toFixed(2)} so'm`);
// }

// For 4

// let narx = 5000

// for (let i = 12; i < 21; i++) {
//     console.log(`${i / 10} kg = ${+((i / 10) * narx).toFixed(2)} so'm`);
// }

// For 5

// let a = parseInt(prompt("a son"));
// let b = parseInt(prompt("b son"));

// if (a >= b) {
//   console.log("a soni b dan kichik bo'lishi kerak!");
// } else {
//   let summa = 0;
//   for (let i = a; i <= b; i++) {
//     summa += i;
//   }
//   console.log(`${a} dan ${b} gacha bo'lgan barcha sonlarning yig'indisi: ${summa}`);
// }