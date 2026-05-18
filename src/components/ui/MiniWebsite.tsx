import React from "react";

// ─── Shared primitive helpers ────────────────────────────────────────────────

const bar = (w: number, h: number, bg: string, r = 99, opacity = 1) =>
  ({ width: w, height: h, background: bg, borderRadius: r, opacity, flexShrink: 0 } as React.CSSProperties);

function Nav({ bg, logo, pill }: { bg: string; logo: string; pill: string }) {
  return (
    <div style={{ height: 18, background: bg, borderBottom: "1px solid rgba(127,127,127,0.08)", paddingLeft: 8, paddingRight: 8, display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
      <div style={bar(14, 10, logo, 3)} />
      <div style={{ flex: 1, display: "flex", gap: 5 }}>
        {[22, 16, 20].map((w, i) => <div key={i} style={bar(w, 4, i === 0 ? "rgba(127,127,127,0.4)" : "rgba(127,127,127,0.15)")} />)}
      </div>
      <div style={bar(28, 11, pill)} />
    </div>
  );
}

function LightNav({ logo, pill }: { logo: string; pill: string }) {
  return (
    <div style={{ height: 18, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingLeft: 8, paddingRight: 8, display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
      <div style={bar(14, 10, logo, 3)} />
      <div style={{ flex: 1, display: "flex", gap: 5 }}>
        {[22, 16, 20].map((w, i) => <div key={i} style={bar(w, 4, i === 0 ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)")} />)}
      </div>
      <div style={bar(28, 11, pill)} />
    </div>
  );
}

// ─── 20 unique website mockups ───────────────────────────────────────────────

// 1. SaaS Dashboard — dark purple
export function SaasPurple() {
  return (
    <div style={{ background: "#09090f", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#111118" logo="#7c3aed" pill="#7c3aed" />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ width: 34, background: "#0d0d15", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 5 }}>
          {[1, 0, 0, 0, 0].map((a, i) => <div key={i} style={bar(22, 4, a ? "#7c3aed" : "rgba(255,255,255,0.08)")} />)}
        </div>
        <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["#7c3aed", "#3b82f6", "#10b981"].map((c, i) => (
              <div key={i} style={{ flex: 1, background: "#111118", borderRadius: 4, padding: "4px 5px" }}>
                <div style={bar(16, 3, "rgba(255,255,255,0.12)", 99)} />
                <div style={{ ...bar(22, 6, c, 3), marginTop: 3, opacity: 0.85 }} />
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "#111118", borderRadius: 4, padding: "5px 5px 2px", display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[35, 55, 42, 70, 58, 82, 66, 90, 74, 88].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(124,58,237,${0.35 + h / 250})`, borderRadius: "2px 2px 0 0" }} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[0, 1].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={bar(6, 6, "#7c3aed", 99, 0.6)} />
                <div style={{ ...bar(0, 3, "rgba(255,255,255,0.08)"), flex: 1 }} />
                <div style={bar(14, 3, "rgba(124,58,237,0.35)")} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. E-Commerce — light pink
export function EcomPink() {
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#f43f5e" pill="#f43f5e" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ height: 32, background: "linear-gradient(135deg,#fecdd3,#fda4af)", borderRadius: 6, display: "flex", alignItems: "center", padding: "0 8px", gap: 5 }}>
          <div style={{ flex: 1 }}>
            <div style={bar(36, 5, "rgba(0,0,0,0.3)", 3)} />
            <div style={{ ...bar(24, 4, "rgba(0,0,0,0.15)", 3), marginTop: 3 }} />
          </div>
          <div style={bar(22, 11, "#f43f5e", 99)} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, flex: 1 }}>
          {[["#fecdd3", "#fbcfe8", "#fde68a"], ["#fecdd3", "#fbcfe8", "#fde68a"]].flat().map((c, i) => (
            <div key={i} style={{ background: c, borderRadius: 4, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ flex: 1, opacity: 0.6 }} />
              <div style={{ padding: "3px 4px" }}>
                <div style={bar(20, 3, "rgba(0,0,0,0.25)", 3)} />
                <div style={{ ...bar(14, 3, "#f43f5e", 3), marginTop: 2, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Analytics Platform — dark blue
export function AnalyticsDark() {
  return (
    <div style={{ background: "#020917", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#060f20" logo="#3b82f6" pill="#3b82f6" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#3b82f6", "#8b5cf6", "#06b6d4"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: "#0a1628", borderRadius: 4, padding: "4px 5px" }}>
              <div style={bar(16, 3, "rgba(255,255,255,0.1)")} />
              <div style={{ ...bar(26, 7, c, 3), marginTop: 3, opacity: 0.8 }} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, background: "#0a1628", borderRadius: 4, padding: "5px 4px 3px", position: "relative" }}>
          <div style={{ position: "absolute", top: 4, left: 6, right: 6, height: "60%", borderBottom: "1px solid rgba(59,130,246,0.15)", borderLeft: "1px solid rgba(59,130,246,0.15)" }} />
          <svg viewBox="0 0 100 40" style={{ width: "100%", height: "100%", overflow: "visible" }}>
            <polyline points="0,35 12,28 25,20 38,25 50,10 62,18 75,8 88,15 100,5" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
            <polyline points="0,35 12,28 25,20 38,25 50,10 62,18 75,8 88,15 100,5 100,40 0,40" fill="rgba(59,130,246,0.08)" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: 3, justifyContent: "flex-end" }}>
          {["Pageviews", "Sessions", "Users"].map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <div style={bar(5, 5, ["#3b82f6", "#8b5cf6", "#06b6d4"][i], 99, 0.8)} />
              <div style={bar(18, 3, "rgba(255,255,255,0.2)")} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. FinTech — dark green
export function FintechGreen() {
  return (
    <div style={{ background: "#020e07", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#061509" logo="#10b981" pill="#10b981" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 5 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ background: "#0a1f0f", borderRadius: 5, padding: "5px 6px" }}>
            <div style={bar(28, 3, "rgba(255,255,255,0.15)", 99)} />
            <div style={{ ...bar(48, 9, "#10b981", 3), marginTop: 4, opacity: 0.85 }} />
            <div style={{ ...bar(28, 3, "rgba(16,185,129,0.4)", 99), marginTop: 3 }} />
          </div>
          <div style={{ flex: 1, background: "#0a1f0f", borderRadius: 5, padding: "5px 4px 2px", display: "flex", alignItems: "flex-end", gap: 1.5 }}>
            {[40, 65, 50, 80, 58, 90, 70, 85].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(16,185,129,${0.3 + h / 280})`, borderRadius: "2px 2px 0 0" }} />
            ))}
          </div>
        </div>
        <div style={{ width: 50, display: "flex", flexDirection: "column", gap: 3 }}>
          {[["BTC", "#10b981", "+4.2%"], ["ETH", "#3b82f6", "+1.8%"], ["SOL", "#8b5cf6", "-0.5%"]].map(([name, c, pct]) => (
            <div key={name} style={{ background: "#0a1f0f", borderRadius: 4, padding: "3px 4px" }}>
              <div style={bar(14, 3, "rgba(255,255,255,0.15)")} />
              <div style={{ ...bar(22, 4, c as string, 3), marginTop: 2, opacity: 0.7 }} />
              <div style={{ ...bar(18, 3, "rgba(255,255,255,0.08)", 99), marginTop: 2 }} />
            </div>
          ))}
          <div style={{ flex: 1, background: "#0a1f0f", borderRadius: 4 }} />
        </div>
      </div>
    </div>
  );
}

// 5. Healthcare — light blue
export function HealthLight() {
  return (
    <div style={{ background: "#f0f9ff", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#0ea5e9" pill="#0ea5e9" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 5 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ background: "linear-gradient(135deg, #0ea5e9, #38bdf8)", borderRadius: 5, padding: "7px 7px" }}>
            <div style={bar(36, 5, "rgba(255,255,255,0.6)", 3)} />
            <div style={{ ...bar(24, 4, "rgba(255,255,255,0.4)", 3), marginTop: 3 }} />
            <div style={{ ...bar(20, 9, "rgba(255,255,255,0.9)", 99), marginTop: 5 }} />
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "5px 5px", display: "flex", flexDirection: "column", gap: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <div style={bar(8, 8, "#e0f2fe", 99)} />
                <div style={{ flex: 1, height: 3, background: "#e0f2fe", borderRadius: 99 }} />
                <div style={bar(18, 3, "#0ea5e9", 99, 0.4)} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 44, background: "#fff", borderRadius: 5, padding: "5px 4px", display: "flex", flexDirection: "column", gap: 4, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={bar(22, 3, "rgba(0,0,0,0.15)")} />
          {[80, 65, 75, 90, 55].map((h, i) => (
            <div key={i} style={bar(22, 4, `rgba(14,165,233,${0.2 + h / 400})`)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 6. Creative Portfolio — very dark
export function PortfolioDark() {
  const imgs = ["#1a0a2e", "#0a1a0a", "#2e1a0a", "#0a0a2e"];
  return (
    <div style={{ background: "#050505", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#0a0a0a" logo="#ffffff" pill="#ffffff" />
      <div style={{ flex: 1, padding: 5, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 3 }}>
        {imgs.map((bg, i) => (
          <div key={i} style={{ background: bg, borderRadius: 4, position: "relative" }}>
            {i === 0 && <div style={{ position: "absolute", bottom: 4, left: 5, right: 5 }}>
              <div style={bar(28, 4, "rgba(255,255,255,0.5)", 3)} />
              <div style={{ ...bar(18, 3, "rgba(255,255,255,0.25)", 3), marginTop: 2 }} />
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. Editorial / Magazine — clean white
export function EditorialClean() {
  return (
    <div style={{ background: "#ffffff", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#111" pill="#111" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 6 }}>
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={bar(55, 5, "rgba(0,0,0,0.6)", 3)} />
          <div style={bar(48, 5, "rgba(0,0,0,0.6)", 3)} />
          <div style={bar(38, 5, "rgba(0,0,0,0.6)", 3)} />
          <div style={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {[45, 40, 42, 30].map((w, i) => <div key={i} style={bar(w, 3, "rgba(0,0,0,0.15)", 3)} />)}
          </div>
          <div style={{ marginTop: 2, display: "flex", gap: 3 }}>
            <div style={bar(24, 10, "#111", 99)} />
            <div style={{ width: 24, height: 10, borderRadius: 99, border: "1px solid #111", flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 4 }} />
      </div>
    </div>
  );
}

// 8. Startup Landing — violet gradient
export function StartupViolet() {
  return (
    <div style={{ background: "#0c0018", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="rgba(255,255,255,0.04)" logo="#a78bfa" pill="#a78bfa" />
      <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 60, height: 60, background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)", borderRadius: "50%" }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ ...bar(64, 6, "rgba(255,255,255,0.75)", 3), margin: "0 auto 4px" }} />
          <div style={{ ...bar(50, 6, "rgba(255,255,255,0.75)", 3), margin: "0 auto 4px" }} />
          <div style={{ ...bar(40, 4, "rgba(255,255,255,0.3)", 3), margin: "0 auto 8px" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <div style={bar(28, 10, "#8b5cf6", 99)} />
            <div style={{ width: 28, height: 10, borderRadius: 99, border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// 9. Social Platform — dark purple
export function SocialDark() {
  return (
    <div style={{ background: "#06060e", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#0d0d1a" logo="#a855f7" pill="#a855f7" />
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ width: 36, background: "#0a0a16", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "6px 5px", display: "flex", flexDirection: "column", gap: 5 }}>
          {[1, 0, 0, 0].map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div style={bar(7, 7, a ? "#a855f7" : "rgba(255,255,255,0.12)", 99)} />
              <div style={bar(14, 3, a ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.08)")} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: "6px 5px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[["#1a0a2e", 60], ["#0a0a1a", 100], ["#12021a", 75]].map(([bg, w], i) => (
            <div key={i} style={{ background: bg as string, borderRadius: 4, padding: "4px 5px", display: "flex", gap: 3, alignItems: "flex-start" }}>
              <div style={bar(8, 8, `rgba(168,85,247,${0.3 + i * 0.2})`, 99)} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={bar(w as number, 3, "rgba(255,255,255,0.2)", 3)} />
                <div style={bar(45, 3, "rgba(255,255,255,0.08)", 3)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 10. Eco / Sustainability — sage green light
export function EcoSage() {
  return (
    <div style={{ background: "#f2f7f2", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#16a34a" pill="#16a34a" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ height: 36, background: "linear-gradient(135deg,#bbf7d0,#86efac)", borderRadius: 5, padding: "7px 8px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
          <div style={bar(42, 5, "rgba(0,0,0,0.35)", 3)} />
          <div style={bar(30, 4, "rgba(0,0,0,0.2)", 3)} />
          <div style={{ ...bar(22, 9, "#16a34a", 99), marginTop: 2 }} />
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[["#dcfce7", "#16a34a"], ["#d1fae5", "#059669"], ["#bbf7d0", "#10b981"], ["#a7f3d0", "#0d9488"]].map(([bg, ac], i) => (
            <div key={i} style={{ background: bg, borderRadius: 4, padding: "4px 5px" }}>
              <div style={bar(7, 7, ac, 99, 0.6)} />
              <div style={{ ...bar(22, 3, "rgba(0,0,0,0.2)", 3), marginTop: 3 }} />
              <div style={{ ...bar(16, 3, "rgba(0,0,0,0.1)", 3), marginTop: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 11. Platform — teal dark
export function PlatformTeal() {
  return (
    <div style={{ background: "#010f0f", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#071a1a" logo="#0d9488" pill="#0d9488" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#0d9488", "#06b6d4", "#14b8a6"].map((c, i) => (
            <div key={i} style={{ flex: 1, background: "#0a1f1f", borderRadius: 4, padding: "4px 5px" }}>
              <div style={bar(14, 3, "rgba(255,255,255,0.1)")} />
              <div style={{ ...bar(22, 6, c, 3), marginTop: 3, opacity: 0.85 }} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 3 }}>
          {[["#0a1f1f", "#0d9488"], ["#061a1a", "#06b6d4"], ["#071e1e", "#14b8a6"], ["#0a1f1f", "#0d9488"]].map(([bg, ac], i) => (
            <div key={i} style={{ background: bg, borderRadius: 4, padding: "5px 5px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <div style={bar(7, 7, ac, 99, 0.7)} />
                <div style={bar(20, 3, "rgba(255,255,255,0.12)")} />
              </div>
              <div style={{ ...bar(28, 3, "rgba(255,255,255,0.06)", 3), marginTop: 4 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 12. Brand / Lifestyle — warm amber
export function BrandAmber() {
  return (
    <div style={{ background: "#fffbf0", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#d97706" pill="#d97706" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(160deg,#fde68a,#fcd34d)", position: "relative" }}>
          <div style={{ position: "absolute", bottom: 8, left: 8, right: 8 }}>
            <div style={bar(40, 5, "rgba(0,0,0,0.4)", 3)} />
            <div style={{ ...bar(28, 4, "rgba(0,0,0,0.25)", 3), marginTop: 3 }} />
          </div>
        </div>
        <div style={{ padding: "8px 7px", display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={bar(42, 5, "rgba(0,0,0,0.5)", 3)} />
          <div style={bar(36, 5, "rgba(0,0,0,0.5)", 3)} />
          <div style={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {[40, 38, 35, 30].map((w, i) => <div key={i} style={bar(w, 3, "rgba(0,0,0,0.12)", 3)} />)}
          </div>
          <div style={{ marginTop: 2 }}>
            <div style={bar(26, 10, "#d97706", 99)} />
          </div>
        </div>
      </div>
    </div>
  );
}

// 13. Magazine Dark — editorial with gold
export function MagDark() {
  return (
    <div style={{ background: "#080808", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#101010" logo="#f59e0b" pill="#f59e0b" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ background: "#1a1a0a", borderRadius: 5, height: 36, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "45%", background: "linear-gradient(135deg,#f59e0b,#d97706)", opacity: 0.9 }} />
          <div style={{ position: "absolute", top: 7, left: 7 }}>
            <div style={bar(40, 6, "rgba(255,255,255,0.7)", 3)} />
            <div style={{ ...bar(32, 6, "rgba(255,255,255,0.7)", 3), marginTop: 3 }} />
            <div style={{ ...bar(18, 4, "rgba(255,255,255,0.3)", 3), marginTop: 3 }} />
          </div>
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
          {["#1a1200", "#14100a", "#1a0a0a"].map((bg, i) => (
            <div key={i} style={{ background: bg, borderRadius: 4, padding: "5px" }}>
              <div style={bar(16, 3, "rgba(245,158,11,0.6)", 3)} />
              <div style={{ ...bar(28, 3, "rgba(255,255,255,0.15)", 3), marginTop: 3 }} />
              <div style={{ ...bar(22, 3, "rgba(255,255,255,0.08)", 3), marginTop: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 14. Film / Creative Dark — gold
export function FilmGold() {
  const panels = ["#1a1200", "#0a0a00", "#180800", "#0a1200"];
  return (
    <div style={{ background: "#050500", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#0a0900" logo="#d97706" pill="#d97706" />
      <div style={{ flex: 1, padding: 5, display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 3 }}>
        <div style={{ background: "#1a1200", borderRadius: 4, gridRow: "1 / 3", position: "relative" }}>
          <div style={{ position: "absolute", bottom: 6, left: 6, right: 6 }}>
            <div style={bar(40, 5, "rgba(255,255,255,0.5)", 3)} />
            <div style={{ ...bar(28, 4, "rgba(255,255,255,0.25)", 3), marginTop: 3 }} />
          </div>
        </div>
        {panels.slice(1).map((bg, i) => <div key={i} style={{ background: bg, borderRadius: 4 }} />)}
      </div>
    </div>
  );
}

// 15. Data Platform — indigo
export function DataIndigo() {
  return (
    <div style={{ background: "#03030f", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#08081a" logo="#4f46e5" pill="#4f46e5" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 5 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ flex: 1, background: "#0d0d20", borderRadius: 4, padding: "5px 4px 2px", display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[55, 72, 48, 88, 62, 95, 70, 82, 60, 90].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(79,70,229,${0.35 + h / 280})`, borderRadius: "2px 2px 0 0" }} />
            ))}
          </div>
          <div style={{ height: 28, background: "#0d0d20", borderRadius: 4, padding: "4px 5px", display: "flex", alignItems: "center", gap: 8 }}>
            {[["1.2M", "#4f46e5"], ["340K", "#818cf8"], ["98%", "#6366f1"]].map(([v, c]) => (
              <div key={v} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <div style={bar(22, 5, c as string, 3, 0.8)} />
                <div style={bar(14, 3, "rgba(255,255,255,0.12)", 3)} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 38, display: "flex", flexDirection: "column", gap: 3 }}>
          {[0.9, 0.7, 0.85, 0.5, 0.65].map((op, i) => (
            <div key={i} style={{ background: "#0d0d20", borderRadius: 4, padding: "3px 4px", display: "flex", alignItems: "center", gap: 2 }}>
              <div style={bar(5, 5, "#4f46e5", 99, op)} />
              <div style={{ flex: 1, height: 3, background: `rgba(255,255,255,${op * 0.15})`, borderRadius: 99 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 16. Corporate — light slate
export function CorpSlate() {
  return (
    <div style={{ background: "#f8fafc", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#334155" pill="#334155" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 5 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)", borderRadius: 5, padding: "8px 8px" }}>
            <div style={bar(40, 5, "rgba(255,255,255,0.55)", 3)} />
            <div style={{ ...bar(30, 4, "rgba(255,255,255,0.35)", 3), marginTop: 3 }} />
            <div style={{ ...bar(22, 9, "#fff", 99), marginTop: 5 }} />
          </div>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {["#f1f5f9", "#e2e8f0", "#f1f5f9", "#e2e8f0"].map((bg, i) => (
              <div key={i} style={{ background: bg, borderRadius: 4, padding: "4px 5px" }}>
                <div style={bar(6, 6, "#334155", 99, 0.4)} />
                <div style={{ ...bar(22, 3, "rgba(0,0,0,0.2)", 3), marginTop: 3 }} />
                <div style={{ ...bar(16, 3, "rgba(0,0,0,0.1)", 3), marginTop: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 17. Spa / Wellness — mint
export function SpaMint() {
  return (
    <div style={{ background: "#f0fdf9", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#0d9488" pill="#0d9488" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ height: 40, background: "linear-gradient(135deg,#99f6e4,#5eead4)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 3 }}>
          <div style={bar(40, 5, "rgba(0,0,0,0.3)", 3)} />
          <div style={bar(28, 4, "rgba(0,0,0,0.2)", 3)} />
        </div>
        <div style={{ flex: 1, display: "flex", gap: 3 }}>
          {["#ccfbf1", "#99f6e4", "#ccfbf1"].map((bg, i) => (
            <div key={i} style={{ flex: 1, background: bg, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "5px" }}>
              <div style={bar(18, 3, "rgba(0,0,0,0.2)", 3)} />
              <div style={{ ...bar(14, 3, "rgba(0,0,0,0.1)", 3), marginTop: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 18. Agency — fuchsia dark
export function AgencyFuchsia() {
  return (
    <div style={{ background: "#06000e", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#0d0018" logo="#d946ef" pill="#d946ef" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ flex: 1, background: "#100018", borderRadius: 5, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 50, height: 50, background: "radial-gradient(circle, rgba(217,70,239,0.4), transparent 70%)", borderRadius: "50%" }} />
          <div style={bar(52, 6, "rgba(255,255,255,0.65)", 3)} />
          <div style={{ ...bar(40, 6, "rgba(255,255,255,0.65)", 3), marginTop: 3 }} />
          <div style={{ ...bar(30, 4, "rgba(255,255,255,0.25)", 3), marginTop: 3 }} />
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {["#1a0024", "#12001c", "#1a0024"].map((bg, i) => (
            <div key={i} style={{ flex: 1, background: bg, borderRadius: 4, padding: "5px" }}>
              <div style={bar(18, 3, "rgba(217,70,239,0.5)", 3)} />
              <div style={{ ...bar(24, 3, "rgba(255,255,255,0.1)", 3), marginTop: 3 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 19. Monochrome App
export function AppMono() {
  return (
    <div style={{ background: "#080808", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Nav bg="#0f0f0f" logo="#e5e5e5" pill="#e5e5e5" />
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ background: "#141414", borderRadius: 4, padding: "5px 6px" }}>
          <div style={bar(42, 5, "rgba(255,255,255,0.5)", 3)} />
          <div style={{ ...bar(30, 4, "rgba(255,255,255,0.25)", 3), marginTop: 3 }} />
          <div style={{ ...bar(22, 9, "rgba(255,255,255,0.9)", 99), marginTop: 4 }} />
        </div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ background: "#111", borderRadius: 4, padding: "4px 5px", display: "flex", alignItems: "center", gap: 4 }}>
            <div style={bar(8, 8, `rgba(255,255,255,${0.05 + i * 0.05})`, 99)} />
            <div style={{ flex: 1, height: 3, background: `rgba(255,255,255,${0.08 + i * 0.04})`, borderRadius: 99 }} />
            <div style={bar(18, 3, "rgba(255,255,255,0.05)")} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 20. Sustainability — lime green
export function SustainLime() {
  return (
    <div style={{ background: "#f7fef0", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <LightNav logo="#65a30d" pill="#65a30d" />
      <div style={{ flex: 1, padding: 7, display: "flex", gap: 5 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ flex: 1, background: "linear-gradient(160deg,#d9f99d,#a3e635)", borderRadius: 5, padding: "7px" }}>
            <div style={bar(36, 5, "rgba(0,0,0,0.35)", 3)} />
            <div style={{ ...bar(26, 4, "rgba(0,0,0,0.2)", 3), marginTop: 3 }} />
            <div style={{ ...bar(20, 9, "rgba(0,0,0,0.7)", 99), marginTop: 5 }} />
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {["#ecfccb", "#d9f99d", "#bbf7d0"].map((bg, i) => (
              <div key={i} style={{ flex: 1, background: bg, borderRadius: 4, padding: "4px 4px" }}>
                <div style={bar(14, 3, "rgba(0,0,0,0.2)", 3)} />
                <div style={{ ...bar(10, 3, "rgba(0,0,0,0.1)", 3), marginTop: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Type → Component map ────────────────────────────────────────────────────

export type MiniWebsiteType =
  | "saas-purple" | "ecom-pink" | "analytics-dark" | "fintech-green" | "health-light"
  | "portfolio-dark" | "editorial-clean" | "startup-violet" | "social-dark" | "eco-sage"
  | "platform-teal" | "brand-amber" | "mag-dark" | "film-gold" | "data-indigo"
  | "corp-slate" | "spa-mint" | "agency-fuchsia" | "app-mono" | "sustain-lime";

const MAP: Record<MiniWebsiteType, () => React.ReactElement> = {
  "saas-purple": SaasPurple,
  "ecom-pink": EcomPink,
  "analytics-dark": AnalyticsDark,
  "fintech-green": FintechGreen,
  "health-light": HealthLight,
  "portfolio-dark": PortfolioDark,
  "editorial-clean": EditorialClean,
  "startup-violet": StartupViolet,
  "social-dark": SocialDark,
  "eco-sage": EcoSage,
  "platform-teal": PlatformTeal,
  "brand-amber": BrandAmber,
  "mag-dark": MagDark,
  "film-gold": FilmGold,
  "data-indigo": DataIndigo,
  "corp-slate": CorpSlate,
  "spa-mint": SpaMint,
  "agency-fuchsia": AgencyFuchsia,
  "app-mono": AppMono,
  "sustain-lime": SustainLime,
};

export function MiniWebsite({ type }: { type: MiniWebsiteType }) {
  const Component = MAP[type];
  return <Component />;
}
