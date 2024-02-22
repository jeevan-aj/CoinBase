import styles from '../style'
import {stats} from '../constants'

const Stats = () => {
  return (
   <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat)=> (
      <div key={stat.id} className={`${styles.flexCenter} flex-1 justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}
        </h4>
        <p className='text-gradient font-poppins font-normal xs:text-[20] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 '>{stat.title}</p>
      </div>
    ))}

   </section>
  )
}

export default Stats