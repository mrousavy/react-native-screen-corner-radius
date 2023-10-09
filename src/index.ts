import { NativeModules, Platform } from 'react-native';

/**
 * The current device's screen's corner radius. May also be `0` if the corner radius couldn't be detected.
 */
export const ScreenCornerRadius: number =
  Platform.OS === 'android'
    ? NativeModules.ScreenCornerRadius.getCornerRadius()
    : NativeModules.ScreenCornerRadius.cornerRadius;

/**
 * `true` if the screen has rounded corners, `false` otherwise.
 */
export const IsScreenRounded = ScreenCornerRadius > 0;
