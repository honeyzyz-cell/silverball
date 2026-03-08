import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  ArrowRight,
  Stethoscope,
} from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimateIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2">
            <Stethoscope className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/80">
              무료 마케팅 진단
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            {"고객이 당신의 서비스를"}
            <br />
            {"경험하도록 설계하세요."}
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-primary-foreground/60">
            {"간호사 면허 보유 마케터, 실버볼 마케팅 대표가 직접 진단하고 설계합니다. 지금 바로 무료 상담을 신청하세요."}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#fee500] text-[#191919] hover:bg-[#fee500]/90 gap-2 text-base font-bold"
            >
              <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                카카오톡 상담 연결
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base"
            >
              <a href="#services">
                서비스 둘러보기
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
