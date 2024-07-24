import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section id="FAQ">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pe-4 mb-3">
            <h2>Frequently Asked Question</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
          </div>
          <div className="col-md-7">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
