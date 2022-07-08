import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'PeruseRN',
  slug: 'PeruseRN',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/logo_2.jpg',
  splash: {
    image: './assets/logo_2.jpg',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon_2.png',
      backgroundColor: '#FFFFFF',
    },
    softwareKeyboardLayoutMode: 'pan',
    package: 'com.peruse.peruseRN',
  },
};

export default config;
