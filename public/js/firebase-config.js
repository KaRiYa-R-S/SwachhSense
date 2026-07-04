/* =====================================================================
   SwachhSense — Firebase configuration
   ---------------------------------------------------------------------
   HOW TO GET THESE VALUES (one team member does this once):
   1. Go to https://console.firebase.google.com → "Add project"
      → name it e.g. "swachhsense" (Analytics can be disabled).
   2. In the project: click the </> (Web) icon → register app "swachhsense-web".
   3. Copy the firebaseConfig object it shows you and paste it below,
      replacing the placeholder values.
   4. In the console: Build → Authentication → Get started →
      Sign-in method → enable "Email/Password".
   That's it — login/signup will start working immediately.
===================================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyAEITIsfs2NywddK0dOj634RtGjM7WVOlo",
  authDomain: "smart-public-toilet-monitoring.firebaseapp.com",
  projectId: "smart-public-toilet-monitoring",
  storageBucket: "smart-public-toilet-monitoring.firebasestorage.app",
  messagingSenderId: "277040909134",
  appId: "1:277040909134:web:d0325c8b351270ffc4ac1f",
  measurementId: "G-JF79FX4ZFV"
};

// Initialise Firebase (compat SDK — loaded via CDN in each page's <head>)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
