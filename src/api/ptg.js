import keys from 'config/keys';

const getOptions = data => {
  return {
    method: 'POST',
    headers: {
      Authorization: 'Basic bm1fZGVtbzpkZW1vMTIzNA==',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: { ...data } })
  };
};

export const getProblems = async (text, type) => {
  const options = getOptions({ text, type });

  try {
    let response = await fetch(`${keys.baseUrl}/get_problems`, options);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    response = await response.json();

    return response.data;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  }
};

export const getWordSuggestions = async text => {
  const options = getOptions({ text });

  try {
    let response = await fetch(`${keys.baseUrl}/suggest_words`, options);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    response = await response.json();

    return response.data;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  }
};
