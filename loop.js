// Membuat 5 objek
const mhs1 = {
  nama: "Aldi Budiansyah",
  nim: "2301002",
  jurusan: "Pengembangan Perangkat Lunak",
  semester: 1,
  status: "Aktif"
};

const mhs2 = {
  nama: "Haeril Gunadi",
  nim: "2301005",
  jurusan: "Pengembangan Perangkat Lunak",
  semester: 1,
  status: "Aktif"
};

const mhs3 = {
  nama: "Ma'ariful Haris",
  nim: "98765",
  jurusan: "Digital Marketing",
  semester: 1,
  status: "Aktif"
};

const mhs4 = {
  nama: "Rio Aditya Ramadhani",
  nim: "2301015",
  jurusan: "Pengembangan Perangkat Lunak",
  semester: 1,
  status: "Tidak Aktif"
};

const mhs5 = {
  nama: "Irwan Hadi",
  nim: "2302007",
  jurusan: "Digital Marketing",
  semester: 1,
  status: "Aktif"
};

// Menggabungkan objek-objek mahasantri dalam satu array
const mhsArray = [mhs1, mhs2, mhs3, mhs4, mhs5];

// 3. Panggil setiap objek menggunakan for  in
console.log("Panggil setiap objek menggunakan for  in:");
for (let i = 0; i < mhsArray.length; i++) {
  console.log(`mhs ${i + 1}:`);
  for (let key in mhsArray[i]) {
    console.log(`${key}: ${mhsArray[i][key]}`);
  }
  console.log("\n");
}

// 4. Panggil array menggunakan for  of
console.log("Panggil array menggunakan for  of:");
for (let mhs of mhsArray) {
  console.log(mhs);
}



// const kelas_ppl = {
//     "nama" : "Pengembangan Perangkat Lunak",
//     "jumlah" : 15,
//     "istilah" : "mekkah",
//     "fokus" : "Software Developer"
// }

// const kelas_dm = {
//     "nama" : "Digital Marketing",
//     "jumlah" : 23,
//     "istilah" : "madinah",
//     "fokus" : "Jualan Online"
// }

// const kelas_petik = [kelas_ppl, kelas_dm]

// for (kelas of kelas_petik) {
//     console.log(kelas);
// }







// const asal_mhs = {
//     arya : "Lombok",
//     erik : "Pontianak",
//     abil : "Manado",
//     irsyad : "Jombang",
//     baihaqi: {
//         asal: "Mojokerto",
//         jenisKelamin: "Pria",
//         hobi: {
//             rumah: "Nonton Film",
//             luar: "Bermain Bola",
//         }
//     }
// }


// console.log(asal_mhs);



// // array pada js
// const nama_mhs = [
//     'Hasan',
//     'Yazid',
//     'Haeril',
//     'Nanto',
//     'Budi',
// ]

// // for untuk array (for of)
// for (let nama of nama_mhs){
//     console.log(nama);
// }

// // for untuk objek (for in)
// for (let asal in asal_mhs){
//     console.log(asal_mhs[asal]);
// }


















// let angka = 1


// // 1 do while
// do{
//     console.log("do while di eksekusi");
//     angka++;
// }while(angka == 1)

// // 2 while
// while(angka == 1) {
//     console.log("while di eksekusi");
//     angka++;
// }