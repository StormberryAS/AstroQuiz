// AstroQuiz question bank — 100 questions across three difficulty tiers.
// British English. Each question has: id, question, options, answer (index
// into options), explanation, difficulty (easy|medium|hard), topic.
//
// Add new questions by appending an object with a fresh id. Keep ids unique
// because the app uses them to remember which questions have been seen.

export const questions = [
  {
    id: 1,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1,
    explanation: "Saturn overtook Jupiter as the planet with the most moons in our Solar System and now has over 140 confirmed natural satellites.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 2,
    question: "What is the closest star to Earth?",
    options: ["Proxima Centauri", "Sirius", "The Sun", "Betelgeuse"],
    answer: 2,
    explanation: "The Sun is the closest star to Earth, at an average distance of roughly 150 million kilometres (one astronomical unit).",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 3,
    question: "What is the hottest planet in our Solar System?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1,
    explanation: "Although Mercury sits closer to the Sun, Venus is hotter because its thick carbon-dioxide atmosphere drives a runaway greenhouse effect.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 4,
    question: "What causes the phases of the Moon?",
    options: ["Earth's shadow falling on the Moon", "The Moon's rotation on its axis", "The changing angle of sunlight reflecting off the Moon as it orbits Earth", "Clouds blocking the Moon"],
    answer: 2,
    explanation: "Moon phases are caused by the changing angle from which we see the sunlit portion of the Moon as it orbits Earth.",
    difficulty: "easy",
    topic: "Phenomena"
  },
  {
    id: 5,
    question: "What is the largest moon in the Solar System?",
    options: ["Titan", "Ganymede", "Callisto", "Europa"],
    answer: 1,
    explanation: "Jupiter's moon Ganymede is the largest in the Solar System; it is even bigger than the planet Mercury.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 6,
    question: "Which of these is not a recognised type of galaxy?",
    options: ["Spiral", "Elliptical", "Irregular", "Triangular"],
    answer: 3,
    explanation: "Galaxies are commonly classified as spiral, elliptical or irregular, with lenticular as a fourth category. There is no 'triangular' class.",
    difficulty: "easy",
    topic: "Galaxies"
  },
  {
    id: 7,
    question: "What marks the boundary around a black hole beyond which nothing can escape?",
    options: ["Event horizon", "Accretion disk", "Singularity", "Photon sphere"],
    answer: 0,
    explanation: "The event horizon is the boundary of a black hole; once you cross it, not even light can escape.",
    difficulty: "medium",
    topic: "Physics"
  },
  {
    id: 8,
    question: "How long does sunlight take to reach Earth on average?",
    options: ["1 second", "8 minutes", "1 hour", "24 hours"],
    answer: 1,
    explanation: "Sunlight takes about 8 minutes and 20 seconds to travel the 150 million kilometres from the Sun to Earth.",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 9,
    question: "What was the name of the first artificial Earth satellite?",
    options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"],
    answer: 2,
    explanation: "Sputnik 1 was launched by the Soviet Union on 4 October 1957, opening the Space Age.",
    difficulty: "easy",
    topic: "Space missions"
  },
  {
    id: 10,
    question: "Which constellation contains the North Star, Polaris?",
    options: ["Ursa Major", "Ursa Minor", "Orion", "Cassiopeia"],
    answer: 1,
    explanation: "Polaris sits at the end of the handle of the Little Dipper asterism, which forms part of the constellation Ursa Minor.",
    difficulty: "medium",
    topic: "Constellations"
  },
  {
    id: 11,
    question: "Which is the smallest planet in our Solar System?",
    options: ["Mars", "Mercury", "Pluto", "Venus"],
    answer: 1,
    explanation: "Mercury is the smallest of the eight planets, with a diameter of about 4,880 kilometres. Pluto is smaller still but is now classified as a dwarf planet.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 12,
    question: "Which is the largest planet in our Solar System?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    answer: 1,
    explanation: "Jupiter is the largest planet, with a mass greater than all the other planets combined.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 13,
    question: "Which planet is famous for its prominent ring system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1,
    explanation: "All four gas giants have rings, but Saturn's are by far the brightest and most visible, made mainly of water ice.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 14,
    question: "Why does Mars appear red?",
    options: ["It is extremely hot", "Its surface contains iron oxide (rust)", "It reflects red light from the Sun", "It is covered in red vegetation"],
    answer: 1,
    explanation: "The reddish hue of Mars comes from iron oxide, essentially rust, that covers much of its surface.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 15,
    question: "How many natural satellites does Earth have?",
    options: ["0", "1", "2", "4"],
    answer: 1,
    explanation: "Earth has one natural satellite, the Moon. Several small quasi-satellites and trojans share Earth's orbit but are not true moons.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 16,
    question: "How is Pluto currently classified?",
    options: ["Planet", "Dwarf planet", "Asteroid", "Moon"],
    answer: 1,
    explanation: "In 2006 the International Astronomical Union reclassified Pluto as a dwarf planet.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 17,
    question: "What type of galaxy is the Milky Way?",
    options: ["Spiral", "Elliptical", "Irregular", "Lenticular"],
    answer: 0,
    explanation: "The Milky Way is a barred spiral galaxy with several major arms wrapping around a central bar.",
    difficulty: "easy",
    topic: "Galaxies"
  },
  {
    id: 18,
    question: "What spectral class of star is the Sun?",
    options: ["Red giant", "Yellow dwarf (G-type)", "White dwarf", "Neutron star"],
    answer: 1,
    explanation: "The Sun is a G-type main-sequence star, often called a yellow dwarf, currently about halfway through its hydrogen-burning life.",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 19,
    question: "A light year is a measure of what?",
    options: ["Time", "Speed", "Distance", "Mass"],
    answer: 2,
    explanation: "A light year is the distance light travels in one year, roughly 9.46 trillion kilometres.",
    difficulty: "easy",
    topic: "Physics"
  },
  {
    id: 20,
    question: "How many planets are in our Solar System?",
    options: ["7", "8", "9", "10"],
    answer: 1,
    explanation: "There are eight planets since Pluto was reclassified as a dwarf planet in 2006.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 21,
    question: "How many moons does Mars have?",
    options: ["0", "1", "2", "4"],
    answer: 2,
    explanation: "Mars has two small moons: Phobos and Deimos, both probably captured asteroids.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 22,
    question: "What is the Sun's primary fuel?",
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    answer: 2,
    explanation: "The Sun fuses hydrogen into helium in its core. Helium fusion only starts much later in a star's life.",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 23,
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    answer: 2,
    explanation: "Mercury is the closest planet to the Sun, orbiting at an average distance of about 58 million kilometres.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 24,
    question: "Which is the outermost planet in our Solar System?",
    options: ["Pluto", "Uranus", "Neptune", "Saturn"],
    answer: 2,
    explanation: "Neptune is the eighth and outermost planet since Pluto's reclassification.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 25,
    question: "Which galaxy do we live in?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
    answer: 1,
    explanation: "Our Sun is one of an estimated 100 to 400 billion stars in the Milky Way galaxy.",
    difficulty: "easy",
    topic: "Galaxies"
  },
  {
    id: 26,
    question: "Which is the closest large galaxy to the Milky Way?",
    options: ["Triangulum", "Andromeda", "Whirlpool", "Large Magellanic Cloud"],
    answer: 1,
    explanation: "The Andromeda Galaxy (M31) is the closest large spiral galaxy, about 2.5 million light years away.",
    difficulty: "easy",
    topic: "Galaxies"
  },
  {
    id: 27,
    question: "What is the largest object in our Solar System?",
    options: ["Jupiter", "The Sun", "Saturn", "Earth"],
    answer: 1,
    explanation: "The Sun contains more than 99.8% of the Solar System's total mass.",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 28,
    question: "What are Saturn's rings primarily made of?",
    options: ["Rock", "Water ice", "Gas", "Dust"],
    answer: 1,
    explanation: "Saturn's rings are mostly water ice with smaller amounts of rocky debris, ranging from grain-sized particles to house-sized chunks.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 29,
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    answer: 1,
    explanation: "Neil Armstrong stepped onto the lunar surface on 20 July 1969 during the Apollo 11 mission, followed shortly after by Buzz Aldrin.",
    difficulty: "easy",
    topic: "Space missions"
  },
  {
    id: 30,
    question: "Who was the first human to travel into outer space?",
    options: ["Alan Shepard", "Yuri Gagarin", "John Glenn", "Neil Armstrong"],
    answer: 1,
    explanation: "Soviet cosmonaut Yuri Gagarin completed one orbit around Earth on 12 April 1961 aboard Vostok 1.",
    difficulty: "easy",
    topic: "Space missions"
  },
  {
    id: 31,
    question: "In what year did humans first land on the Moon?",
    options: ["1957", "1965", "1969", "1972"],
    answer: 2,
    explanation: "The Apollo 11 lunar module landed on 20 July 1969. The last crewed Moon landing to date was Apollo 17 in 1972.",
    difficulty: "easy",
    topic: "Space missions"
  },
  {
    id: 32,
    question: "Where does the International Space Station orbit?",
    options: ["Around the Sun", "Around the Moon", "Around Earth", "Around Mars"],
    answer: 2,
    explanation: "The ISS orbits Earth at an average altitude of about 400 kilometres and completes one orbit roughly every 90 minutes.",
    difficulty: "easy",
    topic: "Space missions"
  },
  {
    id: 33,
    question: "Where is the main asteroid belt located?",
    options: ["Between Earth and Mars", "Between Mars and Jupiter", "Between Jupiter and Saturn", "Between Venus and Earth"],
    answer: 1,
    explanation: "The main asteroid belt lies between the orbits of Mars and Jupiter and contains millions of rocky bodies.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 34,
    question: "Orion's Belt is part of which constellation?",
    options: ["Taurus", "Orion", "Gemini", "Cassiopeia"],
    answer: 1,
    explanation: "The three-star belt is the most famous feature of the constellation Orion, the Hunter.",
    difficulty: "easy",
    topic: "Constellations"
  },
  {
    id: 35,
    question: "What is the faint band of light that crosses the night sky?",
    options: ["The zodiac", "The Milky Way", "The celestial equator", "The ecliptic"],
    answer: 1,
    explanation: "The band is the combined light of billions of stars in the disk of our own Milky Way galaxy, seen edge-on from inside.",
    difficulty: "easy",
    topic: "Constellations"
  },
  {
    id: 36,
    question: "A 'shooting star' is actually what?",
    options: ["A comet", "A meteor", "A satellite", "A planet"],
    answer: 1,
    explanation: "A shooting star is a meteor, a small piece of debris burning up as it enters Earth's atmosphere.",
    difficulty: "easy",
    topic: "Phenomena"
  },
  {
    id: 37,
    question: "Which type of object grows a long tail when it approaches the Sun?",
    options: ["Asteroid", "Meteor", "Comet", "Dwarf planet"],
    answer: 2,
    explanation: "Comets are icy bodies that develop tails of gas and dust when solar heat vaporises their surface material.",
    difficulty: "easy",
    topic: "Solar System"
  },
  {
    id: 38,
    question: "What shape do planetary orbits actually trace?",
    options: ["Perfect circle", "Square", "Ellipse", "Spiral"],
    answer: 2,
    explanation: "Kepler's first law states that planets move in elliptical orbits with the Sun at one focus.",
    difficulty: "easy",
    topic: "Physics"
  },
  {
    id: 39,
    question: "The colour of a star primarily indicates its what?",
    options: ["Age", "Surface temperature", "Distance from Earth", "Total mass"],
    answer: 1,
    explanation: "Blue stars are hottest, red are coolest. Mass and age influence colour indirectly through their effect on surface temperature.",
    difficulty: "easy",
    topic: "Stars"
  },
  {
    id: 40,
    question: "Which Moon phase occurs when the Moon sits between the Sun and Earth?",
    options: ["Full moon", "New moon", "First quarter", "Waning crescent"],
    answer: 1,
    explanation: "At new moon the Moon is between Sun and Earth, so the side facing us is unlit. This is also when solar eclipses can occur.",
    difficulty: "easy",
    topic: "Phenomena"
  },
  {
    id: 41,
    question: "What primarily causes Earth's ocean tides?",
    options: ["Atmospheric pressure", "Earth's rotation alone", "The Moon's gravitational pull", "Solar wind"],
    answer: 2,
    explanation: "Tides are mostly produced by the Moon's gravity, with the Sun contributing roughly a third of the tidal force.",
    difficulty: "easy",
    topic: "Phenomena"
  },
  {
    id: 42,
    question: "What happens during a total solar eclipse?",
    options: ["Earth blocks sunlight from reaching the Moon", "The Moon passes between Sun and Earth and blocks the Sun", "The Sun passes between Earth and the Moon", "The Earth's atmosphere darkens"],
    answer: 1,
    explanation: "A total solar eclipse occurs when the Moon passes directly between Sun and Earth, casting its umbral shadow on Earth's surface.",
    difficulty: "easy",
    topic: "Phenomena"
  },
  {
    id: 43,
    question: "Where is Olympus Mons, the largest known volcano in the Solar System?",
    options: ["Venus", "Mars", "The Moon", "Io"],
    answer: 1,
    explanation: "Olympus Mons sits on Mars and rises about 22 kilometres above its base, roughly 2.5 times the height of Mount Everest.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 44,
    question: "Which moon of Jupiter is thought to have a subsurface ocean of liquid water?",
    options: ["Io", "Europa", "Callisto", "Amalthea"],
    answer: 1,
    explanation: "Europa is believed to host a salty ocean beneath its icy crust, making it one of the top candidates for extraterrestrial life.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 45,
    question: "Which moon of Saturn has lakes and rivers of liquid methane?",
    options: ["Enceladus", "Titan", "Mimas", "Iapetus"],
    answer: 1,
    explanation: "Titan is the only body other than Earth known to have stable surface liquids, mostly methane and ethane at very cold temperatures.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 46,
    question: "Which planet rotates almost on its side, with an axial tilt of about 98 degrees?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 2,
    explanation: "Uranus's extreme tilt likely resulted from a giant impact early in its history; it effectively rolls along its orbit.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 47,
    question: "Where is the Kuiper Belt located?",
    options: ["Between Mars and Jupiter", "Beyond Neptune", "Inside Mercury's orbit", "Outside the Oort Cloud"],
    answer: 1,
    explanation: "The Kuiper Belt is a ring of icy bodies beyond Neptune's orbit, home to Pluto, Eris, Makemake and Haumea.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 48,
    question: "What is the Oort Cloud?",
    options: ["A nebula near the Sun", "A shell of comets at the edge of the Solar System", "A ring of asteroids near Jupiter", "A cloud on Saturn"],
    answer: 1,
    explanation: "The Oort Cloud is a hypothesised spherical shell of icy bodies extending up to a light year or more from the Sun, the suspected source of long-period comets.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 49,
    question: "Approximately how far is the Moon from Earth on average?",
    options: ["38,000 km", "384,000 km", "3.8 million km", "38 million km"],
    answer: 1,
    explanation: "The Moon orbits at an average distance of about 384,400 kilometres from Earth.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 50,
    question: "When will the Andromeda Galaxy collide with the Milky Way?",
    options: ["In about 4 billion years", "In about 100 million years", "In about 50,000 years", "It will not collide"],
    answer: 0,
    explanation: "Andromeda is moving toward the Milky Way at roughly 110 km/s and is expected to merge with it in around 4 to 4.5 billion years.",
    difficulty: "medium",
    topic: "Galaxies"
  },
  {
    id: 51,
    question: "What is the approximate speed of light in a vacuum?",
    options: ["300 km/s", "30,000 km/s", "300,000 km/s", "3,000,000 km/s"],
    answer: 2,
    explanation: "Light travels at about 299,792 kilometres per second in a vacuum, conventionally rounded to 300,000 km/s.",
    difficulty: "medium",
    topic: "Physics"
  },
  {
    id: 52,
    question: "In what year was the Hubble Space Telescope launched?",
    options: ["1981", "1990", "1998", "2003"],
    answer: 1,
    explanation: "Hubble was launched aboard the Space Shuttle Discovery on 24 April 1990 and has since transformed astronomy.",
    difficulty: "medium",
    topic: "Telescopes"
  },
  {
    id: 53,
    question: "Where does the James Webb Space Telescope (JWST) operate?",
    options: ["Low Earth orbit", "The Sun-Earth L2 Lagrange point", "Lunar orbit", "The asteroid belt"],
    answer: 1,
    explanation: "JWST orbits the Sun-Earth L2 Lagrange point, about 1.5 million kilometres from Earth, allowing its sunshield to keep its mirrors extremely cold.",
    difficulty: "medium",
    topic: "Telescopes"
  },
  {
    id: 54,
    question: "Who was the first woman in space?",
    options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Helen Sharman"],
    answer: 1,
    explanation: "Soviet cosmonaut Valentina Tereshkova orbited Earth 48 times aboard Vostok 6 in June 1963.",
    difficulty: "medium",
    topic: "Space missions"
  },
  {
    id: 55,
    question: "Which Apollo mission famously aborted its lunar landing after an oxygen tank exploded?",
    options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 17"],
    answer: 2,
    explanation: "Apollo 13's crew survived a near-disaster in April 1970 after an oxygen tank ruptured en route to the Moon.",
    difficulty: "medium",
    topic: "Space missions"
  },
  {
    id: 56,
    question: "Voyager 1 is believed to have entered interstellar space in approximately what year?",
    options: ["1989", "2002", "2012", "2020"],
    answer: 2,
    explanation: "NASA confirmed in 2013 that Voyager 1 had crossed the heliopause into interstellar space around August 2012.",
    difficulty: "medium",
    topic: "Space missions"
  },
  {
    id: 57,
    question: "What causes auroras such as the Northern Lights?",
    options: ["Reflected moonlight", "Charged particles from the Sun interacting with Earth's magnetic field and atmosphere", "Volcanic activity", "Lightning above the clouds"],
    answer: 1,
    explanation: "Solar wind particles funnel along Earth's magnetic field lines and excite atmospheric gases, producing the coloured light displays.",
    difficulty: "medium",
    topic: "Phenomena"
  },
  {
    id: 58,
    question: "What is the 'habitable zone' around a star?",
    options: ["The region of strongest stellar wind", "The orbital range where liquid water could exist on a planetary surface", "The boundary of the star's corona", "The inner edge of the asteroid belt"],
    answer: 1,
    explanation: "Also called the Goldilocks zone, it is the range of distances where temperatures could allow liquid water on a rocky planet's surface.",
    difficulty: "medium",
    topic: "Exoplanets"
  },
  {
    id: 59,
    question: "What does it mean that the Moon is tidally locked to Earth?",
    options: ["It never moves", "The same face always points toward Earth", "It always shows a full phase", "It only orbits during a tide"],
    answer: 1,
    explanation: "The Moon's rotation period equals its orbital period, so the same hemisphere always faces Earth. The 'far side' is not the 'dark side'.",
    difficulty: "medium",
    topic: "Phenomena"
  },
  {
    id: 60,
    question: "What is a Lagrange point?",
    options: ["A type of black hole", "A position where the gravity of two large bodies and orbital motion balance", "The brightest star in a constellation", "A unit of astronomical distance"],
    answer: 1,
    explanation: "Lagrange points are five positions in a two-body system (such as Sun-Earth) where a small object can sit in a stable or quasi-stable orbit.",
    difficulty: "medium",
    topic: "Physics"
  },
  {
    id: 61,
    question: "Approximately how old is the universe?",
    options: ["4.5 billion years", "13.8 billion years", "100 billion years", "Infinite"],
    answer: 1,
    explanation: "Measurements of the cosmic microwave background and the expansion rate give a universe age of about 13.8 billion years.",
    difficulty: "medium",
    topic: "Cosmology"
  },
  {
    id: 62,
    question: "What is the cosmic microwave background (CMB)?",
    options: ["Light from the nearest galaxy", "Radio noise from the Sun", "Leftover thermal radiation from the early universe", "Background light from city pollution"],
    answer: 2,
    explanation: "The CMB is the afterglow of the hot early universe, now redshifted to microwave wavelengths corresponding to about 2.7 kelvin.",
    difficulty: "medium",
    topic: "Cosmology"
  },
  {
    id: 63,
    question: "Edwin Hubble's most famous discovery established what?",
    options: ["The Moon orbits Earth", "The universe is expanding", "Black holes exist", "Pluto is a dwarf planet"],
    answer: 1,
    explanation: "Hubble showed in 1929 that distant galaxies recede at speeds proportional to their distance, evidence for cosmic expansion.",
    difficulty: "medium",
    topic: "History"
  },
  {
    id: 64,
    question: "What did Galileo Galilei first observe with his telescope around Jupiter in 1610?",
    options: ["Its rings", "Four of its moons", "The Great Red Spot", "A second Sun"],
    answer: 1,
    explanation: "Galileo discovered Io, Europa, Ganymede and Callisto, now called the Galilean moons. They were the first satellites observed around another planet.",
    difficulty: "medium",
    topic: "History"
  },
  {
    id: 65,
    question: "Who discovered Pluto in 1930?",
    options: ["Percival Lowell", "Clyde Tombaugh", "Edwin Hubble", "Carl Sagan"],
    answer: 1,
    explanation: "American astronomer Clyde Tombaugh identified Pluto from photographic plates at Lowell Observatory in February 1930.",
    difficulty: "medium",
    topic: "History"
  },
  {
    id: 66,
    question: "How often does Halley's Comet return to the inner Solar System?",
    options: ["Every 12 years", "Every 76 years", "Every 200 years", "Every 1,000 years"],
    answer: 1,
    explanation: "Halley's Comet has an orbital period of about 76 years and last reached perihelion in 1986. Its next return is around 2061.",
    difficulty: "medium",
    topic: "Solar System"
  },
  {
    id: 67,
    question: "Stars produce energy primarily through which process?",
    options: ["Chemical burning", "Nuclear fission", "Nuclear fusion", "Gravitational compression"],
    answer: 2,
    explanation: "Hydrogen nuclei fuse into helium in stellar cores, releasing the enormous energy that lights up stars including our Sun.",
    difficulty: "medium",
    topic: "Stars"
  },
  {
    id: 68,
    question: "What is the brightest star in Earth's night sky?",
    options: ["Polaris", "Vega", "Sirius", "Betelgeuse"],
    answer: 2,
    explanation: "Sirius, in the constellation Canis Major, is the brightest individual star in the night sky aside from the Sun.",
    difficulty: "medium",
    topic: "Stars"
  },
  {
    id: 69,
    question: "The Crab Nebula is the remnant of which historical event?",
    options: ["A supernova observed in 1054 CE", "A comet break-up in 1066", "The Big Bang", "A passing rogue star"],
    answer: 0,
    explanation: "Chinese and other astronomers recorded a bright 'guest star' in 1054 CE; its expanding remnant is the Crab Nebula in Taurus.",
    difficulty: "medium",
    topic: "Phenomena"
  },
  {
    id: 70,
    question: "What sits at the centre of the Milky Way?",
    options: ["A giant red star", "A supermassive black hole called Sagittarius A*", "A neutron star cluster", "The Sun"],
    answer: 1,
    explanation: "Sagittarius A* is a supermassive black hole with about 4 million times the mass of the Sun.",
    difficulty: "medium",
    topic: "Galaxies"
  },
  {
    id: 71,
    question: "The famous 'Pillars of Creation' image shows columns of gas and dust in which nebula?",
    options: ["Orion Nebula", "Crab Nebula", "Eagle Nebula", "Helix Nebula"],
    answer: 2,
    explanation: "The Pillars of Creation lie in the Eagle Nebula (M16) and are an active region of star formation, famously imaged by Hubble and JWST.",
    difficulty: "medium",
    topic: "Galaxies"
  },
  {
    id: 72,
    question: "Which space agency operates the Curiosity and Perseverance rovers on Mars?",
    options: ["ESA", "NASA", "Roscosmos", "JAXA"],
    answer: 1,
    explanation: "Both rovers are operated by NASA's Jet Propulsion Laboratory. Curiosity landed in 2012 and Perseverance in 2021.",
    difficulty: "medium",
    topic: "Space missions"
  },
  {
    id: 73,
    question: "Which planet has the longest day relative to its year?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1,
    explanation: "Venus rotates so slowly (and retrograde) that one Venusian day, about 243 Earth days, is longer than its year of 225 Earth days.",
    difficulty: "hard",
    topic: "Solar System"
  },
  {
    id: 74,
    question: "How long does Mercury take to orbit the Sun?",
    options: ["88 Earth days", "225 Earth days", "365 Earth days", "687 Earth days"],
    answer: 0,
    explanation: "Mercury races around the Sun in just 88 Earth days, the shortest orbital period of any planet.",
    difficulty: "hard",
    topic: "Solar System"
  },
  {
    id: 75,
    question: "What is unusual about Neptune's largest moon, Triton?",
    options: ["It has no atmosphere", "It orbits in the opposite direction to Neptune's rotation", "It is bigger than Neptune", "It is a captured comet"],
    answer: 1,
    explanation: "Triton's retrograde orbit strongly suggests it was a Kuiper Belt object captured by Neptune's gravity rather than a moon formed in place.",
    difficulty: "hard",
    topic: "Solar System"
  },
  {
    id: 76,
    question: "What is the order of the main stellar spectral classes from hottest to coolest?",
    options: ["A B C D E F G", "O B A F G K M", "M K G F A B O", "X Y Z A B C D"],
    answer: 1,
    explanation: "The standard Harvard spectral sequence runs O, B, A, F, G, K, M from hottest blue stars to coolest red dwarfs.",
    difficulty: "hard",
    topic: "Stars"
  },
  {
    id: 77,
    question: "Cepheid variable stars are valuable to astronomers because they serve as what?",
    options: ["Sources of dark matter", "Standard candles for measuring distance", "Markers for the galactic centre", "Time-keeping pulsars"],
    answer: 1,
    explanation: "Cepheids pulse with a period directly tied to their intrinsic brightness, so observing their pulsation period reveals their distance.",
    difficulty: "hard",
    topic: "Stars"
  },
  {
    id: 78,
    question: "What is a magnetar?",
    options: ["A magnetic asteroid", "A neutron star with an extremely powerful magnetic field", "A magnetised galaxy", "A type of solar flare"],
    answer: 1,
    explanation: "Magnetars are neutron stars whose magnetic fields can exceed 10^14 gauss, the strongest known in the universe.",
    difficulty: "hard",
    topic: "Stars"
  },
  {
    id: 79,
    question: "Gravitational lensing was first predicted by which theory?",
    options: ["Newton's universal gravitation", "Einstein's general relativity", "Maxwell's electromagnetism", "Bohr's atomic model"],
    answer: 1,
    explanation: "Einstein's general relativity predicts that mass bends spacetime, deflecting light from distant sources and producing arcs, rings and multiple images.",
    difficulty: "hard",
    topic: "Physics"
  },
  {
    id: 80,
    question: "What is Hawking radiation?",
    options: ["Radiation given off by the Sun's core", "Theoretical thermal radiation emitted by black holes", "Cosmic rays from supernovae", "Light from quasars"],
    answer: 1,
    explanation: "Stephen Hawking showed in 1974 that quantum effects near a black hole's horizon should cause it to emit faint thermal radiation and slowly lose mass.",
    difficulty: "hard",
    topic: "Physics"
  },
  {
    id: 81,
    question: "Roughly what fraction of the universe is ordinary (baryonic) matter?",
    options: ["Around 5%", "Around 27%", "Around 50%", "Around 95%"],
    answer: 0,
    explanation: "Current cosmology estimates about 5% ordinary matter, 27% dark matter and 68% dark energy.",
    difficulty: "hard",
    topic: "Cosmology"
  },
  {
    id: 82,
    question: "What does the term 'quasar' stand for?",
    options: ["Quaternary stellar array", "Quasi-stellar radio source", "Quantum-state region", "Quick spectral array"],
    answer: 1,
    explanation: "Quasars were originally identified as quasi-stellar radio sources. They are now understood as extremely luminous active galactic nuclei powered by supermassive black holes.",
    difficulty: "hard",
    topic: "Galaxies"
  },
  {
    id: 83,
    question: "Who discovered the first pulsar in 1967?",
    options: ["Edwin Hubble", "Vera Rubin", "Jocelyn Bell Burnell", "Carl Sagan"],
    answer: 2,
    explanation: "Jocelyn Bell Burnell, then a Cambridge PhD student, detected the regular radio pulses of what proved to be a rotating neutron star.",
    difficulty: "hard",
    topic: "History"
  },
  {
    id: 84,
    question: "Vera Rubin's observations of galaxy rotation curves provided strong evidence for what?",
    options: ["The Big Bang", "Dark matter", "Black holes", "Exoplanets"],
    answer: 1,
    explanation: "Rubin showed that stars in the outskirts of spiral galaxies orbit too fast to be held by visible matter alone, implying a large halo of unseen dark matter.",
    difficulty: "hard",
    topic: "History"
  },
  {
    id: 85,
    question: "The first confirmed exoplanet orbiting a Sun-like star was discovered in 1995. What is it called?",
    options: ["Kepler-22b", "51 Pegasi b", "Proxima Centauri b", "Gliese 581c"],
    answer: 1,
    explanation: "Michel Mayor and Didier Queloz detected 51 Pegasi b, a hot Jupiter, earning them a share of the 2019 Nobel Prize in Physics.",
    difficulty: "hard",
    topic: "Exoplanets"
  },
  {
    id: 86,
    question: "Approximately how far away is Proxima Centauri, the nearest star beyond the Sun?",
    options: ["0.4 light years", "4.24 light years", "42 light years", "420 light years"],
    answer: 1,
    explanation: "Proxima Centauri lies about 4.24 light years from the Sun and is part of the Alpha Centauri triple system.",
    difficulty: "hard",
    topic: "Stars"
  },
  {
    id: 87,
    question: "What is the eventual fate of our Sun, in around 5 billion years?",
    options: ["Supernova explosion", "Direct collapse to a black hole", "Expansion to a red giant, then a white dwarf", "Fission into two stars"],
    answer: 2,
    explanation: "The Sun is too low in mass to go supernova. It will expand into a red giant, shed its outer layers as a planetary nebula and leave behind a white dwarf.",
    difficulty: "hard",
    topic: "Stars"
  },
  {
    id: 88,
    question: "What does the Drake Equation attempt to estimate?",
    options: ["The age of the universe", "The number of communicating civilisations in the Milky Way", "The mass of a black hole", "The distance to Andromeda"],
    answer: 1,
    explanation: "Frank Drake's 1961 equation multiplies factors such as star-formation rate, fraction of stars with planets and probability of life to estimate detectable civilisations.",
    difficulty: "hard",
    topic: "Exoplanets"
  },
  {
    id: 89,
    question: "What is Olbers' paradox?",
    options: ["A puzzle about planetary motion", "The question of why the night sky is dark if the universe were infinite, eternal and static", "A theory about black hole horizons", "A model of stellar evolution"],
    answer: 1,
    explanation: "In an infinite, eternal, static universe filled with stars, every line of sight should end on a star and the night sky should glow as brightly as the Sun. Cosmic expansion and a finite age resolve the paradox.",
    difficulty: "hard",
    topic: "Cosmology"
  },
  {
    id: 90,
    question: "What is the heliopause?",
    options: ["The Sun's outer atmosphere", "The boundary where solar wind meets the interstellar medium", "A pause in the solar cycle", "The Sun's magnetic equator"],
    answer: 1,
    explanation: "The heliopause marks the edge of the heliosphere, where the Sun's outflowing solar wind is balanced by pressure from the surrounding interstellar medium.",
    difficulty: "hard",
    topic: "Cosmology"
  },
  {
    id: 91,
    question: "Which observatory is famous for its array of large radio telescopes in the New Mexico desert?",
    options: ["Mauna Kea Observatory", "The Very Large Array (VLA)", "Paranal Observatory", "Apache Point Observatory"],
    answer: 1,
    explanation: "The Karl G. Jansky Very Large Array consists of 27 dish antennas arranged in a Y pattern, used for high-resolution radio astronomy.",
    difficulty: "medium",
    topic: "Telescopes"
  },
  {
    id: 92,
    question: "Which type of telescope uses curved mirrors to gather light?",
    options: ["Refracting telescope", "Reflecting telescope", "Radio telescope", "Solar filter"],
    answer: 1,
    explanation: "Reflecting (Newtonian, Cassegrain and similar designs) telescopes use mirrors. Refractors use lenses.",
    difficulty: "medium",
    topic: "Telescopes"
  },
  {
    id: 93,
    question: "The Hubble Deep Field famously revealed what?",
    options: ["The first exoplanets", "Thousands of distant galaxies in a tiny, seemingly empty patch of sky", "Pluto's surface", "Saturn's hidden moons"],
    answer: 1,
    explanation: "By staring at one apparently empty point for many days, Hubble showed that even 'empty' sky is filled with thousands of faint, distant galaxies.",
    difficulty: "medium",
    topic: "Telescopes"
  },
  {
    id: 94,
    question: "What is a transit in exoplanet astronomy?",
    options: ["A planet's collision with its star", "The passage of a planet in front of its star, dimming the star slightly", "The launch of a space telescope", "A type of stellar pulsation"],
    answer: 1,
    explanation: "When an exoplanet crosses the disc of its host star from our viewpoint, it blocks a tiny fraction of the starlight. Missions like Kepler and TESS use this to find planets.",
    difficulty: "medium",
    topic: "Exoplanets"
  },
  {
    id: 95,
    question: "Which mission, retired in 2018, discovered thousands of exoplanets by monitoring stellar brightness?",
    options: ["Hubble", "Kepler", "Voyager 2", "Cassini"],
    answer: 1,
    explanation: "NASA's Kepler space telescope cataloged more than 2,600 confirmed exoplanets via the transit method before its fuel ran out in 2018.",
    difficulty: "medium",
    topic: "Exoplanets"
  },
  {
    id: 96,
    question: "What is the zodiac, in an astronomical (not astrological) sense?",
    options: ["A region of the sky around the celestial equator", "The 12 or 13 constellations along the ecliptic, where the Sun, Moon and planets appear to move", "The path of comets", "A pattern of meteor showers"],
    answer: 1,
    explanation: "The zodiac is the band of sky containing the constellations the ecliptic passes through. Astronomers also recognise Ophiuchus as a 13th zodiacal constellation.",
    difficulty: "medium",
    topic: "Constellations"
  },
  {
    id: 97,
    question: "Cassiopeia is most easily recognised as which shape in the sky?",
    options: ["A square", "A W or M", "A triangle", "A spiral"],
    answer: 1,
    explanation: "The five bright stars of Cassiopeia form a distinctive W (or M, depending on its rotation), visible year-round from northern latitudes.",
    difficulty: "medium",
    topic: "Constellations"
  },
  {
    id: 98,
    question: "The Southern Cross, used for navigation in the southern hemisphere, is part of which constellation?",
    options: ["Centaurus", "Crux", "Carina", "Phoenix"],
    answer: 1,
    explanation: "Crux is the smallest of the 88 modern constellations but is one of the most recognisable features of the southern sky.",
    difficulty: "medium",
    topic: "Constellations"
  },
  {
    id: 99,
    question: "What is the redshift of a distant galaxy used to determine?",
    options: ["Its colour", "Its recession velocity (and indirectly its distance)", "Its temperature", "Its mass"],
    answer: 1,
    explanation: "The shift of spectral lines toward longer wavelengths reveals how fast a galaxy is moving away from us, a key input for measuring distances and cosmic expansion.",
    difficulty: "hard",
    topic: "Cosmology"
  },
  {
    id: 100,
    question: "What is the Local Group?",
    options: ["A nearby star cluster", "The collection of galaxies that includes the Milky Way, Andromeda, Triangulum and dozens of smaller satellites", "Earth's solar neighbourhood", "A small group of moons around Jupiter"],
    answer: 1,
    explanation: "The Local Group spans roughly 10 million light years and contains more than 80 known galaxies, dominated gravitationally by Andromeda and the Milky Way.",
    difficulty: "hard",
    topic: "Galaxies"
  }
];
