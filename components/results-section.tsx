"use client"

import { AnimateIn } from "@/components/animate-in"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  TrendingUp,
  MapPin,
  ThumbsUp,
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
    value: 1000,
    suffix: "%",
    label: "플레이스 방문자 상승",
    description: "네이버 플레이스 최적화를 통해 방문자 수 1000% 상승을 달성했습니다.",
  },
  {
    icon: MapPin,
    value: 1,
    suffix: "위",
    label: "지역 키워드",
    label2: "블로그 점유",
    description: "지역 키워드 블로그 상위 노출로 검색 유입을 선점합니다.",
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    label: "프리미엄 블로그",
    label2: "체험단 모집 실행",
    description: "블로거 체험단을 활용한 진정성 있는 리뷰로 고객 신뢰를 구축합니다.",
  },
  {
    icon: MessageSquare,
    value: 3,
    suffix: "단계",
    label: "문의, 상담",
    label2: "연결구조",
    description: "유입부터 문의, 상담까지 자연스럽게 연결되는 전환 구조를 설계합니다.",
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
              {"병원 · 심리상담 · 실버사업 · 의료사업 특화 마케팅의 실제 성과를 확인하세요."}
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
                  {item.label2 && <><br />{item.label2}</>}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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
