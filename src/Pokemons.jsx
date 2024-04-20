import { useEffect, useRef } from "react";

export default function Pokemon({poke}){

    const nazwaPokemona = poke ? poke.forms[0].name : "";
    const Pokemun = nazwaPokemona.charAt(0).toUpperCase() + nazwaPokemona.slice(1)
            
            return(
        <>
            <h1>Pokemon: {Pokemun}</h1>
            <p>Typ: {poke?.types.map((typeP)=>wielkaLiterka(typeP.type.name)).join(", ") || "—"}</p>
            <p>Wysokość: {((poke?.height)*10) || "— "}cm</p>
            <p>Waga: {((poke?.weight)/10) || "— "}kg</p>
        </>
    )
}

function wielkaLiterka(mala){
    const typ = mala.charAt(0).toUpperCase() + mala.slice(1)
    return typ
}