/* Site content and theme. Edited by admin.html — you can also edit this file by hand.
   Text fields support light markup: *orange emphasis*, _italic serif_, **bold**, and new lines. */
window.SITE = {
  "meta": {
    "title": "Mohammed Rauf — Senior Project Planner",
    "description": "Mohammed Rauf — Senior Project Planner, Primavera P6 specialist and project controls lead with 20+ years across energy transmission, infrastructure, rail, offshore and high-rise construction.",
    "brand": "M. Rauf"
  },
  "theme": {
    "preset": "signal",
    "mode": "auto",
    "light": { "paper": "#f3efe6", "paper2": "#ebe5d8", "card": "#faf7f0", "ink": "#141414", "ink2": "#3b3a36", "muted": "#7a766c", "accent": "#ff4d1f", "accent2": "#1f6f66", "gold": "#c89b3c", "base": "#b9b1a0" },
    "dark":  { "paper": "#0e1113", "paper2": "#141a1d", "card": "#161c1f", "ink": "#ece6d9", "ink2": "#c3bdb0", "muted": "#8a8578", "accent": "#ff6a3d", "accent2": "#4fc1b0", "gold": "#d9b25a", "base": "#4a4d4c" },
    "fonts": { "display": "Instrument Serif", "body": "Inter Tight", "mono": "JetBrains Mono" },
    "radius": 14,
    "grain": true,
    "grid": true,
    "motion": true
  },
  "sections": [
    { "id": "profile",     "label": "Profile",     "show": true, "nav": true },
    { "id": "programme",   "label": "Programme",   "show": true, "nav": true },
    { "id": "forensic",    "label": "Assurance",   "show": true, "nav": true },
    { "id": "risk",        "label": "Risk",        "show": true, "nav": true },
    { "id": "capability",  "label": "Capability",  "show": true, "nav": true },
    { "id": "milestones",  "label": "Milestones",  "show": true, "nav": false },
    { "id": "credentials", "label": "Credentials", "show": true, "nav": false },
    { "id": "contact",     "label": "Contact",     "show": true, "nav": true }
  ],
  "hero": {
    "tag": "Senior Project Planner · Project Controls",
    "location": "Cumbernauld, Scotland — 55.94°N 3.99°W",
    "firstName": "Mohammed",
    "lastName": "Rauf.",
    "lede": "Twenty years turning **£300M programmes** into schedules people can actually _trust_ — and decisions leadership can actually make.",
    "ctaPrimary": "View the programme",
    "ctaSecondary": "Get in touch",
    "cardTitle": "Activity · A1000",
    "cardStatus": "In progress",
    "cardRows": [
      { "k": "Role", "v": "Senior Project Planner, Balfour Beatty" },
      { "k": "Project", "v": "Skye Reinforcement OHL & UGC (£300M+)" },
      { "k": "Tooling", "v": "Primavera P6 · Acumen Fuse · QSRA" },
      { "k": "Contract", "v": "NEC4 ECC — Clause 31 / 32" }
    ],
    "cardHighlightKey": "Total float",
    "cardHighlight": "0d — on the critical path",
    "scrollNote": "Energy · Rail · Offshore · High-rise",
    "showNetwork": true
  },
  "marquee": ["Primavera P6", "_NEC4 ECC_", "QSRA P50 / P80 / P90", "_DCMA 14-point_", "Critical path", "_Earned Value_", "Time Impact Analysis", "_Basis of Schedule_"],
  "profile": {
    "heading": "Schedules that tell\nthe *truth*, early.",
    "stats": [
      { "label": "Experience", "prefix": "", "value": "20", "suffix": "+", "text": "Years in planning and project controls across five sectors." },
      { "label": "Current scheme", "prefix": "£", "value": "300", "suffix": "M+", "text": "Skye Reinforcement OHL & UGC — lead planner." },
      { "label": "Concurrent control", "prefix": "", "value": "6", "suffix": "proj", "text": "High-rise and infrastructure projects run in parallel in the UAE (~£120M)." },
      { "label": "Early warning", "prefix": "", "value": "4", "suffix": "wks", "text": "Earlier issue detection from weekly schedule health checks." }
    ],
    "statement": "An expert *Primavera P6* practitioner who builds and controls integrated L1–L4 schedules from _tender through delivery_ — then turns the data into clear decisions.",
    "paragraphs": [
      "Senior Project Planner with 20+ years across energy transmission, infrastructure, rail, offshore oil and gas and high-rise construction — including five years in the UAE controlling six concurrent projects worth ~£120M.",
      "Strong in NEC4 ECC programme compliance, critical path management, quantitative schedule risk analysis, DCMA 14-point assurance and delay impact assessment. Known for raising planning standards across teams, and for mentoring the next generation of planners."
    ],
    "badges": ["PRINCE2 Practitioner", "APMG PP&C Practitioner", "P6 EPPM Advanced", "PMI EVMS"]
  },
  "programme": {
    "heading": "A career, *baselined.*",
    "sub": "Rendered the only way a planner would: as a programme. Bars are roles, the orange ones sit on today's critical path. Hover for the full summary, or click any activity to open its detail.",
    "chartTitle": "MR-CAREER-L2 · Rev C26",
    "forecastLabel": "Forecast · Skye delivery →",
    "footnote": "Earlier: Mechanical Design Engineer, A.J. Cruickshanks (1997–2000)",
    "roles": [
      { "id": "A1000", "role": "Senior Project Planner", "company": "Balfour Beatty", "start": "2026-08", "end": "", "critical": true, "project": "Skye Reinforcement OHL & UGC, Scotland",
        "figures": [ { "v": "£300M+", "k": "Programme" }, { "v": "22,030", "k": "Activities reviewed" }, { "v": "P50–P90", "k": "QSRA" } ],
        "bullets": [
          "Lead planner for the Skye Reinforcement transmission scheme — overhead line (OHL) and underground cable (UGC) delivery.",
          "Own the Part A (Design) programme in P6; periodic updates of progress, actuals and remaining durations against key client milestones.",
          "Developed and submitted the Part B (Construction) NEC4 ECC Clause 31 tender programme — Completion, Key Dates, float, time risk allowance and H&S requirements.",
          "Implemented QSRA and presented P50 / P80 / P90 outputs for UGC milestones to project and client stakeholders.",
          "Forensic review of the 22,030-activity OHL programme: 18-tab dashboard, 28-page report, 34-action remediation plan.",
          "Maintain integrated logic across design, consents, procurement, enabling works, outage windows and construction; support compensation events with impact analysis."
        ] },
      { "id": "A0900", "role": "Senior Planner", "company": "M Group Ltd", "start": "2025-08", "end": "2026-08", "critical": true, "project": "Overhead Lines Infrastructure Programme, Scotland",
        "figures": [ { "v": "£300M", "k": "Tender programme" }, { "v": "3", "k": "SPEN OHL routes" }, { "v": "NEC4", "k": "Governance" } ],
        "bullets": [
          "Led planning and scheduling for major OHL infrastructure works under NEC4-aligned programme governance.",
          "Developed a £300M tender programme and narrative for the ZV EHRE/VERE, LCU2 and XT routes, aligned with SPEN requirements.",
          "Built and controlled integrated multi-level programmes in P6 and MS Project linking engineering, procurement and construction.",
          "Weekly and monthly updates, dashboards, critical path analysis, early warnings and impact assessments for leadership."
        ] },
      { "id": "A0800", "role": "Senior Project Controls Engineer", "company": "Turner & Townsend", "start": "2023-06", "end": "2023-12", "critical": false, "project": "BP ZERFD Energy Infrastructure Programme",
        "figures": [ { "v": "~£75M", "k": "Programme" }, { "v": "EVM", "k": "Forecasting" }, { "v": "Won", "k": "Award supported" } ],
        "bullets": [
          "Developed multi-level schedules and a Basis of Schedule establishing planning standards and controls governance.",
          "Applied Earned Value and variance analysis to improve forecast quality and prompt timely intervention.",
          "Critical path analysis and schedule optimisation to reduce slippage exposure.",
          "Executive reporting packs with visual KPIs; contributed to early-stage planning that supported a successful award."
        ] },
      { "id": "A0700", "role": "Senior Project Planner", "company": "A.F. Engineering Works, UAE", "start": "2018-01", "end": "2023-02", "critical": false, "project": "High-rise Construction & Infrastructure",
        "figures": [ { "v": "6", "k": "Concurrent projects" }, { "v": "~£120M", "k": "Portfolio" }, { "v": "3–4 wks", "k": "Earlier warning" } ],
        "bullets": [
          "Controlled planning for six concurrent high-rise and infrastructure projects — integrated baselines and update cycles.",
          "Standardised planning methods and templates, cutting schedule creation time and improving reporting consistency.",
          "Applied resource levelling to improve workforce utilisation and support efficient site mobilisation.",
          "Weekly schedule health checks surfaced critical issues 3–4 weeks earlier.",
          "Mentored five junior planners — three promoted within 18 months; introduced S-curves, heat maps and milestone trackers."
        ] },
      { "id": "A0600", "role": "Sub Postmaster / Director", "company": "Peterculter Post Office", "start": "2014-04", "end": "2018-01", "critical": false, "project": "Business ownership",
        "figures": [ { "v": "£350K", "k": "Revenue" }, { "v": "≤10%", "k": "Under budget" }, { "v": "6", "k": "Team led" } ],
        "bullets": [
          "Ran a £350K-revenue business and owned a ~£200K budget, delivering up to 10% under budget.",
          "Led a team of six."
        ] },
      { "id": "A0500", "role": "Project Planner", "company": "Network Rail", "start": "2011-03", "end": "2014-04", "critical": false, "project": "Rail Infrastructure Maintenance & Upgrade",
        "figures": [ { "v": "~£45M", "k": "Programme" }, { "v": "12+", "k": "Stakeholders" }, { "v": "75+", "k": "Changes assessed" } ],
        "bullets": [
          "Developed and maintained P6 schedules for rail maintenance and upgrade works, integrating interfaces across 12+ stakeholders.",
          "Assessed schedule impacts of 75+ proposed changes; used what-if analysis to select strategies that avoided delay and cost."
        ] },
      { "id": "A0400", "role": "Senior Project Planner", "company": "Dynamic Equipment", "start": "2000-05", "end": "2011-03", "critical": false, "project": "Offshore Oil & Gas — North Sea / Canada",
        "figures": [ { "v": "11 yrs", "k": "Offshore" }, { "v": "2", "k": "Regions" }, { "v": "Co-wide", "k": "Standards adopted" } ],
        "bullets": [
          "Planned offshore installation and maintenance programmes, integrating logistics with execution sequencing across multiple work fronts.",
          "Led schedule risk assessments and mitigation for high-risk activities; created planning standards adopted company-wide."
        ] }
    ]
  },
  "forensic": {
    "heading": "22,030 activities.\n*One honest picture.*",
    "sub": "Case study — forensic review of a live overhead line programme at Balfour Beatty. The schedule looked healthy. It wasn't.",
    "funnel": [
      { "n": "22030", "title": "Activities interrogated", "text": "Logic, constraints, calendars and float traced across the full OHL programme.", "fill": 100 },
      { "n": "18", "title": "Tab analytics dashboard", "text": "Every finding made visible — from dangling logic to float erosion.", "fill": 62 },
      { "n": "28", "title": "Page assurance report", "text": "Evidence-led, written for decision-makers, not just planners.", "fill": 44 },
      { "n": "34", "title": "Action remediation plan", "text": "Phased, owned and sequenced so the fix doesn't break delivery.", "fill": 30 }
    ],
    "panelKicker": "Findings mapped to DCMA 14-point",
    "panelTitle": "Health check, visualised.",
    "checks": [
      { "name": "Logic", "desc": "Missing predecessors / successors", "pass": false },
      { "name": "Leads", "desc": "Negative lags", "pass": true },
      { "name": "Lags", "desc": "Positive lags", "pass": true },
      { "name": "Rel. types", "desc": "FS relationships dominate", "pass": true },
      { "name": "Hard constraints", "desc": "Mandatory constraints masking float", "pass": false },
      { "name": "High float", "desc": "Total float > 44 days", "pass": true },
      { "name": "Negative float", "desc": "Float below zero on milestones", "pass": false },
      { "name": "High duration", "desc": "Durations > 44 days", "pass": true },
      { "name": "Invalid dates", "desc": "Actuals / forecasts vs data date", "pass": true },
      { "name": "Resources", "desc": "Activities resource-loaded", "pass": true },
      { "name": "Missed tasks", "desc": "Baseline finish slippage", "pass": true },
      { "name": "Critical path test", "desc": "Delay propagates to finish", "pass": true },
      { "name": "CPLI", "desc": "Critical path length index", "pass": true },
      { "name": "BEI", "desc": "Baseline execution index", "pass": true }
    ],
    "findings": ["Negative float hiding on contractual milestones", "Mandatory constraints masking true float", "Dangling logic breaking the critical path"]
  },
  "risk": {
    "heading": "Not a date.\nA *distribution.*",
    "sub": "Quantitative schedule risk analysis turns \"when will it finish?\" into \"how confident are we?\". Drag across the curve to read the confidence of any finish date.",
    "deterministic": "2029-03-30",
    "spread": 0.42,
    "cards": [
      { "p": "50", "title": "The coin toss", "text": "Half of simulated outcomes finish by here." },
      { "p": "80", "title": "The commitment", "text": "Where time risk allowance usually lands." },
      { "p": "90", "title": "The board number", "text": "High confidence — for funding and contract dates." }
    ],
    "note": "Illustrative Monte Carlo output. Real QSRA work presented P50 / P80 / P90 risk outputs for UGC milestones to project and client stakeholders."
  },
  "capability": {
    "heading": "Five disciplines,\n*one* integrated plan.",
    "items": [
      { "icon": "bars", "title": "Planning & Scheduling", "text": "P6 master schedules, WBS, logic, calendars and baselines. Integrated L1–L4 programmes, tender programmes, Basis of Schedule, lookahead and recovery planning." },
      { "icon": "doc", "title": "Contract & Change", "text": "NEC4 ECC Clause 31 / 32 programmes, early warnings, compensation event support, Time Impact Analysis and delay impact assessment." },
      { "icon": "curve", "title": "Risk & Assurance", "text": "QSRA at P50 / P80 / P90, time risk allowance, DCMA 14-point assessment, Deltek Acumen Fuse, what-if and scenario analysis." },
      { "icon": "chart", "title": "Controls & Reporting", "text": "Earned Value, progress measurement, variance and trend analysis, forecasting, S-curves, dashboards and executive reporting packs." },
      { "icon": "people", "title": "Leadership", "text": "Planning governance, template standardisation, mentoring, and coordinating clients and multiple stakeholders around a single source of truth." }
    ]
  },
  "milestones": {
    "heading": "Milestones *achieved.*",
    "items": [
      { "text": "NEC4 Clause 31 tender programme for Part B (Construction) of the Skye Reinforcement scheme", "value": "£300M+" },
      { "text": "Forensic review of a live OHL programme, with a phased remediation plan", "value": "34 actions" },
      { "text": "Tender programme and planning narrative across three SPEN overhead line routes", "value": "£300M" },
      { "text": "Weekly schedule health checks across six concurrent UAE projects", "value": "3–4 wks earlier" },
      { "text": "Mentored five junior planners — three promoted to mid-level within 18 months", "value": "3 / 5" }
    ]
  },
  "credentials": {
    "heading": "Certified. _Tooled._",
    "certs": [
      { "year": "2023", "title": "Project Planning & Control Practitioner", "org": "APMG International" },
      { "year": "2023", "title": "PRINCE2 Foundation & Practitioner", "org": "PeopleCert" },
      { "year": "2022", "title": "Earned Value Management Systems", "org": "PMI" },
      { "year": "2021", "title": "Advanced Risk Management", "org": "APM" },
      { "year": "2020", "title": "Oracle Primavera P6 EPPM Advanced", "org": "Oracle University" },
      { "year": "2019", "title": "Schedule Optimisation Techniques", "org": "Planning Planet" },
      { "year": "1997", "title": "PGDip, Maintenance Systems & Project Management", "org": "Glasgow Caledonian University" },
      { "year": "1994", "title": "BSc, Computer Aided Engineering", "org": "Glasgow Caledonian University" }
    ],
    "systems": [
      { "name": "Primavera P6", "level": "Expert", "score": 10 },
      { "name": "Microsoft Project", "level": "Advanced", "score": 8 },
      { "name": "Deltek Acumen Fuse", "level": "Advanced", "score": 8 },
      { "name": "Excel · PowerPoint · Word", "level": "Advanced", "score": 8 },
      { "name": "AutoCAD", "level": "Proficient", "score": 6 },
      { "name": "SAP ERP", "level": "Exposure", "score": 3 }
    ],
    "sectors": ["Energy transmission", "Overhead lines & UGC", "Rail", "Offshore oil & gas", "High-rise construction", "Infrastructure", "Energy infrastructure"]
  },
  "contact": {
    "kicker": "Next milestone",
    "heading": "Let's plan *what's next.*",
    "email": "rauf69@gmail.com",
    "linkedin": "https://linkedin.com/in/mohammed-rauf",
    "phone": "",
    "facts": [
      { "k": "Based", "v": "Cumbernauld, Scotland" },
      { "k": "Notice period", "v": "2 months" },
      { "k": "Relocation", "v": "Open to the UAE" },
      { "k": "Work mode", "v": "Office or site-based" }
    ]
  },
  "footer": {
    "name": "Mohammed Rauf",
    "middle": "References available on request",
    "right": "Built like a programme — logic-linked, no dangling ends."
  }
};
