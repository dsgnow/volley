import 'normalize.css';
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let gameEndTimes = [
  '2021/01/01 21:31:00',
  '2021/01/01 23:31:00',
  '2021/01/02 01:01:00',
  '2021/01/02 02:01:00'
];

gameEndTimes.forEach((gameEndTime, indexgameEndTimes) => {
  let players = [
    { id: '1', name: 'Brylant Barber', skill: 6, endTime: '2021/01/02 01:00:00' },
    { id: '2', name: 'Piotr Stachowicz', skill: 6, endTime: '2021/01/02 03:00:00' },
    { id: '3', name: 'Sebastian Krakowski', skill: 5, endTime: '2021/01/02 01:00:00' },
    { id: '4', name: 'Jackob Boyka', skill: 10, endTime: '2021/01/02 03:00:00' },
    { id: '5', name: 'Wojtek Spalik', skill: 9, endTime: '2021/01/01 23:30:00' },
    { id: '6', name: 'Henryk Henio Wspaniały', skill: 5, endTime: '2021/01/02 02:00:00' },
    { id: '7', name: 'Grzegorz Gil', skill: 9, endTime: '2021/01/02 03:00:00' },
    { id: '8', name: 'Dorian Pilot', skill: 4, endTime: '2021/01/02 03:00:00' },
    { id: '9', name: 'Dagmara Anna', skill: 5, endTime: '2021/01/02 01:00:00' },
    { id: '10', name: 'Aleksandra Żółkiewicz', skill: 5, endTime: '2021/01/02 03:00:00' },
    { id: '11', name: 'Marcin Bosman', skill: 8, endTime: '2021/01/01 23:30:00' },
    { id: '12', name: 'Damian Kita', skill: 10, endTime: '2021/01/02 01:00:00' },
    { id: '13', name: 'Michał Foit', skill: 8, endTime: '2021/01/02 03:00:00' },
    { id: '14', name: 'Damian Czapla', skill: 7, endTime: '2021/01/02 03:00:00' },
    { id: '15', name: 'Grzegorz Sołtysiak', skill: 6, endTime: '2021/01/01 23:30:00' },
    { id: '16', name: 'Ma Ra', skill: 10, endTime: '2021/01/02 02:00:00' },
    { id: '17', name: 'Wiktoria Jopek', skill: 5, endTime: '2021/01/02 01:00:00' },
    { id: '18', name: 'Mateusz Szołtysek', skill: 6, endTime: '2021/01/02 03:00:00' },
    { id: '19', name: 'Rafał Kurkowski', skill: 6, endTime: '2021/01/02 02:00:00' },
    { id: '20', name: 'Patryk Kacprzycki', skill: 7, endTime: '2021/01/02 03:00:00' },
    { id: '21', name: 'Ewa Kozłowska', skill: 6, endTime: '2021/01/01 23:30:00' },
    { id: '22', name: 'Kuba Ligocki', skill: 6, endTime: '2021/01/02 03:00:00' },
    { id: '23', name: 'Monika Szablińska', skill: 3, endTime: '2021/01/02 03:00:00' },
    { id: '24', name: 'Katarzyna Dziadecka', skill: 5, endTime: '2021/01/02 03:00:00' }
  ];

  let groups = [];

  let playersPlayingUntilTheGivenTime = [];

  let indexOfMaxSkill;
  let indexOfLowerGroupPlayersCount;
  let numberOfPlayersInTheGroup;

  const filterPlayersPlayingUntilTheGivenTime = (gameEndTime, index) => {
    playersPlayingUntilTheGivenTime = players.filter((player) => player.endTime >= gameEndTime);
  };

  const calcBestPlayersNumberInGroup = (allPlayers) => {
    let bestPlayersNumber;
    let squads2 = allPlayers % 4;
    let squads4 = allPlayers % 2;

    if (allPlayers > 16 && squads2 <= squads4) {
      bestPlayersNumber = 4;
    } else {
      bestPlayersNumber = 2;
    }

    numberOfPlayersInTheGroup = bestPlayersNumber;
  };

  const createGroups = (bestPlayersNumber) => {
    for (let i = 0; i < bestPlayersNumber; i++) {
      groups[i] = { id: i + 1, name: `grupa ${i + 1}`, skill: 0, players: '', playersCount: 0 };
    }
  };

  const assignPlayersToGroups = (players) => {
    players.forEach(() => {
      //   indexOfMaxSkill = players.indexOf(Math.max(...players.skill));
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

      let indexOfLowerGroupPlayersCount = groups
        .map(function (e) {
          return e.playersCount;
        })
        .indexOf(
          Math.min.apply(
            Math,
            groups.map((o) => o.playersCount)
          )
        );

      groups[indexOfLowerGroupPlayersCount].playersCount++;

      groups[indexOfLowerGroupPlayersCount].skill += players[indexOfMaxSkill].skill;

      groups[indexOfLowerGroupPlayersCount].players == ''
        ? (groups[indexOfLowerGroupPlayersCount].players += players[indexOfMaxSkill].name)
        : (groups[indexOfLowerGroupPlayersCount].players += `, ${players[indexOfMaxSkill].name}`);

      players[indexOfMaxSkill].skill = '';
    });
  };

  function shuffleArray(players) {
    for (var i = players.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = players[i];
      players[i] = players[j];
      players[j] = temp;
    }
  }

  // shuffleArray(players);
  filterPlayersPlayingUntilTheGivenTime(gameEndTime);
  calcBestPlayersNumberInGroup(playersPlayingUntilTheGivenTime.length);
  createGroups(numberOfPlayersInTheGroup);
  assignPlayersToGroups(playersPlayingUntilTheGivenTime);
  console.log(groups);

  $(document).ready(function () {
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
  });

  let html = '';

  groups.forEach(function (e, i) {
    html += '<tr>' + '<td>' + e.name + '</td>' + '<td>' + e.players + '</td>' + '</tr>';
  });

  document.getElementById(`dataTable${indexgameEndTimes}`).innerHTML = html;
});
