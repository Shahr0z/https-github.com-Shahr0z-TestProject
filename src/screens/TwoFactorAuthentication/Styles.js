import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: 'white'
    },
    dataBox: {
        marginTop: '2%',
        marginHorizontal: '6%',
    },
    backBox: {
        height: '34%',
        width: '20%',
        marginTop: '6%'
    },
    backBtn: {
        height: '15%',
        width: '14%',
    },
    logo: {
        width: '24%',
        height: '29%',
        borderRadius: 180,
        borderColor: Colors.Title,
        borderWidth: 1,
        bottom: '100%'
    },
    otherBox: {
        bottom: '47%'
    },
    titleBox: {
        marginBottom: '4%'
    },
    Title: {
        fontFamily: Fonts.fontfamily,
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 26,
        color: Colors.Title,
        textAlign: 'left',
        letterSpacing: 0,
    },
    subTitleBox: {
        marginVertical: '1%'
    },
    subTitle: {
        fontFamily: Fonts.fontfamily,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.subTitle,
        textAlign: 'left',
        letterSpacing: 0.2,
    },
    bodyStyle: {
        fontFamily: Fonts.fontfamily,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: Colors.bodyText,
        textAlign: 'left',
        letterSpacing: 0.5,
    },
    switchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54,
        borderColor: Colors.Title,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: '4%',
        marginTop: '7%'
    },
    faceIdBox: {
        justifyContent: 'center',
        borderColor: Colors.faceIdBox,
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: '10%'
    },
    faceId: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54,
        paddingHorizontal: '4%',
        paddingLeft: '6%'
    },
    btnBox: {
        bottom: '36%',
        alignItems: 'center'
    },
    manageText: {
        fontFamily: Fonts.fontfamily,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: Colors.Title,
        textAlign: 'left',
        letterSpacing: 0.5,
    },
    btnText: {
        fontFamily: Fonts.fontfamily,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: Colors.btnText,
        textAlign: 'left',
        letterSpacing: 0.5,
        backgroundColor: Colors.Title,
        borderRadius: 6,
        paddingVertical: '6%',
        paddingHorizontal: '40%'
    }

})

export default Styles;