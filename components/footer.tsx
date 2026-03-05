import { Stethoscope } from "lucide-react"

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "브랜드 블로그", href: "#services" },
      { label: "스마트플레이스", href: "#services" },
      { label: "체험단 & 컨설팅", href: "#services" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "스토리", href: "#story" },
      { label: "강점", href: "#usp" },
      { label: "성과", href: "#results" },
    ],
  },
  {
    title: "문의",
    links: [
      { label: "카카오톡 상담", href: "https://open.kakao.com" },
      { label: "무료 진단 신청", href: "#contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                실버볼
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"간호사 면허 보유 마케터가 운영하는 전문직 특화 마케팅 대행사. 진단-계획-수행-평가 프로세스로 설계합니다."}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2025 실버볼 마케팅. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            {"간호사 면허 보유 | 전문직 전용 마케팅 대행"}
          </p>
        </div>
      </div>
    </footer>
  )
}
