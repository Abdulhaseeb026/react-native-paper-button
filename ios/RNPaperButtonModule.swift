//
//  RNPaperButtonModule.swift
//  RNPaperButtonModule
//
//  Copyright © 2021 Abdul Haseeb. All rights reserved.
//

import Foundation

@objc(RNPaperButtonModule)
class RNPaperButtonModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
