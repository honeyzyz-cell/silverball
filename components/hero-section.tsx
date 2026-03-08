"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-secondary" />
          <span className="text-sm font-medium text-secondary">
            간호사 면허 보유 마케터
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
        >
          {"간호사가 직접"}
          <br />
          {"당신의 비즈니스를"}
          <br />
          <span className="text-secondary">{'설계'}</span>
          {"합니다."}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70 md:text-xl"
        >
          {"생명을 다루던 정교함으로 설계하는"}
          <br className="hidden md:block" />
          {"전문직 전용 네이버 유입 구조, 실버볼 마케팅"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base font-semibold"
          >
            <a href="#contact">
              무료 마케팅 진단 받기
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 gap-2 text-base"
          >
            <a href="#services">
              <Briefcase className="h-4 w-4" />
              포트폴리오 보기
            </a>
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-8 py-8 backdrop-blur"
        >
          {[
            { title: "브랜드 블로그", desc: "전문직 특화 고퀄리티 콘텐츠" },
            { title: "스마트플레이스", desc: "네이버 지도 상위 노출 설계" },
            { title: "체험단", desc: "신뢰 리뷰 기반 마케팅" },
          ].map((service) => (
            <div key={service.title} className="text-center">
              <div className="text-xl font-bold text-secondary md:text-2xl">
                {service.title}
              </div>
              <div className="mt-1 text-xs font-medium text-primary-foreground/50 md:text-sm">
                {service.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
