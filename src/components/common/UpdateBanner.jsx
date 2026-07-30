import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, RefreshCw } from 'lucide-react';
import versionInfo from '../../version.json';

// Detects when a newer build has been deployed while the app is open, and asks
// the user to update — showing what changed. Compares this bundle's baked-in
// version against the live /version.json on the server. No service worker
// needed: reloading fetches the new (hash-named) assets.
export default function UpdateBanner() {
  const [update, setUpdate] = useState(null); // the newer version.json, or null
  const [dismissed, setDismissed] = useState(false);

  const check = useCallback(async (force) => {
    try {
      const res = await fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) return;
      const latest = await res.json();
      // Show when the server's version differs from this bundle's — or when the
      // user explicitly asks to see "what's new".
      if (latest?.version && (force || latest.version !== versionInfo.version)) {
        setUpdate(latest);
        setDismissed(false);
      }
    } catch {
      /* offline or blocked — ignore, try again later */
    }
  }, []);

  useEffect(() => {
    // Manual "what's new" viewer: bae-watch.vercel.app/?whatsnew
    const forced = typeof window !== 'undefined' && window.location.search.includes('whatsnew');
    check(forced);
    const interval = setInterval(() => check(false), 5 * 60 * 1000);
    // Re-check whenever the app regains focus (covers PWA reopen on phones).
    const recheck = () => check(false);
    window.addEventListener('focus', recheck);
    window.addEventListener('pageshow', recheck);
    document.addEventListener('visibilitychange', recheck);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', recheck);
      window.removeEventListener('pageshow', recheck);
      document.removeEventListener('visibilitychange', recheck);
    };
  }, [check]);

  const show = update && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
        >
          <div className="max-w-md mx-auto rounded-3xl bg-bae-navy text-white shadow-2xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✨</span>
                <div className="flex-1">
                  <p className="font-bold">A new version of Bae Watch is ready</p>
                  <p className="text-xs text-white/60">Here's what's new:</p>
                </div>
                <button onClick={() => setDismissed(true)} className="p-1 -m-1 text-white/50 hover:text-white" aria-label="Later">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="mt-2 space-y-1.5 max-h-40 overflow-y-auto">
                {(update.changes || []).map((c, i) => (
                  <li key={i} className="text-sm text-white/85 flex gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-bae-salmon flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setDismissed(true)} className="flex-1 py-2.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 transition">
                  Later
                </button>
                <button onClick={() => window.location.reload()} className="flex-1 py-2.5 rounded-full text-sm font-semibold bg-bae-coral hover:bg-bae-deep-coral transition flex items-center justify-center gap-1.5">
                  <RefreshCw className="w-4 h-4" /> Update now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
