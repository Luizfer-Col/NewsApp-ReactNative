import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import NewsItem from './NewsItem';
import useFetchNews from '../hooks/useFetchNews';

const NewsList: React.FC = () => {
  const {news, loading, reachedLimit, handleEndReached} = useFetchNews();

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NewsItem itemNews={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator
              style={styles.loadingIndicator}
              size="large"
              color="#2580C8"
            />
          ) : reachedLimit ? (
            <View style={styles.limitReached}>
              <Text style={styles.limitReachedText}>
                ¡Alcanzaste el límite de noticias gratuitas!
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  loadingIndicator: {
    marginVertical: 20,
  },
  limitReached: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  limitReachedText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF0000',
  },
});
