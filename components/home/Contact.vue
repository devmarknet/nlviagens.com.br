<script>
export default {
  name: 'ContactComponent',
}
</script>

<template>
  <div class="bg-dark-blue">
    <div class="container mx-auto max-w-7xl py-32">
      <div class="flex flex-col items-center max-w-2xl mx-auto">
        <span class="font-bold text-white">Contate-nos</span>
        <h1
          class="font-title text-[32px] leading-9 font-semibold text-center text-white mt-4 mb-10"
        >
          Entre em contato conosco, estamos aqui para ajudar a roteirizar sua
          próxima viagem
        </h1>
        <form action="" class="w-full flex flex-col gap-2 px-10">
          <input
            class="rounded-lg px-4 py-3 w-full"
            type="text"
            placeholder="Seu nome completo"
          />
          <input
            class="rounded-lg px-4 py-3 w-full"
            type="text"
            placeholder="Seu melhor e-mail"
          />
          <input
            class="rounded-lg px-4 py-3 w-full"
            type="text"
            placeholder="Informe seu contato Telefone/WhatsApp"
          />
          <input
            class="rounded-lg px-4 py-3 w-full"
            type="text"
            placeholder="Qual assunto você quer tratar"
          />
          <textarea
            class="rounded-lg px-4 py-3 w-full"
            type="text"
            placeholder="Escreva uma mensagem"
          ></textarea>
          <button
            class="py-4 px-20 rounded-lg bg-blue w-max text-white font-bold mx-auto"
          >
            Enviar
          </button>
          <p class="text-xs text-white opacity-50 text-center">
            * Ao inserir seus dados você aceita receber comunicações.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
