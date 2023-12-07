//
//  ScreenCornerRadius.swift
//  ScreenCornerRadius
//
//  Created by Marc Rousavy on 10.12.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit
import React

@objc(ScreenCornerRadius)
class ScreenCornerRadius: NSObject, RCTBridgeModule {
  static func moduleName() -> String! {
    return "ScreenCornerRadius"
  }

  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["cornerRadius": UIScreen.main.displayCornerRadius]
  }
}
