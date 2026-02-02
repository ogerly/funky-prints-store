<template>
  <section id="contact" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-display text-6xl md:text-7xl font-bold text-center mb-4 text-gradient bg-gradient-to-r from-funky-pink to-funky-purple">
        KONTAKT & ANFRAGEN
      </h2>
      <p class="text-center text-xl text-gray-500 mb-16">
        Wir sind für dich da! Schreib uns oder besuche uns vor Ort.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card bg-white shadow-xl p-8">
          <h3 class="text-2xl font-bold mb-6 text-gray-700">Schreib uns eine Nachricht</h3>
          <form @submit.prevent="submitForm">
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text text-gray-600">Dein Name</span>
              </label>
              <input type="text" placeholder="Max Mustermann" class="input input-bordered w-full" />
            </div>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text text-gray-600">Deine E-Mail</span>
              </label>
              <input type="email" placeholder="max@example.com" class="input input-bordered w-full" />
            </div>
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text text-gray-600">Deine Nachricht</span>
              </label>
              <textarea class="textarea textarea-bordered h-32" placeholder="Was liegt dir auf dem Herzen?"></textarea>
            </div>
            <button class="btn btn-primary btn-block text-white mt-4">Nachricht senden</button>
          </form>
        </div>

        <!-- Contact Details -->
        <div class="flex flex-col justify-center text-gray-500">
          <h3 class="text-2xl font-bold mb-6 text-gray-700">Hier findest du uns:</h3>
          <div class="space-y-4 text-lg">
            <p>
              <strong class="font-semibold text-gray-600">Funky Prints & Post</strong><br>
              Musterstraße 123<br>
              12345 Musterstadt
            </p>
            <p>
              <strong class="font-semibold text-gray-600">Öffnungszeiten:</strong><br>
              Mo - Fr: 9:00 - 18:00 Uhr
            </p>
            <p>
              <strong class="font-semibold text-gray-600">E-Mail:</strong>
              <a href="mailto:hallo@funky-prints.de" class="text-funky-pink hover:underline">hallo@funky-prints.de</a>
            </p>
            <p>
               <strong class="font-semibold text-gray-600">Telefon:</strong>
               <a href="tel:+49123456789" class="text-funky-pink hover:underline">+49 123 456789</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  alert('Danke für deine Nachricht! Wir melden uns bald bei dir.');
  // Hier könnte eine echte Formular-Logik implementiert werden
}
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
