import React, { Component } from 'react';
import { Platform, Image, ActivityIndicator, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import PhotoView from 'react-native-photo-view';

const styles = {
  slideC: {
    flex: 1,
  },
  scrollViewC: {
    position: 'absolute',
    left:0,top:0,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  loader: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) - 10,
    left: (Dimensions.get('window').width / 2) - 10,
  },
};

export class Slide extends Component {
  render() {
    const inside = {
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      left:0,right:0,
    };
    return (
      <View
        style={[
          styles.slideC,
          { width: Dimensions.get('window').width}
        ]} >
        {/* <ActivityIndicator style={styles.loader} /> */}
        {Platform.OS === 'android' ?
          <PhotoView
            source={this.props.item.image}
            maximumZoomScale={2}
            zoomScale={1}
            androidScaleType="center"
            resizeMode="contain"
            style={[
              styles.scrollViewC,
              inside
            ]}
          /> :
          <ScrollView
            maximumZoomScale={2}
            zoomScale={1}
            bounces={false}
            ref={ref => { this.scrollView = ref }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.scrollViewC}
            contentContainerStyle={[
              
            ]} >
            <TouchableOpacity activeOpacity={1} onPress={this.props.onSingleTap}>
              <Image source={this.props.item.image} style={inside} resizeMode="contain" />
            </TouchableOpacity>
          </ScrollView>
        }
        {this.props.item.overlay}
      </View>
    );
  }
}
