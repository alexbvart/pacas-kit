<script>
  let activeMethod = 'yape';

  const methods = [
    {
      id: 'yape',
      name: 'Yape',
      desc: 'Escaneo inmediato sin comisiones',
      activeColor: 'bg-[#aa2bfb]',
      activeText: 'text-white', // Color cuando está seleccionado
      icon: 'fa-qrcode'
    },
    {
      id: 'pagoefectivo',
      name: 'PagoEfectivo',
      desc: 'Genera tu código CIP y paga en tu banca',
      activeColor: 'bg-[#fbde2b]',
      activeText: 'text-slate-900', // Color cuando está seleccionado
      icon: 'fa-barcode'
    },
    {
      id: 'plin',
      name: 'Plin',
      desc: 'Escaneo inmediato sin comisiones',
      activeColor: 'bg-[#3DD5DC]',
      activeText: 'text-slate-900', // Color cuando está seleccionado
      icon: 'fa-qrcode'
    },
    {
      id: 'lemon',
      name: 'Lemon Cash',
      desc: 'Escaneo inmediato sin comisiones',
      activeColor: 'bg-[rgb(0, 240, 104)]',
      activeText: 'text-slate-900', // Color cuando está seleccionado
      icon: 'fa-qrcode'
    }
  ];
</script>

<section id="pago" class="py-32 bg-white">
  <div class="max-w-[1100px] mx-auto px-8">
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
          <p class="text-slate-500 font-light max-w-sm leading-relaxed">
            Utilizamos protocolos de validación inmediata. Tu dinero y tu cupo están protegidos por nuestra agencia registrada.
          </p>
        </header>

        <div class="space-y-4">
          {#each methods as method}
            <div 
              on:click={() => activeMethod = method.id}
              on:keydown={(e) => e.key === 'Enter' && (activeMethod = method.id)}
              role="button"
              tabindex="0"
              class="group flex items-center justify-between p-6 border transition-all duration-300 rounded-sm cursor-pointer
              {activeMethod === method.id 
                ? `${method.activeColor} border-transparent scale-[1.02] shadow-lg` 
                : 'bg-white border-slate-100 hover:border-slate-300'}"
            >
              <div class="flex items-center gap-5">
                <i class="fas {method.icon} text-xl transition-colors
                  {activeMethod === method.id ? method.activeText : 'text-slate-300 group-hover:text-slate-500'}">
                </i>
                
                <div>
                  <h4 class="font-bold tracking-tight transition-colors
                    {activeMethod === method.id ? method.activeText : 'text-slate-900'}">
                    {method.name}
                  </h4>
                  <p class="text-xs font-light opacity-80 transition-colors
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

        <div class="pt-8 flex items-center gap-8 opacity-40 grayscale group">
          <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" alt="RUC" class="h-8">
          <div class="h-8 w-[1px] bg-slate-300"></div>
          <div class="text-[10px]">
            <p class="font-bold uppercase tracking-widest leading-tight text-slate-900">Cuenta verificada:</p>
            <p class="text-slate-900 font-bold uppercase tracking-widest leading-tight">Efrain [Apellido]</p>
            <p class="text-slate-500 italic mt-1">DNI del titular validado con los registros de MINCETUR.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div class="relative bg-white p-12 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] text-center">
          <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Paso final: Escanea</p>
          
          <div class="relative inline-block p-4 border border-slate-50 bg-white mb-8">
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                  class="w-56 h-56 transition-all duration-700" 
                  alt="QR de Pago">
             <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-200"></div>
             <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-200"></div>
          </div>

          <p class="text-sm text-slate-600 font-light italic mb-8">
            Envía el comprobante por WhatsApp <br/> para recibir tu <span class="font-bold text-slate-900">Voucher Místico</span>
          </p>
          
          <button class="w-full py-4 px-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
            <i class="fab fa-whatsapp text-lg"></i>
            Confirmar Pago vía WhatsApp
          </button>
          
          <p class="text-[9px] text-slate-400 leading-relaxed uppercase font-bold tracking-tighter mt-4">
            Al hacer clic, aceptas las políticas de cancelación y el código de conducta mística.
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
