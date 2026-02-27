/* ============================================================
   JOLAN CHAPPAZ — PORTFOLIO APP
   ============================================================ */

(() => {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  // DOM
  const navbar = $("#navbar");
  const views = {
    home: $("#view-home"),
    category: $("#view-category"),
    about: $("#view-about"),
  };

  const navHome = $("#nav-home");
  const btnProjets = $("#btn-projets");
  const btnAbout = $("#btn-about");
  const dropdownMenu = $("#dropdown-projets");
  const homeMedia = $("#home-media");
  const categoryTitle = $("#category-title");
  const filmstripTrack = $("#filmstrip-track");
  const arrowLeft = $("#arrow-left");
  const arrowRight = $("#arrow-right");
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-img");
  const lightboxClose = $("#lightbox-close");
  const contactLinks = $("#contact-links");

  // Mobile
  const mobileBar = $("#mobile-bar");
  const mobileHome = $("#mobile-home");
  const burger = $("#burger");
  const burgerIcon = $("#burger-icon");
  const mobileMenu = $("#mobile-menu");
  const mobileCats = $("#mobile-menu-cats");
  const mobileAbout = $("#mobile-about");

  let currentView = "home";
  let dropdownOpen = false;

  // ===== SETUP: favicon + burger icon =====
  function setupCustomAssets() {
    // Favicon
    if (typeof FAVICON !== "undefined" && FAVICON) {
      $("#favicon-link").href = FAVICON;
    }
    // Burger icon
    if (typeof BURGER_ICON !== "undefined" && BURGER_ICON) {
      burgerIcon.src = BURGER_ICON;
    }
  }

  // ===== NAVBAR STYLE =====
  function updateNavbar(viewName) {
    if (viewName === "home") {
      navbar.classList.add("navbar--overlay");
      document.body.classList.add("home-active");
      if (typeof BURGER_ICON_HOME !== "undefined") burgerIcon.src = BURGER_ICON_HOME;
    } else {
      navbar.classList.remove("navbar--overlay");
      document.body.classList.remove("home-active");
      if (typeof BURGER_ICON !== "undefined") burgerIcon.src = BURGER_ICON;
    }
  }

  // ===== VIEW SWITCHING =====
  function showView(name) {
    closeDropdown();
    closeMobileMenu();

    const prev = views[currentView];
    if (prev) {
      prev.classList.remove("view--visible");
      setTimeout(() => {
        if (!prev.classList.contains("view--visible")) {
          prev.classList.remove("view--active");
        }
      }, 350);
    }

    currentView = name;
    updateNavbar(name);

    const next = views[name];
    setTimeout(() => {
      next.classList.add("view--active");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.classList.add("view--visible");
        });
      });
    }, 50);

    window.scrollTo({ top: 0 });
  }

  // ===== DROPDOWN (desktop) =====
  function openDropdown() {
    dropdownOpen = true;
    dropdownMenu.classList.add("open");
    btnProjets.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    dropdownOpen = false;
    dropdownMenu.classList.remove("open");
    btnProjets.setAttribute("aria-expanded", "false");
  }

  btnProjets.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownOpen ? closeDropdown() : openDropdown();
  });

  document.addEventListener("click", (e) => {
    if (dropdownOpen && !e.target.closest("#nav-dropdown-projets")) closeDropdown();
  });

  // ===== MOBILE MENU =====
  function openMobileMenu() {
    mobileMenu.classList.add("open");
    burger.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
  });

  // ===== NAV EVENTS =====
  navHome.addEventListener("click", (e) => { e.preventDefault(); showView("home"); });
  mobileHome.addEventListener("click", (e) => { e.preventDefault(); showView("home"); });
  btnAbout.addEventListener("click", () => showView("about"));
  mobileAbout.addEventListener("click", () => showView("about"));

  // ===== RENDER MENUS =====
  function renderMenus() {
    // Desktop
    dropdownMenu.innerHTML = CATEGORIES.map(
      (cat) => `<button class="dropdown-item" data-id="${cat.id}">${cat.title}</button>`
    ).join("");

    dropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = CATEGORIES.find((c) => c.id === item.dataset.id);
        if (cat) openCategory(cat);
      });
    });

    // Mobile
    mobileCats.innerHTML = CATEGORIES.map(
      (cat) => `<button class="mobile-menu-cat" data-id="${cat.id}">${cat.title}</button>`
    ).join("");

    mobileCats.querySelectorAll(".mobile-menu-cat").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = CATEGORIES.find((c) => c.id === item.dataset.id);
        if (cat) openCategory(cat);
      });
    });
  }

  // ===== RENDER HOME =====
  function renderHome() {
    if (HOME.type === "video") {
      homeMedia.innerHTML = `
        <video autoplay loop muted playsinline poster="${HOME.poster || ""}">
          <source src="${HOME.src}" type="video/mp4">
        </video>`;
    } else {
      homeMedia.innerHTML = `<img src="${HOME.src}" alt="Jolan Chappaz">`;
    }
    updateNavbar("home");
  }

  // ===== RENDER ABOUT =====
  function renderAbout() {
    $("#about-photo").src = ABOUT.photo;
    $("#about-text").textContent = ABOUT.text;

    const icons = {
      email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg>`,
      instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
      tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12a4 4 0 1 0 4 4V4c1 3 4 4 6 4"/></svg>`,
      youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="4"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg>`,
    };

    const socialKeys = ["email", "instagram", "tiktok", "youtube", "behance"];
    let html = "";
    socialKeys.forEach((key) => {
      const value = ABOUT[key];
      if (!value) return;
      const icon = icons[key] || icons.email;
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      const href = key === "email" ? `mailto:${value}` : value;
      html += `<a href="${href}" class="contact-link" target="${key === "email" ? "_self" : "_blank"}" rel="noopener">${icon} ${label}</a>`;
    });
    contactLinks.innerHTML = html;
  }

  // ===== CATEGORY / FILMSTRIP =====
  function openCategory(cat) {
    categoryTitle.textContent = cat.title;

    filmstripTrack.innerHTML = cat.slides
      .map((slide, i) => {
        if (slide.type === "image") {
          return `<div class="slide slide--image" data-index="${i}">
            <img src="${slide.src}" alt="${cat.title}" loading="lazy" draggable="false">
          </div>`;
        } else {
          return `<div class="slide slide--text" data-index="${i}">
            <p>${slide.content}</p>
          </div>`;
        }
      })
      .join("");

    filmstripTrack.scrollLeft = 0;
    showView("category");

    requestAnimationFrame(() => {
      filmstripTrack.querySelectorAll(".slide").forEach((s, i) => {
        setTimeout(() => s.classList.add("slide--visible"), i * 80);
      });
    });

    filmstripTrack.querySelectorAll(".slide--image").forEach((slide) => {
      slide.addEventListener("click", () => {
        if (filmstripTrack.classList.contains("was-dragging")) return;
        const img = slide.querySelector("img");
        if (img) openLightbox(img.src);
      });
    });
  }

  // Arrows
  arrowLeft.addEventListener("click", () => {
    filmstripTrack.scrollBy({ left: -window.innerWidth * 0.55, behavior: "smooth" });
  });
  arrowRight.addEventListener("click", () => {
    filmstripTrack.scrollBy({ left: window.innerWidth * 0.55, behavior: "smooth" });
  });

  // Drag to scroll
  let isDragging = false, startX = 0, scrollStart = 0, dragDist = 0;

  filmstripTrack.addEventListener("mousedown", (e) => {
    isDragging = true; dragDist = 0;
    startX = e.pageX; scrollStart = filmstripTrack.scrollLeft;
    filmstripTrack.classList.add("is-dragging");
    filmstripTrack.classList.remove("was-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    dragDist = Math.abs(e.pageX - startX);
    filmstripTrack.scrollLeft = scrollStart - (e.pageX - startX);
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    filmstripTrack.classList.remove("is-dragging");
    if (dragDist > 5) {
      filmstripTrack.classList.add("was-dragging");
      setTimeout(() => filmstripTrack.classList.remove("was-dragging"), 50);
    }
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (currentView === "category") {
      if (e.key === "ArrowLeft") filmstripTrack.scrollBy({ left: -300, behavior: "smooth" });
      if (e.key === "ArrowRight") filmstripTrack.scrollBy({ left: 300, behavior: "smooth" });
    }
    if (e.key === "Escape") {
      if (lightbox.classList.contains("active")) closeLightbox();
      else if (mobileMenu.classList.contains("open")) closeMobileMenu();
      else if (dropdownOpen) closeDropdown();
      else if (currentView !== "home") showView("home");
    }
  });

  // ===== LIGHTBOX =====
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  // ===== INIT =====
  setupCustomAssets();
  renderHome();
  renderMenus();
  renderAbout();
})();
