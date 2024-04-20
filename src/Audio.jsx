import { useEffect, useRef } from "react";

export default function Audio({poke}){

    const audioRef = useRef(null)
    useEffect(()=>{if(audioRef){audioRef.current.volume = 0.5}},[audioRef])

        return(
            <>
            <div id="guziczki">
                <button onClick={()=>{if(audioRef){audioRef.current.play()}}}>Otwórz dźwięk!</button>
            </div>
            <audio src={poke?.cries.latest} ref={audioRef} autoPlay></audio>
            </>
        )
}