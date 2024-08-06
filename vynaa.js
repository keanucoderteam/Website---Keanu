
// Objek untuk menyimpan pengaturan
const settings = {
    title: "Jubair Keanu R | Always happy",
    metaTitle: "Jubair Keanu R || Always happy",
    metaDescription: "Developer & Creator",
    metaKeywords: " Keanu, profil, siapa Keanu?",
    metaRobots: "index, follow",
    profileImage: "media/profile.jpg",
    name: "Vynaa Valerie ",
    occupation: "Creator & Developer",
    location: "📍 Pekanbaru, Riau, Indonesia",
    socialLinks: [
        { name: "Instagram", url: "https://instagram.com/KEANU_03" },
        { name: "WhatsApp", url: "https://wa.me/qr/GD6A3XDW3G7XI1" },
        { name: "Saluran", url: "https://whatsapp.com/channel/0029Vah35fYDZ4LeGZSgL73P" },
        { name: "Website", url: "https://s.id/26oHR" },
        { name: "Donasi", url: "https://saweria.co/keanucoderteam" },
        { name: "Github", url: "https://github.com/keanucoderteam" }
        // Tambahkan link sosial lainnya di sini
    ]
};

// Fungsi untuk mengisi konten halaman dari settings.js
function fillContent() {
    document.title = settings.title;
    document.getElementById("meta-title").setAttribute("content", settings.metaTitle);
    document.getElementById("meta-description").setAttribute("content", settings.metaDescription);
    document.getElementById("meta-keywords").setAttribute("content", settings.metaKeywords);
    document.getElementById("meta-robots").setAttribute("content", settings.metaRobots);
    document.getElementById("profile-image").setAttribute("src", settings.profileImage);
    document.querySelector(".name").textContent = settings.name;
    document.getElementById("occupation").textContent = settings.occupation;
    document.getElementById("location").innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${settings.location}`;

    const socialLinksContainer = document.getElementById("social-links");
    settings.socialLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);
        linkElement.setAttribute("target", "_blank");
        linkElement.textContent = link.name;
        socialLinksContainer.appendChild(linkElement);
    });

    // Menambahkan centang hijau
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    document.querySelector(".verified").appendChild(checkmark);
}

// Memanggil fungsi untuk mengisi konten saat halaman dimuat
fillContent();
