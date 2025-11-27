interface TechStackCluster {
  id: string;
  label: string;
  description: string;
  icon: "mobile" | "browser" | "database" | "workflow";
  stacks: string[];
  accent: string;
}

const techStacks: TechStackCluster[] = [
  {
    id: "mobile",
    label: "Mobile",
    description: "React Native 없이도 네이티브 품질을 지키는 하이브리드 · 네이티브 앱 개발",
    icon: "mobile",
    stacks: ["Flutter", "Android", "Kotlin", "Swift", "FCM"],
    accent: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Vue·Nuxt·Next 기반 컴포저블 UI와 상태관리, 접근성 중심의 프론트엔드",
    icon: "browser",
    stacks: ["Vue 3", "Nuxt 3", "Next.js", "TypeScript", "Tailwind"],
    accent: "from-emerald-500/20 via-lime-400/10 to-transparent",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Java/Spring Boot 아키텍처 설계, 데이터 모델링과 캐싱/배치 전략",
    icon: "database",
    stacks: ["Java", "Spring Boot", "MyBatis", "MySQL", "Redis"],
    accent: "from-purple-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "workflow",
    label: "Workflow",
    description: "CI/CD, 모니터링, 품질 자동화를 포함한 배포 워크플로우",
    icon: "workflow",
    stacks: ["Vercel", "GitHub Actions", "Docker", "Sentry", "Lighthouse"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-32 space-y-6 rounded-[32px] border border-neutral-200/60 bg-white/80 p-8 shadow-[0_30px_90px_-60px_rgba(15,23,42,1)] backdrop-blur-xl dark:border-neutral-800/70 dark:bg-neutral-900/70"
    >
      <div className="space-y-3 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          Tech Stack
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">핵심 기술 스택</h2>
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          제품 단계에 맞춰 선택하는 모바일, 프론트엔드, 백엔드, 워크플로우 역량을 정리했습니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {techStacks.map((cluster) => (
          <article
            key={cluster.id}
            className="rounded-[28px] border border-neutral-200/70 bg-white/80 p-6 shadow-lg shadow-neutral-900/5 transition hover:-translate-y-1 hover:border-neutral-900/50 dark:border-neutral-800/70 dark:bg-neutral-900/70 dark:hover:border-white/30"
          >
            <div className={`rounded-3xl bg-linear-to-r ${cluster.accent} p-0.5`}>
              <div className="flex items-center gap-4 rounded-[22px] bg-white/90 px-4 py-3 dark:bg-neutral-900/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-2xl text-neutral-900 dark:bg-white/10 dark:text-white">
                  {renderClusterIcon(cluster.icon)}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    {cluster.label}
                  </p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-white">{cluster.description}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {cluster.stacks.map((stack) => (
                <span
                  key={stack}
                  className="rounded-full border border-neutral-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-200"
                >
                  {stack}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function renderClusterIcon(icon: TechStackCluster["icon"]) {
  const baseProps = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <circle cx="12" cy="18" r="0.75" />
        </svg>
      );
    case "browser":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 13l-2 2 2 2m8-4 2 2-2 2" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M6 8.5v5l6 4.5m6-9.5v5l-6 4.5M6 6h12" />
        </svg>
      );
    default:
      return null;
  }
}

