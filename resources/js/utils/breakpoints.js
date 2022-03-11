import { useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints({
    sm: '640px',
    md: '769px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
})

const tablet = breakpoints.greater('md')

export { tablet }
