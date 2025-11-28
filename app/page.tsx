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
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 relative"
      >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
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
            <div className="space-y-3 w-full">
              <p className="text-xl font-semibold">이진영</p>
              
              {/* 직무 */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  직무
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Mobile · Frontend · Backend
                </p>
              </div>

              {/* 경력사항 */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  경력사항
                </p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  WillbeSoft
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                  2021 ~ 2025
                </p>
              </div>

              {/* 자격증 */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  자격증
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    정보처리기사 취득
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    토익스피킹 Lv.6
                  </p>
                </div>
              </div>

              {/* 연락처 */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  연락처
                </p>
                <a
                  href="mailto:jinyyyy.lee@gmail.com"
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors break-all underline underline-offset-4"
                >
                  jinyyyy.lee@gmail.com
                </a>
              </div>
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
              className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:bg-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-500 dark:text-neutral-300"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v10m0 0l-3-3m3 3l3-3M4 17h12" />
              </svg>
              경력기술서 다운로드
            </a>

          </div>
        </aside>

        <main className="flex flex-1 flex-col gap-12">
          <HeroSection />
          <ProjectsSection />
          {/* <TechStackSection /> */}
        </main>
      </div>
      
      {/* 우측 하단 고정 문구 */}
      <div className="fixed bottom-6 right-6 z-10">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm">
          현재 프로젝트는 Next.js 기반으로 개발되었습니다.
        </p>
      </div>
    </div>
  );
}
