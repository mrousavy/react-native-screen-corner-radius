package com.reactnativescreencornerradius

import android.os.Build
import android.view.RoundedCorner
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.view.View
import com.facebook.react.bridge.*

class ScreenCornerRadiusModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {
  private var rootView: View? = null

  override fun getName(): String {
    return "ScreenCornerRadius"
  }

  override fun getConstants(): MutableMap<String, Any?> {
    val cornerRadius = getCornerRadius()

    return mutableMapOf(
      "cornerRadius" to cornerRadius,
    )
  }

  fun getCornerRadius(): Int {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
      rootView = reactApplicationContext.currentActivity?.window?.decorView?.findViewById(android.R.id.content)
      if (rootView != null) {
        val corner =
          rootView?.rootWindowInsets?.getRoundedCorner(RoundedCorner.POSITION_TOP_LEFT)
        return corner?.radius ?: 0;
      }
      return 0
    }
    return 0
  }
}
