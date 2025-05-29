import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Badge } from './ui/badge'
import { Star } from 'lucide-react'

export default function Opinions() {
    return (
        <section id="opiniones" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge className="bg-rose-100 text-rose-800">Opiniones</Badge>
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
    )
}
