import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'peruseRN',
  slug: 'peruseRN',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon_2.png',
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon_2.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.peruse.peruseRN',
  },
};

export default config;
