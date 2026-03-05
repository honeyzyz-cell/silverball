import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import {
  PenLine,
  MapPin,
  Users,
  ArrowRight,
  Check,
} from "lucide-react"

const services = [
  {
    icon: PenLine,
    title: "브랜드 블로그",
    description:
      "전문직 특화 고퀄리티 원고 작성. 단순 키워드 나열이 아닌, 전문 분야의 신뢰를 구축하는 콘텐츠를 설계합니다.",
    features: [
      "전문직 타겟 키워드 리서치",
      "SEO 최적화 원고 작성",
      "전문성과 공감의 밸런스",
      "정기 성과 리포트",
    ],
  },
  {
    icon: MapPin,
    title: "스마트플레이스 최적화",
    description:
      "네이버 지도 상위 노출 및 전환 설계. 검색에서 방문까지의 동선을 체계적으로 설계합니다.",
    features: [
      "지역 키워드 상위 노출",
      "플레이스 프로필 최적화",
      "리뷰 관리 전략",
      "전환율 극대화 설계",
    ],
    featured: true,
  },
  {
    icon: Users,
    title: "체험단 & 컨설팅",
    description:
      "타겟 맞춤형 체험단 운영과 1:1 마케팅 컨설팅. 현재 상황에 맞는 최적의 전략을 함께 수립합니다.",
    features: [
      "타겟 맞춤 체험단 기획",
      "인플루언서 매칭",
      "1:1 마케팅 전략 수립",
      "실행 가능한 액션 플랜",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Services
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"맞춤형 마케팅 서비스"}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {"전문직의 특수성을 이해하는 마케터만이 만들 수 있는 차별화된 서비스를 제공합니다."}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={0.12 * (i + 1)}>
              <div
                className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:shadow-xl ${
                  service.featured
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                    BEST
                  </span>
                )}

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                    service.featured
                      ? "bg-primary-foreground/15"
                      : "bg-secondary"
                  }`}
                >
                  <service.icon
                    className={`h-6 w-6 ${
                      service.featured
                        ? "text-primary-foreground"
                        : "text-secondary-foreground"
                    }`}
                  />
                </div>

                <h3
                  className={`text-xl font-bold ${
                    service.featured ? "text-primary-foreground" : "text-card-foreground"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    service.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          service.featured
                            ? "text-secondary"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          service.featured
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-8 gap-2 ${
                    service.featured
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <a href="#contact">
                    자세히 보기
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
