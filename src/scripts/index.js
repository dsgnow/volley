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
  { id: '2', name: 'Piotr Stachowicz', skill: 6, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '3', name: 'Sebastian Krakowski', skill: 5, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '4', name: 'Jackob Boyka', skill: 10, endTime: '2021/02/03 03:00:00', info: '' },
  { id: '5', name: 'Wojtek Spalik', skill: 10, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '6', name: 'Henryk Henio Wspaniały', skill: 5, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '7', name: 'Grzegorz Gil', skill: 9, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '8', name: 'Dorian Pilot', skill: 3, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '9', name: 'Dagmara Anna', skill: 4, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '10', name: 'Aleksandra Żółkiewicz', skill: 4, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '11', name: 'Marcin Bosman', skill: 8, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '12', name: 'Damian Kita', skill: 10, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '13', name: 'Michał Foit', skill: 8, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '14', name: 'Damian Czapla', skill: 10, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '15', name: 'Grzegorz Sołtysiak', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '16', name: 'Ma Ra', skill: 10, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '17', name: 'Wiktoria Jopek', skill: 4, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '18', name: 'Mateusz Szołtysek', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '19', name: 'Rafał Kurkowski', skill: 6, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '20', name: 'Patryk Kacprzycki', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '21', name: 'Ewa Kozłowska', skill: 4, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '22', name: 'Kuba Ligocki', skill: 6, endTime: '2021/02/03 03:00:00', info: '' },
  { id: '23', name: 'Monika Szablińska', skill: 3, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '24', name: 'Katarzyna Dziadecka', skill: 4, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '25', name: 'Eugeniusz', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '26', name: 'Iza Ćwiertnia', skill: 5, endTime: '2021/02/03 02:00:00', info: '' },
  { id: '27', name: 'Adam C', skill: 9, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '28', name: 'Mateusz Hadelko', skill: 10, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '29', name: 'Magda Staniczek', skill: 4, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '30', name: 'Klaudia Klucewicz', skill: 4, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '31', name: 'Paweł Bis', skill: 7, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '32', name: 'Katarzyna Radlak Maga', skill: 5, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '33', name: 'Damian Dmowski', skill: 10, endTime: '2021/02/03 01:00:00', info: '' },
  { id: '34', name: 'Paweł Wojciechowski', skill: 9, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '35', name: 'Kamil Wiża', skill: 6, endTime: '2021/02/03 00:00:00', info: '' },
  { id: '36', name: 'Wiktoria Wróblewska', skill: 4, endTime: '2021/02/03 00:00:00', info: '' }
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

  const assignPlayersToGroups = (players) => {
    let indexOfGroupToPush = 0;
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
              groups[indexOfGroupToPush].id
            }`)
          : (allPlayers[indexOfName].info += `, <br>Rotacja ${indexgameEndTimes + 1} / Grupa: ${
              groups[indexOfGroupToPush].id
            }`);

        groups[indexOfGroupToPush].playersCount++;

        groups[indexOfGroupToPush].skill += players[indexOfMaxSkill].skill;

        groups[indexOfGroupToPush].players == ''
          ? (groups[indexOfGroupToPush].players += players[indexOfMaxSkill].name)
          : (groups[indexOfGroupToPush].players += `, ${players[indexOfMaxSkill].name}`);

        players[indexOfMaxSkill].skill = '';

        if (indexOfGroupToPush === groups.length - 1) {
          groups.reverse();
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
  console.log(groups);
  createAllGamesTables();
  createAllPLayersTables();
});
