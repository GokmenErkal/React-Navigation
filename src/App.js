import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_text}>Yapılacaklar</Text>
            <Text style={styles.header_text}>2</Text>
          </View>

          <View style={styles.list}>
            <View style={styles.ul}>
              <Text style={styles.ul_text}>Çöpler atılacak</Text>
            </View>
            <View style={styles.ul}>
              <Text style={styles.ul_text}>Ev temizlenecek</Text>
            </View>
          </View>

          <View style={styles.input_container}>
            <TextInput style={styles.input_text} placeholder='Yapılacak...' placeholderTextColor={'#787a7b'} />
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: '#fff', fontSize: 18}}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#102027",
    height: Dimensions.get("window").height,
  },
  container: {
    margin: 10,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  header_text: {
    fontSize: 30,
    color: "#ffa500"
  },
  list: {
    marginTop: 15
  },
  ul: {
    backgroundColor: '#7da453',
    marginTop: 12,
    padding: 10,
    borderRadius: 8
  },
  ul_text: {
    color: '#fff',
    fontSize: 20
  },
  input_container: {
    backgroundColor: '#37474f',
    padding: 15,
    marginTop: 15,  
    borderRadius: 8,
    justifyContent: 'flex-end'    
  },
  input_text: {
    fontSize: 19,
    borderBottomWidth: 1,
    borderColor: '#738a96',
    padding: 8
  },
  btn:{
    backgroundColor: '#808080',
    alignItems: 'center',
    margin: 6,
    padding: 10,
    borderRadius: 10
  }
});
