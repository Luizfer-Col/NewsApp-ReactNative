import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {fetchNews} from '../services';
import {NewsProps} from '../types';

const useFetchNews = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [reachedLimit, setReachedLimit] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const newNews = await fetchNews(page, 20);
      if (newNews.length < 1) {
        setReachedLimit(true);
        Alert.alert('Atención', 'Haz alcanzado el límite gratuito de noticias');
        return;
      }
      setNews(prevNews => [...prevNews, ...newNews]);
      setPage(page + 1);
    } catch (error) {
      console.error('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEndReached = () => {
    if (!loading && !reachedLimit) {
      fetchData();
    }
  };

  return {news, loading, reachedLimit, handleEndReached};
};

export default useFetchNews;
