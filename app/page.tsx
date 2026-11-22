const GITHUB = "https://github.com/elshanmammadoov";
const LINKEDIN = "https://linkedin.com/in/elshanmammadoov";
const WPSCAN =
  "https://wpscan.com/vulnerability/119477bd-1b29-4e33-9040-38cb6f0ae623";

const nav = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const ventures = [
  {
    name: "Qarabug",
    role: "Security Researcher (Contract)",
    text: "Conducting authorized web application penetration testing, vulnerability validation, and responsible disclosure.",
  },
  {
    name: "BINGO MMC",
    role: "Co-Founder & COO",
    text: "Leading operations, field logistics, and workflow automation for a subscription-based residential waste collection service in Baku.",
  },
  {
    name: "Qarabagh Estate",
    role: "Founder",
    text: "Managing real estate marketing and AI-assisted property listing workflows across Baku and Sumgayit.",
  },
];

const stack = [
  "Burp Suite Pro",
  "Impacket",
  "NetExec",
  "Linux",
  "Python",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

const link =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-muted";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"
        >
          <a href="#about" className="text-sm font-medium tracking-wide">
            EM
          </a>
          <ul className="flex gap-5 text-sm text-muted sm:gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section id="about" className="scroll-mt-14 py-24 sm:py-40">
          <p className="text-sm text-muted">Baku, Azerbaijan</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-7xl">
            ELSHAN MAMMADOV
          </h1>
          <p className="mt-4 text-xl text-foreground sm:text-3xl">
            Security Researcher &amp; Tech Founder
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Focused on offensive web security, vulnerability research, and
            building scalable, technology-driven ventures in Baku.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={GITHUB} className={link}>
              GitHub
            </a>
            <a href={LINKEDIN} className={link}>
              LinkedIn
            </a>
            <a href="#contact" className={link}>
              Contact
            </a>
          </div>
        </section>

        <section
          id="ventures"
          className="scroll-mt-14 border-t border-border py-20 sm:py-28"
        >
          <h2 className="text-sm text-muted">Ventures &amp; Leadership</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {ventures.map((v) => (
              <article key={v.name} className="bg-background p-8">
                <h3 className="text-xl font-medium tracking-tight">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{v.role}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="research"
          className="scroll-mt-14 border-t border-border py-20 sm:py-28"
        >
          <h2 className="text-sm text-muted">
            Security Research &amp; Engineering
          </h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            <div className="grid gap-2 py-8 md:grid-cols-3 md:gap-8">
              <dt className="font-medium">Vulnerability Disclosure</dt>
              <dd className="leading-relaxed text-muted md:col-span-2">
                Published WordPress plugin security advisory on{" "}
                <a href={WPSCAN} className={link}>
                  WPScan
                </a>{" "}
                (119477bd-1b29-4e33-9040-38cb6f0ae623).
              </dd>
            </div>
            <div className="grid gap-2 py-8 md:grid-cols-3 md:gap-8">
              <dt className="font-medium">Custom Security Tooling</dt>
              <dd className="leading-relaxed text-muted md:col-span-2">
                ZeroDayHunter, cvehunter, and xssscanner — automated static
                analysis and vulnerability discovery tools built with Python,
                Semgrep, and Node.js.
              </dd>
            </div>
            <div className="grid gap-2 py-8 md:grid-cols-3 md:gap-8">
              <dt className="font-medium">Technical Stack</dt>
              <dd className="leading-relaxed text-muted md:col-span-2">
                {stack.join(" · ")}
              </dd>
            </div>
          </dl>
        </section>

        <section
          id="contact"
          className="scroll-mt-14 border-t border-border py-20 sm:py-28"
        >
          <h2 className="text-sm text-muted">Contact</h2>
          <p className="mt-6 max-w-xl text-lg text-foreground sm:text-2xl">
            Open to security engagements and conversations about new ventures.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={LINKEDIN} className={link}>
              LinkedIn
            </a>
            <a href={GITHUB} className={link}>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elshan Mammadov • Baku, Azerbaijan</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={GITHUB} className="hover:text-foreground">
              github.com/elshanmammadoov
            </a>
            <a href={LINKEDIN} className="hover:text-foreground">
              linkedin.com/in/elshanmammadoov
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
