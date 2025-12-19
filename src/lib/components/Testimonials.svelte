<script>
  const reviews = [
    {
      name: "Ricardo M.",
      location: "Trujillo",
      text: "Fui con mi familia y el nivel de seguridad es impresionante. Los guías te dan confianza desde el minuto uno. ¡La fogata al final del día es de otro mundo!",
      avatar: "RM"
    },
    {
      name: "Elena R.",
      location: "Lima",
      text: "Buscaba algo diferente y el trekking por el santuario de aves me dio una paz que no encontraba en la ciudad. Todo muy profesional y puntual.",
      avatar: "ER"
    },
    {
      name: "Juan Carlos P.",
      location: "Piura",
      text: "La combinación de cuatrimotos y luego el picnic frente a la laguna es perfecta. Te sientes cuidado y el equipo es de primera.",
      avatar: "JP"
    }
  ];
</script>

<section class="py-32 bg-slate-50/50">
  <div class="max-w-[1200px] mx-auto px-8">
    
    <header class="mb-20 text-center">
      <p class="text-4xl font-light text-slate-900 tracking-tight italic font-serif">
        "Lo que dicen quienes ya vivieron la magia"
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      {#each reviews as review}
        <article class="bg-white p-10 border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-colors duration-500">
          
          <div class="space-y-6">
            <div class="flex gap-1 text-[10px] text-orange-500 margin-auto">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>

            <p class="text-[15px] text-slate-600 font-light leading-relaxed italic">
              "{review.text}"
            </p>
          </div>

          <div class="mt-10 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-bold text-slate-400 border border-slate-200">
              {review.avatar}
            </div>
            <div>
              <p class="text-sm font-bold text-slate-900 tracking-tighter">{review.name}</p>
              <p class="text-[10px] uppercase tracking-widest text-slate-400 font-medium">{review.location}</p>
            </div>
          </div>

        </article>
      {/each}
    </div>

  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  
  .font-serif {
    font-family: 'Playfair Display', serif;
  }
</style>