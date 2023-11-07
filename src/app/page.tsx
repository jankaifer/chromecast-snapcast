"use client";

import { useEffect } from "react";

declare var cast: any;
declare var chrome: any;

let stuffExecuted = false;

export default function Home() {
  useEffect(() => {
    if (stuffExecuted) return;
    stuffExecuted = true;
    // @ts-ignore
    window["__onGCastApiAvailable"] = function (isAvailable: boolean) {
      if (isAvailable) {
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId: "1F35E02D",
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        });
      }
    };

    const script = document.createElement("script");
    script.src =
      "//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
    document.head.appendChild(script);
  }, []);
  return <>try casting</>;
}
