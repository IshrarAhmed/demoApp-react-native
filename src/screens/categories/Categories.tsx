import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Header from '../../components/header/Header';
import WorkerProfile from '../../components/wokerprofile/WorkerProfile';
import categoryData from '../../assents/data/categories.json';
import astrologerIcon from '../../assents/images/astrologer.jpg';
import assistantIcon from '../../assents/images/assistant.jpg';
import makeupIcon from '../../assents/images/makeup.jpg';
import mehndiIcon from '../../assents/images/mehdi.jpeg';
import photographerIcon from '../../assents/images/photographer.webp';
import {workersData} from '../../assents/constant/WorkerData';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const CategoriesScreen = () => {
  const workerData = [
    {id: 1, workerRole: 'Astrologer', icon: astrologerIcon},
    {id: 2, workerRole: 'Assistant', icon: assistantIcon},
    {id: 3, workerRole: 'Makeup', icon: makeupIcon},
    {id: 4, workerRole: 'Mehndi', icon: mehndiIcon},
    {id: 5, workerRole: 'Photographer', icon: photographerIcon},
  ];

  const [filteredWorkers, setFilteredWorkers] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (searchTerm: string) => {
    const filtered = workersData.filter(worker =>
      worker.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredWorkers(filtered);
  };

  const handleCategoryClick = (workerRole: string) => {
    setSelectedCategory(workerRole);
    const filtered = workersData.filter(
      worker => worker.workerRole === workerRole,
    );
    setFilteredWorkers(filtered);
  };

  useEffect(() => {
    setFilteredWorkers(workersData);
    setSelectedCategory(null);
  }, []);

  const renderCategoryItem = ({item}: any) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => handleCategoryClick(item.workerRole)}
      style={styles.container_cate}>
      <View style={styles.img_Container}>
        <Image
          source={item.icon}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: moderateScale(50),
          }}
        />
      </View>
      <Text
        style={[
          selectedCategory === item.workerRole && styles.selectedCategory,
        ]}>
        {item.workerRole}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={workerData}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.workerRole}
        contentContainerStyle={styles.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Header categories={categoryData} onSearch={handleSearch} />
      <WorkerProfile workers={filteredWorkers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  categories: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(20),
  },
  container_cate: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(4),
    height: verticalScale(40),
    marginVertical: verticalScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginBottom: verticalScale(20),
  },
  selectedCategory: {
    color: '#4d7cd1',
    fontWeight: '600',
  },
  img_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    width: moderateScale(60),
  },
});

export default CategoriesScreen;
