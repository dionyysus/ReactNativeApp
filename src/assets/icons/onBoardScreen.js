/* @flow */


import *as React from 'react';
import {Svg,Path} from 'react-native-svg';

export default props => (
    <Svg viewBox = '0 0 24 24 ' height = '24' width = '24' {...props}>
        <Path
            d= 'https://lh3.googleusercontent.com/mRQzyQA0LxbMEZOEBCeS1-S8uybMGfJMUl0A183nrI0yQaf94Zlxwex3It87CNylhseuO8Fo45ZKXUhg_A=w768-h768-n-o-v1'
            fill = {props.tintColor || '#fff'}
        />
    </Svg>
)