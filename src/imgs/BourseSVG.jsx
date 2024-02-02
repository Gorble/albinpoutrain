export default function AccueilSVG({whoActive}){
    
    const bgActive = whoActive === "/albinpoutrain/bourse" ? "#00BD0B" : "#FFF"
    const drawActive = whoActive === "/albinpoutrain/bourse" ? "#FFF" : "#000000"
    const stroke = whoActive === "/albinpoutrain/bourse" ? "white" : "black"

    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
    preserveAspectRatio="xMidYMid meet">
    <g  transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none" >
        <path fill={bgActive} d="M270 630 c-67 -11 -114 -34 -164 -80 -164 -151 -119 -423 85 -515 55
        -24 70 -27 143 -23 66 3 91 10 135 33 159 87 212 304 109 453 -68 98 -190 151
        -308 132z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth="0" d="M228 627 c-86 -25 -167 -97 -205 -184 -26 -58 -23 -194 4 -255 27
        -60 95 -127 158 -158 68 -34 197 -35 267 -3 60 27 134 101 161 161 32 70 31
        199 -3 267 -31 63 -98 131 -156 156 -57 26 -165 33 -226 16z m214 -35 c59 -26
        124 -91 151 -151 32 -68 30 -179 -2 -245 -55 -112 -148 -171 -271 -171 -336 0
        -413 464 -95 578 62 22 153 18 217 -11z"/>
        <path fill={drawActive} stroke={stroke} strokeWidth="8" d="M277 490 c-45 -14 -95 -57 -108 -95 -10 -26 -19 -35 -36 -35 -14 0
        -23 -6 -23 -15 0 -8 9 -15 20 -15 11 0 20 -7 20 -15 0 -8 -9 -15 -20 -15 -11
        0 -20 -7 -20 -15 0 -9 9 -15 23 -15 16 0 27 -11 39 -38 29 -63 121 -101 211
        -88 53 8 69 18 61 39 -4 12 -11 14 -31 6 -64 -24 -155 -3 -187 43 -28 40 -21
        43 84 40 85 -3 100 -1 100 12 0 14 -16 16 -100 16 -89 0 -100 2 -100 18 0 15
        10 17 100 14 85 -3 100 -1 100 12 0 13 -15 16 -95 16 -102 0 -110 5 -79 48 26
        38 70 54 138 50 50 -2 61 0 64 13 2 10 -6 19 -20 23 -32 8 -107 6 -141 -4z"/>
    </g>
   </svg>
}