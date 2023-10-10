const axios = require('axios');

//Random Chuck Norris joke
exports.getRandomJoke = (async (req, res) => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    const joke = response.data.value;
    res.json({ joke });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Chuck Norris joke' });
  }
});

