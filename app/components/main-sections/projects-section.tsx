import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectCategory = "Mobile" | "Frontend" | "Backend";

interface ProjectItem {
  id: string;
  categories: ProjectCategory[];
  title: string;
  summary: string;
  description: string;
  stacks: string[];
  imageUrl: string;
}

const projectItems: ProjectItem[] = [
  {
    id: "hyundai-mobis",
    categories: ["Mobile"],
    title: "현대모비스 모바일 앱",
    summary: "내부 직원용 교육 서비스",
    description: "Flutter 기반 하이브리드 앱으로 차량 관리, 서비스 예약, 메시지 알림 등 고객 접점을 통합했습니다.",
    stacks: ["iOS", "Android", "Swift", "Kotlin"],
    imageUrl: "/mobischool.png",
  },
  {
    id: "hanati",
    categories: ["Mobile"],
    title: "하나금융TI 모바일 앱",
    summary: "내부 직원용 교육 서비스",
    description: "Android/iOS 네이티브 금융 앱. 보안 모듈, 생체 인증, UX 정비를 담당했습니다.",
    stacks: ["iOS", "Android", "Swift", "Kotlin"],
    imageUrl: "/hanati.png",
  },
  {
    id: "hanam",
    categories: ["Frontend", "Backend"],
    title: "하남교육재단 플랫폼",
    summary: "교육 관리 · 반응형 설계",
    description: "Nuxt3 기반 진로 탐색 서비스로 인증, 설문, 검사지 등 주요 기능을 담당하였습니다.",
    stacks: ["Nuxt3", "JavaScript", "Java", "MySQL", "MyBatis"],
    imageUrl: "/hanam.png",
  },
  {
    id: "moongkle",
    categories: ["Frontend", "Mobile"],
    title: "뭉클",
    summary: "감사일기 커뮤니티 웹/앱",
    description: "Vue3, Swfit, kotlin 기반 감사일기 커뮤니티 웹/앱을 개발했습니다.",
    stacks: ["Vue", "Swift", "Kotlin", "Firebase"],
    imageUrl: "/moongkle.jpg",
  },
  {
    id: "tip",
    categories: ["Frontend", "Backend", "Mobile"],
    title: "TIP",
    summary: "보험 설계사 교육 서비스",
    description: "웹뷰 기반 앱 구조 설계 및 구현을 담당하였고 백엔드와 프론트엔드 업무를 지원하였습니다.",
    stacks: ["Java", "Spring Boot", "MySQL", "Vue3", "Swift", "Kotlin"],
    imageUrl: "/tip.png",
  },
  {
    id: "hanadigi",
    categories: ["Mobile"],
    title: "하나디지털캠퍼스",
    summary: "하나은행 직원 교육용 서비스",
    description: "Object-C와 Java 기반으로 LMS 기능 개발 및 유지보수를 담당했습니다.",
    stacks: ["Object-C", "Java"],
    imageUrl: "/hanadigital.jpg",
  },
  {
    id: "polzzak",
    categories: ["Frontend", "Backend"],
    title: "폴짝",
    summary: "국회의원 후원 웹 서비스",
    description: "Spring Boot와 Nuxt3 기반으로 국회의원 후원 웹 서비스를 개발했습니다.",
    stacks: ["Java", "Spring Boot", "Nuxt3"],
    imageUrl: "/polzzak.jpg",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-32 rounded-[32px] border border-white/10 bg-neutral-950/70 p-8 text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,1)] backdrop-blur-2xl"
    >
      <div className="space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200/60 bg-linear-to-r px-4 py-2 text-xs font-semibold tracking-[0.3em] text-neutral-600 dark:border-neutral-700 dark:from-neutral-900/50 dark:via-neutral-800/50 dark:text-neutral-200">
          <span className="h-2 w-2 rounded-full bg-linear-to-r from-sky-500 to-green-500 motion-safe:animate-pulse" />
          PROJECTS
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
            주요 프로젝트
          </p>
          <p className="text-xl font-bold leading-tight tracking-tight text-transparent sm:text-xl">
            <span className="bg-linear-to-r from-neutral-900 via-slate-700 to-sky-600 bg-clip-text dark:from-white dark:via-slate-200 dark:to-purple-400">
              모바일·프론트엔드·백엔드를 넘나들며 설계와 구현을 주도한 대표 프로젝트들입니다.
            </span>
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectItems.map((project, index) => (
          <article
            key={project.id}
            style={{ transitionDelay: `${index * 90}ms` }}
            className={`group flex transform-gpu flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 text-left shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 ${
              hasEntered ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={480}
                height={320}
                className="h-40 w-full object-cover transition duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-2">
                {project.categories.slice(0, 3).map((category) => (
                  <span
                    key={`${project.id}-${category}`}
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${getCategoryBadgeClass(category)}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">{project.summary}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-sm text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-100"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function getCategoryBadgeClass(category: ProjectCategory) {
  const base = "text-xs font-semibold text-white";
  switch (category) {
    case "Mobile":
      return `${base} bg-sky-500/90`;
    case "Frontend":
      return `${base} bg-emerald-500/90`;
    case "Backend":
      return `${base} bg-purple-500/90`;
    default:
      return `${base} bg-neutral-500/90`;
  }
}

