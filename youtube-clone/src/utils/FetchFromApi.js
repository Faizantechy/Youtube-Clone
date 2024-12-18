import axios from 'axios';

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';
const APIKey='5d4b97cb04msh6945b8d29d65df9p1d447cjsn2afe7bc95129'

const options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '100'
  },
  headers: {
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    'x-rapidapi-key': APIKey,
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BaseUrl}/${url}`, options);
  return data;
};
