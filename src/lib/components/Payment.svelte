<script>
  import { base } from '$app/paths';
  let activeMethod = 'yape';

  const methods = [
    {
      id: 'yape',
      name: 'Yape',
      desc: 'Escaneo inmediato sin comisiones',
      activeColor: 'bg-[#aa2bfb]',
      activeText: 'text-white',
      icon: 'fa-qrcode'
    },
    {
      id: 'plin',
      name: 'Plin',
      desc: 'Escaneo inmediato sin comisiones',
      activeColor: 'bg-[#3DD5DC]',
      activeText: 'text-slate-900',
      icon: 'fa-qrcode'
    },
    {
      id: 'lemon',
      name: 'Lemon Cash',
      desc: 'Escaneo inmediato / Cripto & Fintech',
      activeColor: 'bg-[rgb(0,240,104)]',
      activeText: 'text-slate-900',
      icon: 'fa-citrus' // O fa-qrcode
    },
    {
      id: 'pagoefectivo',
      name: 'PagoEfectivo',
      desc: 'Pide tu código CIP por WhatsApp',
      activeColor: 'bg-[#fbde2b]',
      activeText: 'text-slate-900',
      icon: 'fa-barcode'
    }
  ];
</script>

<section id="pago" class="py-32 bg-white">
  <div class="max-w-[1100px] mx-auto px-8">
    
    <div class="mb-16 bg-orange-50 border border-orange-100 p-8 rounded-sm flex flex-col md:flex-row items-center gap-8">
      <div class="bg-orange-600 text-white p-5 rounded-full shadow-lg shadow-orange-200">
        <i class="fab fa-whatsapp text-2xl"></i>
      </div>
      <div class="flex-1">
        <h3 class="text-orange-900 font-bold uppercase text-[11px] tracking-[0.3em] mb-2">Paso Obligatorio</h3>
        <p class="text-orange-800 text-sm font-light leading-relaxed">
          Para garantizar la esencia de nuestros <strong>grupos reducidos</strong> (Small Groups) y el respeto al ecosistema, por favor confirma disponibilidad de fechas vía WhatsApp antes de realizar cualquier pago.
        </p>
      </div>
      <a href="https://wa.me/51971602394" target="_blank" class="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">
        Consultar Disponibilidad
      </a>
    </div>

    <div class="grid lg:grid-cols-2 gap-20 items-center">
      
      <div class="space-y-10">
        <header>
          <h2 class="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-4 flex items-center gap-3">
            <span class="w-8 h-[1px] bg-slate-200"></span>
            Garantía de Reserva
          </h2>
          <p class="text-5xl font-light text-slate-900 tracking-tighter leading-none mb-6">
            Asegura tu lugar <br />
            <span class="font-serif italic text-orange-600">de forma segura</span>
          </p>
          <p class="text-slate-500 font-light max-w-sm leading-relaxed text-sm">
            Explora nuestros orígenes con la tranquilidad de una agencia formal. Emitimos <strong>boleta de venta electrónica</strong> para cada reserva.
          </p>
        </header>

        <div class="space-y-3">
          {#each methods as method}
            <div 
              on:click={() => activeMethod = method.id}
              on:keydown={(e) => e.key === 'Enter' && (activeMethod = method.id)}
              role="button"
              tabindex="0"
              class="group flex items-center justify-between p-5 border transition-all duration-300 rounded-sm cursor-pointer
              {activeMethod === method.id 
                ? `${method.activeColor} border-transparent scale-[1.02] shadow-xl` 
                : 'bg-white border-slate-100 hover:border-slate-300'}"
            >
              <div class="flex items-center gap-5">
                <i class="fas {method.icon} text-lg transition-colors
                  {activeMethod === method.id ? method.activeText : 'text-slate-300 group-hover:text-slate-500'}">
                </i>
                
                <div>
                  <h4 class="font-bold text-xs uppercase tracking-widest transition-colors
                    {activeMethod === method.id ? method.activeText : 'text-slate-900'}">
                    {method.name}
                  </h4>
                  <p class="text-[11px] font-light opacity-80 transition-colors
                    {activeMethod === method.id ? method.activeText : 'text-slate-400'}">
                    {method.desc}
                  </p>
                </div>
              </div>

              <i class="fas fa-chevron-right text-[10px] transition-colors
                {activeMethod === method.id ? method.activeText : 'text-slate-200'}">
              </i>
            </div>
          {/each}
        </div>

        <div class="pt-8 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" alt="RUC" class="h-8">
          <div class="h-8 w-[1px] bg-slate-500"></div>
          <div class="text-[10px]">
            <p class="font-bold uppercase tracking-widest leading-tight text-slate-900">Anfitrión Local:</p>
            <p class="text-slate-900 font-bold uppercase tracking-widest leading-tight">ALFONSO BRIONES</p>
            <p class="text-slate-700 italic mt-1">RUC: 10716023945 | Prestador de Servicios Turísticos Validado.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div class="relative bg-white p-12 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] text-center">
          
          {#if activeMethod === 'pagoefectivo'}
            <div class="py-12 px-4">
              <i class="fas fa-barcode text-5xl text-slate-200 mb-6"></i>
              <p class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Código CIP</p>
              <p class="text-xs text-slate-500 font-light leading-relaxed mb-8">
                Haz clic en el botón de abajo para solicitar tu código CIP personalizado vía WhatsApp. Podrás pagarlo en cualquier App bancaria o agente.
              </p>
            </div>
          {:else}
            <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Paso final: Escanea</p>
            <div class="relative inline-block p-4 border border-slate-50 bg-white mb-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                    class="w-56 h-56 transition-all duration-700" 
                    alt="QR de Pago">
                <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-200"></div>
                <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-200"></div>
            </div>
          {/if}

          <p class="text-sm text-slate-600 font-light italic mb-8 leading-relaxed">
            {activeMethod === 'pagoefectivo' 
              ? 'Solicita tu código y recibe tu' 
              : 'Envía el comprobante por WhatsApp para recibir tu'} 
            <span class="font-bold text-slate-900 underline decoration-orange-500">Voucher Místico</span>
          </p>
          
          <a href="https://wa.me/51971602394" class="w-full py-5 px-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
            <i class="fab fa-whatsapp text-lg"></i>
            {activeMethod === 'pagoefectivo' ? 'Solicitar Código CIP' : 'Confirmar Pago vía WhatsApp'}
          </a>
          
          <p class="text-[9px] text-slate-400 leading-relaxed uppercase font-bold tracking-tighter mt-6">
            <i class="fas fa-globe-americas mr-1"></i> Los grupos reducidos garantizan experiencias locales de alta calidad.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
</style>