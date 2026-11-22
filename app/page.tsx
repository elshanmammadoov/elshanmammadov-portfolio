"use client";

import {
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Building2,
  Home as HomeIcon,
  Layers,
  Mail,
  MapPin,
  Radar,
  ShieldCheck,
  Terminal,
  Trash2,
} from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";

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
    tags: ["Pentesting", "Disclosure"],
    icon: ShieldCheck,
    text: "Conducting authorized web application penetration testing, vulnerability validation, and responsible disclosure.",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    name: "BINGO MMC",
    role: "Co-Founder & COO",
    tags: ["Operations", "Automation"],
    icon: Trash2,
    text: "Leading operations, field logistics, and workflow automation for a subscription-based residential waste collection service in Baku.",
    className: "",
    featured: false,
  },
  {
    name: "Qarabagh Estate",
    role: "Founder",
    tags: ["Real Estate", "AI Workflows"],
    icon: HomeIcon,
    text: "Managing real estate marketing and AI-assisted property listing workflows across Baku and Sumgayit.",
    className: "",
    featured: false,
  },
];

const tools = ["ZeroDayHunter", "cvehunter", "xssscanner"];

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

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

/** Card with a border + surface glow that follows the cursor. */
function SpotlightCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const background = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, rgba(232,226,214,0.13), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(232,226,214,0.55), transparent 70%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <motion.div
      {...reveal}
      transition={{ ...reveal.transition, delay }}
      whileHover={{ y: -4 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-300);
        y.set(-300);
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white/[0.07] p-px ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div className="relative h-full rounded-[15px] bg-[#131417]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.p
      {...reveal}
      className="text-xs font-medium uppercase tracking-[0.22em] text-champagne"
    >
      {children}
    </motion.p>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101113]/70 py-1.5 pl-5 pr-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        <a
          href="#about"
          className="mr-2 text-sm font-semibold tracking-[0.2em] text-foreground"
        >
          EM
        </a>
        <ul className="hidden items-center sm:flex">
          {nav.slice(0, 3).map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const spot = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(232,226,214,0.10), transparent 70%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <section
      id="about"
      onMouseMove={onMove}
      className="relative isolate overflow-hidden"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-20" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: spot }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#e8e2d6]/[0.05] blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 pb-28 pt-40 md:pb-36 md:pt-52"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
            </span>
            Available for Security Advisory &amp; Ventures
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} aria-hidden /> Baku
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            ELSHAN MAMMADOV
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-2xl font-medium tracking-tight text-champagne md:text-4xl"
        >
          Security Researcher &amp; Tech Founder
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Focused on offensive web security, vulnerability research, and
          building scalable, technology-driven ventures in Baku.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </motion.a>
          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            GitHub <ArrowUpRight size={16} aria-hidden />
          </motion.a>
          <motion.a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            LinkedIn <ArrowUpRight size={16} aria-hidden />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Ventures() {
  return (
    <section
      id="ventures"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32"
    >
      <Eyebrow>Ventures &amp; Leadership</Eyebrow>
      <motion.h2
        {...reveal}
        className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Building and securing things that matter.
      </motion.h2>

      <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {ventures.map((v, i) => {
          const Icon = v.icon;
          return (
            <SpotlightCard key={v.name} className={v.className} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col p-8 ${v.featured ? "md:p-12" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-champagne">
                    <Icon size={20} aria-hidden />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 transition-colors group-hover:text-champagne"
                    aria-hidden
                  />
                </div>
                <div className={v.featured ? "mt-auto pt-24" : "mt-10"}>
                  <h3
                    className={`font-semibold tracking-tight ${v.featured ? "text-3xl md:text-4xl" : "text-xl"}`}
                  >
                    {v.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-champagne">{v.role}</p>
                  <p
                    className={`mt-5 leading-relaxed text-muted ${v.featured ? "max-w-md text-base" : "text-sm"}`}
                  >
                    {v.text}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {v.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section
      id="research"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32"
    >
      <Eyebrow>Security Research &amp; Engineering</Eyebrow>
      <motion.h2
        {...reveal}
        className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Research that ships, tooling that scales.
      </motion.h2>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <motion.a
          {...reveal}
          href={WPSCAN}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          className="group relative block overflow-hidden rounded-2xl border border-white/[0.07] bg-[#131417] p-8 transition-colors hover:border-champagne/40 md:col-span-2 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-champagne">
                <Bug size={20} aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Vulnerability Disclosure
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  Published WordPress plugin security advisory on WPScan.
                </p>
                <p className="mt-4 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted">
                  119477bd-1b29-4e33-9040-38cb6f0ae623
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-champagne">
              View advisory
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </div>
        </motion.a>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/[0.07] bg-[#131417] p-8 transition-colors hover:border-white/20 md:p-10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-champagne">
            <Terminal size={20} aria-hidden />
          </span>
          <h3 className="mt-8 text-xl font-semibold tracking-tight md:text-2xl">
            Custom Security Tooling
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Automated static analysis and vulnerability discovery tools built
            with Python, Semgrep, and Node.js.
          </p>
          <ul className="mt-6 space-y-2">
            {tools.map((t) => (
              <li key={t}>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/row flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition-colors hover:border-champagne/40 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3 font-mono text-sm">
                    <Radar size={15} className="text-champagne" aria-hidden />
                    {t}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition-all group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-champagne"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.16 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-white/[0.07] bg-[#131417] p-8 transition-colors hover:border-white/20 md:p-10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-champagne">
            <Layers size={20} aria-hidden />
          </span>
          <h3 className="mt-8 text-xl font-semibold tracking-tight md:text-2xl">
            Technical Stack
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Daily drivers across offensive security and product engineering.
          </p>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {stack.map((s) => (
              <motion.li
                key={s}
                variants={fadeUp}
                whileHover={{ y: -2, scale: 1.05 }}
                className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-champagne/50 hover:text-champagne"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.2 });
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.2 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-sm font-medium transition-colors first:border-transparent first:bg-foreground first:text-background hover:border-white/25"
    >
      {children}
    </motion.a>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32"
    >
      <motion.div
        {...reveal}
        className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#131417] px-8 py-20 text-center md:px-16 md:py-28"
      >
        <div aria-hidden className="bg-grid absolute inset-0 -z-20 opacity-60" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -z-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[#e8e2d6]/[0.09] blur-[110px]"
        />
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">
          Contact
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Let&apos;s build something secure.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Open to security engagements and conversations about new ventures.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <MagneticButton href={LINKEDIN} external>
            <Mail size={16} aria-hidden /> Message on LinkedIn
          </MagneticButton>
          <MagneticButton href={GITHUB} external>
            <Building2 size={16} aria-hidden /> GitHub
            <ArrowUpRight size={16} aria-hidden />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Ventures />
        <Research />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elshan Mammadov • Baku, Azerbaijan</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={GITHUB}
              className="transition-colors hover:text-foreground"
            >
              github.com/elshanmammadoov
            </a>
            <a
              href={LINKEDIN}
              className="transition-colors hover:text-foreground"
            >
              linkedin.com/in/elshanmammadoov
            </a>
          </p>
        </div>
      </footer>
    </MotionConfig>
  );
}
