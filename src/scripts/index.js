import 'normalize.css';
import '../styles/index.scss';
import GroupsImage from '../img/grupy.svg';
document.querySelector('.wrapImage__image').src = GroupsImage;

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let gameEndTimes = ['2021/02/09 21:31:00', '2021/02/10 00:01:00', '2021/02/10 01:01:00'];

let allPlayers = [
  {
    id: '2',
    name: 'Piotr Stachowicz',
    skill: 7,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '5',
    name: 'Wojtek Spalik',
    skill: 10,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '7',
    name: 'Grzegorz Gil',
    skill: 8,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '8',
    name: 'Dorian Pilot',
    skill: 1,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '9',
    name: 'Dagmara Anna',
    skill: 3,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '10',
    name: 'Aleksandra Żółkiewicz',
    skill: 3,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '11',
    name: 'Marcin Bosman',
    skill: 6,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '12',
    name: 'Damian Kita',
    skill: 10,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '14',
    name: 'Damian Czapla',
    skill: 10,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  { id: '16', name: 'Ma Ra', skill: 9, endTime: '2021/02/10 00:00:00', info: '', gender: 'male' },
  {
    id: '17',
    name: 'Wiktoria Jopek',
    skill: 5,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '18',
    name: 'Mateusz Szołtysek',
    skill: 7,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '19',
    name: 'Rafał Kurkowski',
    skill: 5,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '20',
    name: 'Patryk Kacprzycki',
    skill: 7,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '21',
    name: 'Ewa Kozłowska',
    skill: 4,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '22',
    name: 'Kuba Ligocki',
    skill: 5,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '23',
    name: 'Monika Szablińska',
    skill: 1,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '24',
    name: 'Katarzyna Dziadecka',
    skill: 2,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '25',
    name: 'Eugeniusz',
    skill: 5,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '26',
    name: 'Iza Ćwiertnia',
    skill: 4,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '29',
    name: 'Magda Staniczek',
    skill: 4,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '31',
    name: 'Paweł Bis',
    skill: 5,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '32',
    name: 'Katarzyna Radlak Maga',
    skill: 4,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '35',
    name: 'Kamil Wiża',
    skill: 4,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '36',
    name: 'Wiktoria Wróblewska',
    skill: 3,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '37',
    name: 'Łukasz Wróblewski',
    skill: 5,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '38',
    name: 'Sebastian Wojtal',
    skill: 4,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '39',
    name: 'Kasia Jasińska',
    skill: 3,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '47',
    name: 'Ania Klemczak',
    skill: 5,
    endTime: '2021/02/10 02:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '48',
    name: 'Patrycja Horobowy',
    skill: 3,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '49',
    name: 'Sławek Palka',
    skill: 9,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '50',
    name: 'Aśka Grochowina',
    skill: 3,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  },
  {
    id: '51',
    name: 'Michał Molenda',
    skill: 6,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '52',
    name: 'Arkadiusz Filip',
    skill: 6,
    endTime: '2021/02/10 01:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '53',
    name: 'Michał Dajson',
    skill: 6,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'male'
  },
  {
    id: '54',
    name: 'Katarzyna Kranz-Kiełtyka',
    skill: 3,
    endTime: '2021/02/10 00:00:00',
    info: '',
    gender: 'female'
  }
];

gameEndTimes.forEach((gameEndTime, indexOfGameEndTime) => {
  let players = JSON.parse(JSON.stringify(allPlayers));
  let groups = [];
  let malePlayersPlayingUntilTheGivenTime = [];
  let femalePlayersPlayingUntilTheGivenTime = [];
  let bestGroupsNumber;

  const filterMalePlayersPlayingUntilTheGivenTime = (gameEndTime) => {
    malePlayersPlayingUntilTheGivenTime = players.filter(
      (player) => player.endTime >= gameEndTime && player.gender == 'male'
    );
  };

  const filterFemalePlayersPlayingUntilTheGivenTime = (gameEndTime) => {
    femalePlayersPlayingUntilTheGivenTime = players.filter(
      (player) => player.endTime >= gameEndTime && player.gender == 'female'
    );
  };

  const calcBestNumberOfGroups = (allPlayers) => {
    if (allPlayers > 30) {
      bestGroupsNumber = 6;
    } else if (allPlayers <= 30 && allPlayers >= 19) {
      bestGroupsNumber = 4;
    } else if (allPlayers < 19 && allPlayers >= 6) {
      bestGroupsNumber = 2;
    } else {
      bestGroupsNumber = 1;
    }
  };

  const createGroups = () => {
    for (let i = 0; i < bestGroupsNumber; i++) {
      groups[i] = { id: i + 1, name: `grupa ${i + 1}`, skill: 0, players: '', playersCount: 0 };
    }
  };

  let indexOfGroupToPush = 0;

  const assignPlayersToGroups = (players) => {
    players.forEach(() => {
      let indexOfMaxSkill = players
        .map(function (e) {
          return e.skill;
        })
        .indexOf(
          Math.max.apply(
            Math,
            players.map((o) => o.skill)
          )
        );

      let indexOfName = allPlayers.findIndex((x) => x.name === players[indexOfMaxSkill].name);

      const pushPlayersToGroups = () => {
        allPlayers[indexOfName].info == ''
          ? (allPlayers[indexOfName].info += `Rotacja ${indexOfGameEndTime + 1} / Grupa: ${
              groups[indexOfGroupToPush].id
            }`)
          : (allPlayers[indexOfName].info += `, <br>Rotacja ${indexOfGameEndTime + 1} / Grupa: ${
              groups[indexOfGroupToPush].id
            }`);

        groups[indexOfGroupToPush].playersCount++;

        groups[indexOfGroupToPush].skill += players[indexOfMaxSkill].skill;

        groups[indexOfGroupToPush].players == ''
          ? (groups[indexOfGroupToPush].players += players[indexOfMaxSkill].name)
          : (groups[indexOfGroupToPush].players += `, ${players[indexOfMaxSkill].name}`);

        players[indexOfMaxSkill].skill = '';

        if (indexOfGroupToPush === groups.length - 1) {
          groups.length >= 4 && groups.reverse();
          indexOfGroupToPush = 0;
        } else {
          indexOfGroupToPush++;
        }
      };
      pushPlayersToGroups();
    });
  };

  // function shuffleArray(players) {
  //   for (var i = players.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = players[i];
  //     players[i] = players[j];
  //     players[j] = temp;
  //   }
  // }

  $(document).ready(function () {
    const addSettingToTables = () => {
      $('.myTable').each(function (index) {
        $(`#myTable${index + 1}`).DataTable({
          retrieve: true,
          paging: false,
          ordering: false,
          info: false,
          language: {
            search: 'Szukaj:',
            zeroRecords: 'Nie znaleziono pasujących pozycji',
            emptyTable: 'Brak danych'
          }
        });
      });
    };
    addSettingToTables();
  });

  let html = '';
  let htmlAllPlayers = '';

  const createAllGamesTables = () => {
    const sortedGroupsById = groups.sort((a, b) => (a.id > b.id ? 1 : -1));

    sortedGroupsById.forEach(function (e) {
      html +=
        '<tr>' +
        '<td>' +
        `<b>${e.name.toUpperCase()}</b> / graczy: ${e.playersCount}` +
        '</td>' +
        '<td>' +
        e.players +
        '</td>' +
        '</tr>';
    });

    document.getElementById(`dataTable${indexOfGameEndTime}`).innerHTML = html;
  };

  const createAllPLayersTables = () => {
    allPlayers.forEach(function (e) {
      htmlAllPlayers +=
        '<tr>' +
        '<td>' +
        `<b>${e.name}</b><br>${e.info}` +
        '</td>' +
        '<td>' +
        e.endTime.substring(11) +
        '</td>' +
        '</tr>';
    });

    document.getElementById('dataTable4').innerHTML = htmlAllPlayers;
  };

  // shuffleArray(players);
  filterMalePlayersPlayingUntilTheGivenTime(gameEndTime);
  filterFemalePlayersPlayingUntilTheGivenTime(gameEndTime);
  calcBestNumberOfGroups(
    malePlayersPlayingUntilTheGivenTime.length + femalePlayersPlayingUntilTheGivenTime.length
  );
  createGroups(bestGroupsNumber);
  assignPlayersToGroups(malePlayersPlayingUntilTheGivenTime);
  assignPlayersToGroups(femalePlayersPlayingUntilTheGivenTime);
  console.log(groups);
  createAllGamesTables();
  createAllPLayersTables();
});
