import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Copy, 
  Download, 
  QrCode, 
  CreditCard, 
  Sparkles, 
  FileText, 
  Gift, 
  Lock,
  ArrowRight
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlan: 'essencial' | 'completo';
  onClose: () => void;
  onPlanChange: (plan: 'essencial' | 'completo') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedPlan,
  onClose,
  onPlanChange,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const price = selectedPlan === 'essencial' ? '9,90' : '15,00';
  const simulatedPixCode = "00020126580014br.gov.bcb.pix0136octubre-rosa-slides-2026@presentacion.com520400005303986540" + 
    (selectedPlan === 'essencial' ? "509.90" : "515.00") + "5802BR5925OCTUBRE ROSA SLIDES6009CIUDAD62070503***6304ABCD";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleDownloadDemo = () => {
    // Generate text/blob file simulation for immediate customer satisfaction
    const content = `================================================
PRESENTACIÓN OCTUBRE ROSA 2026 - ACCESO INMEDIATO
================================================
Plan: ${selectedPlan === 'essencial' ? 'Opción 1 - Esencial' : 'Opción 2 - Kit Completo'}
Cliente: ${name || 'Expositor(a)'}
Correo registrado: ${email}
Estado: Pago confirmado

ENLACES DE ACCESO AL MATERIAL:
${selectedPlan === 'completo' ? `
1. Plantilla Oficial de la Presentación en CANVA (Editable en Canva - cuenta gratuita o Pro):
   https://canva.com/design/template-octubre-rosa-2026-oficial

2. Presentación en PDF de Alta Resolución (lista para proyectar):
   https://download.octubrerosa.ejemplo/presentacion-octubre-rosa.pdf

BONOS DEL KIT COMPLETO INCLUIDOS:
3. BONO 01: Kit del Participante (PDF de bolsillo para imprimir y enviar por WhatsApp)
4. BONO 02: Kit Institucional Listo (Certificado editable en Canva + Lista de asistencia + Registro)
5. BONO 03: 20 Preguntas Frecuentes de la Audiencia (Guía con respuestas listas y fundamentadas)
6. BONO 04: Invitación Editable a la Charla (Plantillas digitales editables en Canva para empresas, escuelas y clínicas)
` : `
1. Presentación PowerPoint (.pptx editable 16:9):
   https://download.octubrerosa.ejemplo/presentacion-octubre-rosa.pptx

2. Presentación en PDF de Alta Resolución:
   https://download.octubrerosa.ejemplo/presentacion-octubre-rosa.pdf
`}

Soporte: contacto@octubrerosa.ejemplo
¡Gracias por tu dedicación en llevar concientización y prevención!`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Acceso_Octubre_Rosa_${selectedPlan}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </span>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {isSuccess ? '¡Pago Confirmado!' : 'Finalizar Pedido'}
              </h3>
              <p className="text-xs text-rose-100">
                {isSuccess ? 'Tus materiales ya están habilitados' : 'Entorno 100% seguro con acceso inmediato'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isSuccess ? (
          <div className="p-4 sm:p-6 space-y-5">
            
            {/* Plan Selector tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Selecciona el Paquete Deseado:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onPlanChange('essencial')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    selectedPlan === 'essencial'
                      ? 'border-rose-600 bg-rose-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">Opción 1 · Esencial</div>
                  <div className="text-xs text-slate-500 mt-0.5">Presentación 16:9</div>
                  <div className="text-xs font-bold text-amber-600 mt-2 font-sans uppercase">Ver el precio</div>
                  {selectedPlan === 'essencial' && (
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onPlanChange('completo')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    selectedPlan === 'completo'
                      ? 'border-amber-400 bg-amber-50/50 shadow-xs ring-2 ring-amber-400/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-900 text-sm">Opción 2 · Completo</div>
                    <span className="text-[10px] font-bold bg-gradient-to-r from-amber-500 to-rose-600 text-white px-1.5 py-0.5 rounded-full">
                      RECOMENDADO
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Presentación + 4 bonos</div>
                  <div className="text-xs font-bold text-amber-600 mt-2 font-sans uppercase">
                    Ver el precio
                  </div>
                  {selectedPlan === 'completo' && (
                    <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Included highlights summary */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Lo que recibes de inmediato:
              </div>
              {selectedPlan === 'completo' ? (
                <>
                  <p>• <strong>Presentación Principal:</strong> editable en Canva (cuenta gratis o Pro) + PDF listo</p>
                  <p>• <strong>Bono 01: Kit del Participante</strong> (PDF de bolsillo para imprimir o enviar)</p>
                  <p>• <strong>Bono 02: Kit Institucional Listo</strong> (Certificado en Canva + Lista de asistencia)</p>
                  <p>• <strong>Bono 03: 20 Preguntas y Respuestas</strong> para dudas de la audiencia</p>
                  <p>• <strong>Bono 04: Invitación Editable</strong> (plantillas en Canva para empresas, escuelas y clínicas)</p>
                </>
              ) : (
                <p>• Presentación completa y profesional en 16:9 (.pptx editable + .pdf listo para proyectar)</p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tu Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: María Rodríguez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Correo Electrónico para Recibir el Material
                </label>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
                <span className="text-[11px] text-slate-600 mt-1 block">
                  Enviaremos el enlace de acceso y confirmación a esta dirección.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp (para soporte rápido y recordatorio)
                </label>
                <input
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Forma de Pago:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-rose-50 border-rose-600 text-rose-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    Pago Instantáneo / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-rose-50 border-rose-600 text-rose-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    Tarjeta de Crédito
                  </button>
                </div>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="text-xs text-emerald-900">
                    <p className="font-bold">Liberación inmediata de acceso</p>
                    <p className="text-[11px] text-emerald-800">
                      Tus archivos se habilitan en pantalla al hacer clic en el botón.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-500 block">Acceso:</span>
                    <span className="text-sm font-extrabold text-emerald-700 uppercase">Ver el precio</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    defaultValue="•••• •••• •••• 4242"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      defaultValue="12/28"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      defaultValue="123"
                    />
                  </div>
                </div>
              )}

              {/* Submit CTA Button */}
              {selectedPlan === 'essencial' ? (
                <a
                  href="https://pay.wiapy.com/ZsALudkhdtGU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center uppercase tracking-wider"
                >
                  <span>VER EL PRECIO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href="https://pay.wiapy.com/Ez-MfSVRY8S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-rose-600 to-pink-600 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-rose-600/30 hover:shadow-rose-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer text-center uppercase tracking-wider"
                >
                  <span>VER EL PRECIO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantía de 7 Días
                </span>
                <span>•</span>
                <span>Acceso 100% Digital</span>
                <span>•</span>
                <span>Descarga Inmediata</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-6 space-y-5 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">
                ¡Felicitaciones! Tu acceso está habilitado.
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Enviamos los enlaces también a tu correo (<strong>{email}</strong>). Ya puedes descargar los archivos ahora mismo:
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-semibold text-xs text-slate-700">Paquete Adquirido:</span>
                <span className="font-bold text-xs text-rose-600 uppercase">
                  {selectedPlan === 'essencial' ? 'Opción 1 · Esencial' : 'Opción 2 · Kit Completo'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-medium text-slate-800 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-rose-600" />
                    Presentación Octubre Rosa 2026 (.pptx editable 16:9)
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">Listo</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-medium text-slate-800 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Versión en PDF de Alta Resolución para Proyector
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">Listo</span>
                </div>

                {selectedPlan === 'completo' && (
                  <div className="flex items-center justify-between text-xs bg-rose-50/70 p-2.5 rounded-lg border border-rose-200">
                    <span className="font-medium text-rose-900 flex items-center gap-1.5">
                      <Gift className="w-4 h-4 text-rose-600" />
                      Kit Completo: Folleto + 20 Preguntas + Certificado Institucional
                    </span>
                    <span className="text-[11px] font-mono text-rose-600 font-bold">Listo</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadDemo}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descargar Presentación y Archivos Ahora
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium rounded-xl text-sm transition-all cursor-pointer"
              >
                Finalizar
              </button>
            </div>

            <p className="text-[11px] text-slate-600">
              ¿Necesitas ayuda o factura? Nuestro equipo te responde en minutos por WhatsApp.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
