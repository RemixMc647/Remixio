// No extra JS required for the static trending cards.

// No extra JS required for the static trending cards.


// ===============================
// NEWSLETTER SUBSCRIBE (Mailchimp)
// ===============================

(function () {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const message = document.getElementById('newsletter-message');

  if (!form || !emailInput || !message) return;

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', function (e) {
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      e.preventDefault();
      message.textContent = 'Please enter a valid email address.';
      message.style.color = '#ff5b5b';
      return;
    }

    if (form.action.includes('YOUR_MAILCHIMP_ACTION_URL')) {
      e.preventDefault();
      message.textContent = 'Newsletter is not connected yet — add your Mailchimp form action URL in the HTML.';
      message.style.color = '#ff5b5b';
      return;
    }

    // Valid email + real Mailchimp URL configured: let the form submit
    // (opens Mailchimp's confirmation page in a new tab), and show a
    // friendly message on this page too.
    message.textContent = 'Thanks for subscribing! Check the new tab to confirm.';
    message.style.color = '#00e676';
    emailInput.value = '';
  });
})();
