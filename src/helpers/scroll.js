export default function scrollToContactForm() {
  const $el = document.querySelector('[data-contact-form]');
  if ($el) {
    $el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    window.location.href = '/#contact';
  }
}
