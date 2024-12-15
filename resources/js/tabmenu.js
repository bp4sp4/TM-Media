document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabbed-products__tab");
  const panels = document.querySelectorAll(".tabbed-products__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("tabbed-products__tab--active"));
      panels.forEach((panel) =>
        panel.classList.remove("tabbed-products__panel--active")
      );

      tab.classList.add("tabbed-products__tab--active");
      const target = tab.getAttribute("data-tab");
      document
        .getElementById(target)
        .classList.add("tabbed-products__panel--active");
    });
  });

  // 초기 상태: 첫 번째 탭 활성화
  tabs[0].classList.add("tabbed-products__tab--active");
  panels[0].classList.add("tabbed-products__panel--active");
});
