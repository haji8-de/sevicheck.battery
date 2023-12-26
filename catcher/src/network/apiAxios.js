import axios from 'axios';
import config from "config";
import { SignUp } from 'views/pages/hayubi/member/SignUp';

const instance = axios.create({
  baseURL: config.NEWS_BASE_URL,
});

export const getTest = async (id) => (
  await instance.get('news/' + id + '?lang=' + lang)
);