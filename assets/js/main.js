import("../scss/style.scss").catch(() => {});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const revealItems = document.querySelectorAll(".reveal");
  const slotButtons = document.querySelectorAll(".slot-picker__item");
  const selectedSlotInput = document.getElementById("selected-slot");
  const formNote = document.getElementById("form-note");
  const bookingForm = document.getElementById("booking-form");
  const yearNode = document.getElementById("year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const renderFormNote = (message, highlight) => {
    if (!formNote) {
      return;
    }

    formNote.textContent = message;

    if (highlight) {
      const strong = document.createElement("strong");
      strong.textContent = highlight;
      formNote.append(" ");
      formNote.appendChild(strong);
    }
  };

  const setHeaderState = () => {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  slotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      slotButtons.forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");

      const slot = button.dataset.slot || "";

      if (selectedSlotInput) {
        selectedSlotInput.value = slot;
      }

      renderFormNote("Выбрано время:", slot);
    });
  });

  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(bookingForm);
      const name = formData.get("name");
      const service = formData.get("service");
      const slot = formData.get("slot");

      if (formNote) {
        formNote.textContent = `Спасибо, ${name}. Заявка на ${service} в ${slot} принята. Мы скоро свяжемся с вами.`;
      }

      bookingForm.reset();

      if (selectedSlotInput) {
        selectedSlotInput.value = "10:30";
      }

      slotButtons.forEach((item) => {
        item.classList.toggle("is-selected", item.dataset.slot === "10:30");
      });

      window.setTimeout(() => {
        renderFormNote("Выбрано время:", "10:30");
      }, 2600);
    });
  }
});
