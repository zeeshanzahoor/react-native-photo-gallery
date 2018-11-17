import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

class SwiperThumb extends Component {
  goToSlide() {
    this.props.navigate(this.props.index);
  }

  render() {
    return (
      <TouchableOpacity
        style={s.container}
        onPress={this.goToSlide.bind(this)}>
        <Image
          style={{ ...s.thumb, opacity: this.props.active ? 1 : 0.6, width: this.props.active ? 40 : s.thumb.height, }}
          source={this.props.data[this.props.index].thumb || this.props.data[this.props.index].image}
        />
      </TouchableOpacity>
    );
  }
}

const s = {
  container: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  thumb: {
    width: 30,
    height: 40,
  },
  active: {
    width: 60,
  }
};

export default SwiperThumb;
