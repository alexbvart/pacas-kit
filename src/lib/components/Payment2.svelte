<script>
  let selectedMethod = 'yape';

  const methods = [
    {
      id: 'yape',
      name: 'Yape / Plin',
      desc: 'Escaneo inmediato sin comisiones',
      hoverBg: 'hover:bg-[#aa2bfb]', // Morado Yape
      hoverText: 'group-hover:text-white',
      activeColor: 'bg-[#aa2bfb]',
      icon: 'fa-qrcode'
    },
    {
      id: 'pagoefectivo',
      name: 'PagoEfectivo',
      desc: 'Genera tu código CIP y paga en tu banca',
      
      hoverBg: 'hover:bg-[#fbde2b]', // Amarillo PagoEfectivo
      hoverText: 'group-hover:text-slate-900',
      activeColor: 'bg-[#fbde2b]',
      icon: 'fa-barcode'
    },
    {
      id: 'plin',
      name: 'Plin',
      desc: 'Escaneo inmediato sin comisiones',
      hoverBg: 'hover:bg-[#3DD5DC]', // Verde Plin
      hoverText: 'group-hover:text-slate-900',
      activeColor: 'bg-[#3DD5DC]',
      icon: 'fa-barcode'
    }
  ];
</script>
<section id="pago" class="py-32 bg-white">
  <div class="max-w-[1100px] mx-auto px-8">
    <div class="grid lg:grid-cols-2 gap-20 items-start">
      
      <div class="space-y-10">
        <header>
          <h2 class="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-4 flex items-center gap-3">
            <span class="w-8 h-[1px] bg-slate-200"></span>
            Checkout Seguro
          </h2>
          <p class="text-5xl font-light text-slate-900 tracking-tighter leading-none mb-6">
            Reserva tu <br />
            <span class="font-serif italic text-orange-600 font-bold">Experiencia Mística</span>
          </p>
        </header>

        <div class="space-y-3">
          {#each methods as method}
            <button 
              on:mouseenter={() => selectedMethod = method.id}
              class="w-full flex items-center justify-between p-6 border transition-all duration-500 rounded-sm
              {selectedMethod === method.id ? `${method.activeColor} ${method.hoverText} border-transparent shadow-xl scale-[1.02]` : 'bg-white border-slate-100 text-slate-900 hover:border-slate-300'}"
            >
              <div class="flex items-center gap-5">
                <i class="fas {method.icon} text-xl {selectedMethod === method.id ? 'opacity-100' : 'opacity-20'}"></i>
                <div class="text-left">
                  <h4 class="font-bold tracking-tight uppercase text-xs">{method.name}</h4>
                  <p class="text-[10px] font-light opacity-80">{method.desc}</p>
                </div>
              </div>
              {#if selectedMethod === method.id}
                <i class="fas fa-chevron-right text-[10px] text-slate-200 {method.hoverText}"></i>
              {/if}
            </button>
          {/each}
        </div>

        <div class="p-6 bg-slate-50 border-l-2 border-slate-900">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cuenta Verificada</p>
            <p class="text-sm font-bold text-slate-900">EFRAIN [APELLIDO]</p>
            <p class="text-[10px] text-slate-500 italic mt-2">DNI del titular validado con los registros de MINCETUR para operaciones turísticas.</p>
        </div>
      </div>

      <div class="lg:sticky lg:top-32">
        <div class="bg-white p-12 border border-slate-100 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.06)] text-center relative overflow-hidden">
          
          <div class="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-[9px] font-bold uppercase tracking-tighter">
            Encriptación SSL Activa
          </div>

          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 italic">Validación en Tiempo Real</p>
          
          <div class="relative inline-block p-4 border border-slate-100 bg-white mb-8 group">
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                  class="w-56 h-56 transition-all duration-700 {selectedMethod === 'yape' ? 'saturate-150' : 'grayscale-0'}" 
                  alt="QR de Pago">
             <div class="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all"></div>
          </div>

          <div class="space-y-4">
            <button class="w-full py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
              <i class="fab fa-whatsapp text-lg"></i>
              Confirmar con Voucher WhatsApp
            </button>
            <p class="text-[9px] text-slate-400 leading-relaxed uppercase font-bold tracking-tighter">
              Al hacer clic, aceptas las políticas de cancelación y el código de conducta mística.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>