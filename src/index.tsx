import { NativeModules } from 'react-native';

type ScreenCornerRadiusType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ScreenCornerRadius } = NativeModules;

export default ScreenCornerRadius as ScreenCornerRadiusType;
