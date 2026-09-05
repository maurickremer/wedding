// day_index: 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun
// type: "suggested" | "optional" | "included" | "paid" | "wedding"
// rsvpKey: string — events with this field are tracked in the RSVP form
const AGENDA = [
  {
    dateNum: 22, dayIndex: 0,
    locationEs: "Denver", locationEn: "Denver",
    sublocationEs: "Rhino Arts District", sublocationEn: "Rhino Arts District",
    isWeddingDay: false,
    events: [
      { type: "suggested", icon: "✈️", titleEs: "Llegada a Colorado", titleEn: "Arrival to Colorado" },
      {
        type: "paid", icon: "🍺", rsvpKey: "coors",
        titleEs: "Coors Brewery Tour", titleEn: "Coors Brewery Tour",
        descEs: "10am–4pm · $25 por persona · Reservar con anticipación para grupos",
        descEn: "10am–4pm · $25/person · Book ahead for groups",
        linkLabel: "avalanchetix.com/group-experiences",
        linkUrl: "https://www.avalanchetix.com/group-experiences",
      },
      {
        type: "suggested", icon: "🍕",
        titleEs: "Cena grupal", titleEn: "Group dinner",
        descEs: "Lugar a confirmar", descEn: "Venue TBD",
      },
    ],
  },
  {
    dateNum: 23, dayIndex: 1,
    locationEs: "Denver", locationEn: "Denver",
    sublocationEs: "Rhino Arts District", sublocationEn: "Rhino Arts District",
    isWeddingDay: false,
    events: [
      { type: "suggested", icon: "☕", titleEs: "Brunch", titleEn: "Brunch", descEs: "Lugar a confirmar", descEn: "Venue TBD" },
      { type: "optional", icon: "🎸", rsvpKey: "red_rocks", titleEs: "Concierto en Red Rocks", titleEn: "Red Rocks Concert" },
      { type: "optional", icon: "🍺", titleEs: "Tour Brewery Odell", titleEn: "Odell Brewery Tour" },
      { type: "optional", icon: "🎨", titleEs: "Meow Wolf (arte surrealista)", titleEn: "Meow Wolf (surrealist art)" },
      { type: "optional", icon: "🖼️", titleEs: "Denver Art Museum", titleEn: "Denver Art Museum" },
      {
        type: "paid", icon: "🏒", rsvpKey: "avalanche",
        titleEs: "Avalanche vs Mammoth", titleEn: "Avalanche vs Mammoth",
        descEs: "Partido grupal · Noche · Costo aprox. $30–60 por persona",
        descEn: "Group game · Evening · Approx. $30–60/person",
        linkLabel: "avalanchetix.com/group-experiences",
        linkUrl: "https://www.avalanchetix.com/group-experiences",
      },
    ],
  },
  {
    dateNum: 24, dayIndex: 2,
    locationEs: "Denver → Leadville", locationEn: "Denver → Leadville",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: false,
    events: [
      {
        type: "suggested", icon: "🚗",
        titleEs: "Viaje a Leadville", titleEn: "Drive to Leadville",
        descEs: "~2hs desde Denver. Los que quieran adelantarse a explorar, bienvenidos.",
        descEn: "~2hrs from Denver. Early birds welcome.",
      },
      {
        type: "suggested", icon: "🏔️",
        titleEs: "Paradas en el camino", titleEn: "Stops along the way",
        descEs: "Frisco (almuerzo) · Blackhawk Casino · Indian Hot Springs · Dillon Dam Brewery",
        descEn: "Frisco (lunch) · Blackhawk Casino · Indian Hot Springs · Dillon Dam Brewery",
      },
      {
        type: "suggested", icon: "🍽️",
        titleEs: "Cena grupal", titleEn: "Group dinner",
        descEs: "Lugar a confirmar", descEn: "Venue TBD",
      },
    ],
  },
  {
    dateNum: 25, dayIndex: 3,
    locationEs: "Leadville", locationEn: "Leadville",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: false,
    events: [
      {
        type: "optional", icon: "⛷️", rsvpKey: "actividades_nieve",
        titleEs: "Actividades en la nieve", titleEn: "Snow activities",
        descEs: "Ski · Cross Country Skiing (Nordic Center) · Tubing · Snowmobile · Snow Mushing",
        descEn: "Skiing · Cross Country (Nordic Center) · Tubing · Snowmobile · Snow Mushing",
      },
      {
        type: "optional", icon: "🏔️",
        titleEs: "Explorar Leadville", titleEn: "Explore Leadville",
        descEs: "Leadville Mining Museum · centro histórico",
        descEn: "Leadville Mining Museum · historic downtown",
      },
      {
        type: "optional", icon: "🎉", rsvpKey: "fiesta_argenta",
        titleEs: "Fiesta argenta", titleEn: "Argentinian party",
        descEs: "Para 80 personas · Noche", descEn: "80 guests · Evening",
      },
    ],
  },
  {
    dateNum: 26, dayIndex: 4,
    locationEs: "Leadville", locationEn: "Leadville",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: false,
    events: [
      {
        type: "included", icon: "🚂", rsvpKey: "tren_nieve",
        titleEs: "Tren en la nieve", titleEn: "Snow train ride",
        descEs: "1:30 PM – 3:30 PM", descEn: "1:30 PM – 3:30 PM",
        linkLabel: "leadvillerailroad.com",
        linkUrl: "https://leadvillerailroad.com/",
      },
      {
        type: "suggested", icon: "💍",
        titleEs: "Ensayo de la ceremonia", titleEn: "Wedding rehearsal",
        descEs: "4:00 PM · Solo cortejo nupcial", descEn: "4:00 PM · Wedding party only",
      },
      {
        type: "included", icon: "🍷", rsvpKey: "cena_grupal",
        titleEs: "Cena grupal", titleEn: "Group dinner",
        descEs: "Lugar a confirmar", descEn: "Venue TBD",
      },
    ],
  },
  {
    dateNum: 27, dayIndex: 5,
    locationEs: "Leadville", locationEn: "Leadville",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: true,
    events: [
      {
        type: "optional", icon: "🎣", rsvpKey: "ice_fishing",
        titleEs: "Ice Fishing (Mauri y los chicos)", titleEn: "Ice Fishing (Mauri & the guys)",
        descEs: "Mañana", descEn: "Morning",
        linkLabel: "leadville.com",
        linkUrl: "https://leadville.com/baby-its-cold-outside-ice-fishing-in-leadville/",
      },
      { type: "wedding", icon: "💒", titleEs: "La boda", titleEn: "The Wedding" },
    ],
  },
  {
    dateNum: 28, dayIndex: 6,
    locationEs: "Denver", locationEn: "Denver",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: false,
    events: [
      {
        type: "optional", icon: "🥂", rsvpKey: "brunch",
        titleEs: "Brunch con los novios", titleEn: "Brunch with the couple",
        descEs: "Freight o centro de Leadville", descEn: "Freight or downtown Leadville",
      },
      { type: "suggested", icon: "🚗", titleEs: "Regreso a Denver", titleEn: "Return to Denver" },
      { type: "suggested", icon: "✈️", titleEs: "Vuelos (solo de noche)", titleEn: "Flights home (evening only)" },
    ],
  },
  {
    dateNum: 29, dayIndex: 0,
    locationEs: "—", locationEn: "—",
    sublocationEs: null, sublocationEn: null,
    isWeddingDay: false,
    events: [
      {
        type: "suggested", icon: "✈️",
        titleEs: "Últimas salidas", titleEn: "Last departures",
        descEs: "Buen viaje a todos 💙", descEn: "Safe travels everyone 💙",
      },
    ],
  },
];
