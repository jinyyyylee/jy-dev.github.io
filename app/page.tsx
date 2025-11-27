'use client'

import Image from "next/image";
import { HeroSection } from "./components/main-sections/hero-section";
import { ProjectsSection } from "./components/main-sections/projects-section";
import { TechStackSection } from "./components/main-sections/tech-stack-section";

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

const navigationItems: NavigationItem[] = [
  { id: "hero", label: "홈", icon: "🏠" },
  { id: "projects", label: "주요 프로젝트", icon: "🗂️" },
  { id: "tech-stack", label: "기술 스택", icon: "🧩" },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
        <aside className="flex w-full flex-col gap-8 rounded-3xl border border-neutral-200 bg-neutral-50/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/60 lg:sticky lg:top-12 lg:h-fit max-lg:hidden">
          <div className="flex flex-col items-center gap-4 text-center">
            <div style={{ width: '100%' }}>
              <Image
                src={`${basePath}/profile.jpg`}
                alt="profile"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '9999px' }}
                unoptimized
              />
            </div>
            <div className="space-y-1">
              <p className="text-xl font-semibold">이진영</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Mobile · Frontend · Backend
              </p>
            </div>
          </div>

          <nav className="space-y-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:hover:bg-neutral-800 dark:hover:text-white"
                onClick={e => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  // Optionally, set the hash in the URL without jumping
                  if (history.pushState) {
                    history.pushState(null, "", `#${item.id}`);
                  }
                }}
              >
                <span aria-hidden>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a className="flex items-center justify-center gap-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:bg-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 text-center"
               onClick={() => {
                window.open("https://jpointofviewntoe.tistory.com", '_blank');
               }}
               target="_blank"
               rel="noopener noreferrer"
              >
                <Image src={`${basePath}/tistory.png`} alt="Tistory" width={24} height={24} />
                개발 블로그 바로가기
            </a>

            <a
              href={`${basePath}/career.pdf`}
              download
              className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:bg-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 text-center block"
            >
              경력기술서 다운로드
            </a>

          </div>
        </aside>

        <main className="flex flex-1 flex-col gap-12">
          <HeroSection />
          <ProjectsSection />
          <TechStackSection />
        </main>
      </div>
    </div>
  );
}
