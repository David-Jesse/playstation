import React, {useEffect, useRef} from "react";
import { useSelector} from "react-redux";
import { ApplicationStore } from "../../redux/types";
import { Theme } from "../../redux/App/types";
import { pageLoading } from "../../helper";
import Background from "./Background";

const getBackgroundBlend = (theme: Theme) => {
    switch (theme) {
        case Theme.DARK:
            return {backgroundColor: "#737272"};
        case Theme.LIGHT:
            return {backgroundColor: "#ffffff"};
        default:
            return {backgroundColor: "#737272"}
    }
}

const BackgroundContainer: React.FC = () => {
    const background = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const {selectedIndex, games} = useSelector(
        (state: ApplicationStore) => state.app
    );

    const style: React.CSSProperties = {
        backgroundImage: `url(${games[selectedIndex].wallpaperUrl})`,
        ...getBackgroundBlend(games[selectedIndex].theme),
    }

    useEffect(() => {
        if (background.current?.classList.contains('zoom')) {
            background.current.classList.remove('zoom');
        }
        const zoomTimeOut = setTimeout(() => {
            background.current?.classList.add('zoom');
        }, 100);

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }

        // let gameAudio: HTMLAudioElement;
        if (!pageLoading() && games[selectedIndex].audioUrl) {
          try {
            audioRef.current = new Audio(games[selectedIndex].audioUrl);
            audioRef.current.play().catch(err => {
                console.warn("Audio playback failed:", err)
            })
          } catch(err) {
            console.error("Error playing audio:", err)
          }
        }
        return () => {
          clearTimeout(zoomTimeOut);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
          }
        }
    }, [games, selectedIndex])
    return <Background style={style} background={background} />
}

export default BackgroundContainer;