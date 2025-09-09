
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { FaqAccordion, FaqAccordionContent, FaqAccordionItem, FaqAccordionTrigger } from "./ui/faqAccordion"

type Faq = {
  question: string
  answer: string
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="py-24 px-3 max-w-7xl mx-auto ">

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold  pb-2.5">
          الأسئلة الشائعة
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          الأسئلة الشائعة حول شراء المكيفات المستعملة والسكّـراب والمعدات في الدمام، الخبر، القطيف، الأحساء، الجبيل والهفوف
        </p>
      </div>

      <div className="border border-primary rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none">
        <div className="bg-primary  rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none">
          <FaqAccordion type="single" collapsible className="w-full">
            {faqs.map(({ question, answer }, i) => (
              <FaqAccordionItem className="border-green-500" key={i} value={`item-${i}`}>
                <FaqAccordionTrigger className="text-white hover:bg-green-800 font-semibold text-base md:!text-xl text-right">
                  {question}
                </FaqAccordionTrigger>
                <FaqAccordionContent className="text-white/70 bg-green-800 p-4 leading-relaxed font-semibold">
                  {answer}
                </FaqAccordionContent>
              </FaqAccordionItem>
            ))}
          </FaqAccordion>
        </div>
      </div>
    </section>
  )
}
