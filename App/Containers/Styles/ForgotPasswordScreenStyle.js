import { StyleSheet, StatusBar } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  backgroundImage: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  container: {
    paddingBottom: Metrics.baseMargin,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - (StatusBar.currentHeight || 0)
  },
  logo: {
    marginVertical: Metrics.doubleSection * 1.5,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  icon: {
    ...ApplicationStyles.iconSmall
  },
  middleSection: {
    width: Metrics.screenWidth
  },
  sectionText: {
    ...Fonts.style.description,
    alignSelf: 'center',
    marginVertical: Metrics.baseMargin
  },
  buttons: {
    marginHorizontal: Metrics.screenWidth / 9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialButton: {
    height: 40,
    width: Metrics.screenWidth / 3,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSection: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 90
  },
  bottomSectionText: {
    ...Fonts.style.description
  }
})
