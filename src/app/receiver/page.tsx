"use client";
import { useEffect } from "react";

declare var cast: any;

export default function Page() {
  useEffect(() => {
    const context = cast.framework.CastReceiverContext.getInstance();
    const playerManager = context.getPlayerManager();

    const castReceiverOptions = new cast.framework.CastReceiverOptions();

    const playbackConfig = new cast.framework.PlaybackConfig();
    playbackConfig.autoResumeDuration = 5;
    castReceiverOptions.playbackConfig = playbackConfig;

    castReceiverOptions.supportedCommands =
      cast.framework.messages.Command.ALL_BASIC_MEDIA;

    context.start(castReceiverOptions);
  }, []);

  return (
    <audio
      autoPlay
      controls
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    />
  );
}
