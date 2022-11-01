import s from './Loader.module.css'
import { ThreeCircles } from  'react-loader-spinner'
const Loader = () => (
    <div className={s.containerLoader}>
        <ThreeCircles
  height="100"
  width="100"
  color="#3f51b5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
)
export default Loader;