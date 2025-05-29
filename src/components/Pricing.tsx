import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { CheckCircle } from 'lucide-react'
import { Badge } from 'lucide-react'
import { Button } from './ui/button'

export default function Pricing() {
  return (
        <section id="planes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-rose-100 text-rose-800">Planes</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elige el Plan Perfecto para tu Negocio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Planes flexibles que crecen contigo. Comienza gratis y actualiza cuando lo necesites.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-2 hover:border-rose-200 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <CardDescription>Perfecto para empezar</CardDescription>
                  <div className="text-4xl font-bold text-rose-600">Gratis</div>
                  <p className="text-sm text-gray-500">Para siempre</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Hasta 50 citas/mes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">1 usuario</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Recordatorios básicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
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

              <Card className="border-2 border-rose-500 relative hover:border-rose-600 transition-colors">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white">
                  Más Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Profesional</CardTitle>
                  <CardDescription>Para negocios en crecimiento</CardDescription>
                  <div className="text-4xl font-bold text-rose-600">$29</div>
                  <p className="text-sm text-gray-500">por mes</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Citas ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Hasta 5 usuarios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Recordatorios avanzados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Reportes y analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Integración con pagos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Soporte prioritario</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Comenzar Prueba</Button>
                </CardFooter>
              </Card>

              <Card className="border-2 hover:border-rose-200 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Empresarial</CardTitle>
                  <CardDescription>Para grandes organizaciones</CardDescription>
                  <div className="text-4xl font-bold text-rose-600">$99</div>
                  <p className="text-sm text-gray-500">por mes</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Todo en Profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Usuarios ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">API personalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Marca personalizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
                      <span className="text-sm">Soporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600" />
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
  )
}
