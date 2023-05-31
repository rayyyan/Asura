import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Settings = ({ size }: { size: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.55 7.25h-7.6c-.52 0-.95-.34-.95-.75s.43-.75.95-.75h7.6c.52 0 .95.34.95.75s-.43.75-.95.75zM6 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#292D32"
      />
      <Path
        d="M9.25 9.5C7.46 9.5 6 8.04 6 6.25S7.46 3 9.25 3s3.25 1.46 3.25 3.25S11.04 9.5 9.25 9.5zm0-5.353c-1.162 0-2.103.94-2.103 2.103 0 1.162.94 2.103 2.103 2.103 1.162 0 2.103-.94 2.103-2.103 0-1.162-.94-2.103-2.103-2.103zM14.25 20.5c-1.79 0-3.25-1.46-3.25-3.25S12.46 14 14.25 14s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5.353c-1.162 0-2.103.94-2.103 2.103 0 1.162.94 2.103 2.103 2.103 1.162 0 2.103-.94 2.103-2.103 0-1.162-.94-2.103-2.103-2.103z"
        fill="#292D32"
      />
      <Path
        d="M22 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM9.55 18.25h-7.6c-.52 0-.95-.34-.95-.75s.43-.75.95-.75h7.6c.52 0 .95.34.95.75s-.43.75-.95.75z"
        fill="#292D32"
      />
    </Svg>
  )
}

export default Settings