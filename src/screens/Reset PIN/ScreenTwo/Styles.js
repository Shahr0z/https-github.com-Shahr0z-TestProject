import { StyleSheet } from 'react-native'
const Styles = StyleSheet.create({
    Backbtn: {
        width: 30,
        height: 30,
        margin: '2%'
    },
    Main: {
        flex: 1,
        width: '96%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '6%',
        marginHorizontal: '5%',
        paddingHorizontal: '4%',
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: '#5545BF',
        borderWidth: 1
    },
    Title: {
        color: 'black',
        marginVertical: '5%',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        fontFamily: 'Roboto-BlackItalic',
    },
    SubTitle: {
        fontWeight: '600',
        fontSize: 14,
        color: '#555555',
        letterSpacing: 1,
        marginTop: 20
    },
    SubTitle2: {
        fontWeight: '600',
        fontSize: 14,
        color: '#555555',
        letterSpacing: 1,
        marginBottom: '12%'
    },
    QuesBox: {
        width: '100%',
        justifyContent: 'center',
        marginVertical: '2%'
    },
    Questions: {
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.5,
        color: 'black'
    },
    Btnbox: {
        justifyContent: 'center',
        marginVertical: "10%"
    }
})


export default Styles;