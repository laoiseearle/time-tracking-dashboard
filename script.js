const currentStat = document.querySelectorAll('.card-report > h1');
const previousStat = document.querySelectorAll('.card-report > p');
const statNum = currentStat.length;

const getText = tf => {
  if (tf === 'daily') {
    return 'Yesterday';
  } else if (tf === 'weekly') {
    return 'Last week';
  } else {
    return 'Last month';
  }
};

const renderStats = () => {
  const selectedTimeframe = document.querySelector(
    'input[name="timeframe"]:checked'
  ).value;

  for (let i = 0; i < statNum; i++) {
    const arr = [
      data[i].timeframes[selectedTimeframe].current,
      data[i].timeframes[selectedTimeframe].previous,
    ];

    currentStat[i].innerText = `${arr[0]}hrs`;
    previousStat[i].innerText = `${getText(selectedTimeframe)} - ${arr[1]}hrs`;
  }
};

renderStats();
