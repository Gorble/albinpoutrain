import { useContext } from "react"
import { ThemeContext } from "../component/contexts/ThemeContext"

export default function AccueilSVG({whoActive}){

    const {theme} = useContext(ThemeContext)

    const bgActive = theme === "light" ? (whoActive === "/albinpoutrain/programme" ? "#00BD0B" : "none") : (whoActive === "/albinpoutrain/programme" ? "rgb(0, 43, 117)" : "none")
    const drawActive = theme === "light" ? (whoActive === "/albinpoutrain/programme" ? "#FFF" : "#000000") : (whoActive === "/albinpoutrain/programme" ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.4)")
    const stroke = whoActive === "/albinpoutrain/programme" ? "white" : "black"
    const strokeWidth = whoActive === "/albinpoutrain/programme" ? 4 : 0

    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet">
    <g  transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none" >
        <path fill={bgActive} d="M270 630 c-67 -11 -114 -34 -164 -80 -164 -151 -119 -423 85 -515 55
        -24 70 -27 143 -23 66 3 91 10 135 33 159 87 212 304 109 453 -68 98 -190 151
        -308 132z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M228 627 c-86 -25 -167 -97 -205 -184 -26 -58 -23 -194 4 -255 27
        -60 95 -127 158 -158 72 -35 198 -35 270 0 64 31 131 98 158 158 31 70 30 199
        -3 267 -30 63 -98 131 -156 156 -57 26 -165 33 -226 16z m214 -35 c59 -26 124
        -91 151 -151 30 -64 30 -178 0 -242 -27 -60 -92 -125 -152 -152 -64 -30 -178
        -30 -242 0 -129 59 -202 206 -169 342 43 180 242 278 412 203z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth={strokeWidth} d="M100 435 c0 -28 -4 -35 -20 -35 -18 0 -20 -7 -20 -80 0 -73 2 -80 20
        -80 16 0 20 -7 20 -35 l0 -35 55 0 55 0 0 60 0 60 110 0 110 0 0 -60 0 -60 55
        0 55 0 0 35 c0 28 4 35 20 35 18 0 20 7 20 80 0 73 -2 80 -20 80 -16 0 -20 7
        -20 35 l0 35 -55 0 -55 0 0 -60 0 -60 -110 0 -110 0 0 60 0 60 -55 0 -55 0 0
        -35z m48 -118 c-4 -166 -22 -169 -26 -5 -3 127 1 159 19 141 6 -6 8 -61 7
        -136z m42 3 c0 -87 -4 -140 -10 -140 -6 0 -10 53 -10 140 0 87 4 140 10 140 6
        0 10 -53 10 -140z m280 0 c0 -87 -4 -140 -10 -140 -6 0 -10 53 -10 140 0 87 4
        140 10 140 6 0 10 -53 10 -140z m48 -3 c-4 -166 -22 -169 -26 -5 -3 127 1 159
        19 141 6 -6 8 -61 7 -136z m-418 3 c0 -33 -4 -60 -10 -60 -6 0 -10 27 -10 60
        0 33 4 60 10 60 6 0 10 -27 10 -60z m460 0 c0 -33 -4 -60 -10 -60 -6 0 -10 27
        -10 60 0 33 4 60 10 60 6 0 10 -27 10 -60z m-130 0 c0 -6 -43 -10 -110 -10
        -67 0 -110 4 -110 10 0 6 43 10 110 10 67 0 110 -4 110 -10z"/>
    </g>
   </svg>
}