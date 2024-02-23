import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute -top-10 z-[3] -right-3/4 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute top-0 z-[3] -right-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />

      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ${styles.paddingX} ${styles.flexCenter}`}
      >
        <h1 className={`${styles.heading2} `}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph}  tex-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-center xs:justify-start justify-center w-full feedback-container relative z-[1] ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
