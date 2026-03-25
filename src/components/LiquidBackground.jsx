import { LiquidMetal } from '@paper-design/shaders-react'
import './LiquidBackground.css'

function LiquidBackground() {
  return (
    <div className="liquid-background" aria-hidden="true">
      <LiquidMetal
        width="100%"
        height="100%"
        colorBack="#fffefe5a"
        colorTint="#ffffff32"
        shape="metaballs"
        repetition={1}
        softness={1.0}
        shiftRed={-0.0}
        shiftBlue={0.0}
        distortion={0.0}
        contour={3.0}
        angle={86}
        speed={1.5}
        scale={2.68}
        rotation={108}
        offsetX={0.0}
        offsetY={0}
        fit="cover"
      />
    </div>
  )
}

export default LiquidBackground
