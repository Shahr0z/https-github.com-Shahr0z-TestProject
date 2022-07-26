
export const COLORS = {
    Title: '#5646C0',
    subTitle: '#111827',
}

export const SIZES = {
    TitleSize: 22,
    subTitleSize: 16,
}

export const FONTSWeight = {
    TitleWeight: '600',
    subTitleWeight: '400'
}

export const LINEHEIGHT = {
    TitleHeight: 26,
    subTitleHeight: 24,
    bodyHeight: 19
}

export const alignText = {
    textalign: 'left'
}

export const FONTS = {
    Title: { fontFamily: 'OpenSans-Medium', color: COLORS.Title, fontSize: SIZES.TitleSize, fontWeight: FONTSWeight.TitleWeight, lineHeight: LINEHEIGHT.TitleHeight, textAlign: alignText.textalign },
    subTitle: { fontFamily: 'OpenSans-Medium', color: COLORS.subTitle, fontSize: SIZES.subTitleSize, fontWeight: FONTSWeight.subTitleWeight, lineHeight: LINEHEIGHT.subTitleHeight, textAlign: alignText.textalign },
    bodyStyle: { fontFamily: 'OpenSans-Medium', color: COLORS.subTitle, fontSize: SIZES.subTitleSize, fontWeight: FONTSWeight.subTitleWeight, lineHeight: LINEHEIGHT.bodyHeight, textAlign: alignText.textalign }
}

const Appstyles = { COLORS, SIZES, FONTSWeight, alignText, FONTS };
export default Appstyles;