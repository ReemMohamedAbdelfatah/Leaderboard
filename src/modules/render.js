/* eslint-disable import/prefer-default-export */
/* eslint-disable no-irregular-whitespace */

export const render = (scores) => {
  const outputDiv = document.querySelector('#score-list');
  outputDiv.innerText = '';

  if (scores.length === null) {
    outputDiv.innerText = 'No scores found';
  }

  scores.sort((a, b) => b.score - a.score).forEach((score) => {
    outputDiv.innerHTML += `<li class="entry">&nbsp;&#9;${score.user}: ${score.score}</li>`;
  });
};