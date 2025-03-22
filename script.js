document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio website loaded!");
});

function showProfile(member, imageSrc) {
  let profiles = {
    riska: {
      name: "Riska Dwi R.",
      role: "Web Developer",
      description:
        "Riska adalah seorang Mahasiswa dan Web Developer berpengalaman dalam membuat beberapa website , dan lumayan ahli dalam HTML, CSS, JavaScript, dan PHP.",
    },
    iis: {
      name: "Iis Muzdalifah",
      role: "Designer",
      description:
        "Iis adalah seorang Mahasiswa dan Designer berbakat dengan keahlian dalam desain UI/UX.",
    },
    amar: {
      name: "Amar Yusnain",
      role: "Content Writer",
      description:
        "Amar adalah seorang Content Writer yang ahli dalam menulis artikel kreatif.",
    },
    haikal: {
      name: "M. Haikal",
      role: "Debugging",
      description:
        "Haikal adalah ahli debugging yang memastikan semua kode berjalan dengan baik.",
    },
    muslim: {
      name: "Bukhari Muslim",
      role: "Analisis",
      description:
        "Bukhari adalah ahli dalam melakukan analisis terhadap website.",
    },
  };

  let mainContent = document.getElementById("main-content");
  let profileContent = document.getElementById("profile-content");
  let profileInfo = document.getElementById("profile-info");

  // Sembunyikan main content dengan transisi
  mainContent.classList.add("hidden");

  // Tampilkan profil setelah sedikit delay
  setTimeout(() => {
    mainContent.style.display = "none";
    profileInfo.innerHTML = `
            <img src="${imageSrc}" alt="${profiles[member].name}">
            <h1>${profiles[member].name}</h1>
            <h3>${profiles[member].role}</h3>
            <p>${profiles[member].description}</p>
        `;
    profileContent.style.display = "block";
    profileContent.classList.remove("hidden");
    profileContent.classList.add("visible");
  }, 500);
}

function backToMain() {
  let mainContent = document.getElementById("main-content");
  let profileContent = document.getElementById("profile-content");

  // Sembunyikan profil dengan transisi
  profileContent.classList.remove("visible");
  profileContent.classList.add("hidden");

  // Tampilkan main content setelah sedikit delay
  setTimeout(() => {
    profileContent.style.display = "none";
    mainContent.style.display = "block";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("visible");
  }, 500);
}
