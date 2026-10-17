
/* =========================================
   SRI GARUDA VIHAR
   Shared navigation and menu functionality
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------
  // MOBILE NAVIGATION
  // -----------------------------------------

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  function closeNavigation() {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open") ?? false;

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    document.body.classList.toggle("menu-open", isOpen);
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();

      // Only manage active states for same-page section links.
      if (link.getAttribute("href")?.startsWith("#")) {
        navItems.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  // -----------------------------------------
  // CURRENT YEAR
  // -----------------------------------------

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // -----------------------------------------
  // HOMEPAGE ACTIVE NAVIGATION ON SCROLL
  // -----------------------------------------

  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;

          navItems.forEach((link) => {
            const href = link.getAttribute("href");
            const isActive = href === `#${sectionId}`;

            if (href?.startsWith("#")) {
              link.classList.toggle("active", isActive);
            }
          });
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // -----------------------------------------
  // FULL MENU DATA
  // -----------------------------------------
  // Only the breakfast combo price is confirmed.
  // Other prices remain "Ask in store".
  // Images are illustrative; replace with
  // restaurant-approved photos when available.

  const dishes = [
    {
      name: "Breakfast Combo",
      category: "Breakfast",
      description:
        "Idly, vada, poori (2) or masala dosa, pongal, sambar, chutney and veg kurma.",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Traditional Indian vegetarian breakfast",
      searchTerms: "morning tiffin idli poori pongal vada combo"
    },
    {
      name: "Idly",
      category: "Breakfast",
      description: "Steamed rice cakes served with sambar and chutney.",
      price: null,
      searchTerms: "idli steamed rice cakes"
    },
    {
      name: "Vada",
      category: "Breakfast",
      description: "South Indian savoury vada.",
      price: null,
      searchTerms: "medu vada wada"
    },
    {
      name: "Poori",
      category: "Breakfast",
      description: "Poori served with vegetable kurma.",
      price: null,
      searchTerms: "puri poori kurma"
    },
    {
      name: "Pongal",
      category: "Breakfast",
      description: "Traditional South Indian pongal.",
      price: null,
      searchTerms: "ven pongal"
    },
    {
      name: "Dosa",
      category: "South Indian",
      description: "South Indian dosa served with accompaniments.",
      price: null,
      searchTerms: "plain dosa dosai"
    },
    {
      name: "Masala Dosa",
      category: "South Indian",
      description: "Dosa filled with spiced potato masala.",
      price: null,
      searchTerms: "potato dosa"
    },
    {
      name: "Veg Meals",
      category: "Meals & Thali",
      description: "A vegetarian meal.",
      price: null,
      searchTerms: "vegetarian meal rice curry"
    },
    {
      name: "Veg Thali",
      category: "Meals & Thali",
      description: "A selection of vegetarian dishes served together.",
      price: null,
      searchTerms: "thali full meal"
    },
    {
      name: "Chapati",
      category: "Meals & Thali",
      description: "Indian flatbread served with curry.",
      price: null,
      searchTerms: "chapathi roti"
    },
    {
      name: "Fried Rice",
      category: "Rice",
      description: "Vegetable fried rice.",
      price: null,
      searchTerms: "veg fried rice"
    },
    {
      name: "Jeera Rice",
      category: "Rice",
      description: "Rice flavoured with cumin.",
      price: null,
      searchTerms: "cumin rice"
    },
    {
      name: "Gobi Fried Rice",
      category: "Rice",
      description: "Fried rice with cauliflower.",
      price: null,
      searchTerms: "cauliflower gobi rice"
    },
    {
      name: "Mushroom Rice",
      category: "Rice",
      description: "Rice prepared with mushrooms.",
      price: null,
      searchTerms: "mushroom rice"
    },
    {
      name: "Paneer Rice",
      category: "Rice",
      description: "Rice prepared with paneer.",
      price: null,
      searchTerms: "paneer cottage cheese rice"
    },
    {
      name: "Veg Noodles",
      category: "Chinese",
      description: "Noodles tossed with vegetables.",
      price: null,
      searchTerms: "vegetable noodles chow mein"
    },
    {
      name: "Gobi Noodles",
      category: "Chinese",
      description: "Noodles with cauliflower.",
      price: null,
      searchTerms: "gobi cauliflower noodles"
    },
    {
      name: "Gobi 65",
      category: "Chinese",
      description: "Spiced cauliflower starter.",
      price: null,
      searchTerms: "gobi 65 cauliflower starter"
    },
    {
      name: "Gobi Chilli",
      category: "Chinese",
      description: "Cauliflower prepared with chilli seasoning.",
      price: null,
      searchTerms: "chilli gobi cauliflower"
    },
    {
      name: "Paneer Chilli",
      category: "Chinese",
      description: "Paneer prepared with chilli seasoning.",
      price: null,
      searchTerms: "paneer chili chilli"
    },
    {
      name: "Mushroom Chilli",
      category: "Chinese",
      description: "Mushrooms prepared with chilli seasoning.",
      price: null,
      searchTerms: "mushroom chilli chili"
    },
    {
      name: "Apricot Delight",
      category: "Desserts",
      description: "Apricot-based dessert.",
      price: null,
      searchTerms: "apricot delight sweet"
    },
    {
      name: "Strawberry Malai",
      category: "Desserts",
      description: "Creamy strawberry dessert.",
      price: null,
      searchTerms: "strawberry malai cream"
    },
    {
      name: "Fruits Cream",
      category: "Desserts",
      description: "Fruit dessert with cream.",
      price: null,
      searchTerms: "fruit cream fresh fruits"
    }
  ];

  // -----------------------------------------
  // MENU PAGE SEARCH AND FILTERING
  // -----------------------------------------

  const menuGrid = document.getElementById("menuGrid");
  const menuSearch = document.getElementById("menuSearch");
  const menuFilters = document.getElementById("menuFilters");
  const menuResultCount = document.getElementById("menuResultCount");
  const menuEmpty = document.getElementById("menuEmpty");
  const resetMenu = document.getElementById("resetMenu");

  let activeCategory = "All";
  let searchQuery = "";

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return entities[character];
    });
  }

  function createDishRow(dish) {
    const safeName = escapeHTML(dish.name);
    const safeDescription = escapeHTML(dish.description);
    const safeCategory = escapeHTML(dish.category);
    const safeSearchTerms = escapeHTML(dish.searchTerms || "");
    const safePrice = dish.price
      ? escapeHTML(dish.price)
      : "Ask in store";

    return `
      <article
        class="menu-dish-row"
        data-name="${safeName}"
        data-category="${safeCategory}"
        data-search="${safeSearchTerms}"
      >
        <div class="menu-dish-info">
          <h3>${safeName}</h3>
          <p>${safeDescription}</p>
        </div>

        <span class="menu-dish-price">${safePrice}</span>
      </article>
    `;
  }

  function renderMenu() {
    if (!menuGrid) return;

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredDishes = dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" ||
        dish.category === activeCategory;

      const searchableText = [
        dish.name,
        dish.category,
        dish.description,
        dish.searchTerms || ""
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedQuery)
      );
    });

    menuGrid.innerHTML = filteredDishes
      .map(createDishRow)
      .join("");

    if (menuResultCount) {
      menuResultCount.textContent =
        normalizedQuery || activeCategory !== "All"
          ? `${filteredDishes.length} ${
              filteredDishes.length === 1 ? "dish" : "dishes"
            } found`
          : "Explore our menu";
    }

    if (menuEmpty) {
      menuEmpty.hidden = filteredDishes.length > 0;
    }

    menuGrid.hidden = filteredDishes.length === 0;
  }

  menuSearch?.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderMenu();
  });

  menuFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category || "All";

    menuFilters.querySelectorAll(".filter-button").forEach((item) => {
      const isActive = item === button;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderMenu();
  });

  function resetMenuFilters() {
    activeCategory = "All";
    searchQuery = "";

    if (menuSearch) menuSearch.value = "";

    menuFilters?.querySelectorAll(".filter-button").forEach((button) => {
      const isActive = button.dataset.category === "All";

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderMenu();
  }

  resetMenu?.addEventListener("click", resetMenuFilters);

  menuFilters?.querySelectorAll(".filter-button").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === "All")
    );
  });

  renderMenu();
});


/* SRI GARUDA VIHAR - 2026 UPGRADE SCRIPT
   Load AFTER script.js */

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Scroll progress bar + header shrink
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);
  const header = document.querySelector(".site-header");

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    header?.classList.toggle("scrolled", scrollY > 40);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2. Scroll-reveal for all major blocks
  const targets = document.querySelectorAll(
    ".section-heading, .intro-visual, .intro-content, .feature-card, .menu-preview-copy, " +
    ".menu-preview-card, .breakfast-image, .breakfast-content, .gallery-item, .feedback-card, " +
    ".contact-copy, .contact-visual, .menu-category-heading, .menu-category-photo, .menu-dish-row, .quick-detail"
  );
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visible");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 90 + "ms"; // stagger
      io.observe(el);
    });
  }

  // 3. Hero: floating glow dots + parallax
  const hero = document.querySelector(".hero-background");
  if (hero && !reduceMotion) {
    [[12, 70, 90], [55, 20, 60], [85, 75, 110], [35, 40, 50]].forEach(([x, y, s], i) => {
      const d = document.createElement("span");
      d.className = "hero-dot";
      Object.assign(d.style, { left: x + "%", top: y + "%", width: s + "px", height: s + "px", animationDelay: i * 1.6 + "s" });
      hero.appendChild(d);
    });
    addEventListener("scroll", () => {
      const c = hero.querySelector(".hero-content");
      if (c && scrollY < 700) c.style.transform = `translateY(${scrollY * 0.12}px)`;
    }, { passive: true });
  }

  // 4. Marquee strip under the hero (homepage only)
  if (hero) {
    const items = ["Pure Veg", "Crispy Dosa", "Soft Idly", "Full Meals", "Hot Poori", "Sweet Desserts", "Free Wi-Fi", "Near Railway Station"];
    const html = items.map((t) => `<span>✳ ${t}</span>`).join("");
    const m = document.createElement("div");
    m.className = "marquee";
    m.setAttribute("aria-hidden", "true");
    m.innerHTML = `<div class="marquee-track">${html}${html}</div>`;
    hero.insertAdjacentElement("afterend", m);
  }

  // 5. 3D tilt on cards
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".feature-card, .feedback-card, .menu-preview-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }

  // 6. Dish photos + veg badge on menu rows
  // Put your own photos in an /images folder named exactly like this.
  // If a file is missing, the thumbnail simply hides itself.
  const dishPhotos = {
    "breakfast combo": "breakfast-combo", "dosa": "dosa", "masala dosa": "masala-dosa",
    "veg meals": "veg-meals", "veg thali": "veg-thali", "chapati": "chapati",
    "fried rice": "fried-rice", "jeera rice": "jeera-rice", "gobi fried rice": "gobi-fried-rice",
    "mushroom rice": "mushroom-rice", "paneer rice": "paneer-rice",
    "veg noodles": "veg-noodles", "gobi noodles": "gobi-noodles", "gobi 65": "gobi-65",
    "gobi chilli": "gobi-chilli", "paneer chilli": "paneer-chilli", "mushroom chilli": "mushroom-chilli",
    "apricot delight": "apricot-delight", "strawberry malai": "strawberry-malai", "fruits cream": "fruits-cream"
  };

  document.querySelectorAll(".menu-dish-row").forEach((row) => {
    const h3 = row.querySelector("h3");
    if (!h3) return;
    const name = h3.textContent.trim();
    h3.insertAdjacentHTML("afterbegin", '<span class="veg-badge" title="Pure vegetarian"></span>');

    const file = dishPhotos[name.toLowerCase()];
    if (!file) return;
    const wrap = document.createElement("div");
    wrap.className = "dish-photo";
    const img = new Image();
    img.src = `images/${file}.jpg`;
    img.alt = name;
    img.loading = "lazy";
    img.onload = () => row.insertBefore(wrap, row.firstChild);
    wrap.appendChild(img);
  });

  // 7. Floating WhatsApp button
  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = "https://wa.me/918790245669?text=Hello%20Sri%20Garuda%20Vihar%2C%20I%20would%20like%20to%20enquire.";
  wa.target = "_blank";
  wa.rel = "noopener noreferrer";
  wa.setAttribute("aria-label", "Chat on WhatsApp");
  wa.textContent = "💬";
  document.body.appendChild(wa);
});