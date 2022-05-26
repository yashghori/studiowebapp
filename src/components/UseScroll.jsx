import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const UseScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 })
    if (view) {
        controls.start("show")
    }
    else {
        controls.start("hidden")

    }

    return (
        [element, controls]
    )
}

export default UseScroll