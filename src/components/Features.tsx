import React from 'react'
import { Badge } from './ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Calendar, Users, Smartphone, Clock, Shield, Zap } from 'lucide-react'

export default function Features() {
  return (
     <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-rose-100 text-rose-800">Características</Badge>
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
                  <Calendar className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
                  <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
                  <Smartphone className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
                  <Clock className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
                  <Shield className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
                  <Zap className="h-12 w-12 text-rose-600 mx-auto mb-4" />
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
  )
}
