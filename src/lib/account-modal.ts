// Cross-component trigger for the "create account" modal that lives in the
// footer. Any CTA can call `openAccountModal()` to scroll the page to the
// footer and then pop the form open.

export const OPEN_ACCOUNT_EVENT = "buckspay:open-account";

export function openAccountModal() {
  if (typeof window === "undefined") return;
  // Reveal the curtain footer first, then open the form once the scroll lands.
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent(OPEN_ACCOUNT_EVENT));
  }, 550);
}
