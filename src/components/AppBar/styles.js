import { StyleSheet, Dimensions } from 'react-native';
// constants
import { Layout, FontSizes } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: Layout.statusbarHeight,
  },
  header: {
    // height: Layout.header - Layout.appBarHeight,
    // position: 'absolute',
    // marginTop: Layout.appBarHeight + Layout.statusbarHeight,
    left: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  headerWithLargeTitle: {
    height: Layout.largeTopBarHeight,
    position: 'absolute',
    marginTop: Layout.appBarHeight + Layout.statusbarHeight,
    left: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  headerWithSearchBar: {
    height: 54,
    position: 'absolute',
    marginTop: Layout.appBarHeight + Layout.statusbarHeight,
    left: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  headerBar: {
    height: Layout.appBarHeight,
    flexDirection: 'row'
  },
  appBarIconLeft: {
    width: 44 / 3,
    height: Layout.appBarHeight,
    marginLeft: 10,
    justifyContent: 'center',
  },
  appBarTitleLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  appBarTitleCenter: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarIconRight: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  largeTitleBar: {
    height: Layout.largeTopBarHeight,
    paddingLeft: 14,
    paddingBottom: 5,
    justifyContent: 'center',
    left: 0,
    right: 0
  },
  searchBarHeight: {
    height: Layout.searchBarHeight,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    right: 0,
    left: 0
  },
  searchBox: {
    height: Layout.searchBoxHeight,
    backgroundColor: 'rgba(142,142,147,.12)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  textInputIcon: {
    width: 14,
    height: 14
  },
});