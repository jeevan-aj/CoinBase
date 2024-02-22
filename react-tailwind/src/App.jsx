import styles from "./style";
import "./index.css";

import {
  Billing,
  Bussiness,
  Carddeal,
  Client,
  Cta,
  FeedbackCard,
  Footer,
  Hero,
  Navbar,
  Testimonial,
  Stats
} from "./components/index";

function App() {
  return (
    <div>
      <div className={"bg-primary  w-full overflow-hidden"}>
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
            <Stats/>
            <Bussiness />
            <Billing />
            <Carddeal />
            <Client />
            <Cta />
            <FeedbackCard />
            <Footer />
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
