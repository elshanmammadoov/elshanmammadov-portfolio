"use client";

import {
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  Bug,
  Building2,
  Cpu,
  GraduationCap,
  HandHeart,
  Home as HomeIcon,
  Mail,
  MapPin,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Trash2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, type MouseEvent, type ReactNode } from "react";

const GITHUB = "https://github.com/elshanmammadoov";
const LINKEDIN = "https://linkedin.com/in/elshanmammadoov";
const WPSCAN =
  "https://wpscan.com/vulnerability/119477bd-1b29-4e33-9040-38cb6f0ae623";
const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 500, damping: 30 } as const;
const TAP = { scale: 0.98 } as const;

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const experience: {
  name: string;
  role: string;
  period: string;
  icon: LucideIcon;
  text: string;
  link?: { label: string; href: string };
  className: string;
}[] = [
  {
    name: "Qarabug",
    role: "Security Researcher (Contract)",
    period: "Nov 2026 – Present",
    icon: ShieldCheck,
    text: "Conducting authorized security assessments, web application penetration testing, and responsible vulnerability validation.",
    className: "md:col-span-3",
  },
  {
    name: "BINGO MMC",
    role: "Co-Founder & COO",
    period: "Nov 2026 – Present",
    icon: Trash2,
    text: "Leading operational execution, field logistics, customer acquisition, and workflow automation for a subscription-based residential waste collection service in Baku.",
    link: { label: "bingoapp.az", href: "https://bingoapp.az" },
    className: "md:col-span-3",
  },
  {
    name: "Qarabagh Estate",
    role: "Founder",
    period: "Aug 2023 – Present",
    icon: HomeIcon,
    text: "Founded and leading a real estate venture focused on digital property-listing workflows, lead generation, and AI-assisted operations across Baku and Sumgait.",
    link: { label: "qarabaghestate.az", href: "https://qarabaghestate.az" },
    className: "md:col-span-3",
  },
  {
    name: "Ecosphere LLC",
    role: "IT Infrastructure & Systems Specialist (Contract)",
    period: "Sep 2026 – Nov 2026",
    icon: Building2,
    text: "Maintained and optimized IT infrastructure, hardware systems, and network administration.",
    className: "md:col-span-3",
  },
];

const education = [
  {
    name: "Baki Biznes Universiteti",
    role: "Bachelor's degree, Business Administration and Management",
    period: "Sep 2023 – Jun 2027 • Cybersecurity Club",
    icon: GraduationCap,
  },
  {
    name: "MilliSec",
    role: "Intensive Cyber Security Training Program",
    period: "Feb 2026 – Nov 2026",
    icon: ShieldCheck,
  },
  {
    name: "OLYMPIC GLOBAL SERVICE",
    role: "Volunteer Staff",
    period: "Oct 2023 – Feb 2024",
    icon: HandHeart,
  },
];

const certs: { name: string; issuer: string; date: string; id?: string }[] = [
  {
    name: "Claude Academy: Claude Code 101",
    issuer: "Anthropic",
    date: "Sep 2026",
    id: "43c5a255cd2dce6ebe3e44cd127e54e3",
  },
  {
    name: "Claude Academy: Introduction to Model Context Protocol (MCP)",
    issuer: "Anthropic",
    date: "Sep 2026",
    id: "c8a7152f8e50e5e494f4e521884e2a1d",
  },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Sep 2026" },
  {
    name: "Pre Security Certificate",
    issuer: "TryHackMe",
    date: "Jun 2026",
    id: "THM-UDNOZPMEMU",
  },
  {
    name: "Pre Security (Legacy) Certificate",
    issuer: "TryHackMe",
    date: "May 2026",
    id: "THM-YG1SU8X4VH",
  },
  { name: "CCNA Training Certificate", issuer: "Uğur IT Academy", date: "May 2026" },
  {
    name: "Foundation in Computer Systems & IT Fundamentals",
    issuer: "Udemy",
    date: "Jan 2026",
  },
];

const tools = ["ZeroDayHunter", "cvehunter", "xssscanner"];

const domains = [
  "Vulnerability Research & Responsible Disclosure",
  "Web Application Penetration Testing",
  "Red Teaming & Active Directory / Linux & Windows Privilege Escalation",
];

const stack = [
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Metasploit",
  "Linux",
  "Python",
  "Node.js",
  "Bash",
  "Git",
  "Next.js",
];

const platforms = [
  "Qarabug",
  "Bugcrowd",
  "PortSwigger Web Security Academy",
  "TryHackMe",
  "Hack The Box",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Card with a border + surface glow that follows the cursor. */
function SpotlightCard({
  children,
  className = "",
  delay = 0,
  accent = "245,245,247",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  accent?: string;
}) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(${accent},0.09), transparent 70%)`;
  const edge = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgba(${accent},0.5), transparent 70%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      whileHover={{ y: -4 }}
      whileTap={TAP}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={`group relative overflow-hidden rounded-3xl bg-[#1c1d21] p-px ${className}`}
    >
      {/* viewport-active border illumination (touch + desktop) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: EASE, delay: delay + 0.15 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(160deg, rgba(${accent},0.6), transparent 55%)`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: edge }}
      />
      <div
        className={`relative h-full rounded-[calc(1.5rem-1px)] bg-[#131417] ${innerClassName}`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-10 md:mb-14"
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
        <Icon size={14} strokeWidth={1.75} />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-[#f5f5f7] sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <motion.span
      whileTap={TAP}
      transition={SPRING}
      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[#c7c7cc] transition-colors hover:border-white/25 hover:text-[#f5f5f7] sm:text-sm"
    >
      {children}
    </motion.span>
  );
}

function CursorSpotlight() {
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.6 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgba(245,245,247,0.06), transparent 70%)`;

  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden pointer-fine:block"
      style={{ background }}
    />
  );
}

function ScrollEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-10vh", "55vh"]);
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], ["-8vw", "12vw", "-4vw"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-[#d6465c] via-[#f5f5f7] to-[#9a9aa0]"
        style={{ scaleX }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-0 z-0 h-[60vh] w-[110vw] max-w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(214,70,92,0.12),rgba(245,245,247,0.04)_55%,transparent)] blur-2xl"
        style={{ y: glowY, x: glowX, opacity: glowOpacity }}
      />
    </>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-3 sm:top-4 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#101113]/80 p-1 backdrop-blur-md sm:p-1.5 [scrollbar-width:none]"
      >
        {nav.map((n) => (
          <motion.a
            key={n.href}
            href={n.href}
            whileTap={TAP}
            transition={SPRING}
            className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs text-[#86868b] transition-colors hover:bg-white/[0.07] hover:text-[#f5f5f7] sm:px-3.5 sm:py-2 sm:text-sm"
          >
            {n.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}

function ButtonLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={TAP}
      transition={SPRING}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
        primary
          ? "bg-[#f5f5f7] text-[#101113] hover:bg-white"
          : "border border-white/15 text-[#f5f5f7] hover:border-white/30 hover:bg-white/[0.05]"
      }`}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-[#101113] text-[#f5f5f7]">
        <ScrollEffects />
        <CursorSpotlight />
        <Navbar />

        {/* HERO */}
        <section
          id="about"
          className="relative z-10 scroll-mt-24 px-5 pb-20 pt-24 sm:px-8 md:pb-32 md:pt-32"
        >
          <div
            aria-hidden
            className="bg-dots pointer-events-none absolute inset-x-0 -top-24 h-[760px]"
          />
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative mx-auto max-w-6xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-[#c7c7cc] sm:px-4 sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8e2d6] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8e2d6]" />
              </span>
              <MapPin size={14} strokeWidth={1.75} className="text-[#86868b]" />
              Baku, Azerbaijan • Open to Security Advisory & Ventures
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-10 text-sm font-medium tracking-[0.35em] text-[#86868b]"
            >
              ELSHAN MAMMADOV
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-5xl bg-gradient-to-b from-[#f5f5f7] to-[#9a9aa0] bg-clip-text text-4xl font-semibold leading-[1.08] tracking-tight text-transparent sm:text-6xl md:text-7xl"
            >
              Red Team Specialist & Vulnerability Researcher
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl text-base leading-relaxed text-[#86868b] sm:mt-8 sm:text-lg md:text-xl"
            >
              Entrepreneur & Security Researcher focused on offensive web
              security, AI automation, and building technology-driven ventures
              in Baku.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href={GITHUB} primary>
                <Terminal size={16} /> GitHub
              </ButtonLink>
              <ButtonLink href={LINKEDIN}>
                <Briefcase size={16} /> LinkedIn
              </ButtonLink>
              <ButtonLink href="#contact">
                <Mail size={16} /> Contact <ArrowRight size={16} />
              </ButtonLink>
            </motion.div>
          </motion.div>

          {/* Featured disclosure */}
          <div className="relative mx-auto mt-20 max-w-6xl md:mt-28">
            <SpotlightCard accent="214,70,92" innerClassName="overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#b3243d]/20 blur-3xl"
              />
              <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1.6fr_1fr] md:gap-10 md:p-14">
                <div>
                  <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#d6465c]/30 bg-[#d6465c]/10 px-3.5 py-1.5 text-[10px] font-medium tracking-[0.12em] text-[#f0a3af] sm:text-xs sm:tracking-[0.14em]">
                    <ShieldAlert size={14} />
                    VULNERABILITY DISCLOSURE • WPSCAN DATABASE
                  </span>
                  <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                    CVE-2026-118783
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#86868b]">
                    Discovered, validated, and responsibly disclosed a WordPress
                    plugin security vulnerability with full Proof-of-Concept
                    (PoC), published in the WPScan Vulnerability Database.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={TAP}
                    transition={SPRING}
                    href={WPSCAN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3 text-sm font-medium text-[#101113]"
                  >
                    View on WPScan <ArrowUpRight size={16} />
                  </motion.a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#d6465c]/25 sm:h-44 sm:w-44 md:h-56 md:w-56">
                    <div className="absolute inset-4 rounded-full border border-white/10" />
                    <div className="absolute inset-9 rounded-full border border-white/5" />
                    <Bug
                      size={56}
                      strokeWidth={1.25}
                      className="text-[#e7b7be]"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32"
        >
          <SectionHeading
            eyebrow="Ventures & Experience"
            title="Building and securing, in parallel."
            icon={Briefcase}
          />
          <div className="grid gap-5 md:grid-cols-6">
            {experience.map((e, i) => (
              <SpotlightCard
                key={e.name}
                className={e.className}
                delay={(i % 2) * 0.1}
                innerClassName="p-6 sm:p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <e.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#86868b]">
                    {e.period}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {e.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#c7c7cc]">
                  {e.role}
                </p>
                <p className="mt-4 leading-relaxed text-[#86868b]">{e.text}</p>
                {e.link && (
                  <a
                    href={e.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#f5f5f7] underline-offset-4 hover:underline"
                  >
                    {e.link.label} <ArrowUpRight size={14} />
                  </a>
                )}
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* PROJECTS & RESEARCH */}
        <section
          id="projects"
          className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32"
        >
          <SectionHeading
            eyebrow="Security Engineering & AI"
            title="Projects & Research"
            icon={Cpu}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <SpotlightCard innerClassName="p-6 sm:p-8 md:p-10">
              <Radar size={26} strokeWidth={1.5} />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                AI Vehicle Speed & Traffic Radar
              </h3>
              <p className="mt-4 leading-relaxed text-[#86868b]">
                Real-time computer vision system built with Python, OpenCV,
                YOLOv8, and NumPy featuring perspective/camera-angle
                calibration, real-world distance calculation, and live speed
                estimation (km/h).
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "OpenCV", "YOLOv8", "NumPy"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard delay={0.1} innerClassName="p-6 sm:p-8 md:p-10">
              <Wrench size={26} strokeWidth={1.5} />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                Custom Offensive Security Tooling
              </h3>
              <p className="mt-4 leading-relaxed text-[#86868b]">
                {tools.join(", ")} — automated static analysis, vulnerability
                discovery, and exploitation workflows built with Python,
                Semgrep, Node.js, and Bash.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-[#c7c7cc]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="md:col-span-2"
              delay={0.05}
              innerClassName="p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={26} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold tracking-tight">
                  Core Security Domains & Stack
                </h3>
              </div>
              <div className="mt-8 grid gap-10 md:grid-cols-3">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#86868b]">
                    Domains
                  </p>
                  <ul className="space-y-3 text-[#c7c7cc]">
                    {domains.map((d) => (
                      <li key={d} className="flex gap-3 leading-snug">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#86868b]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#86868b]">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#86868b]">
                    Active on
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((p) => (
                      <Chip key={p}>{p}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section
          id="credentials"
          className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32"
        >
          <SectionHeading
            eyebrow="Education, Certifications & Volunteering"
            title="Credentials"
            icon={Award}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {education.map((e, i) => (
              <SpotlightCard
                key={e.name}
                delay={i * 0.08}
                innerClassName="p-8"
              >
                <e.icon size={24} strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {e.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c7c7cc]">
                  {e.role}
                </p>
                <p className="mt-3 text-sm text-[#86868b]">{e.period}</p>
              </SpotlightCard>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 mt-16 text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]"
          >
            Licenses & Certifications — 7 Verified Credentials
          </motion.h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, i) => (
              <SpotlightCard
                key={c.name}
                delay={(i % 3) * 0.07}
                innerClassName="p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <BadgeCheck
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#e8e2d6]"
                  />
                  <span className="text-xs text-[#86868b]">{c.date}</span>
                </div>
                <h4 className="mt-4 font-medium leading-snug">{c.name}</h4>
                <p className="mt-1 text-sm text-[#86868b]">{c.issuer}</p>
                {c.id && (
                  <p className="mt-4 break-all font-mono text-xs text-[#6b6b70]">
                    ID: {c.id}
                  </p>
                )}
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-32"
        >
          <SpotlightCard innerClassName="overflow-hidden">
            <div
              aria-hidden
              className="bg-dots pointer-events-none absolute inset-0 opacity-60"
            />
            <div className="relative px-6 py-14 text-center sm:px-8 md:px-16 md:py-24">
              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Let&apos;s build something secure.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#86868b]">
                Open to security engagements, responsible disclosure
                discussions, and venture partnerships.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href={LINKEDIN} primary>
                  <Briefcase size={16} /> Reach out on LinkedIn
                </ButtonLink>
                <ButtonLink href={GITHUB}>
                  <Terminal size={16} /> GitHub
                </ButtonLink>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-[#1c1d21] px-5 py-12 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#86868b] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Elshan Mammadov • Baku, Azerbaijan</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                ["bingoapp.az", "https://bingoapp.az"],
                ["qarabaghestate.az", "https://qarabaghestate.az"],
                ["github.com/elshanmammadoov", GITHUB],
                ["linkedin.com/in/elshanmammadoov", LINKEDIN],
              ].map(([label, href]) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={TAP}
                  transition={SPRING}
                  className="transition-colors hover:text-[#f5f5f7]"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
