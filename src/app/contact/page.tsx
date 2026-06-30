import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/ox/Eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell 0x Code Limited about your product or idea — no sales funnel, you'll hear back from the people who'd actually build it within 1–2 business days.",
};

const detailLabel = { font: "500 11px var(--ox-font-mono)", color: "var(--ox-text-faint)", marginBottom: 6 } as const;
const detailValue = { font: "600 16px var(--ox-font-sans)", color: "var(--ox-ink)" } as const;
const detailRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "22px 24px",
  borderBottom: "1px solid var(--ox-line)",
} as const;

export default function ContactPage() {
  return (
    <main className="ox-container">
      <div className="ox-contact-grid">
        <div>
          <Eyebrow style={{ marginBottom: 22 }}>0x.contact</Eyebrow>
          <h1
            className="ox-h1"
            style={{ font: "700 56px/1.04 var(--ox-font-sans)", letterSpacing: "-.025em", margin: "0 0 22px", color: "var(--ox-ink)" }}
          >
            Let&apos;s build something great.
          </h1>
          <p style={{ font: "400 17px/1.7 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: "0 0 40px", maxWidth: 440 }}>
            Tell us about your product or idea and we&apos;ll get back within 1–2 business days. No sales funnel — you&apos;ll
            hear from the people who&apos;d actually build it.
          </p>
          <div style={{ border: "1px solid var(--ox-line)", borderRadius: 12, overflow: "hidden" }}>
            <a href="mailto:info@0x.company" className="ox-row-link" style={detailRow}>
              <div>
                <div style={detailLabel}>EMAIL</div>
                <div style={detailValue}>info@0x.company</div>
              </div>
              <span style={{ font: "600 18px var(--ox-font-mono)", color: "var(--ox-accent)" }}>→</span>
            </a>
            <div style={detailRow}>
              <div>
                <div style={detailLabel}>RESPONSE TIME</div>
                <div style={detailValue}>1–2 business days</div>
              </div>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--ox-success)", boxShadow: "0 0 0 4px rgba(126,201,143,.18)" }} />
            </div>
            <div style={{ padding: "22px 24px" }}>
              <div style={detailLabel}>BASED IN</div>
              <div style={detailValue}>British Columbia, Canada</div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
