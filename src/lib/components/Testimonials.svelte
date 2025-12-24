<script>
  const reviews = [
    {
      name: "Ricardo M.",
      location: "Trujillo",
      text: "Mientras otros solo ven las dunas desde lejos, nosotros **dominamos el desierto** con una seguridad total. La fogata privada al final no es un tour, es un privilegio que pocos conocen.",
      avatar: "RM",
      date: "Cupo de hace 2 semanas"
    },
    {
      name: "Elena R.",
      location: "Lima",
      text: "Me compadezco de quienes se quedan en el ruido de la ciudad. El silencio del santuario es un **lujo que el dinero no suele comprar**. Una experiencia realmente exclusiva y superior.",
      avatar: "ER",
      date: "Cupo de hace 1 mes"
    },
    {
      name: "Juan Carlos P.",
      location: "Piura",
      text: "He viajado mucho, pero sentirse **dueño de la laguna** al amanecer con un equipo de primera es otro nivel. Si buscas lo común, este no es tu lugar.",
      avatar: "JP",
      date: "Cupo de hace 3 días"
    }
  ];
</script>

<section class="py-32 bg-white relative overflow-hidden">
  <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20"></div>

  <div class="max-w-[1200px] mx-auto px-8 relative z-10">
    
    <header class="mb-24">
      <div class="max-w-3xl">
        <h2 class="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] uppercase italic tracking-tighter">
          Para quienes <br /> 
          <span class="text-orange-500">no se conforman</span>
        </h2>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each reviews as review}
        <article class="relative bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 transition-all duration-500 hover:-translate-y-2 group">
          <div class="absolute top-8 right-10 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
            <i class="fas fa-crown text-4xl"></i>
          </div>

          <div class="relative z-10">
            <div class="flex gap-1 text-[8px] text-orange-400 mb-8">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>

            <p class="text-lg text-slate-600 font-light leading-relaxed italic mb-10">
              {@html review.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-slate-900 font-bold not-italic border-b-2 border-orange-400/30">$1</span>')}
            </p>

            <div class="flex items-center justify-between pt-6 border-t border-slate-50">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-[12px] font-black text-orange-500 ring-4 ring-white shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <p class="text-sm font-black text-slate-900 tracking-tighter">{review.name}</p>
                  <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{review.location}</p>
                </div>
              </div>
            </div>
            <!-- <div class="mt-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{review.date}</span>
            </div> -->
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-20 flex flex-col items-center">
        <p class="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Solo para decididos</p>
        <div class="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
</style>