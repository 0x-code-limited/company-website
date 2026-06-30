"use client";

import { useState } from "react";
import Button from "@/components/ox/Button";
import Input from "@/components/ox/Input";
import Select from "@/components/ox/Select";
import TerminalWindow from "@/components/ox/TerminalWindow";

const EMAIL = "info@0x.company";
const PROJECT_TYPES = ["Custom Software", "Cloud & DevOps", "Mobile Development", "AI & Data", "Not sure yet"];

/**
 * The terminal-framed "new_project.request" panel: a validated request form that
 * opens the visitor's email client with a pre-filled draft to {@link EMAIL}.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ptype, setPtype] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const errName = touched && name.trim() === "";
  const errEmail = touched && !emailOk;
  const errMsg = touched && message.trim().length < 4;

  const submit = () => {
    if (name.trim() === "" || !emailOk || message.trim().length < 4) {
      setTouched(true);
      return;
    }
    const subject = `New project request — ${ptype}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${ptype}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPtype(PROJECT_TYPES[0]);
    setMessage("");
    setTouched(false);
    setSent(false);
  };

  return (
    <TerminalWindow title="new_project.request" bodyStyle={{ padding: 0 }}>
      {sent ? (
        <div style={{ padding: "64px 40px", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(126,201,143,.14)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
            <span style={{ font: "700 26px var(--ox-font-mono)", color: "var(--ox-success)" }}>✓</span>
          </div>
          <h2 style={{ font: "700 26px var(--ox-font-sans)", color: "var(--ox-ink)", margin: "0 0 12px" }}>Request ready to send</h2>
          <p style={{ font: "400 15px/1.6 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: "0 auto 26px", maxWidth: 360 }}>
            Your email draft just opened. If it didn&apos;t, reach us at <span style={{ color: "var(--ox-accent)" }}>{EMAIL}</span>.
          </p>
          <Button variant="secondary" size="sm" arrow onClick={reset}>
            Send another
          </Button>
        </div>
      ) : (
        <div style={{ padding: "30px 34px 34px" }}>
          <Input id="cf-name" label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" error={errName && "please enter your name"} style={{ marginBottom: 20 }} />
          <Input id="cf-email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" error={errEmail && "enter a valid email"} style={{ marginBottom: 20 }} />
          <Select id="cf-type" label="Project type" value={ptype} onChange={(e) => setPtype(e.target.value)} options={PROJECT_TYPES} style={{ marginBottom: 20 }} />
          <Input
            id="cf-message"
            label="What are you building?"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A few sentences about your product or idea…"
            error={errMsg && "tell us a little about the project"}
            style={{ marginBottom: 24 }}
          />
          <Button block arrow onClick={submit}>
            Send request
          </Button>
          <p style={{ font: "400 11.5px var(--ox-font-mono)", color: "var(--ox-text-faint)", margin: "16px 0 0", textAlign: "center" }}>
            Opens your email client · {EMAIL}
          </p>
        </div>
      )}
    </TerminalWindow>
  );
}
