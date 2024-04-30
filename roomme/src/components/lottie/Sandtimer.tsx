import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/sandtimer.json'

export const Sandtimer: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }
    return (
        <Lottie options={defaultOptions} height={200} width={200} />
    )
}
