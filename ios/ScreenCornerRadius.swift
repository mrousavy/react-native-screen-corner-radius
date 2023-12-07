//
//  ScreenCornerRadius.swift
//  ScreenCornerRadius
//
//  Created by Marc Rousavy on 10.12.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit


@objc(ScreenCornerRadius)
class ScreenCornerRadius: NSObject {
  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["cornerRadius": UIScreen.main.displayCornerRadius]
  }
}
