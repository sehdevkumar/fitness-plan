import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Landing from './views/home/landing';

export const blurhash =
   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
   return (
      <View style={styles.container}>
         <Image
            style={styles.image}
            source=""
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
         />
         <Landing/>
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
   image: {
      flex: 1,
      width: '100%',
      height :'100%',
      backgroundColor: '#0553',
      position: 'absolute',
      zIndex: -1
   },
});