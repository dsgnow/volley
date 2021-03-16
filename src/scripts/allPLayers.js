const allPlayers = [
  {
    id: '1',
    name: 'Brylant Barber',
    skill: 7,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '2',
    name: 'Piotr Stachowicz',
    skill: 6,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '3',
    name: 'Sebastian Krakowski',
    skill: 5,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '4',
    name: 'Jackob Boyka',
    skill: 10,
    endTime: '2021/01/02 03:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '5',
    name: 'Wojtek Spalik',
    skill: 10,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '6',
    name: 'Henryk Henio Wspaniały',
    skill: 6,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '7',
    name: 'Grzegorz Gil',
    skill: 8,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '8',
    name: 'Dorian Pilot',
    skill: 1,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '9',
    name: 'Dagmara Anna',
    skill: 3,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '10',
    name: 'Aleksandra Żółkiewicz',
    skill: 3,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '11',
    name: 'Marcin Bosman',
    skill: 8,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '12',
    name: 'Damian Kita',
    skill: 10,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '13',
    name: 'Michał Foit',
    skill: 8,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '14',
    name: 'Damian Czapla',
    skill: 10,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '15',
    name: 'Grzegorz Sołtysiak',
    skill: 4,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  { id: '16', name: 'MRa Ra', skill: 9, endTime: '2021/01/02 00:00:00', info: '', gender: 'male' },
  {
    id: '17',
    name: 'Wiktoria Jopek',
    skill: 5,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '18',
    name: 'Mateusz Szołtysek',
    skill: 7,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '19',
    name: 'Rafał Kurkowski',
    skill: 8,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '20',
    name: 'Patryk Kacprzycki',
    skill: 7,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '21',
    name: 'Ewa Kozłowska',
    skill: 3,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '22',
    name: 'Kuba Ligocki',
    skill: 5,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '23',
    name: 'Monika Szablińska',
    skill: 1,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '24',
    name: 'Katarzyna Dziadecka',
    skill: 2,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '25',
    name: 'Eugeniusz',
    skill: 5,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '26',
    name: 'Iza Ćwiertnia',
    skill: 4,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  { id: '27', name: 'Adam C', skill: 9, endTime: '2021/01/02 01:00:00', info: '', gender: 'male' },
  {
    id: '28',
    name: 'Mateusz Hadelko',
    skill: 10,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '29',
    name: 'Magda Staniczek',
    skill: 3,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '30',
    name: 'Klaudia Klucewicz',
    skill: 2,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '31',
    name: 'Paweł Bis',
    skill: 4,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '32',
    name: 'Katarzyna Radlak Maga',
    skill: 4,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '33',
    name: 'Damian Dmowski',
    skill: 9,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '34',
    name: 'Paweł Wojciechowski',
    skill: 8,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '35',
    name: 'Kamil Wiża',
    skill: 4,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '36',
    name: 'Wiktoria Wróblewska',
    skill: 3,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '37',
    name: 'Łukasz Wróblewski',
    skill: 5,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '38',
    name: 'Sebastian Wojtal',
    skill: 4,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '39',
    name: 'Kasia Jasińska',
    skill: 3,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '40',
    name: 'Michał Rybakowski',
    skill: 9,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '41',
    name: 'Przemysław Ważny',
    skill: 9,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '42',
    name: 'Bartek Stadler',
    skill: 10,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '43',
    name: 'Marcin Piela',
    skill: 8,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '44',
    name: 'Bartek Król',
    skill: 2,
    endTime: '2021/01/02 0:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '45',
    name: 'Piotr Pawełek',
    skill: 8,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '46',
    name: 'Michał Morawiec',
    skill: 5,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '47',
    name: 'Ania Klemczak',
    skill: 6,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '48',
    name: 'Patrycja Horobowy',
    skill: 3,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '49',
    name: 'Sławek Palka',
    skill: 9,
    endTime: '2021/01/02 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '50',
    name: 'Aśka Grochowina',
    skill: 3,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '51',
    name: 'Michał Molenda',
    skill: 6,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '52',
    name: 'Arkadiusz Filip',
    skill: 6,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '53',
    name: 'Michał Dajson',
    skill: 6,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '54',
    name: 'Katarzyna Kranz-Kiełtyka',
    skill: 3,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '55',
    name: 'Michał Mieszczyński',
    skill: 5,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '55',
    name: 'Adam Mru',
    skill: 6,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '56',
    name: 'Sebastian Boruta',
    skill: 6,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '56',
    name: 'Michał Soblik',
    skill: 6,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '57',
    name: 'Michał Majk Le',
    skill: 2,
    endTime: '2021/01/02 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '58',
    name: 'Michał (od P. Ważnego)',
    skill: 8,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '59',
    name: 'Dawid (od P. Ważnego)',
    skill: 8,
    endTime: '2021/01/02 00:00:00',
    info: '',
    gender: 'male'
  }
]
