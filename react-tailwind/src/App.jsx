import styles from "./style";
import './index.css'

import {
  Billing,
  Bussiness,
  Carddeal,
  Client,
  Cta,
  FeedbackCard,
  Footer,
  Getstarted,
  Hero,
  Navbar,
  Status,
  Testimonial,
} from "./components/index";

function App() {
  return (
    <div className={"bg-primary text-white w-full overflow-hidden"}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <Bussiness />
          <Carddeal />
          <Client />
          <Cta />
          <FeedbackCard />
          <Footer />
          <Getstarted />
          <Status />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default App;
