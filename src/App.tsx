import React, { useState, lazy, Suspense } from 'react';
import { 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight, 
  Monitor, 
  Palette, 
  Clock, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  Gift, 
  HelpCircle, 
  Sparkles,
  Award,
  FileText,
  Send,
  Edit3,
  X
} from 'lucide-react';
import { InfoModalType } from './components/InfoModals';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';

// Carregamento preguiçoso dos modais para turbinar velocidade inicial e connect rate
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(m => ({ default: m.CheckoutModal })));
const InfoModals = lazy(() => import('./components/InfoModals').then(m => ({ default: m.InfoModals })));

const slideDeckRow1 = [
  { id: 1, src: '/slides/slide-01.webp' },
  { id: 2, src: '/slides/slide-02.webp' },
  { id: 3, src: '/slides/slide-03.webp' },
  { id: 4, src: '/slides/slide-04.webp' },
  { id: 5, src: '/slides/slide-05.webp' },
  { id: 6, src: '/slides/slide-06.webp' },
  { id: 7, src: '/slides/slide-07.webp' },
  { id: 8, src: '/slides/slide-08.webp' },
];

const slideDeckRow2 = [
  { id: 9, src: '/slides/slide-09.webp' },
  { id: 10, src: '/slides/slide-10.webp' },
  { id: 11, src: '/slides/slide-11.webp' },
  { id: 12, src: '/slides/slide-12.webp' },
  { id: 13, src: '/slides/slide-13.webp' },
  { id: 14, src: '/slides/slide-14.webp' },
  { id: 15, src: '/slides/slide-15.webp' },
  { id: 1, src: '/slides/slide-01.webp' },
];

export default function App() {
  // Modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'completo'>('completo');
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalType>(null);
  const [selectedSlidePreview, setSelectedSlidePreview] = useState<string | null>(null);
  
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenCheckout = (plan: 'essencial' | 'completo') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const faqItems = [
    {
      q: "¿Las diapositivas son editables? ¿Puedo poner mi nombre y el logo de mi empresa o clínica?",
      a: "¡Sí, 100% editables! Tienes total autonomía para modificar cualquier texto, títulos, cambiar colores, ajustar fuentes, agregar o eliminar diapositivas e insertar el logotipo de tu empresa, clínica, escuela o institución con total facilidad."
    },
    {
      q: "¿Cómo recibo el material?",
      a: "El material es digital y estará disponible de inmediato tras la confirmación de la compra, con descarga directa en pantalla y envío automático de una copia de seguridad a tu correo electrónico."
    },
    {
      q: "¿Cómo está estructurada la presentación?",
      a: "La presentación principal es completa y profesional, organizada en una secuencia didáctica y lógica para conducir tu charla de Octubre Rosa de inicio a fin con claridad e impacto."
    },
    {
      q: "¿Puedo usarla en una empresa o escuela?",
      a: "Sí. El material fue desarrollado especialmente para actividades educativas en empresas, departamentos de Recursos Humanos, escuelas, universidades, clínicas, hospitales, iglesias, grupos comunitarios y eventos corporativos."
    },
    {
      q: "¿Necesito saber de diseño para utilizarla?",
      a: "No. El diseño visual ya está 100% listo, estandarizado y diagramado. Solo necesitas abrir el archivo en tu computadora, proyector o pantalla y comenzar tu exposición."
    },
    {
      q: "¿Cuál es la diferencia entre la Opción 1 y el Kit Completo?",
      a: "En la Opción 1 (Esencial) recibes la Presentación Principal con las diapositivas listas y completas. En la Opción 2 (Kit Completo), recibes la presentación + Kit del Participante para imprimir/enviar + Guía con 20 Preguntas y Respuestas frecuentes + Kit Institucional con certificado y lista de asistencia + Invitación digital editable."
    },
    {
      q: "¿Es un material médico?",
      a: "No. Se trata de un recurso educativo de concientización pública basado en pautas oficiales de salud (como la OMS y ministerios de salud). No sustituye la consulta, diagnóstico ni orientación médica individualizada."
    },
    {
      q: "¿El material es físico?",
      a: "No. El producto es 100% digital, lo que garantiza acceso inmediato sin gastos de envío ni demoras de entrega."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F8] text-[#1E191C] flex flex-col font-sans selection:bg-rose-500 selection:text-white font-normal">
      
      <main className="flex-1 font-normal">

        {/* =========================================================================
            1. HERO — EXTREMADAMENTE DIRECTO
            ========================================================================= */}
        <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
          {/* Subtle rose & gold background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-rose-100/40 via-amber-50/20 to-transparent pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50/80 border border-amber-200/80 text-xs font-semibold text-amber-800 shadow-xs">
              <span className="text-amber-500">✨</span>
              <span>Campaña de Concientización • Diapositivas 100% Editables</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              ¿Necesitas dar una charla de Octubre Rosa? <span className="text-rose-600">Diapositivas 100% editables y listas para usar.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed" style={{ textWrap: 'balance' }}>
              Presentación profesional y completa sobre concientización y prevención del cáncer de mama. <strong>Totalmente editable:</strong> modifica textos, cambia colores o inserta el logotipo y el nombre de tu empresa, clínica o escuela en pocos clics.
            </p>

            {/* CARROUSELES INFINITOS */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 max-w-[1400px] py-4 sm:py-6 space-y-4 sm:space-y-6 overflow-hidden">
              
              {/* Carrusel 1 */}
              <div className="carousel-mask overflow-hidden py-1.5">
                <div className="animate-marquee-left flex gap-4 sm:gap-6">
                  {[...slideDeckRow1, ...slideDeckRow1].map((slide, index) => (
                    <div
                      key={`r1-${index}`}
                      onClick={() => setSelectedSlidePreview(slide.src)}
                      className="shrink-0 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[470px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-rose-200/90 shadow-md shadow-rose-950/5 hover:shadow-2xl hover:border-rose-400 hover:scale-[1.03] transition-all duration-300 bg-white cursor-pointer group"
                    >
                      <img
                        src={slide.src}
                        alt="Diapositiva de la Presentación Octubre Rosa"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index < 2 ? 'high' : 'auto'}
                        width={470}
                        height={264}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carrusel 2 */}
              <div className="carousel-mask overflow-hidden py-1.5">
                <div className="animate-marquee-right flex gap-4 sm:gap-6">
                  {[...slideDeckRow2, ...slideDeckRow2].map((slide, index) => (
                    <div
                      key={`r2-${index}`}
                      onClick={() => setSelectedSlidePreview(slide.src)}
                      className="shrink-0 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[470px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-rose-200/90 shadow-md shadow-rose-950/5 hover:shadow-2xl hover:border-rose-400 hover:scale-[1.03] transition-all duration-300 bg-white cursor-pointer group"
                    >
                      <img
                        src={slide.src}
                        alt="Diapositiva de la Presentación Octubre Rosa"
                        loading="lazy"
                        decoding="async"
                        width={470}
                        height={264}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-700 pt-2">
              <span className="flex items-center gap-1.5 font-bold text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shadow-2xs">
                <Check className="w-4 h-4 text-rose-600 stroke-[3]" />
                100% Editable (textos, colores y logos)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Diapositivas listas y completas
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Diseño profesional en 16:9
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Contenido organizado y seguro
              </span>
            </div>

            {/* CTA Button & Pricing Anchor */}
            <div className="pt-2 flex flex-col items-center justify-center gap-2">
              <a
                href="#precos"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-rose-600/25 hover:shadow-rose-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <span>QUIERO MI PRESENTACIÓN</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                <span className="text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 uppercase">
                  VER EL PRECIO
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-500 font-normal">Acceso inmediato</span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            2. NO PIERDAS HORAS CREANDO UNA CHARLA DESDE CERO
            ========================================================================= */}
        <section id="beneficios" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                No pierdas horas creando una charla desde cero
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                No necesitas investigar cada tema, ordenar la secuencia de la presentación ni pasar horas intentando que las diapositivas se vean atractivas.
              </p>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                El material ya ha sido estructurado para que puedas abrirlo, exponer y llevar a cabo tu evento de Octubre Rosa con total practicidad.
              </p>
            </div>

            {/* Tres Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              
              {/* Card 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    CONTENIDO ORGANIZADO
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Desde el inicio hasta el cierre de la charla con introducción, datos, señales de alerta y recomendaciones en orden lógico.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Secuencia didáctica lista
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto shadow-xs">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    DISEÑO PROFESIONAL
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Diapositivas modernas y estandarizadas, con tipografía limpia, elementos destacados y una paleta suave y acogedora.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Estilo visual elegante
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center justify-between">
                <div className="space-y-3 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs border border-amber-200/60">
                    <Edit3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    100% EDITABLE & FLEXIBLE
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Personaliza cualquier texto, inserta tu nombre o el logo de tu empresa o clínica. Presenta de inmediato o personaliza en minutos.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rose-100/80 text-xs font-semibold text-rose-700 w-full text-center">
                  Total libertad de edición
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            3. ESTRUCTURA COMPLETA
            ========================================================================= */}
        <section id="conteudo" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-4xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Estructura Completa
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Una charla completa, de principio a fin.
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Cada diapositiva fue concebida para conectar con la audiencia con sensibilidad, datos confiables e instrucciones prácticas.
              </p>
            </div>

            {/* Lista Visual de los Tópicos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "Introducción al Octubre Rosa", desc: "Historia, significado del lazo y propósito de la campaña" },
                { title: "¿Qué es el cáncer de mama?", desc: "Concepto biológico simplificado y accesible para todo público" },
                { title: "Datos e información clave", desc: "Estadísticas actualizadas y panorama de salud pública" },
                { title: "Factores asociados al riesgo", desc: "Edad, factores genéticos y antecedentes familiares explicados" },
                { title: "Señales que merecen atención", desc: "Cambios físicos, autoexploración y alertas corporales" },
                { title: "Hábitos de prevención y cuidado", desc: "Estilo de vida, actividad física y factores modificables" },
                { title: "Mamografía y detección oportuna", desc: "Importancia del estudio estándar de oro y frecuencia recomendada" },
                { title: "Mitos y realidades", desc: "Aclarando dudas comunes y falsas creencias populares" },
                { title: "Diagnóstico temprano", desc: "El impacto decisivo con probabilidades de curación de hasta 95%" },
                { title: "Recomendaciones prácticas", desc: "Acciones concretas y cómo agendar chequeos médicos a tiempo" },
                { title: "Cierre de la presentación", desc: "Mensaje de empatía, acompañamiento y compromiso colectivo" }
              ].map((topic, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F8] border border-rose-100/80 hover:border-rose-200 transition-colors"
                >
                  <span className="text-lg shrink-0 select-none">🎀</span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre de la sección */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 border border-rose-200 text-center space-y-2">
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                Solo necesitas prepararte para exponer. La estructura ya está lista y es 100% editable.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Sin perder tiempo diseñando desde cero. Ábrela, personalízala con tus datos si lo deseas y conduce tu evento con total tranquilidad.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. BONOS EXCLUSIVOS
            ========================================================================= */}
        <section id="bonus" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F8] border-t border-amber-200/50">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-xs font-bold text-amber-900 shadow-xs">
                <Gift className="w-3.5 h-3.5 text-amber-600" />
                <span>4 BONOS EXCLUSIVOS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                4 Bonos para presentar con autoridad y seguridad
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal" style={{ textWrap: 'balance' }}>
                Materiales complementarios desarrollados para elevar el nivel de tu evento y brindarte total tranquilidad al hablar en público.
              </p>
            </div>

            {/* Grid de los 4 Bonos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* BONO 01 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BONO 01
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagen Bono 1 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-1.webp')}
                    className="relative rounded-xl overflow-hidden border border-rose-100/90 shadow-xs bg-rose-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-1.webp"
                      alt="Kit del Participante - Bono 1"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={267}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Kit del Participante
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      1 PDF conciso para entregar impreso o enviar por WhatsApp después de la charla, con señales de alerta y fuentes oficiales.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">💡</span>
                    <span>Hace que el expositor luzca mucho más profesional y refuerza el mensaje tras el evento.</span>
                  </p>
                </div>
              </div>

              {/* BONO 02 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BONO 02
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagen Bono 2 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-2.webp')}
                    className="relative rounded-xl overflow-hidden border border-amber-200/60 shadow-xs bg-amber-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-2.webp"
                      alt="Kit Institucional Listo - Bono 2"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={267}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Kit Institucional Listo
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Certificado de participación, lista de asistencia oficial y modelo de constancia/registro de la actividad.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">🏛️</span>
                    <span>Para empresas, escuelas y clínicas aumenta mucho el valor percibido y facilita la gestión de RRHH.</span>
                  </p>
                </div>
              </div>

              {/* BONO 03 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BONO 03
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagen Bono 3 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-3.webp')}
                    className="relative rounded-xl overflow-hidden border border-emerald-200/60 shadow-xs bg-emerald-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-3.webp"
                      alt="20 Preguntas y Respuestas - Bono 3"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={267}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      20 Preguntas & Respuestas
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Preguntas frecuentes del público + respuestas concisas y seguras para no ser tomado por sorpresa.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">🎯</span>
                    <span>Resuelve la inseguridad de quien va a exponer, brindando total tranquilidad al facilitador.</span>
                  </p>
                </div>
              </div>

              {/* BONO 04 */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      BONO 04
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100">
                      <Send className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Imagen Bono 4 */}
                  <div 
                    onClick={() => setSelectedSlidePreview('/bonus/bonus-4.webp')}
                    className="relative rounded-xl overflow-hidden border border-pink-200/60 shadow-xs bg-pink-50/30 cursor-pointer group/img"
                  >
                    <img
                      src="/bonus/bonus-4.webp"
                      alt="Invitación Editable a la Charla - Bono 4"
                      className="w-full aspect-[3/2] object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={267}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      Invitación Editable a la Charla
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      Plantillas de invitación digital para empresas, escuelas y clínicas para difundir en redes y WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <p className="text-[11px] font-semibold text-amber-900 flex items-start gap-1.5 leading-snug">
                    <span className="text-amber-600 font-bold shrink-0">📢</span>
                    <span>Facilita la difusión anticipada y asegura mayor asistencia y participación del público.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Aviso de inclusión en la Opción 2 */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-950 font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Incluidos en el Kit Completo:</strong> los 4 bonos están 100% incluidos en la <strong>Opción 2</strong> a continuación.
              </span>
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. LOS DOS PRECIOS
            ========================================================================= */}
        <section id="precos" className="py-16 sm:py-24 px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Inversión accesible
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Elige la opción ideal para tu presentación
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Ambas opciones incluyen <strong>diapositivas 100% editables</strong> para que las personalices como prefieras. Acceso inmediato tras la confirmación.
              </p>
            </div>

            {/* Grid de Precios: Opción 1 y Opción 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* OPCIÓN 1 — ESENCIAL */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between transition-all">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      OPCIÓN 1
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      ESENCIAL
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Presentación Octubre Rosa 100% editable para quienes solo necesitan las diapositivas listas.
                    </p>
                  </div>

                  <div className="space-y-3 py-2 border-y border-slate-100 text-sm text-slate-700">
                    <div className="flex items-center gap-2.5 bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/80 font-bold text-rose-950">
                      <Check className="w-4 h-4 text-rose-600 shrink-0 stroke-[3]" />
                      <span>Diapositivas 100% editables (.pptx) + PDF listo</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Formato digital panorámico 16:9 widescreen</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Presentación completa (de principio a fin)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Lista para proyectar en proyector, TV o PC</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>Agrega tu logo y modifica textos libremente</span>
                    </div>
                  </div>

                  <div className="text-center py-4 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-600 tracking-tight font-sans uppercase">
                      VER EL PRECIO
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://pay.wiapy.com/ZsALudkhdtGU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm flex items-center justify-center text-center cursor-pointer uppercase tracking-wider"
                  >
                    VER EL PRECIO
                  </a>
                  <p className="text-[11px] text-center text-slate-600 mt-2">
                    Acceso inmediato • Garantía de 7 días
                  </p>
                </div>
              </div>

              {/* OPCIÓN 2 — KIT COMPLETO */}
              <div className="relative bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFF5F8] rounded-3xl p-6 sm:p-8 border-2 border-amber-400/80 shadow-xl shadow-amber-500/10 flex flex-col justify-between ring-1 ring-amber-400/30">
                
                {/* Floating Ribbon */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-200/40 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  MÁS COMPLETO & RECOMENDADO
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-1.5">
                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                        <span>⭐ OPCIÓN 2</span>
                      </div>
                      <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300">
                        🎨 Edición 100% en Canva
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      KIT COMPLETO
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                      Presentación completa + <strong>los 4 bonos incluidos</strong>. Edición rápida y práctica directo en Canva.
                    </p>
                  </div>

                  {/* Aviso Canva */}
                  <div className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-200/90 text-cyan-950 text-xs flex items-center gap-2.5 shadow-2xs">
                    <span className="text-base shrink-0">🎨</span>
                    <div className="leading-snug">
                      <strong className="text-cyan-900 font-bold block">Editable exclusivamente en Canva</strong>
                      <span className="text-slate-600">Accede desde el celular o computadora con cuenta gratuita o Pro, sin instalar programas.</span>
                    </div>
                  </div>

                  <div className="space-y-3 py-2 border-y border-amber-100 text-sm text-slate-800">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 stroke-[3]" />
                      <div>
                        <strong className="text-slate-900">Presentación Principal Completa</strong>
                        <p className="text-xs text-slate-600 font-normal">Formato 16:9 widescreen, editable exclusivamente en Canva + PDF listo para proyectar.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Gift className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BONO 01 • Kit del Participante</strong>
                        <p className="text-xs text-slate-600 font-normal">PDF de bolsillo post-charla con señales de alerta, recomendaciones y fuentes oficiales.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BONO 02 • Kit Institucional Listo</strong>
                        <p className="text-xs text-slate-600 font-normal">Certificado editable en Canva + lista de asistencia oficial + registro de la actividad.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BONO 03 • 20 Preguntas Frecuentes con Respuestas</strong>
                        <p className="text-xs text-slate-600 font-normal">Guía con respuestas listas y fundamentadas para resolver dudas de la audiencia.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80">
                      <Send className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-950">BONO 04 • Invitación Editable a la Charla</strong>
                        <p className="text-xs text-slate-600 font-normal">Modelos digitales editables en Canva para empresas, escuelas y clínicas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-4 flex flex-col items-center justify-center w-full">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-600 tracking-tight font-sans text-center uppercase">
                      VER EL PRECIO
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://pay.wiapy.com/Ez-MfSVRY8S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-gradient-to-r from-amber-500 via-rose-600 to-pink-600 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-center uppercase tracking-wider"
                  >
                    <span>VER EL PRECIO</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-slate-600 mt-2 font-normal">
                    Acceso inmediato • Editable exclusivamente en Canva • Los 4 bonos incluidos
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            6. ¿PARA QUIÉN ES?
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-rose-100">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Público Objetivo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                Diseñado para quienes necesitan realizar una actividad de Octubre Rosa
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                El lenguaje y el diseño han sido calibrados para adaptarse a múltiples perfiles de expositores y públicos.
              </p>
            </div>

            {/* Cuatro cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-rose-100/90 text-rose-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-rose-200/50">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Empresas y RRHH
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para actividades internas de concientización con colaboradoras, jornadas de salud y programas de bienestar.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-pink-100/90 text-pink-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-pink-200/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Escuelas e instituciones
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para presentaciones educativas dirigidas a docentes, alumnas, familias y comunidades educativas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-rose-100/90 text-rose-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-rose-200/50">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Clínicas y profesionales
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para actividades informativas con equipos de trabajo, recepción, salas de espera y pacientes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFF8F9] border border-rose-100 hover:border-rose-200 transition-colors shadow-xs flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-pink-100/90 text-pink-600 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-pink-200/50">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Iglesias, grupos y eventos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Para encuentros femeninos, ministerios, ONG y campañas comunitarias de concientización.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            7. TESTIMONIOS REALES
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Testimonios Reales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Lo que dicen sobre el material
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Mensajes de quienes utilizaron la presentación para guiar sus charlas y eventos de Octubre Rosa.
              </p>
            </div>

            {/* Carrusel Interactivo de Testimonios */}
            <TestimonialsCarousel onImageClick={(src) => setSelectedSlidePreview(src)} />

          </div>
        </section>


        {/* =========================================================================
            8. PREGUNTAS FRECUENTES (FAQ)
            ========================================================================= */}
        <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                Resuelve tus dudas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Preguntas Frecuentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Todo lo que necesitas saber sobre el acceso y uso de las diapositivas.
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* =========================================================================
            9. ÚLTIMO LLAMADO A LA ACCIÓN (CTA)
            ========================================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F8] to-[#FFEDF3] border-t border-rose-200 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Tu charla de Octubre Rosa no tiene que empezar de cero.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto leading-relaxed">
              Obtén una presentación profesional, organizada y <strong>100% editable</strong> para tu evento.
            </p>

            <div className="text-xs sm:text-sm font-semibold text-rose-800 bg-white/70 backdrop-blur-xs px-4 py-1.5 rounded-full inline-block border border-rose-200">
              Diapositivas 100% editables • Agrega tu logo • Lista para presentar
            </div>

            <div className="pt-2 flex flex-col items-center justify-center gap-2">
              <a
                href="#precos"
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <span>QUIERO MI PRESENTACIÓN</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-xs sm:text-sm font-semibold text-slate-600">
                Ver el precio · Acceso inmediato
              </span>
            </div>

          </div>
        </section>


        {/* =========================================================================
            10. GARANTÍA
            ========================================================================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-transparent">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/garantia-7-dias.webp"
                alt="7 Días de Garantía Incondicional"
                loading="lazy"
                decoding="async"
                width={176}
                height={176}
                className="w-32 sm:w-40 md:w-44 h-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-block text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100/90 px-3 py-0.5 rounded-full border border-amber-300">
                7 DÍAS DE GARANTÍA
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Tienes 7 días para revisar el material
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Adquiere el material y revisa su contenido. Si durante el periodo de garantía consideras que no cumple con tus expectativas, solicita tu reembolso de acuerdo a las condiciones de compra.
              </p>
            </div>

          </div>
        </section>

      </main>


      {/* =========================================================================
          11. PIE DE PÁGINA (FOOTER)
          ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-base">🎀</span>
              <span className="font-extrabold text-sm text-white tracking-tight">
                Octubre Rosa Diapositivas
              </span>
            </div>

            <div className="flex items-center gap-6 font-medium text-slate-300">
              <button
                onClick={() => setActiveInfoModal('termos')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Términos de Uso
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveInfoModal('privacidade')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveInfoModal('contato')}
                className="hover:text-rose-400 transition-colors cursor-pointer"
              >
                Contacto
              </button>
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left text-[11px] text-slate-300">
            <p>
              © 2026 — Todos los derechos reservados.
            </p>
            <p className="max-w-3xl leading-relaxed">
              Material educativo de concientización. No sustituye la consulta, diagnóstico ni indicación médica profesional. Siempre consulta a profesionales calificados y a las instituciones oficiales de salud pública.
            </p>
          </div>

        </div>
      </footer>


      {/* =========================================================================
          MODALES & OVERLAYS INTERACTIVOS
          ========================================================================= */}

      <Suspense fallback={null}>
        {/* 1. Modal de Checkout */}
        {isCheckoutOpen && (
          <CheckoutModal
            isOpen={isCheckoutOpen}
            selectedPlan={selectedPlan}
            onClose={() => setIsCheckoutOpen(false)}
            onPlanChange={(plan) => setSelectedPlan(plan)}
          />
        )}

        {/* 2. Modales de Información (Términos, Privacidad, Contacto) */}
        {activeInfoModal && (
          <InfoModals
            activeModal={activeInfoModal}
            onClose={() => setActiveInfoModal(null)}
          />
        )}
      </Suspense>

      {/* 3. Visor de Diapositivas / Lightbox */}
      {selectedSlidePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-3 sm:p-6"
          onClick={() => setSelectedSlidePreview(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-rose-500/40 shadow-2xl p-2 sm:p-3 animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSlidePreview(null)}
              aria-label="Cerrar visor"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedSlidePreview} 
              alt="Diapositiva Ampliada en Alta Resolución" 
              className="w-full h-auto aspect-video rounded-xl object-contain bg-slate-900 shadow-inner"
            />
            <div className="pt-2 text-center text-xs text-rose-200/80 font-medium">
              Presentación Oficial Octubre Rosa • Diapositivas 100% editables + PDF en alta definición
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
