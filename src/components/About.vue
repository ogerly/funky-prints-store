<template>
  <section class="py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-funky-pink to-funky-purple">
            ÜBER UNS
          </h2>
          <div class="space-y-4 text-lg text-gray-500">
            <p>
              Wir sind <strong class="text-funky-pink font-semibold">3D-Druck-Enthusiasten</strong> mit einem Faible für das Außergewöhnliche. 
              Was mit einem witzigen Experiment begann, ist zu unserer Leidenschaft geworden.
            </p>
            <p>
              Jede Figur wird mit <strong class="text-funky-purple font-semibold">hochwertigen Materialien</strong> gedruckt und 
              anschließend von Hand bemalt. Kein Massenprodukt, sondern echte <strong class="text-funky-orange font-semibold">Handarbeit</strong>.
            </p>
            <p class="text-2xl font-medium text-gray-700">
              🎨 Kreativ · 🇩🇪 Lokal · 😄 Mit Humor
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-square bg-white/60 backdrop-blur-lg rounded-3xl flex items-center justify-center">
            <div class="text-9xl float-animation">
              😉
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <h3 class="font-display text-4xl font-bold text-center mb-12 text-gray-700">
          WIE ENTSTEHEN DIE FIGUREN?
        </h3>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-6xl mb-4">🖥️</div>
            <h4 class="font-bold text-xl mb-2 text-funky-pink">1. Design</h4>
            <p class="text-gray-500">Digitale Modellierung am Computer</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-4">🖨️</div>
            <h4 class="font-bold text-xl mb-2 text-funky-purple">2. Druck</h4>
            <p class="text-gray-500">Schicht für Schicht im 3D-Drucker</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-4">🎨</div>
            <h4 class="font-bold text-xl mb-2 text-funky-orange">3. Bemalung</h4>
            <p class="text-gray-500">Handgemalt mit Acrylfarben</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-4">📦</div>
            <h4 class="font-bold text-xl mb-2 text-funky-blue">4. Versand</h4>
            <p class="text-gray-500">Sicher verpackt zu dir nach Hause</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
