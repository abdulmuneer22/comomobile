import axios from 'axios';

const config = {
  headers: {
    'x-api-key': 'secret123',
  },
};

export const getDishInformation = async (dishCode) => {
  let error = null;
  let response = null;

  try {
    const res = await axios.get(
      `https://docs.bcomo.com/qrcode/${dishCode}`,
      config,
    );
    debugger;
    response = res.data;
  } catch (ex) {
    console.log('Failed to data from como', ex);
    debugger;
    error = ex;
  }

  return { response, error };
};
