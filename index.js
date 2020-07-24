import axios from 'axios';

export const FetchImage = async (data) => {
  let imageResponse = await axios.get('https://source.unsplash.com/' + data.width + 'x' + data.height + '/?' + data.type);
  if (imageResponse && imageResponse.request.status === 200) return imageResponse.request.responseURL;
  else return '';
}