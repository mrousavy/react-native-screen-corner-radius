declare module "react-native-screen-corner-radius" {
	/**
	 * The current device's screen's corner radius. May also be `0` if the corner radius couldn't be detected.
	 */
	export const ScreenCornerRadius: number;
	/**
	 * `true` if the screen has rounded corners, `false` otherwise.
	 */
	export const IsScreenRounded: boolean;
}