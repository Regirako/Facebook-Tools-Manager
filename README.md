# Facebook Tools Manager

<p align="center">
  <img src="assets/banner.png" alt="Facebook Tools Manager" width="100%">
</p>

**Automatize tarefas repetitivas no Facebook com apenas um clique.** Este projeto oferece duas ferramentas poderosas e diretas, desenvolvidas em JavaScript puro para rodar diretamente no navegador:

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
│   ├── banner.png
│   ├── follow-unfollow.gif
│   └── cancel-requests.gif
├── LICENSE
└── README.md
```

---

## 📌 Requisitos

* Utilize um **navegador desktop moderno**: Google Chrome, Microsoft Edge, Firefox ou Brave.
* Acesse a página correta para o script funcionar (detalhado abaixo).
* Abra o **DevTools (F12)** → aba **Console**.
* Cole o conteúdo do script e pressione <kbd>Enter</kbd>.

> ⚠️ Pode levar de **20 a 50 segundos** para o script começar devido ao carregamento dinâmico do Facebook.

---

## 💡 Ferramentas

### 1. 🚫 Facebook Cancel Friend Requests

📍 Link: [`https://www.facebook.com/friends/requests`](https://www.facebook.com/friends/requests)

**Funcionalidade:**

* Abre automaticamente a aba "Solicitações Enviadas"
* Cancela todas as solicitações de amizade pendentes
* Realiza scroll dinâmico para carregar novos itens

📽️ *Demonstração visual (GIF):*
![Cancel Friend Requests](assets/cancel-requests.gif)

---

### 2. 🔄 Facebook Follow & Unfollow

📍 Link: `https://www.facebook.com/[SEU USER DO FACEBOOK]/following/`

**Funcionalidade:**

* Clica automaticamente em "Parar de seguir" em perfis seguidos
* Se encontrar um perfil que não está seguido, realiza o "Seguir"
* Ideal para forçar atualização do estado de seguidores no Facebook

📽️ *Demonstração visual (GIF):*
![Follow & Unfollow](assets/follow-unfollow.gif)

📎 Recomendado rodar duas vezes:

* 1ª: Segue todos não seguidos (se necessário)
* 2ª: Remove todos definitivamente

---

## ⚠️ Observações Importantes

* O Facebook atualiza frequentemente seus seletores internos, o que pode afetar o funcionamento dos scripts.
* Caso algo não funcione:

  * Atualize a página
  * Rode o script novamente
  * Verifique se está na página correta
* Rodar o script mais de uma vez ajuda a garantir 100% de cobertura.

---

## 👨‍💻 Desenvolvedor

**Regirako** — [github.com/Regirako](https://github.com/Regirako)

Contribuições, feedbacks e melhorias são bem-vindos!

---

## 📜 Licença

Distribuído sob a **Licença MIT**. Consulte `LICENSE` para mais detalhes.
