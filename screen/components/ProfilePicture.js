import {Image, StyleSheet} from 'react-native';
export default function ProfilePicture(){
    return(
        <Image
            style={styles.profile}
            source={{
            uri: 'https://avatars.mds.yandex.net/i?id=37d3e4aa2996385f61f9a278507b4f01c35c56b5-4395607-images-thumbs&n=13',
            }}
        />
    )
}
const styles = StyleSheet.create({
    profile:{
        marginTop:20,
        height:100,
        width:100,
        backgroundColor:'wheat',
        borderRadius:50
    }
  });