(function () {
    var THEME_KEY = "site-theme";

    function read(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }

    function preferredTheme() {
        var stored = read(THEME_KEY, "");
        if (stored === "dark" || stored === "light") return stored;
        try {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch (e) {
            return "light";
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "dark" ? "#12151c" : "#e6ebf4");
        var btn = document.getElementById("theme-toggle");
        if (btn) {
            btn.setAttribute("aria-label", theme === "dark" ? "Use light theme" : "Use dark theme");
            btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
            btn.setAttribute("title", theme === "dark" ? "Light theme" : "Dark theme");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyTheme(preferredTheme());
        var btn = document.getElementById("theme-toggle");
        if (!btn) return;
        btn.addEventListener("click", function () {
            var next = (document.documentElement.getAttribute("data-theme") || "light") === "dark" ? "light" : "dark";
            write(THEME_KEY, next);
            applyTheme(next);
        });
    });
})();
