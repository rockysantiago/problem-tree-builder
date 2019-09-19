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

    if (response.data && response.data.data) return response.data.data;
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

export const sendUserScore = async (stars, id) => {
  const options = getOptions({ action: 'rating', stars, id });

  try {
    let response = await fetch(`${keys.baseUrl}/get_user_action`, options);

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

export const addNewOption = async (payload, type, problem) => {
  const options = getOptions({ ...payload, type, action: 'add', problem });
  console.log('SENDING...', options);

  try {
    // TODO: Bato, modify this URL
    // let response = await fetch(`${keys.baseUrl}/get_user_action`, options);
    let response = await Promise.resolve({
      data: {
        id: 1
      },
      success: true,
      ok: true
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    return response.data;
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  }
};
