import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Smartphone, Shield, Zap, CheckCircle, Star, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/Header"

export default function AgendaDigitalLanding() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
  <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    ✨ Nuevo: Integración con IA
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    La Agenda Digital que <span className="text-emerald-600">Revoluciona</span> tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Gestiona citas, clientes y pagos desde una sola plataforma. Aumenta tu productividad y mejora la
                    experiencia de tus clientes con nuestra agenda digital inteligente.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Comenzar Prueba Gratuita
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Demo en Vivo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>14 días gratis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Sin tarjeta de crédito</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Dashboard de AgendaPro"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800">Características</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Todo lo que Necesitas en una Sola Plataforma
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las características que hacen de AgendaPro la mejor opción para gestionar tu negocio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Gestión de Citas Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Programa, reprograma y cancela citas con facilidad. Recordatorios automáticos y sincronización en
                    tiempo real.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Base de Datos de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Mantén toda la información de tus clientes organizada. Historial de citas, preferencias y notas
                    personalizadas.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Acceso Móvil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Gestiona tu agenda desde cualquier dispositivo. Apps nativas para iOS y Android con sincronización
                    instantánea.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Recordatorios Automáticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Reduce las ausencias con recordatorios por SMS, email y WhatsApp. Configuración personalizable por
                    cliente.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Seguridad Avanzada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Protección de datos con encriptación de nivel bancario. Cumplimiento GDPR y respaldos automáticos
                    diarios.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle>Reportes y Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Analiza el rendimiento de tu negocio con reportes detallados. Métricas de ocupación, ingresos y
                    satisfacción.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800">Servicios</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Perfecto para Cualquier Tipo de Negocio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desde salones de belleza hasta consultorios médicos, AgendaPro se adapta a las necesidades específicas
                  de tu industria.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Salones de Belleza</h3>
                    <p className="text-gray-500">
                      Gestiona servicios múltiples, estilistas y productos. Galería de trabajos y sistema de
                      fidelización integrado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Consultorios Médicos</h3>
                    <p className="text-gray-500">
                      Historiales médicos seguros, recetas digitales y integración con sistemas de salud existentes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Centros de Fitness</h3>
                    <p className="text-gray-500">
                      Reserva de clases grupales, entrenadores personales y seguimiento de membresías y pagos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Smartphone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Servicios Profesionales</h3>
                    <p className="text-gray-500">
                      Abogados, contadores, consultores. Gestión de casos, facturación y seguimiento de proyectos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Servicios AgendaPro"
                  className="aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
                  height="500"
                  src="/placeholder.svg?height=500&width=500"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Planes */}
        <section id="planes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800">Planes</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elige el Plan Perfecto para tu Negocio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Planes flexibles que crecen contigo. Comienza gratis y actualiza cuando lo necesites.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <CardDescription>Perfecto para empezar</CardDescription>
                  <div className="text-4xl font-bold text-emerald-600">Gratis</div>
                  <p className="text-sm text-gray-500">Para siempre</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Hasta 50 citas/mes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">1 usuario</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Recordatorios básicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte por email</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Comenzar Gratis
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-emerald-500 relative hover:border-emerald-600 transition-colors">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                  Más Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Profesional</CardTitle>
                  <CardDescription>Para negocios en crecimiento</CardDescription>
                  <div className="text-4xl font-bold text-emerald-600">$29</div>
                  <p className="text-sm text-gray-500">por mes</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Citas ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Hasta 5 usuarios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Recordatorios avanzados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Reportes y analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Integración con pagos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte prioritario</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Comenzar Prueba</Button>
                </CardFooter>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Empresarial</CardTitle>
                  <CardDescription>Para grandes organizaciones</CardDescription>
                  <div className="text-4xl font-bold text-emerald-600">$99</div>
                  <p className="text-sm text-gray-500">por mes</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Todo en Profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Usuarios ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">API personalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Marca personalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Gerente de cuenta</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Contactar Ventas
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800">Opiniones</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que Dicen Nuestros Clientes</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Miles de profesionales confían en AgendaPro para gestionar sus negocios exitosamente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">María González</CardTitle>
                  <CardDescription>Propietaria de Salón de Belleza</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "AgendaPro transformó completamente mi negocio. Ahora puedo gestionar todas mis citas desde el móvil
                    y mis clientes adoran los recordatorios automáticos. ¡Increíble!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Dr. Carlos Ruiz</CardTitle>
                  <CardDescription>Médico Especialista</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "La seguridad y organización que ofrece AgendaPro es exactamente lo que necesitaba para mi consulta.
                    Los reportes me ayudan a optimizar mis horarios perfectamente."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Ana Martínez</CardTitle>
                  <CardDescription>Entrenadora Personal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Desde que uso AgendaPro, he reducido las cancelaciones en un 80%. La integración con WhatsApp es
                    fantástica y mis clientes están más comprometidos que nunca."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800">Contacto</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para Comenzar?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos hoy mismo y descubre cómo AgendaPro puede transformar tu negocio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Hablemos de tu Proyecto</h3>
                  <p className="text-gray-500">
                    Nuestro equipo de expertos está listo para ayudarte a implementar la solución perfecta para tu
                    negocio. Agenda una demo personalizada sin compromiso.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <span>contacto@agendapro.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span>Madrid, España</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Agendar Demo
                  </Button>
                  <Button variant="outline" size="lg">
                    Llamar Ahora
                  </Button>
                </div>
              </div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Apellido</label>
                      <Input placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Teléfono</label>
                    <Input placeholder="+34 600 000 000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Negocio</label>
                    <Input placeholder="Ej: Salón de belleza, Consulta médica..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <Textarea placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..." />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enviar Mensaje</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="container grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">AgendaPro</span>
            </div>
            <p className="text-sm text-gray-500">
              La plataforma líder en gestión de citas y agenda digital para profesionales.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Producto</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Características
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Precios
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Integraciones
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                API
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Soporte</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Centro de Ayuda
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Documentación
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Contacto
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Estado del Sistema
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Empresa</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Sobre Nosotros
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Blog
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Carreras
              </Link>
              <Link href="#" className="block text-gray-500 hover:text-emerald-600">
                Prensa
              </Link>
            </div>
          </div>
        </div>
        <div className="container flex flex-col sm:flex-row justify-between items-center pt-8 border-t">
          <p className="text-xs text-gray-500">© 2024 AgendaPro. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs">
            <Link href="#" className="text-gray-500 hover:text-emerald-600">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-gray-500 hover:text-emerald-600">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-500 hover:text-emerald-600">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
