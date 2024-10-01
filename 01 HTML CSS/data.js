const namaSaya = "farhan";
let usia = 5;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
  let generasi;

  if (usia > 80) {
    // kondisi pertama
    generasi = "generasi tua";
  } else if (usia < 60) {
    // kondisi pertama tidak terpenuhi
    generasi = "generasi muda";
  } else {
    generasi = "generasi ancur";
  }

  return (biodata.innerHTML = generasi);
}

console.log(namaSaya);
console.log(usia);
// console.log(statusUmur);

generateBiodata();
