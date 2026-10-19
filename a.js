<button id="theme-toggle" class="theme-button">Växla tema</button>

<script>
const root = document.documentElement; // <html>
const toggle = document.getElementById("theme-toggle");

// Hämta sparat val, annars systemets inställning
const saved = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.setAttribute("data-theme", saved || (systemDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});
</script>