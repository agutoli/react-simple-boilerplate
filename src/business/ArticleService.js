import axios from 'axios';
import { ArticleEntityCollection } from './ArticleEntity';

export default {
  fetch() {
    const service = '/api/svc/news/v3/content/all/u.s..json' +
                    '?subsection=politics&type=article,blog&client_id=PoliticsSF';
    return axios.get(service).then((res) => {
      return new ArticleEntityCollection(res.data.results);
    });
  }
};
