import 'normalize.css';
import '../styles/index.scss';
import GroupsImage from '../img/grupy.svg';
document.querySelector('.wrapImage__image').src = GroupsImage;

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let gameEndTimes = ['2021/02/02 21:31:00', '2021/02/03 00:01:00', '2021/02/03 01:01:00'];

let allPlayers = [
  { id: '1', name: 'Brylant Barber', skill: 8, endTime: '2021/02/03 03:00:00', info: '' },
  { id: '25', name: 'Eugeniusz', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '26', name: 'Iza Ćwiertnia', skill: 7, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '20', name: 'Patryk Kacprzycki', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '7', name: 'Grzegorz Gil', skill: 9, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '24', name: 'Katarzyna Dziadecka', skill: 5, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '27', name: 'Adam C', skill: 9, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '28', name: 'Mateusz Hadelko', skill: 10, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '21', name: 'Ewa Kozłowska', skill: 6, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '8', name: 'Dorian Pilot', skill: 4, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '29', name: 'Magda Staniczek', skill: 5, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '30', name: 'Klaudia Klucewicz', skill: 5, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '18', name: 'Mateusz Szołtysek', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '31', name: 'Paweł Bis', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '45', name: 'Michał Morawiec', skill: 6, endTime: '2021/02/03 00:00:00' },
  { id: '5', name: 'Wojtek Spalik', skill: 9, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '14', name: 'Damian Czapla', skill: 10, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '33', name: 'Damian Dmowski', skill: 10, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '10', name: 'Aleksandra Żółkiewicz', skill: 5, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '12', name: 'Damian Kita', skill: 10, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '11', name: 'Marcin Bosman', skill: 8, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '46', name: 'Kolega Patryka', skill: 6, endTime: '2021/02/03 00:00:00' },
  { id: '35', name: 'Kamil Wiża', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '36', name: 'Wiktoria Wróblewska', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '37', name: 'Łukasz Wróblewski', skill: 5, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '38', name: 'Sebastian Wojtal', skill: 6, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '39', name: 'Kasia Jasińska', skill: 6, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '40', name: 'Michał Rybakowski', skill: 9, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '41', name: 'Przemysław Ważny', skill: 9, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '42', name: 'Bartek Stadler', skill: 10, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '43', name: 'Marcin Piela', skill: 8, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '43', name: 'Rafał Kurkowski', skill: 9, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '44', name: 'Dagmara Anna', skill: 5, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '23', name: 'Katarzyna Radlak Maga', skill: 6, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '2', name: 'Piotr Stachowicz', skill: 7, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '47', name: 'Piotr Pawełek', skill: 8, endTime: '2021/02/03 00:00:00' }
];

gameEndTimes.forEach((gameEndTime, indexgameEndTimes) => {
  let players = JSON.parse(JSON.stringify(allPlayers));
  let groups = [];
  let playersPlayingUntilTheGivenTime = [];
  let bestGroupsNumber;

  const filterPlayersPlayingUntilTheGivenTime = (gameEndTime) => {
    playersPlayingUntilTheGivenTime = players.filter((player) => player.endTime >= gameEndTime);
  };

  const calcBestNumberOfGroups = (allPlayers) => {
    if (allPlayers > 30) {
      bestGroupsNumber = 6;
    } else if (allPlayers <= 30 && allPlayers >= 20) {
      bestGroupsNumber = 4;
    } else if (allPlayers < 20 && allPlayers >= 6) {
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

  const assignPlayersToGroups = (players) => {
    let groupToPush = 0;
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
          ? (allPlayers[indexOfName].info += `Rotacja ${indexgameEndTimes + 1} / Grupa: ${
              groups[groupToPush].id
            }`)
          : (allPlayers[indexOfName].info += `, <br>Rotacja ${indexgameEndTimes + 1} / Grupa: ${
              groups[groupToPush].id
            }`);

        groups[groupToPush].playersCount++;

        groups[groupToPush].skill += players[indexOfMaxSkill].skill;

        groups[groupToPush].players == ''
          ? (groups[groupToPush].players += players[indexOfMaxSkill].name)
          : (groups[groupToPush].players += `, ${players[indexOfMaxSkill].name}`);

        players[indexOfMaxSkill].skill = '';

        if (groupToPush === groups.length - 1) {
          groups.reverse();
          groupToPush = 0;
        } else {
          groupToPush++;
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

    document.getElementById(`dataTable${indexgameEndTimes}`).innerHTML = html;
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
  filterPlayersPlayingUntilTheGivenTime(gameEndTime);
  calcBestNumberOfGroups(playersPlayingUntilTheGivenTime.length);
  createGroups(bestGroupsNumber);
  assignPlayersToGroups(playersPlayingUntilTheGivenTime);
  // console.log(groups);
  createAllGamesTables();
  createAllPLayersTables();
});
