import { useContext } from "react"
import { ThemeContext } from "../component/contexts/ThemeContext"

export default function AccueilSVG({whoActive}){

    const {theme} = useContext(ThemeContext)

    const bgActive = theme === "light" ? (whoActive === "/albinpoutrain/jeu" ? "#00BD0B" : "none") : (whoActive === "/albinpoutrain/jeu" ? "rgb(0, 43, 117)" : "none")
    const drawActive = theme === "light" ? (whoActive === "/albinpoutrain/jeu" ? "#FFF" : "#000000") : (whoActive === "/albinpoutrain/jeu" ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.4)")
    const stroke = whoActive === "/albinpoutrain/jeu" ? "white" : "black"
    const strokeWidth = whoActive === "/albinpoutrain/jeu" ? 4 : 0

    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet">
    <g  transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none" >
        <path fill={bgActive} d="M270 630 c-67 -11 -114 -34 -164 -80 -164 -151 -119 -423 85 -515 55
        -24 70 -27 143 -23 66 3 91 10 135 33 159 87 212 304 109 453 -68 98 -190 151
        -308 132z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M245 631 c-92 -24 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 35
        -71 75 -114 144 -151 58 -31 70 -34 148 -33 72 0 93 4 136 26 75 40 107 70
        145 140 31 58 34 70 33 148 0 72 -4 93 -26 136 -39 75 -70 107 -137 143 -65
        34 -164 49 -226 32z m209 -45 c105 -51 161 -144 161 -266 0 -85 -21 -142 -74
        -203 -82 -92 -237 -121 -353 -64 -164 80 -215 281 -113 439 77 118 245 159
        379 94z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M350 551 c-6 -12 -10 -60 -9 -108 2 -107 -16 -166 -52 -172 -22 -3
        -35 -14 -96 -85 -13 -14 -23 -37 -23 -51 l0 -25 150 0 c143 0 150 1 150 20 0
        25 -50 98 -72 105 -10 4 -18 13 -18 21 0 8 -10 14 -26 14 -18 0 -25 4 -21 14
        3 8 11 34 18 57 7 24 24 58 38 74 14 17 35 49 45 73 22 50 14 65 -41 77 -26 5
        -34 2 -43 -14z"/>
    </g>
   </svg>
}