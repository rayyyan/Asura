import * as React from "react"
import { View } from "react-native"
import Svg, {
  Mask,
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

function BgGradient({ height = 1 }: { height: number }) {
  const bgHeight = height * 100 + 75
  return (
    <View
      style={{
        width: "100%",
        height: bgHeight,
        borderRadius: 40,
        overflow: "hidden",
      }}
    >
      <Svg fill="none">
        <Mask id="a" x={0} y={0} maskUnits="userSpaceOnUse">
          <Rect width={"100%"} height={bgHeight} rx={29} fill="#D9D9D9" />
        </Mask>
        <G mask="url(#a)">
          <Rect width={"100%"} height={bgHeight} rx={31} fill="url(#a)" />
          <Path
            transform="matrix(.7669 -.64176 .54136 .84079 219.61 -31.189)"
            fill="#fff"
            fillOpacity={0.11}
            d="M0 0H92.383V190.86H0z"
          />
          <Path
            transform="matrix(.7669 -.64176 .54136 .84079 192.13 90.898)"
            fill="#fff"
            fillOpacity={0.11}
            d="M0 0H107.22V190.86H0z"
          />
          <Path
            transform="matrix(.7669 -.64176 .54136 .84079 79.35 82.611)"
            fill="#fff"
            fillOpacity={0.11}
            d="M0 0H107.22V154.65H0z"
          />
          <Path
            transform="matrix(.76689 -.64178 .54138 .84078 -37.904 33.54)"
            fill="#fff"
            fillOpacity={0.11}
            d="M0 0H107.22V182.54H0z"
          />
          <Path
            transform="matrix(.84124 -.54067 .44328 .89638 .316 142.39)"
            fill="#fff"
            fillOpacity={0.11}
            d="M0 0H12.535V26.915H0z"
          />
        </G>
        <Defs>
          <LinearGradient
            id="a"
            x1={363.17}
            x2={-0.00086687}
            y1={69.333}
            y2={70.363}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF5367" offset={0} />
            <Stop stopColor="#F97B5B" offset={1} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  )
}

export default React.memo(BgGradient)
