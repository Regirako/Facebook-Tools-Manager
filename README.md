# Facebook Tools Manager

<p align="center">
  <img src="assets/facebook-tools-banner-updated.png" alt="Facebook Tools Manager" width="100%">
</p>

**Automatize tarefas repetitivas no Facebook de maneira segura e eficaz.** Este projeto oferece duas ferramentas diretas, desenvolvidas em JavaScript puro para rodar diretamente no navegador:

* 🚫 Cancelar Solicitações de Amizade Enviadas
* 🔄 Seguir e Deixar de Seguir Usuários

---

## 📂 Estrutura do Projeto

```bash
Facebook-Tools-Manager/
├── scripts/
│   ├── facebook-follow-unfollow.js
│   └── facebook-cancel-requests.js
├── assets/
│   ├── facebook-tools-banner-updated.png
│   ├── follow-unfollow.gif
│   └── cancel-requests.gif
├── LICENSE
└── README.md
```

---

## 📌 Requisitos

* Utilize um **navegador desktop moderno**: Microsoft Edge, Google Chrome, Firefox ou Brave.
* Acesse a página correta para o script funcionar (detalhado abaixo).
* Abra o **DevTools (F12) ou Modo Desenvolvedor** → aba **Console**.
* Cole o conteúdo do script e pressione <kbd>Enter</kbd>.

> ⚠️ Pode levar de **20 a 50 segundos** para o script começar devido ao carregamento dinâmico do Facebook.

---

## 💡 Ferramentas

### 1. 🚫 Facebook Cancel Friend Requests

📍 Link: [`https://www.facebook.com/friends/requests`](https://www.facebook.com/friends/requests)

**Funcionalidade:**

* Abre automaticamente a aba **"View sent requests"**
* Cancela todas as solicitações de amizade pendentes
* Realiza scroll dinâmico para carregar novos usuários

📎 Recomendado rodar duas vezes para maior eficácia em clicar em todos "Cancel Requests" dos Amigos Pendentes

📽️ *Demonstração visual (GIF):*
![Cancel Friend Requests](assets/cancel-requests.gif)

---

### 2. 🔄 Facebook Follow & Unfollow

📍 Link: `https://www.facebook.com/[SEU USER DO FACEBOOK]/following/`

**Funcionalidade:**

* Clica automaticamente em "Unfollow" em perfis seguidos
* Se encontrar um perfil que não está seguido, realiza o "Follow"
* Ideal para forçar atualização do estado de seguidores no Facebook

📎 Recomendado rodar duas vezes para maior eficácia em dar "Unfollow" em todos Usuários da lista de "Following".
* O primeiro Ciclo do Script da "Unfollow" em quem está seguindo e "Follow" em quem não está.
* O segundo Ciclo do Script da "Unfollow" nos últimos usuários que deu "Follow" anteriormente.
* É necessário esses dois Ciclos por que o Facebook as vezes buga a página do "Following" e o Usuário da Lista só é excluído quando você da "Follow" e "Unfollow" posteriormente.

📽️ *Demonstração visual (GIF):*
![Follow & Unfollow](assets/follow-unfollow.gif)

---

## ⚠️ Observações Importantes

* O Facebook atualiza frequentemente seus seletores internos, o que pode afetar o funcionamento dos scripts.
* Caso algo não funcione:
  * Atualize a página
  * Rode o script novamente
  * Verifique se está na página correta
* Rodar o script mais de uma vez ajuda a garantir 100% de cobertura.

---

## 🧊 Licença

Este projeto é apenas para uso pessoal e não possui licença comercial.

---

Criado com 🧡 por [@regirako](https://github.com/regirako)
