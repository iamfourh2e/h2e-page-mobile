import React, { Component } from 'react';
import { PixelRatio } from 'react-native';

const pixelRatio = PixelRatio.get();
const normalizeText = (size) => {
    if (pixelRatio == 2) {
        return size * 1.15;
    }
    if (pixelRatio == 3) {
        return size * 1.35;
    }
    return size * pixelRatio;
}
export default normalizeText;