import { AnimateIn } from "@/components/animate-in"
import {
  Eye,
  ShieldCheck,
  GitMerge,
} from "lucide-react"

const uspItems = [
  {
    icon: Eye,
    title: "전문가적 시선",
    description:
      "병원, 상담센터, 학원 등 전문직 타겟의 심리를 정확히 이해합니다. 의료인 출신이기에 가능한 깊은 공감과 전문성으로 고객이 진짜 원하는 메시지를 설계합니다.",
    highlight: "전문직 심리 분석",
  },
  {
    icon: ShieldCheck,
    title: "의료법 준수",
    description:
      "간호사 출신이기에 더 꼼꼼한 가이드라인 준수. 의료법, 의료광고 심의 기준을 숙지하여 안전하고 합법적인 마케팅을 보장합니다.",
    highlight: "리스크 제로",
  },
  {
    icon: GitMerge,
    title: "통합 구조 설계",
    description:
      "블로그(유입) + 플레이스(확신) + 리뷰(전환)의 완벽한 동선. 각 채널이 유기적으로 연결되는 설계로 이탈 없는 고객 여정을 만듭니다.",
    highlight: "유입-확신-전환 동선",
  },
]

export function UspSection() {
  return (
    <section id="usp" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Why Us
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"왜 실버볼이어야 하나요?"}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {"간호사의 체계적 사고와 공감 능력이 마케팅과 만났을 때, 다른 차원의 결과가 만들어집니다."}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {uspItems.map((item, i) => (
            <AnimateIn key={item.title} delay={0.12 * (i + 1)}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-xl">
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-primary transition-all group-hover:w-1.5" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <item.icon className="h-6 w-6 text-secondary-foreground" />
                </div>

                <span className="mb-2 inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                  {item.highlight}
                </span>

                <h3 className="mt-2 text-xl font-bold text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
