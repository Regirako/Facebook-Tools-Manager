const delay = ms => new Promise(res => setTimeout(res, ms));

const unfollowListContainerSelector = '.x78zum5.x1q0g3np.x1a02dak.x1qughib';
const threeDotSelector = '.x1b0d499.xep6ejk';
const unfollowText = 'unfollow';
const followText = 'follow';

function hover(el) {
  el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true, view: window }));
  el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true, cancelable: true, view: window }));
  el.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, view: window }));
}

function unhover(el) {
  el.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
}

function closeMenus() {
  document.body.click();
}

function createCounterDisplay() {
  const sig = document.createElement('div');
  sig.id = 'follow-unfollow-signature';
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
  sig.innerHTML = '✨ Facebook Follow & Unfollow By Regirako<br>🌐 <a href="https://github.com/Regirako" target="_blank" style="color:#0bf;text-decoration:none;">https://github.com/Regirako</a>';
  document.body.appendChild(sig);

  const box = document.createElement('div');
  box.id = 'follow-unfollow-status';
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
  box.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s';
  box.style.transform = 'translateY(0)';
  box.innerHTML = '🚫 0 | ➕ 0 | ❎ 0';
  document.body.appendChild(box);
}

function updateCounterDisplay(unf, fol, can) {
  const el = document.getElementById('follow-unfollow-status');
  if (el) el.innerHTML = `🚫 ${unf} | ➕ ${fol} | ❎ ${can}`;
}

async function autoScrollBy(distance = 200, stepDelay = 50) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      window.scrollBy(0, distance);
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        clearInterval(interval);
        resolve();
      }
    }, stepDelay);
  });
}

async function tryCancelRequestWithHover(threeDotBtn) {
  const userCard = threeDotBtn.closest('[role="article"]') || threeDotBtn.closest('div');
  if (!userCard) return false;

  const hoverTarget = userCard.querySelector('a[href], img');
  if (!hoverTarget) return false;

  hover(hoverTarget);
  await delay(2000);

  const cancelBtn = Array.from(document.querySelectorAll('[role="button"], [aria-label]')).find(b =>
    (b.getAttribute('aria-label')?.toLowerCase().includes('cancel request') ||
     b.textContent.trim().toLowerCase().includes('cancel request')) &&
    b.offsetParent !== null);

  if (cancelBtn) {
    cancelBtn.click();
    console.log('❎ Cancelled pending friend request');
    await delay(1000);
    unhover(hoverTarget);
    closeMenus();
    await delay(500);
    return true;
  } else {
    console.log("ℹ️ No Cancel Request button found in hover card.");
    unhover(hoverTarget);
    closeMenus();
    await delay(500);
    return false;
  }
}

async function clickAndScrollLoop() {
  console.log("🔄 Facebook Follow & Unfollow By Regirako activated!");
  console.log("📢 This script will 'Unfollow' who you're currently following and 'Follow' who you are not, inside the Facebook Following page. Run the script again to fully unfollow everyone. Facebook sometimes bugs this state.");

  let totalUnfollowed = 0;
  let totalFollowed = 0;
  let totalCancelled = 0;

  createCounterDisplay();

  while (true) {
    const container = document.querySelector(unfollowListContainerSelector);
    if (!container) {
      console.log("❌ Container not found");
      break;
    }

    const threeDots = Array.from(container.querySelectorAll(threeDotSelector)).filter(btn => !btn.dataset.clicked);

    if (threeDots.length === 0) {
      console.log("🎯 No more new 3-dot buttons found, process completed.");
      break;
    }

    for (const btn of threeDots) {
      btn.dataset.clicked = "true";

      btn.click();
      await delay(1500);

      const unfollowBtn = Array.from(document.querySelectorAll('*')).find(el =>
        el.textContent.trim().toLowerCase() === unfollowText && el.offsetParent !== null);

      let didUnfollowOrFollow = false;

      if (unfollowBtn) {
        unfollowBtn.click();
        totalUnfollowed++;
        console.log(`🚫 Unfollowed successfully.`);
        didUnfollowOrFollow = true;
        await delay(1000);
      } else {
        const followBtn = Array.from(document.querySelectorAll('*')).find(el =>
          el.textContent.trim().toLowerCase() === followText && el.offsetParent !== null);

        if (followBtn) {
          followBtn.click();
          totalFollowed++;
          console.log(`➕ Followed User with successes.`);
          didUnfollowOrFollow = true;
          await delay(1000);
        } else {
          console.log("⚠️ Possibly this user is only listed here due to a pending friend request. Cancel it to remove from 'Following'.");
        }
      }

      if (didUnfollowOrFollow) {
        const cancelled = await tryCancelRequestWithHover(btn);
        if (cancelled) totalCancelled++;
      }

      updateCounterDisplay(totalUnfollowed, totalFollowed, totalCancelled);
      await delay(500);
    }

    await autoScrollBy(200, 30);
    await delay(1000);
  }

  console.log(`➕ Run the Script again to "Unfollow" all users followed by the Script.`);
  console.log(`✅ Process completed.\n🚫 Unfollowed: ${totalUnfollowed}\n➕ Followed: ${totalFollowed}\n❎ Cancelled Requests: ${totalCancelled}`);
  console.log('✨ Facebook Follow & Unfollow By Regirako');
  console.log('🌐 - https://github.com/Regirako');
}

clickAndScrollLoop();
