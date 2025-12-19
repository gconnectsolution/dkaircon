const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox();
  }

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  const serviceSelect = document.querySelector('select');
        const whatsappBtn = document.querySelector('.whatsapp-fab');

        serviceSelect.addEventListener('change', (e) => {
            const selectedService = e.target.value;
            const phoneNumber = "9900917611";
            const encodedMsg = encodeURIComponent(`Hello DK Aircon, I need a quote for: ${selectedService}.`);
            
            whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        });
        // Smooth scroll for nav links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
const galleryImages = [
    { src: "4.webp", alt: "AC Installation" },
    
    
    { src: "7.webp", alt: "AMC Service" },
    { src: "8.webp", alt: "Ventilation Systems" },
    
    { src: "11.webp", alt: "HVAC Ducting" },
    { src: "12.webp", alt: "Industrial Chiller" },
    { src: "13.webp", alt: "AMC Service" },
    { src: "14.webp", alt: "Ventilation Systems" },
    { src: "15.webp", alt: "AHU Maintenance" },
    { src: "16.webp", alt: "AC Installation" },
    { src: "17.webp", alt: "HVAC Ducting" },
    { src: "18.webp", alt: "Industrial Chiller" },
    { src: "19.webp", alt: "AMC Service" },
    { src: "20.webp", alt: "Ventilation Systems" },
    
    { src: "22.webp", alt: "AC Installation" },
    { src: "23.webp", alt: "HVAC Ducting" },
    { src: "24.webp", alt: "Industrial Chiller" },
    { src: "25.webp", alt: "AMC Service" },
    { src: "26.webp", alt: "Ventilation Systems" },
    { src: "27.webp", alt: "AHU Maintenance" },
    { src: "28.webp", alt: "AC Installation" },
    { src: "29.webp", alt: "HVAC Ducting" },
    { src: "30.webp", alt: "Industrial Chiller" },
    { src: "31.webp", alt: "AMC Service" },
    { src: "32.webp", alt: "Ventilation Systems" },
    { src: "33.webp", alt: "AHU Maintenance" },
    { src: "34.webp", alt: "AC Installation" },
    { src: "35.webp", alt: "HVAC Ducting" },
    { src: "36.webp", alt: "Industrial Chiller" },
    { src: "37.webp", alt: "AMC Service" },
    { src: "38.webp", alt: "Ventilation Systems" },
    { src: "39.webp", alt: "AHU Maintenance" },
    { src: "40.webp", alt: "AC Installation" },
    { src: "41.webp", alt: "HVAC Ducting" },
    { src: "42.webp", alt: "Industrial Chiller" },
    { src: "43.webp", alt: "AMC Service" },
    { src: "44.webp", alt: "Ventilation Systems" },
    { src: "45.webp", alt: "AHU Maintenance" },
    { src: "46.webp", alt: "AC Installation" },
    
    { src: "48.webp", alt: "Industrial Chiller" },
    
    { src: "50.webp", alt: "Ventilation Systems" },
    
    { src: "52.webp", alt: "AC Installation" },
    { src: "53.webp", alt: "HVAC Ducting" },
    { src: "54.webp", alt: "Industrial Chiller" },
    { src: "55.webp", alt: "AMC Service" }
  ];

  const galleryGrid = document.getElementById("galleryGrid");
const mainDisplay = document.getElementById("mainDisplay");
const imageCaption = document.getElementById("imageCaption");

galleryImages.forEach((img, index) => {
  const thumb = document.createElement("img");
  thumb.src = img.src;
  thumb.alt = img.alt;
  thumb.classList.add("gallery-img");
  
  if (index === 0) thumb.classList.add("active");

  thumb.addEventListener("click", () => {
    // Change main image
    mainDisplay.style.opacity = "0.5"; // Quick flicker effect
    setTimeout(() => {
      mainDisplay.src = img.src;
      mainDisplay.style.opacity = "1";
    }, 150);

    // Update active state
    document.querySelectorAll(".gallery-img").forEach(el => el.classList.remove("active"));
    thumb.classList.add("active");
    
    // Auto-scroll the thumbnail into view
    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  galleryGrid.appendChild(thumb);
});

document.getElementById("lead").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const res = await fetch("/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Enquiry sent successfully");
      e.target.reset();
    } else {
      alert("Failed to send enquiry");
    }
  });
