/* =====================================================================
   SwachhSense — route guard for protected pages
   Include on: dashboard.html, facilities.html, technology.html, team.html
   ---------------------------------------------------------------------
   • Hides the page until Firebase confirms the auth state (no flash
     of protected content).
   • Redirects signed-out visitors to login.html.
   • Fills every [data-user-email] element with the signed-in user.
   • Wires every [data-logout] button to sign out → login.html.
===================================================================== */
(function () {
  // Hide content until we know who's asking.
  document.documentElement.style.visibility = "hidden";

  auth.onAuthStateChanged((user) => {
    if (!user) {
      // Not signed in → go to login (replace so Back doesn't loop).
      window.location.replace("login.html");
      return;
    }
    // Signed in → reveal the page and show who's logged in.
    document.documentElement.style.visibility = "";
    const label = user.displayName || user.email;
    document.querySelectorAll("[data-user-email]").forEach((el) => {
      el.textContent = label;
      el.title = user.email;
    });
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-logout]");
    if (!btn) return;
    auth.signOut().then(() => window.location.replace("login.html"));
  });
})();
