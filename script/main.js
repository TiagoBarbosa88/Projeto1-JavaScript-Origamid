function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabMenu li");
    const tabContent = document.querySelectorAll(".js-tabContent section");
    const activeTabNav = "ativo";

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeTabNav);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeTabNav);
            });
            tabContent[index].classList.add(activeTabNav);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionLista = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if (accordionLista.length) {
        accordionLista[0].classList.add(activeClass);
        accordionLista[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionLista.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Forma Alternativa de Scroll Suave

        /*   const topo = section.offsetTop;
                                                                    window.scrollTo({
                                                                    top: topo,
                                                                    behavior: "smooth",
                                                                    }); */
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

    if (sections.length) {
        const windowMedade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const IsSectionVisible = sectionTop - windowMedade < 0;
                if (IsSectionVisible) section.classList.add("ativo");
                else section.classList.remove("ativo");
            });
        }
        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}

initAnimacaoScroll();