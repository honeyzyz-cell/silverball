import { AnimateIn } from "@/components/animate-in"
import {
  HeartPulse,
  Brain,
  ClipboardList,
  ArrowRight,
} from "lucide-react"

const timelineItems = [
  {
    icon: HeartPulse,
    title: "호스피스 병동",
    description:
      "생의 마지막을 함께하며 배운 '진정한 공감'의 기술. 환자와 가족의 마음을 읽는 능력이 마케팅의 핵심이 되었습니다.",
  },
  {
    icon: Brain,
    title: "정신건강의학과",
    description:
      "사람의 심리와 행동 패턴을 분석하던 경험이 소비자 심리 분석으로 이어졌습니다.",
  },
  {
    icon: ClipboardList,
    title: "간호 실습 지도자",
    description:
      "체계적인 교육 프로그램을 설계하던 능력이 마케팅 전략 설계의 기반이 되었습니다.",
  },
]

export function StorySection() {
  return (
    <section id="story" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              The Story
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"왜 간호사가"}
              <br />
              {"마케팅을 하나요?"}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {"13년의 임상 경험이 만들어낸 '진단형 마케팅'. 단순 광고가 아닌, 간호 진단 모델을 마케팅에 이식한 체계적 접근법입니다."}
            </p>
          </div>
        </AnimateIn>

        {/* Process model */}
        <AnimateIn delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["진단", "계획", "수행", "평가"].map((step, i) => (
              <div key={step} className="relative flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <span className="mt-3 text-base font-semibold text-foreground">
                  {step}
                </span>
                {i < 3 && (
                  <ArrowRight className="absolute right-0 top-5 hidden h-5 w-5 translate-x-1/2 text-muted-foreground md:block" />
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Timeline */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {timelineItems.map((item, i) => (
            <AnimateIn key={item.title} delay={0.1 * (i + 1)}>
              <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <item.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
