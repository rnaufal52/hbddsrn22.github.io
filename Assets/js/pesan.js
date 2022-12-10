function memulai() {
  pesan();
}

function bunyi() {
  var bel = new Audio("../Assets/audio.mp3");
  bel.play();
}

var i = 0;
var txt =
  "Makasih ya sayang masih tetap sama aku. I LOVE YOU ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function show() {
  jawab();
}

async function jawab() {
  await swal.fire("Kirim pesan ke WhatsApp aku, ya!");
  window.location =
    "https://api.whatsapp.com/send?phone=6289627905164&text=" + pesanwhatsapp;
}

async function pesan() {
  bunyi();
  let timerInterval;
  // 1
  await Swal.fire({
    title: "Hai Kamu 🥰",
    imageUrl: "../Assets/img/Hallo.gif",
    imageHeight: 100,
    imageWidth: 100,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 2
  await Swal.fire({
    title: "Selamat Bertambah Umur ya!",
    imageUrl: "../Assets/img/selamat.gif",
    timer: 2000,
    imageHeight: 100,
    imageWidth: 100,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 3
  await Swal.fire({
    title: "Tambah umur harus makin dewasa ya!",
    imageUrl: "../Assets/img/dewasa.gif",
    timer: 2700,
    imageHeight: 100,
    imageWidth: 100,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 4
  await Swal.fire({
    title: "Semoga yang kamu inginkan tercapai ya!",
    imageUrl: "../Assets/img/keinginan.gif",
    timer: 2700,
    imageHeight: 130,
    imageWidth: 100,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 5
  await Swal.fire({
    title: "Jangan lupa ngerjai skripsi 🤩",
    imageUrl: "../Assets/img/skripsi.gif",
    timer: 2000,
    imageHeight: 100,
    imageWidth: 100,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 6
  await Swal.fire({
    title: "Makasih ya untuk semuanya 😍",
    imageUrl: "../Assets/img/makasih.gif",
    timer: 2500,
    imageHeight: 100,
    imageWidth: 150,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  // 7
  await Swal.fire({
    title: "I Love You 😍",
    imageUrl: "../Assets/img/love.gif",
    timer: 2000,
    imageHeight: 100,
    imageWidth: 150,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  typeWriter();
  document.getElementById("kirim").classList.remove("visually-hidden");
  pesanwhatsapp = "Makasih ayangg ><";
}
