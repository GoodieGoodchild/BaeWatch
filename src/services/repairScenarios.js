// repairScenarios.js — makes the Repair guide adaptive. Two layers compose into
// personalized guidance, so we get grievance × attachment-style depth without an
// unmaintainable full matrix:
//   1) grievances  — the common ruptures a couple hits, each with a focus + reframe
//   2) attachmentInRepair — how each attachment style shows up in a rupture,
//      what helps them regulate, and their growth move
// RepairPage combines "this grievance" + "your attachment style" into a lens.
//
// Grounded in attachment theory (Bowlby/Hazan-Shaver) + Gottman repair.

export const grievances = [
  {
    id: 'withdrawal',
    label: 'One of us went quiet / shut down',
    emoji: '🤐',
    desc: 'Someone pulled away, went silent, or left the conversation.',
    focus: 'Name the withdrawal as protection, not rejection — then rebuild contact slowly.',
    reframe: 'Silence is usually a flooded nervous system, not the end of love. The return matters more than the pause.',
  },
  {
    id: 'unheard',
    label: 'I felt dismissed / not listened to',
    emoji: '🙉',
    desc: 'One of us felt talked over, minimized, or like their feelings didn’t matter.',
    focus: 'Slow down and reflect the hurt partner’s words back before responding.',
    reframe: 'Feeling unheard is a threat to connection. Being truly listened to is often the whole repair.',
  },
  {
    id: 'criticism',
    label: 'I felt criticized or attacked',
    emoji: '🗯️',
    desc: 'A complaint landed as an attack on character, not just behaviour.',
    focus: 'Separate the valid need underneath from the harsh delivery; own the delivery.',
    reframe: 'Under most criticism is an unmet need. Find the need, soften the start-up.',
  },
  {
    id: 'brokenPromise',
    label: 'A promise wasn’t kept',
    emoji: '🔗',
    desc: 'Something was committed to and didn’t happen — trust took a small hit.',
    focus: 'Acknowledge the impact on trust, then make a concrete, smaller, keepable commitment.',
    reframe: 'Trust is rebuilt in kept small promises, not grand ones. Repair with something you can actually do.',
  },
  {
    id: 'recurring',
    label: 'We keep having the same fight',
    emoji: '🔁',
    desc: 'A pattern that loops — the content changes but the dance is the same.',
    focus: 'Name the cycle itself (e.g. pursue–withdraw) and each person’s move in it.',
    reframe: 'You’re not fighting each other, you’re stuck in a loop. Naming the loop is how you step out of it.',
  },
  {
    id: 'neglect',
    label: 'I felt taken for granted',
    emoji: '🥀',
    desc: 'One of us felt low-priority, unseen, or unappreciated lately.',
    focus: 'Rebuild appreciation out loud; small, specific noticing beats grand gestures.',
    reframe: 'Feeling unimportant erodes safety quietly. Specific appreciation refills the cup.',
  },
  {
    id: 'jealousy',
    label: 'Jealousy or a trust wobble',
    emoji: '🫥',
    desc: 'Insecurity, jealousy, or a wobble in trust came up.',
    focus: 'Address the fear underneath with reassurance and honesty, not defensiveness.',
    reframe: 'Jealousy is usually fear of losing something precious. Meet the fear, not just the behaviour.',
  },
  {
    id: 'distance',
    label: 'We feel distant lately',
    emoji: '🌫️',
    desc: 'No single blow-up — just a slow drift and less connection.',
    focus: 'Reconnect through small rituals and honest check-ins rather than one big talk.',
    reframe: 'Distance rarely needs a dramatic fix — it needs consistent small turns toward each other.',
  },
];

export const attachmentInRepair = {
  avoidant: {
    label: 'Avoidant',
    emoji: '🏔️',
    youTend: 'Under stress you withdraw, go logical, or need space — repair can feel like being cornered.',
    whatHelps: 'Name that you need a short break BEFORE you take it, and promise a return time. Come back when calm — the return is the repair.',
    sayThis: '“I need 20 minutes to settle — I’m not leaving, and I’ll come back to this.”',
    growthMove: 'Stay 10% longer than is comfortable, and say one feeling out loud before you retreat.',
  },
  anxious: {
    label: 'Anxious',
    emoji: '🌊',
    youTend: 'Under stress you pursue, seek reassurance, and may repeat yourself to feel heard — which can flood your partner.',
    whatHelps: 'Say your need once, clearly, then let it land. Self-soothe before seeking, so reassurance can actually reach you.',
    sayThis: '“I’m scared we’re not okay. I need to hear that we are — then I can settle.”',
    growthMove: 'Pause before the second text or the third ask. Trust that what you said was received.',
  },
  secure: {
    label: 'Secure',
    emoji: '🌳',
    youTend: 'You can usually stay present and name what you feel — a real strength in repair.',
    whatHelps: 'Lead with steadiness and patience, especially if your partner’s nervous system is still learning safety.',
    sayThis: '“We’re on the same team here. Tell me what you need and I’ll listen.”',
    growthMove: 'Offer the first repair attempt — your steadiness makes it safe for them to meet you.',
  },
  disorganized: {
    label: 'Fearful-avoidant',
    emoji: '🌗',
    youTend: 'You may swing between wanting closeness and pushing it away — the approach-retreat can confuse you both.',
    whatHelps: 'Slow down and notice which feeling is driving right now — the longing or the fear — and name that out loud.',
    sayThis: '“Part of me wants to pull you close and part of me wants to run — I’m working on it.”',
    growthMove: 'When you feel the urge to flee mid-repair, name it instead of acting on it.',
  },
};

// Compose a personalized lens for the repair flow.
export function repairLens(grievanceId, attachmentStyle) {
  const g = grievances.find((x) => x.id === grievanceId) || null;
  const a = attachmentInRepair[attachmentStyle] || null;
  return { grievance: g, attachment: a };
}
