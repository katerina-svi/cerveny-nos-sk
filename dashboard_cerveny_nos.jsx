import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  Cell, PieChart, Pie, ScatterChart, Scatter, ZAxis, CartesianGrid
} from "recharts";
import {
  Shield, AlertTriangle, Users, Zap, MessageSquare, Database,
  Brain, ChevronRight, TrendingUp, Clock, CheckCircle
} from "lucide-react";

const C = {
  yellow: "#ffcc00", red: "#e85252", lightBlue: "#62c4dd",
  darkBlue: "#2d4173", lightGray: "#f7f8fa", medGray: "#e2e5ea",
  green: "#4caf50", orange: "#ff9800", white: "#ffffff",
};

const MetricCard = ({ icon: Icon, label, value, sub, color = C.darkBlue, alert }) => (
  <div style={{ background: C.white, borderRadius: 12, padding: "18px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: `4px solid ${color}`, display: "flex", alignItems: "center", gap: 14 }}>
    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon size={20} color={color} />
    </div>
    <div>
      <div style={{ fontSize: 26, fontWeight: 700, color, lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 12, color: "#666", fontWeight: 500, marginTop: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: alert ? C.red : "#999", marginTop: 1 }}>{sub}</div>}
    </div>
  </div>
);

const Section = ({ children, icon: Icon, title }) => (
  <div style={{ marginTop: 28 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      {Icon && <div style={{ width: 30, height: 30, borderRadius: 7, background: `${C.darkBlue}10`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={16} color={C.darkBlue} /></div>}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: C.darkBlue, margin: 0 }}>{title}</h2>
    </div>
    {children}
  </div>
);

const Card = ({ children, style }) => (
  <div style={{ background: C.white, borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", ...style }}>{children}</div>
);

const Badge = ({ text, color }) => (
  <span style={{ background: color, color: "#fff", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{text}</span>
);

const tabs = [
  { label: "Přehled", icon: TrendingUp },
  { label: "Problémy & Nástroje", icon: AlertTriangle },
  { label: "Doporučení", icon: CheckCircle },
  { label: "Bezpečnost", icon: Shield },
];

export default function AuditDashboard() {
  const [tab, setTab] = useState(0);

  const topProblems = [
    { name: "Know-how v hlavách", int: 7, surv: 71, sev: "KRITICKÁ", c: C.red },
    { name: "Manuální přepisování", int: 6, surv: 88, sev: "VYSOKÁ", c: C.orange },
    { name: "Bezpečnostní mezery", int: 2, surv: 100, sev: "KRITICKÁ", c: C.red },
    { name: "Teams chaos", int: 5, surv: 59, sev: "VYSOKÁ", c: C.orange },
    { name: "Chybí task management", int: 4, surv: 47, sev: "STŘEDNÍ", c: C.yellow },
    { name: "Salesforce rigidita", int: 5, surv: 50, sev: "STŘEDNÍ", c: C.yellow },
    { name: "Klaunská databáze", int: 4, surv: 0, sev: "STŘEDNÍ", c: C.yellow },
    { name: "Operativní přetížení", int: 4, surv: 65, sev: "STŘEDNÍ", c: C.yellow },
  ];

  const radar = [
    { s: "AI adopce", v: 77 }, { s: "Proaktivita", v: 76 },
    { s: "Ochota", v: 82 }, { s: "Spokojenost", v: 69 },
    { s: "Transparentnost", v: 82 }, { s: "Porady", v: 77 },
    { s: "Bezpečnost", v: 12 }, { s: "Soubory", v: 29 },
  ];

  const segmentation = [
    { name: "Inovátoři", value: 29, color: C.darkBlue },
    { name: "Adaptéři", value: 41, color: C.lightBlue },
    { name: "Pragmatici", value: 29, color: C.yellow },
    { name: "Konzervativci", value: 18, color: C.medGray },
  ];

  const aiAdoption = [
    { name: "Pravidelně 77%", value: 77, color: C.darkBlue },
    { name: "Vyzkoušeli 12%", value: 12, color: C.lightBlue },
    { name: "Zájem 6%", value: 6, color: C.yellow },
    { name: "Bez zájmu 6%", value: 6, color: C.medGray },
  ];

  const tools = [
    { name: "ChatGPT", score: 4.2 }, { name: "Darujme", score: 4.0 },
    { name: "Copilot", score: 3.8 }, { name: "Outlook", score: 3.5 },
    { name: "Salesforce", score: 3.5 }, { name: "Teams", score: 3.0 },
    { name: "Excel", score: 2.5 }, { name: "Power BI", score: 2.5 },
  ];

  const recs = [
    { n: "Bezpečnostní minimum", impact: 9, effort: 2, ph: "Q", c: C.red },
    { n: "Teams governance", impact: 8, effort: 2, ph: "Q", c: C.darkBlue },
    { n: "Komunikační matice", impact: 6, effort: 1, ph: "Q", c: C.darkBlue },
    { n: "AI data policy", impact: 5, effort: 1, ph: "Q", c: C.darkBlue },
    { n: "Remindery", impact: 5, effort: 2, ph: "Q", c: C.darkBlue },
    { n: "Know-how dokumentace", impact: 9, effort: 5, ph: "S", c: C.lightBlue },
    { n: "SF→Excel automat.", impact: 8, effort: 4, ph: "S", c: C.lightBlue },
    { n: "Mzdový proces", impact: 7, effort: 5, ph: "S", c: C.lightBlue },
    { n: "Klaunská databáze", impact: 7, effort: 3, ph: "S", c: C.lightBlue },
    { n: "Copilot Pro pilot", impact: 6, effort: 3, ph: "S", c: C.lightBlue },
    { n: "Power BI přeMap.", impact: 7, effort: 8, ph: "D", c: C.yellow },
    { n: "AI plánování", impact: 8, effort: 9, ph: "D", c: C.yellow },
    { n: "Einstein SF", impact: 7, effort: 7, ph: "D", c: C.yellow },
    { n: "Smart filtry", impact: 8, effort: 8, ph: "D", c: C.yellow },
  ];

  const security = [
    { name: "Správce hesel", now: 6, target: 80 },
    { name: "2FA všude", now: 35, target: 90 },
    { name: "Bezp. sdílení", now: 59, target: 90 },
    { name: "Zná pravidla", now: 53, target: 90 },
    { name: "Incident resp.", now: 41, target: 80 },
    { name: "VPN", now: 6, target: 50 },
  ];

  const kpis = [
    { name: "AI adopce", now: 77, target: 85, unit: "%", up: true },
    { name: "Bezpečnost", now: 0, target: 50, unit: "%", up: true },
    { name: "Produkt. dluh", now: 29, target: 15, unit: "%", up: false },
    { name: "Spokojenost", now: 3.47, target: 4.0, unit: "/5", up: true },
    { name: "Hledání soub.", now: 3.88, target: 3.0, unit: "/5", up: false },
    { name: "Pozdní info", now: 3.65, target: 2.5, unit: "/5", up: false },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: C.lightGray, minHeight: "100vh", padding: 0 }}>
      {/* Header */}
      <div style={{ background: C.darkBlue, padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: C.yellow, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Digitální audit 2026</div>
          <div style={{ color: C.white, fontSize: 22, fontWeight: 700, marginTop: 4 }}>ČERVENÝ NOS Clowndoctors</div>
        </div>
        <div style={{ color: C.medGray, fontSize: 12, textAlign: "right" }}>
          <div>17 respondentů dotazník | 8 respondentů rozhovory</div>
          <div style={{ marginTop: 2 }}>Období: leden–únor 2026</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.medGray}`, display: "flex", gap: 0, paddingLeft: 28 }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: "12px 20px", border: "none", background: "none", cursor: "pointer",
            color: tab === i ? C.darkBlue : "#888", fontWeight: tab === i ? 700 : 400,
            fontSize: 13, borderBottom: tab === i ? `3px solid ${C.darkBlue}` : "3px solid transparent",
            display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s",
          }}>
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 28px", maxWidth: 1200, margin: "0 auto" }}>
        {/* TAB 0: OVERVIEW */}
        {tab === 0 && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              <MetricCard icon={Brain} label="AI adopce" value="77 %" sub="13 z 17 pravidelně" color={C.darkBlue} />
              <MetricCard icon={Shield} label="Bezpečnostní skóre" value="0 %" sub="Nikdo nesplňuje 3 praktiky" color={C.red} alert />
              <MetricCard icon={Zap} label="Produktivitní dluh" value="29 %" sub="Přepisuje denně/týdně" color={C.orange} />
              <MetricCard icon={Database} label="Hledání souborů" value="3,88/5" sub="71 % má problém často" color={C.orange} />
              <MetricCard icon={MessageSquare} label="Pozdní informace" value="3,65/5" sub="59 % často/velmi často" color={C.orange} />
              <MetricCard icon={Users} label="Ochota zapojit se" value="82 %" sub="14 z 17 chce pomáhat" color={C.green} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 4 }}>
              <Section icon={Users} title="Profil organizace">
                <Card>
                  <ResponsiveContainer width="100%" height={260}>
                    <RadarChart data={radar}>
                      <PolarGrid stroke="#e0e0e0" />
                      <PolarAngleAxis dataKey="s" tick={{ fontSize: 10, fill: "#666" }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9 }} />
                      <Radar dataKey="v" stroke={C.darkBlue} fill={C.darkBlue} fillOpacity={0.2} strokeWidth={2} dot={{ r: 3, fill: C.darkBlue }} />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div style={{ fontSize: 10, color: "#aaa", textAlign: "center" }}>
                    Bezpečnost a Soubory: invertované škály (vyšší = lepší výsledek)
                  </div>
                </Card>
              </Section>

              <Section icon={Brain} title="Segmentace">
                <Card>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#666", marginBottom: 6, textAlign: "center" }}>Postoj ke změnám</div>
                      <ResponsiveContainer width="100%" height={120}>
                        <PieChart><Pie data={segmentation} dataKey="value" cx="50%" cy="50%" innerRadius={28} outerRadius={50} paddingAngle={2}>
                          {segmentation.map((e, i) => <Cell key={i} fill={e.color} />)}
                        </Pie><Tooltip formatter={(v) => `${v} %`} /></PieChart>
                      </ResponsiveContainer>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                        {segmentation.map((s, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 9 }}>
                            <div style={{ width: 7, height: 7, borderRadius: 2, background: s.color }} />
                            <span style={{ color: "#666" }}>{s.name} {s.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#666", marginBottom: 6, textAlign: "center" }}>AI adopce</div>
                      <ResponsiveContainer width="100%" height={120}>
                        <PieChart><Pie data={aiAdoption} dataKey="value" cx="50%" cy="50%" innerRadius={28} outerRadius={50} paddingAngle={2}>
                          {aiAdoption.map((e, i) => <Cell key={i} fill={e.color} />)}
                        </Pie><Tooltip formatter={(v) => `${v} %`} /></PieChart>
                      </ResponsiveContainer>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                        {aiAdoption.map((s, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 9 }}>
                            <div style={{ width: 7, height: 7, borderRadius: 2, background: s.color }} />
                            <span style={{ color: "#666" }}>{s.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 14, padding: "10px 14px", background: C.lightGray, borderRadius: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: C.darkBlue, marginBottom: 6 }}>Digitální ambasadoři</div>
                    {[
                      { role: "Patron", name: "Výkonný ředitel (R6a)", c: C.darkBlue },
                      { role: "Champion", name: "SF specialistka (R4)", c: C.lightBlue },
                      { role: "Ambassador", name: "Vedoucí FR (R5) + Umělecký ředitel (R6b)", c: C.green },
                    ].map((a, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, fontSize: 11 }}>
                        <Badge text={a.role} color={a.c} />
                        <span style={{ color: "#444" }}>{a.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Section>
            </div>

            <Section icon={Clock} title="KPIs – Baseline vs. Cíl (prosinec 2026)">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
                {kpis.map((k, i) => (
                  <Card key={i} style={{ padding: 14 }}>
                    <div style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>{k.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, color: C.darkBlue }}>{k.now}{k.unit}</span>
                      <ChevronRight size={14} color="#ccc" />
                      <span style={{ fontSize: 16, fontWeight: 600, color: C.green }}>{k.target}{k.unit}</span>
                    </div>
                    <div style={{ marginTop: 6, height: 4, background: C.medGray, borderRadius: 2 }}>
                      <div style={{
                        height: 4, borderRadius: 2,
                        background: k.up
                          ? `linear-gradient(90deg, ${C.darkBlue}, ${C.green})`
                          : `linear-gradient(90deg, ${C.orange}, ${C.green})`,
                        width: k.up ? `${(k.now / k.target) * 100}%` : `${Math.min(100, (1 - k.now / (k.now * 2)) * 100)}%`,
                      }} />
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* TAB 1: PROBLEMS & TOOLS */}
        {tab === 1 && (
          <>
            <Section icon={AlertTriangle} title="Top problémy – seřazeno dle četnosti">
              <Card>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={topProblems} layout="vertical" margin={{ left: 140, right: 20, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis type="number" domain={[0, 8]} tick={{ fontSize: 11 }} label={{ value: "Rozhovory (z 8)", position: "bottom", fontSize: 10, fill: "#999" }} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={130} />
                    <Tooltip />
                    <Bar dataKey="int" name="Rozhovory" radius={[0, 4, 4, 0]} barSize={20}>
                      {topProblems.map((e, i) => <Cell key={i} fill={e.c} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Section>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Section icon={AlertTriangle} title="Dotazníková data – potvrzení">
                <Card>
                  {topProblems.filter(p => p.surv > 0).map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 100, fontSize: 10, color: "#666", textAlign: "right", flexShrink: 0 }}>{p.name}</div>
                      <div style={{ flex: 1, height: 16, background: C.medGray, borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${p.surv}%`, background: p.c, borderRadius: 4, transition: "width 0.5s" }} />
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: p.c, width: 40 }}>{p.surv} %</div>
                    </div>
                  ))}
                  <div style={{ fontSize: 10, color: "#999", marginTop: 8 }}>
                    % respondentů dotazníku, kteří problém potvrdili
                  </div>
                </Card>
              </Section>

              <Section icon={Zap} title="Nástroje – hodnocení (rozhovory)">
                <Card>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={tools} layout="vertical" margin={{ left: 70, right: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                      <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 10 }} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={60} />
                      <Tooltip />
                      <Bar dataKey="score" name="Hodnocení" radius={[0, 4, 4, 0]} barSize={16}>
                        {tools.map((t, i) => <Cell key={i} fill={t.score >= 3.5 ? C.darkBlue : t.score >= 3 ? C.lightBlue : C.orange} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div style={{ fontSize: 10, color: "#999" }}>Škála 1–5 (hodnocení z rozhovorů)</div>
                </Card>
              </Section>
            </div>
          </>
        )}

        {/* TAB 2: RECOMMENDATIONS */}
        {tab === 2 && (
          <>
            <Section icon={CheckCircle} title="Matice priorit – dopad vs. náročnost">
              <Card>
                <ResponsiveContainer width="100%" height={380}>
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis type="number" dataKey="effort" domain={[0, 10]} name="Náročnost" tick={{ fontSize: 10 }}
                      label={{ value: "Náročnost →", position: "bottom", fontSize: 11, fill: "#999" }} />
                    <YAxis type="number" dataKey="impact" domain={[0, 10]} name="Dopad" tick={{ fontSize: 10 }}
                      label={{ value: "Dopad →", angle: -90, position: "left", fontSize: 11, fill: "#999" }} />
                    <ZAxis range={[200, 200]} />
                    <Tooltip content={({ payload }) => {
                      if (!payload || !payload.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div style={{ background: "#fff", padding: 8, borderRadius: 6, boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 11 }}>
                          <div style={{ fontWeight: 700, marginBottom: 4 }}>{d.n}</div>
                          <div>Dopad: {d.impact}/10 | Náročnost: {d.effort}/10</div>
                          <div style={{ color: "#888", marginTop: 2 }}>
                            {d.ph === "Q" ? "Quick win" : d.ph === "S" ? "Střednědobé" : "Dlouhodobé"}
                          </div>
                        </div>
                      );
                    }} />
                    <Scatter data={recs}>
                      {recs.map((r, i) => <Cell key={i} fill={r.c} />)}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 8 }}>
                  {[
                    { label: "Quick wins (do 1 měs.)", c: C.darkBlue },
                    { label: "Střednědobé (1–6 měs.)", c: C.lightBlue },
                    { label: "Dlouhodobé (6–12 měs.)", c: C.yellow },
                    { label: "Kritické", c: C.red },
                  ].map((l, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.c }} />
                      <span style={{ color: "#666" }}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Section>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 8 }}>
              {[
                { title: "Quick wins (do 1 měsíce)", items: recs.filter(r => r.ph === "Q"), bg: `${C.darkBlue}08` },
                { title: "Střednědobé (1–6 měsíců)", items: recs.filter(r => r.ph === "S"), bg: `${C.lightBlue}08` },
                { title: "Dlouhodobé (6–12 měsíců)", items: recs.filter(r => r.ph === "D"), bg: `${C.yellow}08` },
              ].map((group, gi) => (
                <Card key={gi} style={{ background: group.bg }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.darkBlue, marginBottom: 10 }}>{group.title}</div>
                  {group.items.map((r, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 11 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: r.c, flexShrink: 0 }} />
                      <span style={{ color: "#444" }}>{r.n}</span>
                      <span style={{ marginLeft: "auto", fontSize: 9, color: "#999" }}>
                        D:{r.impact} N:{r.effort}
                      </span>
                    </div>
                  ))}
                </Card>
              ))}
            </div>

            <Section icon={Clock} title="Časová osa implementace">
              <Card>
                <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
                  {[
                    { m: "Bře", acts: ["Bezpečnost", "Teams gov.", "Kom. matice"] },
                    { m: "Dub", acts: ["Know-how dok.", "Top 3 procesy"] },
                    { m: "Kvě", acts: ["SF→Excel aut.", "Mzdy digital."] },
                    { m: "Čvn", acts: ["Klaunská DB", "Workshop aut."] },
                    { m: "Čvc", acts: ["Copilot Pro", "Planner"] },
                    { m: "Srp", acts: ["Monitoring", "Evaluace"] },
                    { m: "Zář", acts: ["Power BI", "přemapování"] },
                    { m: "Q4", acts: ["AI plánování", "Einstein", "Smart filtry"] },
                  ].map((month, i) => (
                    <div key={i} style={{ flex: 1, minWidth: 100, textAlign: "center", borderRight: i < 7 ? `1px solid ${C.medGray}` : "none", padding: "8px 6px" }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: C.darkBlue, marginBottom: 6, padding: "3px 0", background: i < 5 ? `${C.darkBlue}10` : `${C.yellow}15`, borderRadius: 4 }}>
                        {month.m}
                      </div>
                      {month.acts.map((a, j) => (
                        <div key={j} style={{ fontSize: 9, color: "#666", marginBottom: 2 }}>{a}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </Card>
            </Section>
          </>
        )}

        {/* TAB 3: SECURITY */}
        {tab === 3 && (
          <>
            <div style={{ background: "#FDE8E8", borderRadius: 12, padding: "16px 24px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <AlertTriangle size={24} color={C.red} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.red }}>Bezpečnostní skóre: 0 %</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>Žádný z 17 respondentů nesplňuje současně 3 základní praktiky: správce hesel + 2FA všude + bezpečné sdílení dat</div>
              </div>
            </div>

            <Section icon={Shield} title="Bezpečnostní metriky – aktuální stav vs. cíl">
              <Card>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={security} margin={{ left: 100, right: 20 }} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} tickFormatter={v => `${v}%`} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={90} />
                    <Tooltip formatter={v => `${v} %`} />
                    <Bar dataKey="now" name="Aktuální stav" fill={C.red} radius={[0, 4, 4, 0]} barSize={14} />
                    <Bar dataKey="target" name="Cíl (12/2026)" fill={C.green} radius={[0, 4, 4, 0]} barSize={14} opacity={0.3} />
                  </BarChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10 }}>
                    <div style={{ width: 12, height: 8, borderRadius: 2, background: C.red }} />
                    <span style={{ color: "#666" }}>Aktuální stav</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10 }}>
                    <div style={{ width: 12, height: 8, borderRadius: 2, background: C.green, opacity: 0.3 }} />
                    <span style={{ color: "#666" }}>Cíl (prosinec 2026)</span>
                  </div>
                </div>
              </Card>
            </Section>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Section icon={AlertTriangle} title="Kritická zjištění">
                <Card>
                  {[
                    { icon: "🔑", text: "Správce hesel: 6 % (1 z 17)", detail: "47 % ukládá hesla v prohlížeči, 12 % si je zapisuje" },
                    { icon: "📱", text: "2FA: 18 % neví co to je", detail: "Pouze 35 % používá 2FA důsledně" },
                    { icon: "📧", text: "GDPR: 41 % by sdílelo nezabezpečeně", detail: "29 % by poslalo osobní údaje e-mailem jako přílohu" },
                    { icon: "🚨", text: "Incident response: 24 % neví co dělat", detail: "6 % neví, co je bezpečnostní incident" },
                    { icon: "🌐", text: "VPN: 6 % (1 z 17)", detail: "82 % na domácí wifi, 53 % mobilní data" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "10px 0", borderBottom: i < 4 ? `1px solid ${C.medGray}` : "none" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#333" }}>
                        <span style={{ marginRight: 6 }}>{item.icon}</span>{item.text}
                      </div>
                      <div style={{ fontSize: 10, color: "#888", marginTop: 2, paddingLeft: 24 }}>{item.detail}</div>
                    </div>
                  ))}
                </Card>
              </Section>

              <Section icon={CheckCircle} title="Doporučená opatření (URGENT)">
                <Card>
                  {[
                    { n: "Bitwarden Teams", desc: "Organizační správce hesel", cost: "$4/os./měs.", time: "1 den" },
                    { n: "2FA vynucení", desc: "Azure AD Conditional Access", cost: "0 Kč", time: "1 den (+ RNI koordinace)" },
                    { n: "Bezpečnostní školení", desc: "2h workshop: hesla, 2FA, phishing, GDPR", cost: "Interní", time: "0,5 dne příprava" },
                    { n: "AI data policy", desc: "One-pager: co smí/nesmí do AI", cost: "0 Kč", time: "2 hodiny" },
                    { n: "Incident response plán", desc: "Kdo volat, co dělat, jak nahlásit", cost: "0 Kč", time: "2 hodiny" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "10px 0", borderBottom: i < 4 ? `1px solid ${C.medGray}` : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: C.darkBlue }}>{item.n}</div>
                        <Badge text={item.cost} color={item.cost === "0 Kč" ? C.green : C.lightBlue} />
                      </div>
                      <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{item.desc} | {item.time}</div>
                    </div>
                  ))}
                </Card>
              </Section>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: C.darkBlue, padding: "12px 28px", marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: C.medGray, fontSize: 10 }}>Digitální audit ČERVENÝ NOS Clowndoctors | Mgr. Kateřina Švidrnochová | Únor 2026</div>
        <div style={{ color: C.medGray, fontSize: 10 }}>Metodologie: Double Diamond | 17 respondentů dotazník + 8 respondentů rozhovory</div>
      </div>
    </div>
  );
}
