import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {type NewsProps} from '../types';
import {formatDate} from '../utils';
import FastImage from 'react-native-fast-image';

const NewsItem = React.memo(({itemNews}: {itemNews: NewsProps}) => {
  const {description, publishedAt, title, urlToImage, url} = itemNews;
  const date = formatDate(publishedAt);

  const img =
    urlToImage ||
    'https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg';

  const isUnavailable = title === '[Removed]';

  const handleOpenUrl = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      console.error('No se puede abrir la URL:', url);
    }
  };

  if (isUnavailable) return null;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: img,
            // priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle} numberOfLines={4}>
          {description}
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.textDate}>{date}</Text>
          <TouchableOpacity onPress={() => handleOpenUrl(url)}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginVertical: 6,
    marginHorizontal: 8,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    marginRight: 4,
  },
  image: {
    borderRadius: 8,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 3,
    paddingLeft: 8,
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 13,
  },
  textSubtitle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 12,
  },
  bottom: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 13,
  },
  readMoreText: {
    color: '#2580C8',
    fontWeight: 'bold',
  },
});
