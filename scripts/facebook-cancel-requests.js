// ==Facebook Cancel Friend Requests Script==

const delay = ms => new Promise(res => setTimeout(res, ms));

function createStatusDisplay() {
  const sig = document.createElement('div');
  sig.id = 'cancel-request-signature';
  sig.style.position = 'fixed';
  sig.style.bottom = '10px';
  sig.style.right = '10px';
  sig.style.background = '#111';
  sig.style.color = '#fff';
  sig.style.padding = '6px 12px';
  sig.style.borderRadius = '10px';
  sig.style.zIndex = '9999';
  sig.style.fontFamily = 'monospace';
  sig.style.fontSize = '13px';
  sig.style.boxShadow = '0 0 8px #555';
  sig.innerHTML = '✨ Facebook Cancel Requests By Regirako<br>🌐 <a href="https://github.com/Regirako" target="_blank" style="color:#0bf;text-decoration:none;">https://github.com/Regirako</a>';
  document.body.appendChild(sig);

  const box = document.createElement('div');
  box.id = 'cancel-request-status';
  box.style.position = 'fixed';
  box.style.bottom = '80px';
  box.style.right = '10px';
  box.style.background = '#111';
  box.style.color = '#0f0';
  box.style.padding = '10px 15px';
  box.style.borderRadius = '10px';
  box.style.zIndex = '9999';
  box.style.fontFamily = 'monospace';
  box.style.boxShadow = '0 0 10px #0f0';
  box.innerHTML = '❎ 0 cancelled | ❌ 0 failed';
  document.body.appendChild(box);
}

function updateStatusDisplay(success, failed) {
  const el = document.getElementById('cancel-request-status');
  if (el) el.innerHTML = `❎ ${success} cancelled | ❌ ${failed} failed`;
}

function getModalScrollableContainer() {
  const dialog = document.querySelector('[role="dialog"]');
  if (!dialog) return null;
  return dialog.querySelector('[data-visualcompletion][class][style*="overflow"]');
}

async function scrollModalContainer(step = 700, delayMs = 2) {
  const container = getModalScrollableContainer();
  if (!container) return;
  container.scrollBy(0, step);
  await delay(delayMs);
}

async function openSentRequestsModal() {
  const span = Array.from(document.querySelectorAll('span')).find(el =>
    el.textContent.trim().toLowerCase() === 'view sent requests' && el.offsetParent !== null);

  if (span) {
    span.click();
    console.log('📥 Opened "View sent requests" modal.');
    await delay(3000);
    return true;
  }
  return false;
}

function closeModalIfOpen() {
  const escEvent = new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, which: 27, bubbles: true });
  document.dispatchEvent(escEvent);
}

async function cancelAllRequestsLoop() {
  let cancelled = 0;
  let failed = 0;
  let loopCount = 0;

  while (true) {
    const buttons = Array.from(document.querySelectorAll('span'))
      .filter(el => el.textContent.trim().toLowerCase() === 'cancel request' && el.offsetParent !== null);

    if (buttons.length === 0) {
      loopCount++;
      if (loopCount >= 5) break;
      await scrollModalContainer(600);
      continue;
    }

    loopCount = 0;
    for (const btn of buttons) {
      try {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await delay(100);
        btn.click();
        cancelled++;
        console.log(`❎ Cancelled request successfully.`);
        await delay(200);
      } catch (err) {
        failed++;
        console.log(`❌ Failed to cancel request.`);
      }
      updateStatusDisplay(cancelled, failed);
      await scrollModalContainer(600);
    }
  }

  return { cancelled, failed };
}

async function cancelAllSentRequests() {
  console.log("🔄 Facebook Cancel Requests By Regirako activated!");
  createStatusDisplay();

  const opened = await openSentRequestsModal();
  if (!opened) {
    console.log("❌ Could not find 'View sent requests' button.");
    return;
  }

  const result = await cancelAllRequestsLoop();
  closeModalIfOpen();

  console.log(`🏁 Finished.\n❎ Cancelled: ${result.cancelled}\n❌ Failed: ${result.failed}`);
  console.log('✨ Facebook Cancel Requests By Regirako');
  console.log('🌐 - https://github.com/Regirako');
}

cancelAllSentRequests();
