export default function scrollToContactForm() {
  const $el = document.querySelector('[data-contact-form]');
  $el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}