# 📘 Facebook Tools Manager

Uma poderosa toolbox em JavaScript para gerenciar suas interações sociais no Facebook diretamente do navegador. Desenvolvido por **Regirako**, este projeto inclui dois scripts altamente eficientes:

* ✅ **Facebook Follow & Unfollow**
* ✅ **Facebook Cancel Friend Requests**

Essas ferramentas automatizam tarefas repetitivas no Facebook, oferecendo controle total sobre seus contatos.

---

## ⚙️ Como Usar

> ⚠️ Você deve estar em páginas específicas do Facebook para cada ferramenta funcionar corretamente.

### 🖥️ Instruções Gerais

1. Abra o **DevTools do seu navegador**:

   * Pressione <kbd>F12</kbd> ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>
   * Vá até a aba **Console**
2. Copie todo o script (disponível neste repositório)
3. Cole no **Console do DevTools** e pressione <kbd>Enter</kbd>
4. Deixe o script executar automaticamente!

> ℹ️ Funciona melhor nos navegadores **Microsoft Edge**, **Google Chrome**, **Brave** e **Firefox**.

---

## ✨ Ferramenta 1: Facebook Follow & Unfollow

### 🔗 Link necessário:

**[https://www.facebook.com/friends/list/following](https://www.facebook.com/friends/list/following)**

### 🧠 O que faz:

* Clica automaticamente em "Parar de seguir" para todas as pessoas que você está seguindo
* Se você **não estiver seguindo** alguém, ele irá clicar em "Seguir"
* Você pode rodar o script novamente para fazer o ciclo completo
* O Facebook às vezes buga e mostra pessoas que você não segue — isso resolve!

### 🧪 Dica:

* Execute este script pelo menos **duas vezes** para garantir que todos sejam removidos corretamente

  * Primeira execução: seguir quem ainda não segue
  * Segunda execução: parar de seguir todos

### ⏳ Tempo para iniciar:

* Pode demorar entre **20–50 segundos** para começar totalmente, por conta do carregamento do Facebook

### 📷 Imagem ilustrativa

![Follow & Unfollow Demo](assets/follow-unfollow.gif)

---

## ✨ Ferramenta 2: Facebook Cancelar Solicitações de Amizade

### 🔗 Link necessário:

**[https://www.facebook.com/friends/requests](https://www.facebook.com/friends/requests)**

Após carregar, clique em **"Ver solicitações enviadas"** ou deixe o script fazer isso para você.

### 🧠 O que faz:

* Abre automaticamente o modal de "Solicitações enviadas"
* Clica em "Cancelar solicitação" para cada pedido pendente
* Realiza o scroll automático dentro da janela para carregar todas as solicitações

### 🔄 Por que usar:

* O Facebook mostra apenas 20 solicitações por vez
* Esta ferramenta força o carregamento de mais solicitações rolando durante a execução

### ⏳ Tempo para iniciar:

* Pode levar **20–30 segundos** para começar a cancelar, dependendo do carregamento

### 📷 Imagem ilustrativa

![Cancel Requests Demo](assets/cancel-requests.gif)

---

## ⚠️ Limitações Conhecidas

* O Facebook muda sua estrutura com frequência
* Se o script **parar de funcionar**, tente rodar novamente ou verificar alterações no site
* Não recomendado rodar os scripts com várias abas do Facebook abertas
* Executar sempre em **navegadores desktop**

---

## 📁 Estrutura do Projeto

```
Facebook-Tools-Manager/
├── scripts/
│   ├── follow-unfollow.js
│   └── cancel-requests.js
├── assets/
│   ├── follow-unfollow.gif
│   └── cancel-requests.gif
└── README.md
```

---

## ❤️ Créditos

**Facebook Tools Manager** foi criado com 💡 por [Regirako](https://github.com/Regirako)

Se esse projeto te ajudou, deixe uma ⭐ no repositório!

---

## 🧠 Sugestões Futuras

* [ ] Extensão do Chrome para facilitar o uso
* [ ] Executar via bookmarklet com 1 clique
* [ ] Exportar ações em formato `.csv`
* [ ] Adicionar UI para controle manual

> Contribuições são bem-vindas!
