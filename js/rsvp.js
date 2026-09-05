const SUPABASE_URL = 'https://ljtugpmazxzdxpzhtlyd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdHVncG1henh6ZHhwemh0bHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMDUxMjIsImV4cCI6MjEwMjU4MTEyMn0.tk_Jk5g4Bay0Mq5ibJG9W0AeUcW3rrSnS4brGK8AXts';

const isConfigured = () => SUPABASE_URL !== 'YOUR_SUPABASE_URL';

// ========================
// SUPABASE REST HELPERS
// ========================
async function dbGet(token) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/guests?token=eq.${encodeURIComponent(token)}&select=*&limit=1`,
    { headers: dbHeaders() }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const rows = await res.json();
  return rows[0] || null;
}

async function dbUpdate(token, data) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/guests?token=eq.${encodeURIComponent(token)}`,
    {
      method: 'PATCH',
      headers: { ...dbHeaders(), 'Prefer': 'return=minimal' },
      body: JSON.stringify({ ...data, updated_at: new Date().toISOString() }),
    }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

function dbHeaders() {
  return {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };
}

// ========================
// RSVP EVENTS DATA
// ========================
const RSVP_EVENTS = {
  included: [
    {
      key: 'tren_nieve', icon: '🚂',
      titleEs: 'Tren en la nieve', titleEn: 'Snow train ride',
      descEs: 'Viernes 26 · 1:30–3:30pm', descEn: 'Friday March 26 · 1:30–3:30pm',
    },
    {
      key: 'cena_grupal', icon: '🍷',
      titleEs: 'Cena grupal', titleEn: 'Group dinner',
      descEs: 'Viernes 26 · noche', descEn: 'Friday March 26 · evening',
    },
  ],
  optional: [
    {
      key: 'fiesta_argenta', icon: '🎉',
      titleEs: 'Fiesta argenta', titleEn: 'Argentinian party',
      descEs: 'Jueves 25 · noche', descEn: 'Thursday March 25 · evening',
    },
    {
      key: 'actividades_nieve', icon: '⛷️',
      titleEs: 'Actividades en la nieve', titleEn: 'Snow activities',
      descEs: 'Jueves 25 · Ski · Tubing · Snowmobile', descEn: 'Thursday March 25 · Skiing · Tubing · Snowmobile',
    },
    {
      key: 'ice_fishing', icon: '🎣',
      titleEs: 'Ice Fishing (Mauri y los chicos)', titleEn: 'Ice Fishing (Mauri & the guys)',
      descEs: 'Sábado 27 · mañana', descEn: 'Saturday March 27 · morning',
    },
    {
      key: 'brunch', icon: '🥂',
      titleEs: 'Brunch con los novios', titleEn: 'Brunch with the couple',
      descEs: 'Domingo 28 · mañana', descEn: 'Sunday March 28 · morning',
    },
  ],
  paid: [
    {
      key: 'coors', icon: '🍺',
      titleEs: 'Coors Brewery Tour', titleEn: 'Coors Brewery Tour',
      descEs: 'Lunes 22 · Denver · Costo aprox. $37 por persona', descEn: 'Monday March 22 · Denver · Approx. $37/person',
    },
    {
      key: 'avalanche', icon: '🏒',
      titleEs: 'Avalanche vs Mammoth', titleEn: 'Avalanche vs Mammoth',
      descEs: 'Martes 23 · Denver · Costo aprox. $65 por persona', descEn: 'Tuesday March 23 · Denver · Approx. $65/person',
    },
  ],
};

// ========================
// EXTRA GUESTS (dynamic list)
// ========================
let extraGuestSeq = 0;

function addExtraGuest(name) {
  extraGuestSeq++;
  const idx = extraGuestSeq;
  const list = el('extra-guests-list');
  if (!list) return;
  const div = document.createElement('div');
  div.className = 'guest-row';
  div.id = `guest-row-${idx}`;
  div.innerHTML = `
    <input class="form-input guest-name-input" type="text" value="${name ? name.replace(/"/g,'&quot;') : ''}"
      placeholder="${t('rsvp_guest_name_ph')}">
    <button type="button" class="guest-remove-btn" onclick="removeExtraGuest(${idx})" aria-label="Eliminar">✕</button>`;
  list.appendChild(div);
}

function removeExtraGuest(idx) {
  const row = el(`guest-row-${idx}`);
  if (row) row.remove();
}

function getExtraGuests() {
  return Array.from(document.querySelectorAll('.guest-name-input'))
    .map(i => i.value.trim()).filter(Boolean);
}

function clearExtraGuests() {
  const list = el('extra-guests-list');
  if (list) list.innerHTML = '';
  extraGuestSeq = 0;
}

// ========================
// STATE
// ========================
let guestToken = null;
let guestData = null;
let currentStep = 1;

// ========================
// ELEMENTS
// ========================
const el = (id) => document.getElementById(id);

function showState(state) {
  ['rsvp-loading','rsvp-no-token','rsvp-form-wrap','rsvp-success','rsvp-declined'].forEach(id => {
    const e = el(id);
    if (e) e.classList.add('hidden');
  });
  const target = el(state);
  if (target) target.classList.remove('hidden');
}

// ========================
// STEPPER
// ========================
function goToStep(step) {
  [1, 2, 3].forEach(n => {
    const s = el(`step-${n}`);
    if (s) s.classList.toggle('hidden', n !== step);
    const dot = el(`dot-${n}`);
    if (dot) dot.classList.toggle('active', n <= step);
  });
  currentStep = step;
  const label = el('step-label');
  if (label) label.textContent = t('rsvp_step_of').replace('{n}', step);
  el('rsvp-form-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========================
// RADIO BUTTONS
// ========================
function initRadios() {
  document.querySelectorAll('.radio-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      document.querySelectorAll(`.radio-opt[data-group="${group}"]`).forEach(b => {
        b.classList.remove('selected');
        b.querySelector('input').checked = false;
      });
      btn.classList.add('selected');
      btn.querySelector('input').checked = true;

      if (group === 'attending') {
        el('plus-one-section').classList.toggle('hidden', btn.dataset.value !== 'yes');
        if (btn.dataset.value !== 'yes') clearExtraGuests();
      }
    });
  });
}

function initEventRadios() {
  document.querySelectorAll('.erc-radios .radio-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      document.querySelectorAll(`.erc-radios .radio-opt[data-group="${group}"]`).forEach(b => {
        b.classList.remove('selected');
        b.querySelector('input').checked = false;
      });
      btn.classList.add('selected');
      btn.querySelector('input').checked = true;
    });
  });
}

function setRadio(group, value) {
  const btn = document.querySelector(`.radio-opt[data-group="${group}"][data-value="${value}"]`);
  if (btn) btn.click();
}

function getRadio(group) {
  const selected = document.querySelector(`.radio-opt[data-group="${group}"].selected`);
  return selected ? selected.dataset.value : null;
}

// ========================
// EVENT CARD RENDERING
// ========================
function renderEventCard(ev, type) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'es';
  const title = lang === 'es' ? ev.titleEs : ev.titleEn;
  const desc = lang === 'es' ? ev.descEs : ev.descEn;

  const badgeClass = type === 'included' ? 'badge-included' : type === 'optional' ? 'badge-optional' : 'badge-paid';
  const badgeText = t(`badge_${type}`);

  const yesLabel = type === 'included' ? t('ev_going') : t('ev_joining');
  const noLabel = type === 'included' ? t('ev_not_going') : t('ev_skipping');

  const saved = guestData?.event_selections?.[ev.key];
  const yesSelected = saved === true ? 'selected' : '';
  const noSelected = saved === false ? 'selected' : '';

  return `
    <div class="event-rsvp-card">
      <div class="erc-header">
        <span class="erc-icon">${ev.icon}</span>
        <div class="erc-body">
          <div class="erc-title">${title}</div>
          <div class="erc-desc">${desc}</div>
        </div>
        <span class="event-badge ${badgeClass}">${badgeText}</span>
      </div>
      <div class="radio-group erc-radios">
        <label class="radio-opt ${yesSelected}" data-group="ev_${ev.key}" data-value="yes">
          <input type="radio" name="ev_${ev.key}" value="yes" ${saved === true ? 'checked' : ''}>
          <span>${yesLabel}</span>
        </label>
        <label class="radio-opt ${noSelected}" data-group="ev_${ev.key}" data-value="no">
          <input type="radio" name="ev_${ev.key}" value="no" ${saved === false ? 'checked' : ''}>
          <span>${noLabel}</span>
        </label>
      </div>
    </div>`;
}

function renderEventSteps() {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'es';

  const step2 = el('step-2-events');
  if (step2) {
    step2.innerHTML = RSVP_EVENTS.included.map(ev => renderEventCard(ev, 'included')).join('');
  }

  const step3 = el('step-3-events');
  if (step3) {
    const paidNote = lang === 'es' ? t('ev_paid_note') : t('ev_paid_note');
    step3.innerHTML = `
      <p class="events-section-label">${t('ev_optional_section')}</p>
      ${RSVP_EVENTS.optional.map(ev => renderEventCard(ev, 'optional')).join('')}
      <p class="events-section-label" style="margin-top:1rem;">${t('ev_paid_section')}</p>
      <p class="events-section-note">${paidNote}</p>
      ${RSVP_EVENTS.paid.map(ev => renderEventCard(ev, 'paid')).join('')}
    `;
  }

  initEventRadios();
}

function getEventSelections() {
  const all = [...RSVP_EVENTS.included, ...RSVP_EVENTS.optional, ...RSVP_EVENTS.paid];
  const selections = {};
  all.forEach(ev => {
    const selected = document.querySelector(`.radio-opt[data-group="ev_${ev.key}"].selected`);
    if (selected) selections[ev.key] = selected.dataset.value === 'yes';
  });
  return selections;
}

// ========================
// PREFILL FORM
// ========================
function prefillForm(guest) {
  const greeting = el('rsvp-greeting');
  if (greeting) {
    greeting.innerHTML = `${t('rsvp_greeting_prefix')} <span></span> 👋`;
    greeting.querySelector('span').textContent = guest.name;
  }
  if (guest.email) el('rsvp-email').value = guest.email;
  if (guest.phone) el('rsvp-phone').value = guest.phone;
  if (guest.notes) el('rsvp-notes').value = guest.notes;
  if (guest.arrival_day) el('rsvp-arrival').value = guest.arrival_day;
  if (guest.is_attending === true) setRadio('attending', 'yes');
  if (guest.is_attending === false) setRadio('attending', 'no');

  // Prefill extra guests from plus_one_name (stored as JSON array)
  clearExtraGuests();
  if (guest.plus_one_name) {
    let names = [];
    try { names = JSON.parse(guest.plus_one_name); if (!Array.isArray(names)) names = [names]; }
    catch { names = [guest.plus_one_name]; }
    names.filter(Boolean).forEach(name => addExtraGuest(name));
  }

  // Prefill shuttle & accommodation from event_selections._* keys
  const sel = guest.event_selections || {};
  if (sel._shuttle_interest === true) setRadio('shuttle', 'yes');
  else if (sel._shuttle_interest === false) setRadio('shuttle', 'no');
  if (sel._accommodation_type) setRadio('accommodation', sel._accommodation_type);
}

// ========================
// SUCCESS STATES
// ========================
function showSuccess(attending) {
  if (attending === false) {
    showState('rsvp-declined');
    return;
  }
  showState('rsvp-success');
  const editBtn = el('rsvp-edit-btn');
  if (editBtn) {
    editBtn.onclick = () => showEditForm();
  }
}

function showEditForm() {
  showState('rsvp-form-wrap');
  goToStep(1);
}

// ========================
// SUBMIT
// ========================
async function submitRsvp() {
  if (!guestToken) return;

  const submitBtn = el('rsvp-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = t('rsvp_saving');
  }

  const attending = getRadio('attending');

  if (attending === null) {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = t('rsvp_submit');
    }
    goToStep(1);
    return;
  }

  const extraGuests = getExtraGuests();
  const shuttleVal = getRadio('shuttle');
  const payload = {
    is_attending: attending === 'yes' ? true : attending === 'no' ? false : null,
    plus_one_confirmed: extraGuests.length > 0,
    plus_one_name: extraGuests.length > 0 ? JSON.stringify(extraGuests) : null,
    phone: el('rsvp-phone').value.trim() || null,
    email: el('rsvp-email').value.trim() || null,
    arrival_day: el('rsvp-arrival').value || null,
    notes: el('rsvp-notes').value.trim() || null,
    event_selections: {
      ...getEventSelections(),
      _shuttle_interest: shuttleVal === 'yes' ? true : shuttleVal === 'no' ? false : null,
      _accommodation_type: getRadio('accommodation') || null,
    },
  };

  try {
    await dbUpdate(guestToken, payload);
    showSuccess(payload.is_attending);
  } catch (err) {
    console.error('RSVP submit error:', err);
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = t('rsvp_submit');
    }
    alert(t('rsvp_error'));
  }
}

// ========================
// INIT RSVP
// ========================
async function initRsvp() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('t') || params.get('token');

  if (!token) {
    showState('rsvp-no-token');
    return;
  }

  if (!isConfigured()) {
    showState('rsvp-no-token');
    const noToken = el('rsvp-no-token');
    if (noToken) {
      noToken.querySelector('h3').setAttribute('data-override', 'true');
      noToken.querySelector('h3').textContent = '🔧 RSVP en construcción';
      const p = noToken.querySelector('p');
      if (p) p.textContent = 'El sistema de confirmación estará disponible muy pronto.';
    }
    return;
  }

  showState('rsvp-loading');

  try {
    guestToken = token;
    guestData = await dbGet(token);

    if (!guestData) {
      showState('rsvp-no-token');
      const noToken = el('rsvp-no-token');
      if (noToken) {
        const p = noToken.querySelector('p');
        if (p) p.textContent = t('rsvp_not_found');
      }
      return;
    }

    if (guestData.is_attending !== null) {
      showSuccess(guestData.is_attending);
      prefillForm(guestData);
      return;
    }

    showState('rsvp-form-wrap');
    goToStep(1);
    prefillForm(guestData);

  } catch (err) {
    console.error('RSVP load error:', err);
    showState('rsvp-no-token');
    const noToken = el('rsvp-no-token');
    if (noToken) {
      const p = noToken.querySelector('p');
      if (p) p.textContent = t('rsvp_error');
    }
  }
}

// ========================
// INIT STEPPER NAV
// ========================
function initRsvpSubmit() {
  // Step 1 → next
  el('step-next-1')?.addEventListener('click', () => {
    const attending = getRadio('attending');
    if (attending === null) return;
    if (attending === 'no') {
      submitRsvp();
      return;
    }
    renderEventSteps();
    goToStep(2);
  });

  // Step 2 → back
  el('step-back-2')?.addEventListener('click', () => goToStep(1));

  // Step 2 → next
  el('step-next-2')?.addEventListener('click', () => goToStep(3));

  // Step 3 → back
  el('step-back-3')?.addEventListener('click', () => goToStep(2));

  // Step 3 → submit
  el('rsvp-submit-btn')?.addEventListener('click', () => submitRsvp());
}

// Called by setLang to refresh dynamic labels
function updateRsvpLang() {
  const greeting = el('rsvp-greeting');
  if (greeting && guestData) {
    greeting.innerHTML = `${t('rsvp_greeting_prefix')} <span></span> 👋`;
    greeting.querySelector('span').textContent = guestData.name;
  }
  const label = el('step-label');
  if (label) label.textContent = t('rsvp_step_of').replace('{n}', currentStep);

  // Re-render event cards if steps 2 or 3 are visible
  const step2 = el('step-2');
  const step3 = el('step-3');
  if ((step2 && !step2.classList.contains('hidden')) || (step3 && !step3.classList.contains('hidden'))) {
    renderEventSteps();
  }

  const submitBtn = el('rsvp-submit-btn');
  if (submitBtn && !submitBtn.disabled) {
    submitBtn.textContent = t('rsvp_submit');
  }
}
