const LANG = {
  es: {
    nav_agenda: "Agenda",
    nav_info: "Info",
    nav_accomm: "Alojamiento",
    nav_rsvp: "RSVP",
    nav_faq: "Preguntas",

    hero_location: "Leadville, Colorado · 3.000 msnm",
    hero_tagline: '"Los trajimos desde todos lados de las Américas… para congelarse juntos a 3.000 metros. De nada."',
    hero_cta: "Confirmar asistencia",

    agenda_title: "La semana",
    agenda_subtitle: "Lunes 22 al lunes 29 de marzo, 2027",
    badge_suggested: "Para todos",
    badge_optional: "☑️ Opcional",
    badge_included: "✅ Incluido",
    badge_paid: "💳 Requiere reserva",

    day_names: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo","Lunes"],
    month_name: "marzo",

    accomm_title: "Alojamiento",
    accomm_subtitle: "Leadville es un pueblo pequeño — reservá cuanto antes",

    info_title: "Info práctica",
    info_tab_travel: "Cómo llegar",
    info_tab_altitude: "La altura",
    info_tab_packing: "Qué traer",
    info_tab_dress: "Vestimenta",

    rsvp_title: "¿Venís?",
    rsvp_subtitle: "Confirmá tu asistencia antes del 15 de febrero de 2027",
    rsvp_greeting_prefix: "Hola,",
    rsvp_attending_label: "¿Vas a la boda?",
    rsvp_yes: "¡Sí, voy! 🎉",
    rsvp_no: "No puedo ir",
    rsvp_extra_guests_label: "¿Venís con alguien más?",
    rsvp_extra_guests_hint: "Agregá los nombres de acompañantes o hijos que vienen con vos.",
    rsvp_add_guest: "+ Agregar persona",
    rsvp_guest_name_ph: "Nombre completo",
    rsvp_arrival_label: "Llegada a Colorado",
    rsvp_shuttle_label: "¿Te interesa un transfer grupal privado? (sin necesidad de alquilar auto ni hacer carpool)",
    rsvp_shuttle_yes: "Sí, me interesa",
    rsvp_shuttle_no: "No, gracias",
    rsvp_accomm_label: "¿Qué tipo de alojamiento preferís?",
    rsvp_accomm_hotel: "🏨 Hotel individual (ver recomendaciones en el sitio)",
    rsvp_accomm_group: "🏠 Casa grupal (los armaremos con personas cercanas)",
    rsvp_phone_label: "Celular",
    rsvp_phone_ph: "+54 11 xxxx-xxxx",
    rsvp_email_label: "Email",
    rsvp_email_ph: "vos@email.com",
    rsvp_notes_label: "Restricciones alimentarias u otras notas",
    rsvp_notes_ph: "Celíaco, vegetariano, alergias... (opcional)",
    rsvp_next: "Siguiente →",
    rsvp_back: "← Atrás",
    rsvp_submit: "Confirmar",
    rsvp_saving: "Guardando…",
    rsvp_edit: "Editar mi respuesta",
    rsvp_step_of: "Paso {n} de 3",
    rsvp_included_intro: "Estas actividades ya están organizadas y pagas. ¿Vas a estar?",
    rsvp_activities_intro: "¿Te sumás a algo más durante la semana?",
    ev_going: "Sí, voy",
    ev_not_going: "No voy a poder",
    ev_joining: "Me sumo",
    ev_skipping: "Paso",
    ev_optional_section: "Opcionales",
    ev_paid_section: "Requieren reserva",
    ev_paid_note: "Si te sumás, coordinamos pago y reserva por separado.",
    rsvp_success_title: "¡Gracias!",
    rsvp_success_msg: "Tu confirmación fue registrada. ¡Nos vemos en Leadville!",
    rsvp_success_update: "Podés actualizar tu respuesta en cualquier momento usando tu link personal.",
    rsvp_declined_title: "Gracias por avisarnos",
    rsvp_declined_msg: "Lamentamos que no puedas venir. ¡Te vamos a extrañar!",
    rsvp_no_token_title: "Necesitás tu link personal",
    rsvp_no_token_msg: "Para confirmar tu asistencia usá el link que Sara o Mauricio te enviaron. Si no lo tenés, escribinos.",
    rsvp_loading: "Cargando tu información…",
    rsvp_error: "Algo salió mal. Por favor intentá de nuevo.",
    rsvp_not_found: "No encontramos tu información. Verificá el link o escribinos.",

    faq_title: "Preguntas frecuentes",
    faqs: [
      { q: "¿Dónde me alojo en Leadville?", a: "Mirá la sección <strong>Alojamiento</strong> en este sitio para todos los detalles. Negociamos precios especiales con Freight Hotel (cabañas en el predio de la boda) y Delaware Hotel. Si preferís una casa, vamos a armar grupos — indicalo en tu RSVP." },
      { q: "¿Necesito alquilar un auto?", a: "Sí, es muy recomendable. Leadville está a ~2 horas de Denver por la I-70 y no hay transporte público. Si van varios del mismo lugar, coordinen un auto compartido para reducir costos. También estamos viendo la posibilidad de un transfer grupal: si preferís no alquilar auto, marcalo en tu RSVP." },
      { q: "¿Qué pasa si me marea la altura? ¿Es peligroso?", a: "Leadville está a 3.094 msnm (10.152 ft), la ciudad más alta de los EE.UU. Es muy normal sentir cansancio, leve dolor de cabeza o sed el primer día. Recomendamos: llegar uno o dos días antes, hidratarse mucho (nada de alcohol el primer día), descansar, y tener ibuprofeno a mano. Si tenés condiciones cardíacas o respiratorias, consultá a tu médico antes del viaje." },
      { q: "¿Hay transporte organizado entre eventos?", a: "Sí, vamos a coordinar traslados entre los eventos principales de la semana. Más detalles próximamente." },
      { q: "¿Puedo llevar niños?", a: "¡Sí! Los chicos son bienvenidos en todas las actividades de la semana. Si en algún momento necesitás una niñera, avisanos y te ayudamos con recomendaciones." },
      { q: "¿Cuándo es el deadline del RSVP?", a: "15 de febrero de 2027. Igual, podés actualizar tu respuesta en cualquier momento con tu link personal si cambian tus planes. ¡Mientras más rápido mejor para organizar todo!" },
      { q: "¿Qué es exactamente 'Alpine Patagonian Chic'?", a: "Es el look perfecto para una boda a 3.000 metros en marzo: elegante pero con abrigo real. La ceremonia es afuera (en la nieve), la recepción adentro en un salón calefaccionado, así que el look bajo el abrigo también tiene que verse bien. Pensá en capas sofisticadas: abrigo de lana + blazer + sweater de cashmere + botas de cuero. No jeans, no stilettos, no calzas. Colores: verde bosque, borgoña, navy, camel, gris, tonos tierra. Mirá fotos de ejemplo en la sección de Vestimenta." },
    ],
  },

  en: {
    nav_agenda: "Schedule",
    nav_info: "Info",
    nav_accomm: "Where to Stay",
    nav_rsvp: "RSVP",
    nav_faq: "FAQ",

    hero_location: "Leadville, Colorado · 10,000 ft",
    hero_tagline: '"We flew you in from across the Americas… to freeze together at 10,000 ft. You\'re welcome."',
    hero_cta: "RSVP Now",

    agenda_title: "The Week",
    agenda_subtitle: "Monday March 22 to Monday March 29, 2027",
    badge_suggested: "For everyone",
    badge_optional: "☑️ Optional",
    badge_included: "✅ Included",
    badge_paid: "💳 Requires reservation",

    day_names: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"],
    month_name: "March",

    accomm_title: "Accommodation",
    accomm_subtitle: "Leadville is a small mountain town — book as early as possible",

    info_title: "Practical Info",
    info_tab_travel: "Getting There",
    info_tab_altitude: "The Altitude",
    info_tab_packing: "What to Pack",
    info_tab_dress: "Dress Code",

    rsvp_title: "Are you coming?",
    rsvp_subtitle: "Please RSVP by February 15, 2027",
    rsvp_greeting_prefix: "Hi,",
    rsvp_attending_label: "Will you be at the wedding?",
    rsvp_yes: "Yes, I'll be there! 🎉",
    rsvp_no: "I can't make it",
    rsvp_extra_guests_label: "Are you bringing anyone?",
    rsvp_extra_guests_hint: "Add the names of any companions or children coming with you.",
    rsvp_add_guest: "+ Add person",
    rsvp_guest_name_ph: "Full name",
    rsvp_arrival_label: "Arrival in Colorado",
    rsvp_shuttle_label: "Are you interested in a private group transfer? (no need to rent a car or carpool)",
    rsvp_shuttle_yes: "Yes, I'm interested",
    rsvp_shuttle_no: "No, thanks",
    rsvp_accomm_label: "What type of accommodation do you prefer?",
    rsvp_accomm_hotel: "🏨 Individual hotel (see recommendations on site)",
    rsvp_accomm_group: "🏠 Group house (we'll arrange groups with close friends)",
    rsvp_phone_label: "Phone",
    rsvp_phone_ph: "+1 (555) 000-0000",
    rsvp_email_label: "Email",
    rsvp_email_ph: "you@email.com",
    rsvp_notes_label: "Dietary restrictions or other notes",
    rsvp_notes_ph: "Vegetarian, gluten-free, allergies... (optional)",
    rsvp_next: "Next →",
    rsvp_back: "← Back",
    rsvp_submit: "Confirm RSVP",
    rsvp_saving: "Saving…",
    rsvp_edit: "Edit my RSVP",
    rsvp_step_of: "Step {n} of 3",
    rsvp_included_intro: "These activities are already organized and paid for. Will you be there?",
    rsvp_activities_intro: "Want to join anything else during the week?",
    ev_going: "I'll be there",
    ev_not_going: "Can't make it",
    ev_joining: "I'm in",
    ev_skipping: "Skip",
    ev_optional_section: "Optional",
    ev_paid_section: "Require reservation",
    ev_paid_note: "If you join, we'll coordinate payment and booking separately.",
    rsvp_success_title: "Thank you!",
    rsvp_success_msg: "Your RSVP has been saved. See you in Leadville!",
    rsvp_success_update: "You can update your RSVP anytime using your personal link.",
    rsvp_declined_title: "Thanks for letting us know",
    rsvp_declined_msg: "Sorry you can't make it, we'll miss you!",
    rsvp_no_token_title: "You need your personal link",
    rsvp_no_token_msg: "To RSVP, use the link Sara or Mauricio sent you. Can't find it? Reach out to us.",
    rsvp_loading: "Loading your info…",
    rsvp_error: "Something went wrong. Please try again.",
    rsvp_not_found: "We couldn't find your information. Check your link or reach out to us.",

    faq_title: "FAQ",
    faqs: [
      { q: "Where do I stay in Leadville?", a: "Check the <strong>Accommodation</strong> section on this site for full details. We negotiated special rates at Freight Hotel (cabins right at the wedding venue) and the Delaware Hotel. If you'd prefer a house, we'll coordinate groups — just note it in your RSVP." },
      { q: "Do I need a rental car?", a: "Yes, strongly recommended. Leadville is ~2 hours from Denver on I-70 with no public transport. If several of you are coming from the same place, coordinate a carpool to save on costs. We're also looking into a group transfer option: if you'd prefer not to rent a car, note it in your RSVP." },
      { q: "What about altitude sickness?", a: "Leadville sits at 10,152 ft (3,094m), the highest city in the US. Mild fatigue, headaches, and thirst on day one are completely normal. Recommendations: arrive a day or two early, drink lots of water (avoid alcohol day one), rest, and keep ibuprofen handy. If you have heart or lung conditions, consult your doctor before traveling." },
      { q: "Is there organized transport between events?", a: "Yes, we'll be coordinating transfers between the main events of the week. More details to come closer to the date." },
      { q: "Can I bring kids?", a: "Yes! Kids are welcome at all activities throughout the week. If you need a babysitter at any point, just reach out and we'll help with recommendations." },
      { q: "When is the RSVP deadline?", a: "February 15, 2027. But you can update your RSVP anytime using your personal link if plans change. Earlier is better for our planning!" },
      { q: "What exactly is 'Alpine Patagonian Chic'?", a: "The perfect look for a 10,000 ft wedding in March: elegant but actually warm. The ceremony is outside (in the snow) and the reception is indoors in a heated hall, so your outfit under the coat needs to look great too. Think sophisticated layers: wool coat + blazer + cashmere sweater + leather boots. No jeans, no stilettos, no leggings. Colors: forest green, burgundy, navy, camel, charcoal, earth tones. See photo examples in the Dress Code tab." },
    ],
  },
};

let currentLang = 'es';

function t(key) {
  return LANG[currentLang][key] !== undefined ? LANG[currentLang][key] : (LANG['es'][key] || key);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('wedding-lang', lang);
  document.documentElement.lang = lang;

  // Static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = LANG[lang][key];
    if (val !== undefined && typeof val === 'string') el.textContent = val;
  });

  // data-i18n-placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = LANG[lang][key];
    if (val) el.placeholder = val;
  });

  // Lang-specific content blocks
  document.querySelectorAll('.lang-es').forEach(el => el.classList.toggle('hidden', lang === 'en'));
  document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden', lang === 'es'));

  // Update lang toggle highlight
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.querySelector('.l-es').className = lang === 'es' ? 'l-es lang-active' : 'l-es lang-inactive';
    toggle.querySelector('.l-en').className = lang === 'en' ? 'l-en lang-active' : 'l-en lang-inactive';
  }

  // Re-render dynamic JS content
  if (typeof renderAgenda === 'function') renderAgenda();
  if (typeof renderFaq === 'function') renderFaq();
  if (typeof updateRsvpLang === 'function') updateRsvpLang();
}

function initLang() {
  const saved = localStorage.getItem('wedding-lang');
  const browser = navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';
  setLang(saved || browser);
}
