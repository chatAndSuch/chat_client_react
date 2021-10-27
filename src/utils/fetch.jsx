import axios from 'axios'

const fetchy = async (bod, url) => {
  axios.post(url, bod)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
  }


export default fetchy