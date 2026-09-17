// Demo-mode toggle: labs listed in DEMO_BROKEN_LABS silently fail to deploy.
// Server code reads DEMO_MODE / DEMO_BROKEN_LABS; client code reads the
// NEXT_PUBLIC_ variants, which Next.js inlines at build time.
const DEMO_MODE = process.env.DEMO_MODE ?? process.env.NEXT_PUBLIC_DEMO_MODE;
const DEMO_BROKEN_LABS = process.env.DEMO_BROKEN_LABS ?? process.env.NEXT_PUBLIC_DEMO_BROKEN_LABS;

export function isDemoBrokenLab(labId: string): boolean {
  if ((DEMO_MODE ?? '').trim().toLowerCase() !== 'true') return false;

  return (DEMO_BROKEN_LABS ?? '')
    .split(',')
    .map(id => id.trim())
    .filter(Boolean)
    .includes(String(labId).trim());
}

export function demoFailureDelayMs(): number {
  return 1500 + Math.floor(Math.random() * 1000);
}
