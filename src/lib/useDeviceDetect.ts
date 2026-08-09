"use client";

import { useState, useEffect } from "react";

type DeviceType = "ios" | "android" | "other";

interface DeviceInfo {
  device: DeviceType;
  isInstagram: boolean;
  /** true when iOS + Instagram in-app browser */
  isInstagramIOS: boolean;
}

/**
 * Detects the user's device (iOS / Android / other)
 * and whether the page is running inside Instagram's in-app browser.
 */
export function useDeviceDetect(): DeviceInfo {
  const [info, setInfo] = useState<DeviceInfo>({
    device: "other",
    isInstagram: false,
    isInstagramIOS: false,
  });

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;

    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /android/i.test(ua);
    const isInstagram = /Instagram/i.test(ua);

    const device: DeviceType = isIOS ? "ios" : isAndroid ? "android" : "other";

    setInfo({
      device,
      isInstagram,
      isInstagramIOS: isIOS && isInstagram,
    });
  }, []);

  return info;
}
