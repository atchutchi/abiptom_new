'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getSupabase } from '@/lib/supabase'
import PrimaryButton from '@/components/ui/PrimaryButton'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Nome é obrigatório'),
  lastName: z.string().min(2, 'Sobrenome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  serviceType: z.string().min(1, 'Selecione um serviço'),
  subject: z.string().min(2, 'Assunto é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const serviceOptions = [
  'Design Gráfico',
  'Desenvolvimento Web',
  'Social Media',
  'Produção de Vídeo',
  'Fotografia',
  'Animação 2D',
  'Marketing Digital',
  'Desenvolvimento de Software',
  'Outro',
]

const contactTypes = [
  'Novo Projecto',
  'Parcerias',
  'Trabalhe Conosco',
  'Outro',
]

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [contactType, setContactType] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setError('')
    try {
      const client = getSupabase()
      if (!client) {
        setSubmitted(true)
        return
      }

      const { error: supabaseError } = await client
        .from('contact_submissions')
        .insert([{
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || null,
          service_type: data.serviceType,
          subject: data.subject,
          message: data.message,
          status: 'pending',
          source: 'website',
        }])

      if (supabaseError) throw supabaseError
      setSubmitted(true)
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-3xl font-display uppercase text-yellow mb-4">Obrigado!</h3>
        <p className="text-lg text-white/70">
          Recebemos a sua mensagem. Entraremos em contacto brevemente.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      {/* Step 0: Contact Type */}
      {step === 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-6">
            Tipo de contacto
          </h3>
          <div className="flex flex-col gap-3">
            {contactTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className={`w-5 h-5 rounded-full border-[1.5px] transition-all duration-200 flex items-center justify-center ${
                  contactType === type
                    ? 'border-yellow bg-yellow'
                    : 'border-white/40 group-hover:border-white/60'
                }`}>
                  {contactType === type && (
                    <div className="w-2 h-2 rounded-full bg-black" />
                  )}
                </div>
                <input
                  type="radio"
                  name="contactType"
                  value={type}
                  onChange={(e) => setContactType(e.target.value)}
                  className="sr-only"
                />
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-8">
            <PrimaryButton
              onClick={() => contactType && setStep(1)}
              className={!contactType ? 'opacity-50 pointer-events-none' : ''}
            >
              Continuar
            </PrimaryButton>
          </div>
        </div>
      )}

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-2">
            Informações pessoais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                {...register('firstName')}
                placeholder="Nome *"
                className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30"
              />
              {errors.firstName && (
                <span className="text-xs text-red-400 mt-1">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <input
                {...register('lastName')}
                placeholder="Sobrenome *"
                className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30"
              />
              {errors.lastName && (
                <span className="text-xs text-red-400 mt-1">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Email *"
                className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30"
              />
              {errors.email && (
                <span className="text-xs text-red-400 mt-1">{errors.email.message}</span>
              )}
            </div>
            <div>
              <input
                {...register('phone')}
                type="tel"
                placeholder="Telefone"
                className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Voltar
            </button>
            <PrimaryButton onClick={() => setStep(2)}>Continuar</PrimaryButton>
          </div>
        </div>
      )}

      {/* Step 2: Message */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-[0.15em] text-gray-dark mb-2">
            Mensagem
          </h3>

          <div>
            <select
              {...register('serviceType')}
              className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
              defaultValue=""
            >
              <option value="" disabled>Tipo de serviço *</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.serviceType && (
              <span className="text-xs text-red-400 mt-1">{errors.serviceType.message}</span>
            )}
          </div>

          <div>
            <input
              {...register('subject')}
              placeholder="Assunto *"
              className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30"
            />
            {errors.subject && (
              <span className="text-xs text-red-400 mt-1">{errors.subject.message}</span>
            )}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder="A sua mensagem *"
              rows={4}
              className="w-full bg-transparent border-b border-white/30 text-white text-lg py-3 outline-none focus:border-yellow transition-colors placeholder:text-white/30 resize-none"
            />
            {errors.message && (
              <span className="text-xs text-red-400 mt-1">{errors.message.message}</span>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Voltar
            </button>
            <PrimaryButton type="submit" className={isSubmitting ? 'opacity-50' : ''}>
              {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
            </PrimaryButton>
          </div>
        </div>
      )}
    </form>
  )
}
