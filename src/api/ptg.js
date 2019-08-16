import keys from 'config/keys';

export const getProblems = (text, type) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { text, type } })
  };

  return fetch(`${keys.baseUrl}/get_problems`, options)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const getWordSuggestions = text => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { text } })
  };

  return fetch(`${keys.baseUrl}/suggest_words`, options)
    .then(response => response.json())
    .catch(error => console.error(error));
};
