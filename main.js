// form peasn dan doa 
document.getElementById("tombol_form").
  addEventListener("click", tampilkan_nilai_form)

function tampilkan_nilai_form() {
  console.log("test")
  var form_nama = document.getElementById("nama").value
  var form_pesan = document.getElementById("pesan_doa").value
  console.log(form_pesan)
  document.getElementById("hasil_nama").innerHTML = form_nama;
  document.getElementById("hasil_pesan").innerHTML = form_pesan;
}

// Tanggal akhir yang Anda inginkan untuk countdown (gantilah sesuai kebutuhan Anda)
var countdownDate = new Date("2024-09-25T23:59:59").getTime();

var countdown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Waktu habis!";
  }
}, 1000);

// Sound
var backsound = document.getElementById('backsound');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

function pauseBacksound() {
  backsound.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
}

function playBacksound() {
  backsound.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
}

// Rotasi Gambar Play
var sudutRotasi = 0;
var gambarPutar = document.getElementById("pauseButton");

function putarGambarOtomatis() {
  sudutRotasi += 1; // Ubah sudut rotasi sesuai keinginan
  gambarPutar.style.transform = `rotate(${sudutRotasi}deg)`;

  // Fungsi ini akan dipanggil setiap 10 milidetik (10000ms)
  setTimeout(putarGambarOtomatis, 10);
}

// Panggil fungsi putarGambarOtomatis() untuk memulai animasi otomatis
putarGambarOtomatis();