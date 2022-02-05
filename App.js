import AppLoading from 'expo-app-loading';
import { Image, StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Profiles, Icons} from './assets/Themes';


export default function App() {
    let [fontsLoaded] = useFonts({
        Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
        'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
    });
    if (!fontsLoaded) return <AppLoading />;
    /* ^Don't mind/edit the code above, it's there to load the font for you! */
    StatusBar.setBarStyle(Themes.dark.statusBar);
    /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

    /* insert your code here */

    return (
        <View style={[styles.container, { backgroundColor: Themes.dark.bg }]}>
            {/*App Bar*/}
            <View style={styles.appBar}>
                <Image style={styles.appIcons} source={Icons.menu.dark} />
                <Text style={styles.appTitle}>ensum</Text>
                <Image style={styles.appIcons} source={Icons.moon} />
            </View>
            {/*Main Body*/}
            <View style={styles.body}>
                {/*Profile Card*/}
                <View style={styles.profileCard}>
                    <Image style={styles.profileImage} source={Profiles.mtl.image} />
                    <Text style={styles.profileName}>{Profiles.mtl.name}</Text>
                    <Text style={styles.profileCaption}>{Profiles.mtl.caption}</Text>
                    <Text style={styles.profileAge}>{Profiles.mtl.age}</Text>
                </View>
                {/*Song Section*/}
                <View style={styles.soundCard}>
                    <Text style={styles.soundTitle}>My hottest take</Text>
                    <View style={styles.soundImageContainer}>
                        <Image style={styles.playImage} source={Icons.player.dark} />
                        <Image style={styles.soundImage} source={Icons.audioWave.dark} />
                    </View>
                </View>
            </View>
            {/*Navigation Bar*/}
            <View style={styles.navBar}>
                <View style={styles.navRow}>
                    <Image style={styles.navIcons} source={Icons.discover.dark} />
                    <Image style={styles.navIcons} source={Icons.heart.dark} />
                    <Image style={styles.navIcons} source={Icons.messages.dark} />
                </View>
                <View style={styles.navTextRow}>
                    <Text style={styles.navText}>Discover</Text>
                    <Text style={styles.navText}>Matches</Text>
                    <Text style={styles.navText}>DMs</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    appBar: {
        alignItems: 'center',
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 41 : 54,
        justifyContent: 'space-around'
    },
    appTitle: {
        color: Themes.dark.text,
        flex: 1,
        fontFamily: 'Sydney-Bold',
        fontSize: 32,
        textAlign: 'center'
    },
    appIcons: {
        flex: 1,
        resizeMode: 'contain',
        height: '90%'
    },
    body: {
        height: '80%'
    },
    profileCard: {
        alignItems: 'center',
        aspectRatio: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "flex-start",
        margin: '5%',
        overflow: 'hidden',
        shadowColor: Themes.dark.shadows.shadowColor,
        shadowOffset: Themes.dark.shadows.shadowOffset,
        shadowOpacity: Themes.dark.shadows.shadowOpacity,
        shadowRadius: Themes.dark.shadows.shadowRadius,
        width: '90%',
    },
    profileImage: {
        
    },
    profileName: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: Themes.dark.text,
        fontFamily: 'Sydney',
        fontSize: 32
    },
    profileCaption: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: Themes.dark.text,
        fontFamily: 'Sydney',
        fontSize: 18
    },
    profileAge: {
        position: 'absolute',
        top: 10,
        right: 10,
        color: Themes.dark.text,
        fontFamily: 'Sydney',
        fontSize: 18,
        textAlign: 'right'
    },
    soundCard: {
        backgroundColor: Themes.dark.bgSecondary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'column',
        margin: '5%',
        shadowColor: Themes.dark.shadows.shadowColor,
        shadowOffset: Themes.dark.shadows.shadowOffset,
        shadowOpacity: Themes.dark.shadows.shadowOpacity,
        shadowRadius: Themes.dark.shadows.shadowRadius,
        width: '90%'
    },
    soundTitle: {
        color: Themes.dark.text,
        fontFamily: 'Sydney',
        fontSize: 30,
        margin: '5%'
    },
    soundImageContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '10%',
        margin: '3%',
        width: '94%',
    },
    playImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    soundImage: {
        flex: 5,
        resizeMode: 'contain'
    },
    navBar: {
        alignItems: 'flex-start',
        backgroundColor: Themes.dark.navigation,
        height: Platform.OS === 'ios' ? 41 : 54,
        flexDirection: 'column',
    },
    navRow: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navIcons: {
        flex: 1,
        resizeMode: 'contain',
        height: '90%'
    },
    navTextRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navText: {
        color: Themes.dark.textSecondary,
        flex: 1,
        fontFamily: 'Sydney',
        textAlign: 'center'
    }
});
