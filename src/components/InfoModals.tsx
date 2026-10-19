import React from 'react';
import { X, ShieldCheck, Mail, MessageCircle, FileText } from 'lucide-react';

export type InfoModalType = 'termos' | 'privacidade' | 'contato' | null;

interface InfoModalsProps {
  activeModal: InfoModalType;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            {activeModal === 'termos' && <FileText className="w-5 h-5 text-rose-600" />}
            {activeModal === 'privacidade' && <ShieldCheck className="w-5 h-5 text-rose-600" />}
            {activeModal === 'contato' && <Mail className="w-5 h-5 text-rose-600" />}
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              {activeModal === 'termos' && 'Términos de Uso'}
              {activeModal === 'privacidade' && 'Política de Privacidad'}
              {activeModal === 'contato' && 'Contáctanos & Soporte'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-sm text-slate-600 leading-relaxed max-h-[70vh] overflow-y-auto space-y-4">
          {activeModal === 'termos' && (
            <>
              <p>
                <strong>1. Naturaleza del Material:</strong> Este producto se compone de archivos digitales (.pptx y .pdf / plantillas de Canva) desarrollados con fines educativos y de concientización para la campaña de Octubre Rosa.
              </p>
              <p>
                <strong>2. No Sustituye la Consulta Médica:</strong> El contenido presentado no constituye diagnóstico médico, consulta terapéutica ni prescripción clínica. Se trata de material informativo fundamentado en pautas públicas de salud (como la OMS y ministerios de salud).
              </p>
              <p>
                <strong>3. Licencia de Uso:</strong> Al adquirir el material, el comprador adquiere el derecho de proyectar y utilizar las diapositivas en sus equipos, empresas, escuelas, clínicas, iglesias o eventos institucionales. Queda prohibida la reventa no autorizada o redistribución pública de los archivos originales como producto comercial propio.
              </p>
              <p>
                <strong>4. Garantía Incondicional de 7 Días:</strong> Si el material no cumple con tus expectativas, podrás solicitar el reembolso íntegro dentro de los 7 días corridos posteriores a la compra.
              </p>
            </>
          )}

          {activeModal === 'privacidade' && (
            <>
              <p>
                <strong>1. Recopilación de Información:</strong> Únicamente recopilamos los datos estrictamente necesarios para el procesamiento de la orden y el envío de los enlaces de acceso y descarga (nombre, correo electrónico y teléfono).
              </p>
              <p>
                <strong>2. Seguridad de los Datos:</strong> Tus datos no son comercializados ni cedidos a terceros bajo ninguna circunstancia. Las transacciones se procesan bajo protocolos seguros de encriptación bancaria.
              </p>
              <p>
                <strong>3. Comunicación:</strong> Solo enviamos el correo electrónico con los accesos al material y comunicaciones estrictamente relacionadas con tu pedido.
              </p>
            </>
          )}

          {activeModal === 'contato' && (
            <div className="space-y-4">
              <p>
                ¿Necesitas ayuda con tu descarga, solicitud de factura/recibo para tu empresa o tienes alguna consulta antes de comprar?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/5511999999999?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20la%20presentación%20de%20Octubre%20Rosa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-xs">WhatsApp de Soporte</div>
                    <div className="text-[11px] text-emerald-700">Atención ágil en horario laboral</div>
                  </div>
                </a>

                <a
                  href="mailto:soporte@octubrerosa.ejemplo"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 hover:bg-rose-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <div className="font-bold text-xs">Correo Electrónico</div>
                    <div className="text-[11px] text-rose-700">soporte@octubrerosa.ejemplo</div>
                  </div>
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Horario de atención: Lunes a Viernes, de 08:00 a 19:00 hrs.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
