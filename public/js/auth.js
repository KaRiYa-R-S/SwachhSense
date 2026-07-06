/* =====================================================================
   SwachhSense — authentication controller (login.html / signup.html)
   Uses the Firebase Auth compat SDK initialised in firebase-config.js.
===================================================================== */
(function () {
  const $ = (id) => document.getElementById(id);

  // If someone who is already signed in lands on login/signup,
  // send them straight to the dashboard.
  auth.onAuthStateChanged((user) => {
    if (user) window.location.replace("dashboard.html");
  });

  // Map Firebase error codes to friendly, specific messages.
  function friendly(err) {
    const map = {
      "auth/invalid-email": "That email address doesn't look valid.",
      "auth/missing-password": "Please enter your password.",
      "auth/weak-password": "Password must be at least 6 characters.",
      "auth/email-already-in-use": "An account with this email already exists — try logging in.",
      "auth/user-not-found": "No account found with this email. Create one first.",
      "auth/wrong-password": "Incorrect password. Try again.",
      "auth/invalid-credential": "Email or password is incorrect.",
      "auth/too-many-requests": "Too many attempts. Wait a minute and try again.",
      "auth/network-request-failed": "Network error — check your connection.",
      "auth/configuration-not-found": "Firebase isn't configured yet — paste your project keys into js/firebase-config.js and enable Email/Password sign-in.",
      "auth/invalid-api-key": "Firebase isn't configured yet — paste your project keys into js/firebase-config.js."
    };
    return map[err.code] || err.message || "Something went wrong. Try again.";
  }

  function showError(msg) {
    const box = $("auth-error");
    box.textContent = msg;
    box.classList.add("show");
  }
  function clearError() {
    const box = $("auth-error");
    box.textContent = "";
    box.classList.remove("show");
  }
  function busy(btn, on, labelBusy, labelIdle) {
    btn.disabled = on;
    btn.textContent = on ? labelBusy : labelIdle;
  }

  /* ---------- SIGNUP ---------- */
  const signupBtn = $("btn-signup");
  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      clearError();
      const name = $("su-name").value.trim();
      const email = $("su-email").value.trim();
      const pass = $("su-pass").value;
      const pass2 = $("su-pass2").value;

      if (!name) return showError("Please enter your full name.");
      if (!email) return showError("Please enter your email address.");
      if (pass.length < 6) return showError("Password must be at least 6 characters.");
      if (pass !== pass2) return showError("Passwords don't match.");

      busy(signupBtn, true, "Creating account…", "Create account");
      try {
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        await cred.user.updateProfile({ displayName: name });
        window.location.replace("dashboard.html");
      } catch (err) {
        showError(friendly(err));
        busy(signupBtn, false, "", "Create account");
      }
    });
  }

  /* ---------- LOGIN ---------- */
  const loginBtn = $("btn-login");
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      clearError();
      const email = $("li-email").value.trim();
      const pass = $("li-pass").value;
      if (!email) return showError("Please enter your email address.");
      if (!pass) return showError("Please enter your password.");

      busy(loginBtn, true, "Signing in…", "Log in");
      try {
        await auth.signInWithEmailAndPassword(email, pass);
        window.location.replace("dashboard.html");
      } catch (err) {
        showError(friendly(err));
        busy(loginBtn, false, "", "Log in");
      }
    });

    // Enter key submits the login form.
    ["li-email", "li-pass"].forEach((id) => {
      $(id).addEventListener("keydown", (e) => {
        if (e.key === "Enter") loginBtn.click();
      });
    });
  }
})();
