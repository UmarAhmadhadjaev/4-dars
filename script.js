let day = new Date(prompt("Tug'ilgan oyingiz: " + '\n' + "Tug'ilgan kuningiz: " + '\n' + "Tug'ilgan yilingiz: " + '\n' + "Shu tartibda kiriting => 08-04-2005"));
console.log(day);
  let now = Date.now();
  
  console.log(
    "Yil: " + Math.round((now - day) / 1000 / 60 / 60 / 24 / 365.25) + ";"
  );
  console.log("Kun: " + Math.round((now - day) / 1000 / 60 / 60 / 24) + ";");
  console.log("Soat: " + Math.round((now - day) / 1000 / 60 / 60) + ";");
  console.log("Sekund: " + Math.round(now - day) + ";");
  console.log("Siz shuncha umr kechirdingiz. Shu paytgacha nimalarga erishdingiz?");