const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "1",
      question: "Apa saja syarat yang dibutuhkan?",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "2",
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "3",
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "4",
      question: "Apakah Ada biaya antar-jemput?",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "5",
      question: "Bagaimana jika terjadi kecelakaan",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];

  return (
    <div className="accordion" id="accordionFaq">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`accordion-item mb-3 ${
            item.active ? "active" : ""
          } accordionFaqItem`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${!item.active ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={item.active ? "true" : "false"}
              aria-controls={item.id}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={item.id}
            className={`accordion-collapse collapse ${
              item.active ? "show" : ""
            }`}
            data-bs-parent="#accordionFaq"
          >
            <div className="accordion-body">
              <strong>{item.answer}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
