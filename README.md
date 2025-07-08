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
* Mantenha seu Facebook com o idioma configurado para **English (UK)**. Outros idiomas podem impedir o reconhecimento dos botões.
* Acesse a página correta para o script funcionar (detalhado abaixo).
* Abra o **DevTools (F12) ou Modo Desenvolvedor** → aba **Console**.
* Cole o conteúdo do script e pressione <kbd>Enter</kbd>.

> ⚠️ Pode levar de **20 a 50 segundos** para o script começar devido ao carregamento dinâmico do Facebook.

---

## 💡 Ferramentas

### 1. 🚫 Facebook Cancel Friend Requests

**Funcionalidade:**

* Abre automaticamente a aba **"View sent requests"**
* Cancela todas as solicitações de amizade pendentes
* Realiza scroll dinâmico para carregar novos usuários

**Importante:** 

* Recomendado rodar duas vezes para maior eficácia em clicar em todos **"Cancel Requests"** dos Amigos Pendentes
* Ao iniciar um novo ciclo, pressione <kbd>F5</kbd> (atualizar a página) antes de colar o script novamente no console

**Como usar:**

1. Acesse [`https://www.facebook.com/friends/requests`](https://www.facebook.com/friends/requests)
2. Aguarde a página carregar totalmente
3. Pressione <kbd>F12</kbd> para abrir o **DevTools (F12) ou Modo Desenvolvedor** e vá na aba **Console**
4. Copie todo o script [`facebook-cancel-requests.js`](https://github.com/Regirako/Facebook-Tools-Manager/blob/main/scripts/facebook-cancel-requests.js)
5. Cole no **Console** e pressione <kbd>Enter</kbd>
6. O script irá abrir a aba **"View sent requests"**, e então começará a cancelar automaticamente os pedidos

📽️ *Demonstração visual (GIF):*
![Cancel Friend Requests](assets/cancel-requests.gif)

---

### 2. 🔄 Facebook Follow & Unfollow

**Funcionalidade:**

* Clica automaticamente em **"Unfollow"** em perfis seguidos
* Se encontrar um perfil que não está seguido, realiza o **"Follow"**
* Ideal para forçar atualização do estado de seguidores no Facebook

**Importante:** 

* Recomendado rodar duas vezes para maior eficácia em dar **"Unfollow"** em todos Usuários da lista de **"Following"**
* Ao iniciar um novo ciclo, pressione <kbd>F5</kbd> (atualizar a página) antes de colar o script novamente no console
* O primeiro Ciclo do Script dá **"Unfollow"** em quem está seguindo e **"Follow"** em quem não está
* O segundo Ciclo do Script dá **"Unfollow"** nos últimos usuários que deu **"Follow"** anteriormente
* É necessário esses dois Ciclos porque o Facebook às vezes buga a página do **"Following"** e o Usuário da lista só é excluído quando você dá **"Follow"** e **"Unfollow"** posteriormente

**Como usar:**

1. Acesse `https://www.facebook.com/[SEU_USER]/following/` substituindo `[SEU_USER]` pelo seu nome de usuário do Facebook
2. Aguarde a lista de usuários carregar por completo
3. Pressione <kbd>F12</kbd> para abrir o **DevTools (F12) ou Modo Desenvolvedor** e vá na aba **Console**
4. Cole o script [`facebook-follow-unfollow.js`](https://github.com/Regirako/Facebook-Tools-Manager/blob/main/scripts/facebook-follow-unfollow.js)
5. Cole no **Console** e pressione <kbd>Enter</kbd>
6. O script irá percorrer cada usuário automaticamente e executar as ações de Follow/Unfollow conforme necessário

📽️ *Demonstração visual (GIF):*
![Follow & Unfollow](assets/follow-unfollow.gif)

---

## ⚠️ Observações Importantes

* O Facebook atualiza frequentemente seus seletores internos, o que pode afetar o funcionamento dos scripts.
* Caso algo não funcione:

  * Atualize a página com <kbd>F5</kbd>
  * Rode o script novamente
  * Verifique se está na página correta
  * Certifique-se de que o idioma da sua conta está em **English (UK)**
* Rodar o script mais de uma vez ajuda a garantir 100% de cobertura.

---

## 🧊 Licença

Este projeto é apenas para uso pessoal e não possui licença comercial.

---

Criado com 🧡 por [@regirako](https://github.com/regirako)
