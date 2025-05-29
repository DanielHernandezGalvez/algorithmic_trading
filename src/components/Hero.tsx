import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50 to-teal-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100">
                                ✨ Nuevo: Integración con IA
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                La Agenda Digital que <span className="text-rose-600">Revoluciona</span> tu Negocio
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl">
                                Gestiona citas, clientes y pagos desde una sola plataforma. Aumenta tu productividad y mejora la
                                experiencia de tus clientes con nuestra agenda digital inteligente.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                                Comenzar Prueba Gratuita
                            </Button>
                            <Button variant="outline" size="lg">
                                Ver Demo en Vivo
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-rose-600" />
                                <span>14 días gratis</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-rose-600" />
                                <span>Sin tarjeta de crédito</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-rose-600" />
                                <span>Soporte 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            alt="Dashboard de AgendaPro"
                            className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                            height="400"
                            src="/imagen_hero.webp"
                            width="600"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
