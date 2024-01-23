import { 
    SafeAreaView, ScrollView,StatusBar,StyleSheet,
    Text,useColorScheme,View, Image, Button
  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {styles} from '../style';
import { NavigationContainer } from '@react-navigation/native';
import { ARectButton } from '../components/button';


function HistoricalView({navigation} : {navigation: any}) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const isEmpty = true;

    return (
        <SafeAreaView style={{backgroundColor: Colors.white}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            {isEmpty ?
                (<View style={{alignItems: "center",justifyContent: "center", height: "100%"}}>
                    <Image
                        source={{
                        uri: 'https://images.unsplash.com/photo-1499551660540-eaf0697882f5?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                        style={{width: 200, height: 200}}
                    />
                    <Text style={[styles.titleText, {marginVertical: 5}]}>Aucun produit</Text>
                    <Text style={[styles.subTitleText, {marginHorizontal: 50, marginVertical: 5}]}>Scannez le code-barres d'un produit pour commencer.</Text>
                    <ARectButton onPress={() => navigation.navigate('Scan')} title={"Scanner un produit"} />
                </View>)
            :
                (<ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{}}>
                    
                </ScrollView>)
            }    
        </SafeAreaView>
    );
}


export default HistoricalView;