<script lang="ts">
  import { onMount } from 'svelte';
  let nombre = "", documento = "", domicilio = "", email = "", celular = "";
  let servicio = "", detalle = "", monto = "";
  let fechaIncidente = "";
  let tipo = "Reclamo"; 
  let numeroReclamo = "";

  // Generar un número de ticket aleatorio al cargar
  onMount(() => {
    numeroReclamo = "LRV-" + Math.floor(1000 + Math.random() * 9000) + "-2025";
  });

  function handleSubmit() {
    alert(`Registro exitoso. Su código es ${numeroReclamo}. Amaneceres Pacasmayo responderá en un plazo máximo de 15 días hábiles.`);
  }
</script>


<nav class="py-6 px-8 max-w-5xl mx-auto text-[10px] uppercase tracking-widest text-slate-400 font-bold">
  <a href="/" class="hover:text-orange-600 transition-colors">Inicio</a> 
  <span class="mx-2">/</span> 
  <span class="text-slate-900 font-black">Libro de Reclamaciones</span>
</nav>
<section class="py-12 bg-slate-50 min-h-screen">
  <div class="max-w-3xl mx-auto px-6 bg-white shadow-2xl rounded-sm border-t-8 border-orange-500 p-8 md:p-12 relative">
    
    <div class="absolute top-4 right-8 text-[10px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
        N° {numeroReclamo}
    </div>

    <header class="border-b border-slate-100 pb-8 mb-10">
      <h1 class="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Libro de Reclamaciones</h1>
      <div class="grid md:grid-cols-2 gap-4 mt-4">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Titular: Amaneceres Pacasmayo</p>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest md:text-right">RUC: 10716023945</p>
      </div>
    </header>

    <form on:submit|preventDefault={handleSubmit} class="space-y-8">
      
      <div class="space-y-4">
        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest border-l-4 border-orange-500 pl-3">1. Identificación del Consumidor</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre Completo" bind:value={nombre} required class="p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
          <input type="text" placeholder="DNI / RUC / Pasaporte" bind:value={documento} required class="p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
          <input type="email" placeholder="Correo electrónico" bind:value={email} required class="p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
          <input type="tel" placeholder="Celular" bind:value={celular} required class="p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
        </div>
        <input type="text" placeholder="Domicilio para notificaciones" bind:value={domicilio} required class="w-full p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
      </div>

      <div class="space-y-4">
        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest border-l-4 border-orange-500 pl-3">2. Detalle del Bien Contratado</h2>
        <input type="text" placeholder="Servicio contratado (Ej: Tour Cañoncillo)" bind:value={servicio} required class="w-full p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" bind:value={fechaIncidente} required class="p-3 bg-slate-50 border border-slate-200 text-sm">
            <input type="number" placeholder="Monto reclamado (S/)" bind:value={monto} class="p-3 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none">
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest border-l-4 border-orange-500 pl-3">3. Detalle de la Disconformidad</h2>
        
        <div class="grid md:grid-cols-2 gap-4">
            <label class="p-4 border border-slate-100 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                <div class="flex items-center gap-3 mb-2">
                    <input type="radio" bind:group={tipo} value="Reclamo" class="accent-orange-500">
                    <span class="text-xs font-black uppercase tracking-widest">Reclamo</span>
                </div>
                <p class="text-[9px] text-slate-400 leading-tight uppercase">Disconformidad relacionada a los productos o servicios.</p>
            </label>

            <label class="p-4 border border-slate-100 rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                <div class="flex items-center gap-3 mb-2">
                    <input type="radio" bind:group={tipo} value="Queja" class="accent-orange-500">
                    <span class="text-xs font-black uppercase tracking-widest">Queja</span>
                </div>
                <p class="text-[9px] text-slate-400 leading-tight uppercase">Disconformidad no relacionada a los productos; o malestar respecto a la atención.</p>
            </label>
        </div>

        <textarea rows="6" placeholder="Detalle su reclamo o queja..." bind:value={detalle} required class="w-full p-4 bg-slate-50 border border-slate-200 text-sm focus:border-orange-500 outline-none italic"></textarea>
      </div>

      <div class="space-y-6">
          <div class="flex items-start gap-3">
              <input type="checkbox" required class="mt-1 accent-orange-500">
              <p class="text-[10px] text-slate-500 leading-relaxed italic">
                  Autorizo a Amaneceres Pacasmayo a enviarme la respuesta a mi reclamo vía correo electrónico, conforme a la Ley N° 29733.
              </p>
          </div>

          <button type="submit" class="w-full bg-slate-900 text-white py-5 font-black text-xs uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-xl active:scale-95">
            Registrar Incidencia
          </button>

          <p class="text-[9px] text-slate-400 text-center uppercase tracking-widest leading-loose">
            La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es condición previa para interponer una denuncia ante el INDECOPI.
          </p>
      </div>
    </form>
  </div>
</section>