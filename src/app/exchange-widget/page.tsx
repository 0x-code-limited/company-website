import { permanentRedirect } from "next/navigation";

// Project detail moved under /projects/[id]; keep the old URL working.
export default function ExchangeWidgetPage() {
  permanentRedirect("/projects/exchange-widget");
}
