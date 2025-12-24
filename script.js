
// Track button clicks for Facebook Pixel
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('a[href="#"]');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      fbq('track', 'InitiateCheckout');
    });
  }
});
