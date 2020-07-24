import axios from 'axios';

const RandomImageUrl = (data) => {
  return axios.get('https://source.unsplash.com/' + data.width + 'x' + data.height + '/?' + data.type).then((res) => {
    if (res.request.status === 200) return res.request.responseURL;
    else return '';
  });
}
export default RandomImageUrl;