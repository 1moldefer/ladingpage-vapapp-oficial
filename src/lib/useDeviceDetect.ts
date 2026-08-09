"use client";

import { useState, useEffect } from "react";

type DeviceType = "ios" | "android" | "other";

export function useDeviceDetect(): DeviceType {
  const [device, setDevice] = useState<DeviceType>("other");

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(ua)) {
      setDevice("ios");
    } else if (/android/i.test(ua)) {
      setDevice("android");
    } else {
      setDevice("other");
    }
  }, []);

  return device;
}
