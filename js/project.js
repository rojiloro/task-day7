// post project
let dataProject = [];

function addProject(event) {
  event.preventDefault();
  // deklarasi variabel
  let nama = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("input-project-image").files;

  // Mencari durasi project
  let mulai = new Date(startDate);
  let akhir = new Date(endDate);
  let selisih = akhir.getTime() - mulai.getTime();
  let durasi = Math.ceil(selisih / (1000 * 3600 * 24 * 30));

  // icon
  const playstorejsIcon = '<i class="fa-brands fa-google-play"></i>';
  const androidjsIcon = '<i class="fa-brands fa-android"></i>';
  const javajsIcon = '<i class="fa-brands fa-java"></i>';
  const reactIcon = '<i class="fa-brands fa-react"></i>';

  // cek checkbox

  let cbPlaystorejs = document.getElementById("playstore").checked ? playstorejsIcon : "";
  let cbAndroidjs = document.getElementById("android").checked ? androidjsIcon : "";
  let cbJavajs = document.getElementById("java").checked ? javajsIcon : "";
  let cbReactjs = document.getElementById("react").checked ? reactIcon : "";

  // cek kondisi image
  let imageURL = URL.createObjectURL(image[0]);
  // if (image.target.files.length !== 0) {
  //   this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  // }

  let data = {
    nama,
    startDate,
    endDate,
    durasi,
    cbPlaystorejs,
    cbAndroidjs,
    cbJavajs,
    cbReactjs,
    description,
    imageURL,
    postAt: new Date(),
  };

  dataProject.push(data);
  console.log(dataProject);

  renderProject();
}

function renderProject() {
  document.getElementById("wadah").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("wadah").innerHTML += `
   <div class="wadah">
          <div class="card">
            <img src="${dataProject[index].imageURL}" alt="tampil">
            <div class="spasi">
              <a class="judul" href="project-detail.html"><p> ${dataProject[index].nama}</p></a>
              <p class="durasi">durasi : ${dataProject[index].durasi} bulan</p>
            </div>
            <p class="detail">${dataProject[index].description}</p>
            <div class="icon" id="icon">
              ${dataProject[index].cbPlaystorejs}
              ${dataProject[index].cbAndroidjs}
              ${dataProject[index].cbJavajs}
              ${dataProject[index].cbReactjs}
            </div>
            <div class = "waktu">
              <p>${getFullTime(dataProject[index].postAt)}</p>
            </div>

            <div class="btn">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>
   `;
  }
}

function getFullTime(time) {
  let bulan = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  let pekan = ["week 1", "week 2", "week 3", "week 4"];
  let tanggal = time.getDate();
  let indexBulan = time.getMonth();
  let tahun = time.getFullYear();

  if (tanggal <= 7) {
    pekan = pekan[0];
  } else if (tanggal <= 14) {
    pekan = pekan[1];
  } else if (tanggal <= 21) {
    pekan = pekan[2];
  } else if (tanggal <= 31) {
    pekan = pekan[3];
  }
  return `date ${tanggal} , ${pekan} , ${bulan[indexBulan]} , ${tahun}`;
  console.log(time);
}
