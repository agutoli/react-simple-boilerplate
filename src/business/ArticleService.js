import axios from 'axios';

export default {
  fetch() {
    const service = '/api/svc/news/v3/content/all/u.s..json' +
                    '?subsection=politics&type=article,blog&client_id=PoliticsSF';
    return axios.get(service).then((res) => {
      return res.data.results;
    });
  }
};
