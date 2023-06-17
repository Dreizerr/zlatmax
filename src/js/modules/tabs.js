const allTabs = document.querySelectorAll(`.tabs`);

if (allTabs.length) {
  allTabs.forEach((tabs) => {
    const blockLinks = tabs.querySelector(`.tabs__block-links`);
    const blockBodys = tabs.querySelector(`.tabs__block-body`);
    const links = blockLinks.querySelectorAll(`.tabs__link`);

    tabs.addEventListener("click", (e) => {
      if (e.target.closest(`[data-tab]`)) {
        const targetElement = e.target;
        const tab = targetElement.dataset.tab;
        const activeLink = blockLinks.querySelector(`.active`);
        const activeBody = blockBodys.querySelector(`.active`);

        if (targetElement.classList.contains("active")) {
          return false;
        }

        if (blockBodys.querySelector(`[data-tab-body="${tab}"]`)) {
          const tabBody = blockBodys.querySelector(`[data-tab-body="${tab}"]`);
          targetElement.classList.add("active");
          tabBody.classList.add("active");
        } else {
          return false;
        }

        if (activeLink || activeBody) {
          activeLink.classList.remove("active");
          activeBody.classList.remove("active");
        }
      }
    });
  });
}
