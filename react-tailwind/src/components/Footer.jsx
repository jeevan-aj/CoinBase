import styles from "../style"
import {logo} from '../assets'
import { footerLinks,socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className={`flex flex-1 flex-col justify-start mr-10`}>
      <img src={logo} alt="hoobank"  className="w-[266px] h-[72px] object-contain"/>
      <p className={`${styles.paragraph} mt-4  max-w-[310px] `}>A new way to make the payments easy, reliable and secure.</p>
    </div>
    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
  {footerLinks.map(footerLink=> (
     <div key={footerLink.key} className="flex-col flex ss:my-0 my-4 min-w-[150px]">
      <h4 className="font-poppins text-white font-medium text-[18px] leading-[24px] ">{footerLink.title}</h4>
      <ul className="mt-4 list-none">
       {footerLink.links.map((link,index)=> (
        <li key={link.name} className={`font-poppins font-normal leading-[24px]  text-[16px] text-dimWhite hover:text-secondary ${index != footerLink.links.length-1 ? "mb-4":"mb-0"}`}>
          {link.name}
        </li>
       ))}
      </ul>

     </div>
  ))}
    </div>
    </div>
    <div className={`flex justify-between w-full  border-t-[1px] border-t-dimWhite pt-10`}>
      <h4 className={`font-poppins text-white font-normal text-[8px] md:text-[16px] leading-[24px]`}>Copyright
2021 HooBank. All Rights Reserved.</h4>
      <ul className="list-none flex items-center">
        {socialMedia.map(icon => (
          <li key={icon.key}>
            <img src={icon.icon} alt="social media icons" className={`${icon !== socialMedia.length-1 ? 'mr-4' : 'mr-0'} cursor-pointer w-[14px] sm:w-[24px]`} />
          </li>
        ))}
      </ul>
    </div>

  </section>
)

export default Footer