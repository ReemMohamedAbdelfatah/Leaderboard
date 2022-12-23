/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-irregular-whitespace */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LeG9SmtJVy5ZW1EeHwgQ/scores';

export const fetchData = async () => {
  const response = await fetch(url);
  const { result } = await response.json();
  return result;
};
