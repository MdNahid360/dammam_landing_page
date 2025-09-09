"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formPayload = new FormData()
      formPayload.append("name", formData.name)
      formPayload.append("phone", formData.phone)
      formPayload.append("message", formData.message)

      const response = await fetch("https://formspree.io/f/manbaywz", {
        method: "POST",
        body: formPayload,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setSubmitted(true)
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      console.error("Form submission failed:", error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 md:h-[600px] bg-primary text-white">

            <div className="py-12 md:px-12 px-4  flex flex-col justify-center h-full">
              <h2 className="md:text-4xl text-2xl font-bold text-white mb-4 text-start">تواصل معنا</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
                  تم إرسال رسالتك بنجاح!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 pb-2">
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300"
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 pb-2">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 pb-2">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded border-gray-300"
                    placeholder="اكتب رسالتك..."
                  />
                </div>
                <br />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" cursor-pointer bg-white text-primary font-semibold w-[200px]"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال"}
                </Button>
              </form>
            </div>
            <div className="h-full" style={{ backgroundImage: `url('/images/image2.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}