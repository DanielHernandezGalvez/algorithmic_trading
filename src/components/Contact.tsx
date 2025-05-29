import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge className="bg-rose-100 text-rose-800">Contacto</Badge>
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
                                <Mail className="h-5 w-5 text-rose-600" />
                                <span>contacto@agendapro.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-rose-600" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-rose-600" />
                                <span>Madrid, España</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
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
                            <Button className="w-full bg-rose-600 hover:bg-rose-700">Enviar Mensaje</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
