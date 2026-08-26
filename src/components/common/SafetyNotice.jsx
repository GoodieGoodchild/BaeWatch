import React from 'react';

// Safety disclosure for the app's sensitive flows (Repair, Understanding Me).
// Bae Watch is reflection and coaching — not therapy, and never a substitute
// for real help. The abuse line matters most: Gottman-style repair assumes
// non-abusive conflict, and "own your part" coaching must never be handed to
// someone who is afraid of their partner.
export default function SafetyNotice({ showAbuseLine = false }) {
  return (
    <div className="mt-6 rounded-2xl border border-bae-peach/50 bg-bae-warm-white p-4 text-[12px] leading-relaxed text-bae-navy/60">
      <p className="mb-1">
        <strong className="text-bae-navy/80">Bae Watch is reflection, not therapy.</strong>{' '}
        These are patterns and prompts, never diagnoses. If things feel heavier than an app
        should hold, a professional is the right next step.
      </p>
      {showAbuseLine && (
        <p className="mb-1">
          <strong className="text-bae-navy/80">If you ever feel afraid of your partner,</strong>{' '}
          this guide is not for that — fear is not a communication problem, and no part of it is
          yours to "own." Please reach out to the support lines below instead.
        </p>
      )}
      <p className="mb-0">
        🇿🇦 SADAG mental-health line: <a href="tel:0800567567" className="underline text-bae-coral">0800&nbsp;567&nbsp;567</a> (24h) · SMS 31393 ·
        GBV Command Centre: <a href="tel:0800428428" className="underline text-bae-coral">0800&nbsp;428&nbsp;428</a> ·
        Elsewhere: <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="underline text-bae-coral">findahelpline.com</a>
      </p>
    </div>
  );
}
