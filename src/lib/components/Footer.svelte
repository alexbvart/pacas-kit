<script>
  import { base } from '$app/paths';
</script>

<footer class="bg-white pt-24 pb-12 px-8 border-t border-slate-100">
    <div class="max-w-[1200px] mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-6">
            
            <div class="space-y-8">
                <div class="flex flex-col gap-6">
                    <img src="https://dikatravelperu.travel/wp-content/uploads/2023/01/Logo-Peru.webp" class="h-10 w-fit grayscale opacity-80" alt="Marca Perú">
                    <p class="text-[13px] text-slate-500 font-light leading-relaxed">
                        Operador turístico oficial en el Santuario de Cañoncillo. Comprometidos con el desarrollo sostenible y la preservación del patrimonio natural de Pacasmayo.
                    </p>
                </div>
                <div class="flex gap-4">
                    <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/CODIDO%20ESNA.jpg" class="h-12 w-12 object-contain rounded-sm border border-slate-50" alt="ESNA">
                    <img src="https://dikatravelperu.travel/wp-content/uploads/2023/08/protegeme.png" class="h-12 w-56 object-contain rounded-sm border border-slate-50" alt="Protégeme">
                </div>
            </div>

            <div>
                <h4 class="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Gestión de Reserva</h4>
                <ul class="space-y-4 text-[13px] font-light text-slate-500">
                    <li><a href="/" class="hover:text-orange-600 transition-colors">Términos y Condiciones</a></li>
                    <li><a href="/" class="hover:text-orange-600 transition-colors">Políticas de Cancelación</a></li>
                    <li><a href="/" class="hover:text-orange-600 transition-colors">Protección de Datos Personales</a></li>
                    <li class="pt-2">
                        <a href="/" class="flex items-center gap-3 group">
                            <i class="fas fa-book text-slate-300 group-hover:text-orange-600"></i>
                            <span class="font-bold text-slate-900 group-hover:underline">Libro de Reclamaciones</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Centro de Ayuda</h4>
                <ul class="space-y-4 text-[13px] font-light text-slate-500">
                    <li class="flex gap-3">
                        <i class="fas fa-map-marker-alt text-orange-600 pt-1"></i>
                        <span>Pacasmayo, La Libertad - Perú <br/> Calle [Dato], Nro [Dato]</span>
                    </li>
                    <li class="flex gap-3">
                        <i class="fas fa-phone-alt text-orange-600 pt-1"></i>
                        <span>+51 9XX XXX XXX</span>
                    </li>
                    <li class="flex gap-3">
                        <i class="fas fa-envelope text-orange-600 pt-1"></i>
                        <span>reservas@pacasmayomistico.com</span>
                    </li>
                </ul>
            </div>

            <div class="bg-slate-50 p-8 rounded-sm space-y-6 flex flex-col items-center text-center">
                <img src="https://img1.wsimg.com/isteam/ip/52243972-a564-4158-ac40-3b2264e2ff4a/agencia%20de%20viajes%20y%20turismo%20registrada.jpg" class="h-20 grayscale opacity-70" alt="MINCETUR">
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-900">Agencia Formal</p>
                  <p class="text-[9px] text-slate-400 mt-2 uppercase tracking-tighter leading-tight">
                      Registrada ante el Directorio Nacional de Prestadores de Servicios Turísticos
                  </p>
                </div>
                <div class="pt-4 border-t border-slate-200 w-full">
                    <p class="text-[10px] font-bold text-slate-500">RUC: 2060XXXXXXXX</p>
                </div>
            </div>
        </div>

        <div class="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-[11px] text-slate-400 font-medium uppercase tracking-widest">
                © 2025 Pacasmayo Místico. <span class="hidden md:inline">|</span> Todos los derechos reservados.
            </p>
            
            <div class="flex gap-8 text-slate-400">
                <a href="{base}/" aria-label="Facebook" class="hover:text-orange-600 transition-colors">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="{base}/" aria-label="Instagram" class="hover:text-orange-600 transition-colors">
                    <i class="fab fa-instagram text-lg"></i>
                </a>
                <a href="{base}/" aria-label="TikTok" class="hover:text-orange-600 transition-colors">
                    <i class="fab fa-tiktok"></i>
                </a>
            </div>

            <div class="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded text-slate-400">
                <i class="fas fa-lock text-[10px]"></i>
                <span class="text-[9px] font-bold uppercase tracking-tighter italic">Navegación Protegida por SSL</span>
            </div>
        </div>
    </div>
</footer>