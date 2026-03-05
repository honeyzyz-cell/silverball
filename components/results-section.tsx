"use client"

import { AnimateIn } from "@/components/animate-in"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  TrendingUp,
  MapPin,
  Star,
  MessageSquare,
} from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, target, { duration: 2, ease: "easeOut" })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [count, target])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`
      }
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>{"0" + suffix}</span>
}

const results = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "블로그 방문자 상승",
    description: "체계적인 SEO 전략으로 고객사 블로그 트래픽 300% 상승을 달성했습니다.",
  },
  {
    icon: MapPin,
    value: 1,
    suffix: "위",
    label: "지역 키워드 점유",
    description: "네이버 플레이스 지역 키워드 1페이지 최상단 노출을 유지하고 있습니다.",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "고객 만족도",
    description: "전문직 고객사들의 높은 재계약률이 증명하는 서비스 만족도입니다.",
  },
  {
    icon: MessageSquare,
    value: 50,
    suffix: "+",
    label: "성공 사례",
    description: "병원, 상담센터, 학원 등 다양한 전문직 분야에서 성과를 만들었습니다.",
  },
]

const reviews = [
  {
    text: "블로그 시작 2개월 만에 일 방문자 500명을 돌파했어요. 전문적인 원고 퀄리티에 놀랐습니다.",
    author: "OO 한의원 원장님",
  },
  {
    text: "의료법 걱정 없이 마케팅할 수 있어서 너무 좋았어요. 간호사 출신이라 소통이 잘 됩니다.",
    author: "OO 피부과 실장님",
  },
  {
    text: "네이버 플레이스 최적화 후 예약 전환이 2배 이상 늘었습니다. 체계적인 분석이 인상적이에요.",
    author: "OO 상담센터 대표님",
  },
  {
    text: "다른 대행사와 차원이 달라요. 우리 분야를 이해하고 있으니 설명할 필요가 없어서 편합니다.",
    author: "OO 심리상담소 원장님",
  },
  {
    text: "컨설팅 한 번으로 마케팅 방향이 확실해졌어요. 실행 가능한 구체적 플랜을 주셔서 감사합니다.",
    author: "OO 학원 대표님",
  },
  {
    text: "체험단 운영도 타겟에 맞게 꼼꼼하게 진행해주세요. 블로그 유입이 확실히 체감됩니다.",
    author: "OO 치과 마케팅 담당자님",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Results
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"숫자가 증명하는 실력"}
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {"실제 광고주들의 성과 데이터와 생생한 후기로 확인하세요."}
            </p>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {results.map((item, i) => (
            <AnimateIn key={item.label} delay={0.1 * (i + 1)}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <item.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {item.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Review grid */}
        <AnimateIn delay={0.2}>
          <div className="mt-20">
            <h3 className="mb-8 text-center text-xl font-bold text-foreground">
              {"고객 후기"}
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-[#facc15] text-[#facc15]"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {'"' + review.text + '"'}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
