import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, Image, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Header = ({categories, onSearch}: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text: React.SetStateAction<string>) => {
    setSearchTerm(text);
    onSearch(text);
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  searchBar: {
    height: verticalScale(35),

    borderWidth: 0.5,

    paddingHorizontal: moderateScale(10),
    borderRadius: scale(5),
  },
  carouselItem: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
});

export default Header;
