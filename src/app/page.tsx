import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Smartphone, Shield, Zap, CheckCircle, Star, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Opinions from "@/components/Opinions"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function AgendaDigitalLanding() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Características */}
        <Features />

        {/* Servicios */}
        <Services />

        {/* Planes */}
        <Pricing />

        {/* Opiniones */}
        <Opinions />

        {/* Contacto */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
