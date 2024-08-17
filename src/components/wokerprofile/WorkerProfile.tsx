import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const WorkerProfileGrid = ({ workers }:any) => {
  return (
    <FlatList
      data={workers}
      renderItem={({ item }:any) => (
        <View style={styles.profileCard}>
           <Image source={{ uri: item.countryFlag }} style={styles.countryFlag} />
          <Image source={{ uri: item?.profileImage || "https://via.placeholder.com/150" }} style={styles.profileImage} />
          <Text>{item.name}</Text>
          <Text>{item.workerRole}</Text>

          {/* <Image source={{ uri: item.countryFlag }} style={styles.countryFlag} /> */}
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  profileCard: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  
  },
  countryFlag: {
    position: 'absolute',
    top: 0,
    right: moderateScale(25),
    width: moderateScale(30),
    height: verticalScale(20),
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 1,
    zIndex:1
  },
});

export default WorkerProfileGrid;
