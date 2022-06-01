
import { StyleSheet, View,FlatList,Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <FlatList
     data={[
          {key:"Roberto"},
          {key: 'Saul'},
          {key: 'Damaris'},
          {key: 'Ricardo'},
          {key: 'Omar'},
          {key: 'Bryent'},
          ]}
     
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
     />



     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
