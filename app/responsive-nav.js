/* Desktop navigation uses the same data-screen routes as the mobile UI. */
(()=>{
  'use strict';
  const root=document.querySelector('#app');
  const update=()=>{
    const page=root?.querySelector('.device')?.dataset.page || 'today';
    const onboarding=['welcome','onboard-notice','onboard-grow'].includes(page);
    document.body.classList.toggle('is-onboarding',onboarding);
    const current= page.startsWith('journal')?'journal':
      ['journey-detail','exercise','journey-complete'].includes(page)?'heal':
      ['mood-saved'].includes(page)?'mood':page;
    document.querySelectorAll('.desktop-links button[data-screen]').forEach(btn=>{
      const active=btn.dataset.screen===current;
      btn.classList.toggle('active',active);
      if(active)btn.setAttribute('aria-current','page');
      else btn.removeAttribute('aria-current');
    });
  };
  new MutationObserver(update).observe(root,{childList:true});
  update();
})();