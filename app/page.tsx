export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Bot + Web Dashboard
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Orderly Voice Channels,<br />
          <span className="text-[#58a6ff]">Zero Chaos</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          QueueBot manages speaker queues in Discord voice channels — hand-raising, time limits, and moderator controls built for community events, meetups, and tournaments.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get QueueBot — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          {[
            ["✋", "Hand Raise Queue"],
            ["⏱", "Speaker Time Limits"],
            ["🛡", "Mod Controls"]
          ].map(([icon, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Discord servers",
              "Speaker queue with hand-raise",
              "Configurable time limits per speaker",
              "Moderator override & skip controls",
              "Web dashboard & analytics",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the speaker queue work?",
              "Members type /raise in your Discord server to join the queue. The bot announces the next speaker and tracks their allotted time. Moderators can skip, remove, or reorder speakers from the web dashboard or with slash commands."
            ],
            [
              "Do I need to host anything?",
              "No. QueueBot is fully managed. Add the bot to your server, configure it from the web dashboard, and you're live in minutes."
            ],
            [
              "Can I try it before paying?",
              "Yes — every new account gets a 7-day free trial with full Pro features. No credit card required to start."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} QueueBot. All rights reserved.
      </footer>
    </main>
  );
}
