"use client";
import { useEffect } from "react";

declare var cast: any;

export default function Page() {
  useEffect(() => {
    const context = cast.framework.CastReceiverContext.getInstance();

    const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
    const LOG_RECEIVER_TAG = "Receiver";

    castDebugLogger.loggerLevelByEvents = {
      "cast.framework.events.category.CORE": cast.framework.LoggerLevel.INFO,
      "cast.framework.events.EventType.MEDIA_STATUS":
        cast.framework.LoggerLevel.DEBUG,
    };

    if (!castDebugLogger.loggerLevelByTags) {
      castDebugLogger.loggerLevelByTags = {};
    }

    castDebugLogger.loggerLevelByTags[LOG_RECEIVER_TAG] =
      cast.framework.LoggerLevel.DEBUG;

    castDebugLogger.info(LOG_RECEIVER_TAG, `Debug logger works !!!`);

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
