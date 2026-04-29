// Nicolas Battaglia - CV
// Inspired by silver-dev-cv style

#set document(title: "Nicolas Battaglia - CV", author: "Nicolas Battaglia")
#set page(
  paper: "us-letter",
  margin: (x: 1.2cm, y: 1.2cm),
)
#set text(
  font: "New Computer Modern",
  size: 10pt,
  fill: rgb("#1a1a1a"),
)
#set par(justify: false, leading: 0.55em)

// --- Helpers ---

#let section(title) = {
  v(8pt)
  text(weight: "bold", size: 10.5pt, upper(title))
  v(-4pt)
  line(length: 100%, stroke: 0.5pt + rgb("#888888"))
  v(2pt)
}

#let entry(role, company, period, items) = {
  grid(
    columns: (1fr, auto),
    [#text(weight: "bold")[#role] — #text(fill: rgb("#444444"))[#company]],
    [#text(fill: rgb("#666666"), size: 9pt)[#period]],
  )
  v(2pt)
  for item in items [
    - #item
  ]
  v(4pt)
}

// --- Header ---

#align(center)[
  #text(size: 22pt, weight: "bold")[Nicolás Battaglia]
  #v(2pt)
  #text(size: 10pt, fill: rgb("#444444"))[Sr. Backend Engineer · Mar del Plata, Argentina]
  #v(3pt)
  #text(size: 9.5pt)[
    nicobattmdq\@gmail.com ·
    #link("https://linkedin.com/in/nicobattaglia")[linkedin.com/in/nicobattaglia] ·
    #link("https://github.com/zk182")[github.com/zk182]
  ]
]

// --- About Me ---

#section("About Me")

#text[
  Backend engineer with 10+ years of experience building scalable systems in Node.js environments.
  I thrive in high-growth environments working across payment systems, developer tooling, and platform
  engineering. Node.js and JavaScript are my core stack; currently expanding into Go and Rust.
  Comfortable owning end-to-end delivery from architecture to production.
]

// --- Experience ---

#section("Experience")

#entry(
  "Sr. Backend Engineer",
  "MODO",
  "Feb 2025 – Present",
  (
    [Develops payment infrastructure for a QR-based system processing ~150K daily users across Argentina.],
    [Built end-to-end trip and payment flows, including offline QR support and fraud prevention systems.],
    [Owns production incident management and on-call for core payment services.],
  )
)

#entry(
  "Sr. Fullstack Developer",
  "Denode",
  "Oct 2023 – Feb 2025",
  (
    [Contributed to a Remove Background image processing product; handled backend scaling and API design.],
    [Built a full-stack gaming key management platform (Node.js, React) with real-time inventory tooling.],
    [Delivered administrative dashboards and internal tooling used across multiple client projects.],
  )
)

#entry(
  "Sr. Backend Engineer",
  "SecurityScorecard",
  "Oct 2021 – Mar 2023",
  (
    [Created rate-limiting infrastructure adopted across the organization to protect critical API surfaces.],
    [Worked on Cyber Risk Quantification features, integrating threat data into customer-facing dashboards.],
  )
)

#entry(
  "Sr. Backend Engineer",
  "MURAL",
  "Oct 2020 – Oct 2021",
  (
    [Canvas Workflows team: built export/import pipelines, content visualization, and image processing tools.],
    [Core Platform team: developed third-party integrations and internal API frameworks.],
  )
)

#entry(
  "Sr. Software Engineer",
  "SparkDigital",
  "Aug 2018 – Oct 2020",
  (
    [Led Node.js backend architecture for W.W. Norton's digital publishing platform.],
    [Built real-time collaboration systems using Socket.io; co-founded internal RAY Initiative.],
  )
)

// --- Skills ---

#section("Skills")

#grid(
  columns: (auto, 1fr),
  gutter: 6pt,
  [*Languages*], [Node.js, JavaScript, TypeScript, Go (learning), Rust (learning)],
  [*Infrastructure*], [AWS, Terraform, Kubernetes, Docker],
  [*Structures*], [SQS, SNS, Lambdas],
  [*Backend*], [Distributed systems, REST, GraphQL, gRPC, PostgreSQL, MongoDB, Redis],
  [*Frontend*], [React, Astro],
  [*Tools*], [Datadog, Stripe, Socket.io],
  [*Odm/Orm*], [Knex, Mongoose],
  [*Tests*], [Jest, Mocha, Cucumber],
)

// --- Education ---

#section("Education")

#grid(
  columns: (1fr, auto),
  [#text(weight: "bold")[Computer Engineering] — Universidad FASTA, Argentina],
  [#text(fill: rgb("#666666"), size: 9pt)[2008 – 2017]],
)
#v(2pt)
- Research in Android forensics and mobile data extraction.
