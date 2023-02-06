import { useEffect, useRef, FC, PropsWithChildren } from 'react'
import { Animated, ViewStyle } from 'react-native'

type FadeInAnimationProps = PropsWithChildren<{
  index: number
}>

const FadeInAnimation: FC<FadeInAnimationProps> = ({ index, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: index * 300,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInAnimation
