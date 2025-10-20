"use client"

import Script from "next/script"

export default function Home() {
  return (
    <>
      {/* UTMIFY Pixel Script */}
      <Script id="utmify-pixel" strategy="afterInteractive">
        {`
          window.pixelId = "68effe93e54852a59d64262d";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `}
      </Script>

      {/* UTMIFY UTMs Script */}
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        data-utmify-ignore-iframe
        data-utmify-is-cartpanda
        strategy="afterInteractive"
      />

      {/* Header section with A/B test video player */}
      <header id="video" className="py-5" data-vdelay="2469" style={{ backgroundColor: "#000" }}>
        <div className="container text-center">
          <h1 className="text-white mb-4">INCREASE YOUR VOLUME!</h1>
          <vturb-smartplayer
            id="ab-68eabdecd24a61add3545a37"
            style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
          ></vturb-smartplayer>
          <Script
            src="https://scripts.converteai.net/bb9a016c-cd8e-4f00-8ae2-e0cd82fad682/ab-test/68eabdecd24a61add3545a37/player.js"
            strategy="afterInteractive"
          />
        </div>
      </header>

      <main className="esconder">
        {/* CTA Headline */}
        <section
          className="py-3 py-md-5 position-relative"
          data-aos="fade-down"
          style={{ backgroundColor: "var(--text-color)", zIndex: 1 }}
        >
          <div className="container text-center text-white">
            <h2 className="cta-title m-0 text-white">
              Claim Your Discounted Ereforce
              <br /> Now While Supplies Last!
            </h2>
          </div>
        </section>

        <div id="arrow" className="mb-1">
          <i className="bi bi-caret-down gtriangle text-white"></i>
          <i className="bi bi-caret-down-fill triangle"></i>
        </div>

        {/* CTA Lander */}
        <section className="py-4 products">
          <div className="container">
            <div className="row align-items-center">
              {/* 6 Bottles */}
              <div className="col-12 col-md-4 mb-3 order-md-2" data-aos="zoom-in">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927746:1?afid=tUzbrtdsPA"
                  title="6 Bottles"
                  className="item promo buylink"
                  onClick={(e) => {
                    e.preventDefault()
                    const params = window.location.search
                    window.location.href =
                      "https://ereforce.mycartpanda.com/checkout/184927746:1?afid=tUzbrtdsPA" +
                      (params ? "&" + params.substring(1) : "")
                    return false
                  }}
                >
                  <div className="wrapper">
                    <div className="item-header">BEST VALUE!</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>6 BOTTLES</b>180 DAYS SUPPLY
                      </div>
                      <img src="/images/img-6-bottles.webp" alt="6 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>49
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $780!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button promo">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards-dark.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$1074</s> <b>$294</b>
                      </div>
                      <div className="shipping">
                        + <span>FREE</span> SHIPPING
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 3 Bottles */}
              <div className="col-12 col-md-4 mb-3 order-md-3" data-aos="zoom-in" data-aos-delay="400">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927745:1?afid=tUzbrtdsPA"
                  title="3 Bottles"
                  className="item buylink"
                  onClick={(e) => {
                    e.preventDefault()
                    const params = window.location.search
                    window.location.href =
                      "https://ereforce.mycartpanda.com/checkout/184927745:1?afid=tUzbrtdsPA" +
                      (params ? "&" + params.substring(1) : "")
                    return false
                  }}
                >
                  <div className="wrapper">
                    <div className="item-header">Most Popular</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>3 BOTTLES</b>90 DAYS SUPPLY
                      </div>
                      <img src="/images/img-3-bottles.webp" alt="3 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>69
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $330!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$537</s> <b>$207</b>
                      </div>
                      <div className="shipping">
                        + <span>FREE</span> SHIPPING
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 2 Bottles */}
              <div className="col-12 col-md-4 mb-3 order-md-1" data-aos="zoom-in" data-aos-delay="200">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927744:1?afid=tUzbrtdsPA"
                  title="2 Bottles"
                  className="item buylink"
                  onClick={(e) => {
                    e.preventDefault()
                    const params = window.location.search
                    window.location.href =
                      "https://ereforce.mycartpanda.com/checkout/184927744:1?afid=tUzbrtdsPA" +
                      (params ? "&" + params.substring(1) : "")
                    return false
                  }}
                >
                  <div className="wrapper">
                    <div className="item-header">Basic</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>2 BOTTLES</b>60 DAYS SUPPLY
                      </div>
                      <img src="/images/img-2-bottles.webp" alt="2 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>79
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $200!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$358</s> <b>$158</b>
                      </div>
                      <div className="shipping">+9.99 SHIPPING</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section id="guarantee" className="p-5 position-relative mx-0" data-aos="fade-up">
          <div
            className="position-absolute d-none d-sm-block opacity-50"
            style={{ bottom: "3rem", left: "-1vw", zIndex: 10 }}
          >
            <img src="/images/roar02.png" alt="Roar" style={{ maxWidth: "180px" }} />
          </div>
          <div
            className="position-absolute d-none d-sm-block opacity-50"
            style={{ top: "2rem", right: "0vw", zIndex: 10 }}
          >
            <img src="/images/roar01.png" alt="Roar" style={{ maxWidth: "180px", rotate: "180deg" }} />
          </div>
          <div className="container position-relative" style={{ maxWidth: "1100px" }}>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-3 text-center">
                <figure>
                  <img
                    src="/images/guarantee-badge.webp"
                    alt="Guarantee"
                    className="mb-3"
                    style={{ maxWidth: "200px" }}
                  />
                </figure>
              </div>
              <div className="col-12 col-md-9" style={{ color: "var(--text-color)" }}>
                <h4 className="mb-3 text-center" style={{ fontWeight: 600, color: "var(--secondary-color-dark)" }}>
                  We're so confident Ereforce will reignite your vitality,
                  <br className="d-none d-md-block" />
                  we back it with a 100% satisfaction guarantee for 180 days.
                </h4>
                <p className="m-0">
                  Start using Ereforce as soon as it arrives, and within days, you might notice enhanced energy,
                  improved stamina, and a stronger sense of confidence. Over time, as your body adjusts to the natural
                  formula, you could experience firmer, more consistent performance and a renewed sense of intimacy in
                  your relationships.
                </p>
                <p className="m-0">
                  This is your opportunity to track your transformation—whether it's regaining the energy for date
                  nights, feeling revitalized during your workouts, or simply rediscovering the confidence you thought
                  was gone.
                </p>
                <p className="m-0">
                  If after several weeks or even months you're not completely satisfied with your results, we'll refund
                  your money in full—no questions asked. With Ereforce, you're not just taking control of your
                  vitality—you're taking control of your life.
                </p>
                <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center mt-4 badges">
                  <figure>
                    <img src="/images/gmp.png" alt="Badge" />
                  </figure>
                  <figure>
                    <img src="/images/nat.png" alt="Badge" />
                  </figure>
                  <figure>
                    <img src="/images/foreign.png" alt="Badge" />
                  </figure>
                  <figure>
                    <img src="/images/gmo.png" alt="Badge" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Headline */}
        <section
          className="py-3 py-md-5 position-relative"
          data-aos="fade-down"
          style={{ backgroundColor: "var(--text-color)", zIndex: 1 }}
        >
          <div className="container text-center text-white">
            <h2 className="cta-title m-0 text-white">
              Claim Your Discounted Ereforce
              <br /> Now While Supplies Last!
            </h2>
          </div>
        </section>

        <div id="arrow" className="mb-1">
          <i className="bi bi-caret-down gtriangle text-white"></i>
          <i className="bi bi-caret-down-fill triangle"></i>
        </div>

        {/* CTA Lander - Repeat */}
        <section className="py-4 products">
          <div className="container">
            <div className="row align-items-center">
              {/* Same 3 product cards repeated */}
              <div className="col-12 col-md-4 mb-3 order-md-2" data-aos="zoom-in">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927746:1?afid=tUzbrtdsPA"
                  title="6 Bottles"
                  className="item promo buylink"
                >
                  <div className="wrapper">
                    <div className="item-header">BEST VALUE!</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>6 BOTTLES</b>180 DAYS SUPPLY
                      </div>
                      <img src="/images/img-6-bottles.webp" alt="6 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>49
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $780!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button promo">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards-dark.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$1074</s> <b>$294</b>
                      </div>
                      <div className="shipping">
                        + <span>FREE</span> SHIPPING
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-4 mb-3 order-md-3" data-aos="zoom-in" data-aos-delay="400">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927745:1?afid=tUzbrtdsPA"
                  title="3 Bottles"
                  className="item buylink"
                >
                  <div className="wrapper">
                    <div className="item-header">Most Popular</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>3 BOTTLES</b>90 DAYS SUPPLY
                      </div>
                      <img src="/images/img-3-bottles.webp" alt="3 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>69
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $330!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$537</s> <b>$207</b>
                      </div>
                      <div className="shipping">
                        + <span>FREE</span> SHIPPING
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-4 mb-3 order-md-1" data-aos="zoom-in" data-aos-delay="200">
                <a
                  href="https://ereforce.mycartpanda.com/checkout/184927744:1?afid=tUzbrtdsPA"
                  title="2 Bottles"
                  className="item buylink"
                >
                  <div className="wrapper">
                    <div className="item-header">Basic</div>
                    <div className="item-img">
                      <div className="supply">
                        <b>2 BOTTLES</b>60 DAYS SUPPLY
                      </div>
                      <img src="/images/img-2-bottles.webp" alt="2 Bottles" />
                    </div>
                    <div className="item-info">
                      <div className="price">
                        <b>
                          <sup>$</sup>79
                        </b>
                        <span>
                          PER
                          <br />
                          BOTTLE
                        </span>
                      </div>
                      <div className="savings">
                        <div>
                          <span>YOU SAVE $200!</span>
                        </div>
                        <div>
                          <span>BIGGEST DISCOUNT</span>
                        </div>
                        <div>
                          <span>180 DAYS GUARANTEE</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-buy">
                      <div className="button">
                        <div>
                          <span>BUY NOW</span>
                        </div>
                      </div>
                      <img src="/images/cards.webp" alt="Cards" className="card-flags" />
                    </div>
                    <div className="item-totals">
                      <div className="totals">
                        Total: <s>$358</s> <b>$158</b>
                      </div>
                      <div className="shipping">+9.99 SHIPPING</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-5"
          data-aos="fade-in"
          style={{ backgroundImage: "url(/images/faq.webp)", backgroundSize: "cover" }}
        >
          <div className="container" style={{ maxWidth: "1000px" }}>
            <h2 className="text-white mb-4" data-aos="fade-down">
              Frequently Asked Questions
            </h2>
            <div className="accordion" id="accordionExample" style={{ textAlign: "justify" }}>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Is Ereforce a Genuine Product for Male Vitality?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Yes, Ereforce is a high-quality, all-natural supplement specifically designed to support male
                    vitality and performance. Its potent formula includes ingredients like L-Citrulline, L-Carnitine,
                    and Maca Root, which have been thoroughly researched for their effectiveness in enhancing blood
                    flow, stamina, and overall sexual wellness. Ereforce is manufactured in the USA in a facility that
                    adheres to strict GMP (Good Manufacturing Practices) guidelines, ensuring the highest quality and
                    purity of ingredients. As with any supplement, we recommend consulting with your healthcare provider
                    before starting Ereforce.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I Take Ereforce Alongside Other Supplements?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Ereforce is generally safe to take with other supplements and should not cause adverse effects.
                    However, we advise against combining Ereforce with supplements that have overlapping ingredients,
                    such as L-Citrulline or Maca Root, to avoid redundancy and maximize effectiveness.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="300">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Will Ereforce Be Effective for Supporting My Vitality?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Ereforce is designed to naturally enhance blood flow, boost stamina, and restore confidence by
                    targeting the core factors of male performance. Many users report noticeable improvements in energy,
                    endurance, and performance within the first few weeks. Some may take up to 60 days to experience the
                    full benefits, depending on individual physiology. Consistent use of Ereforce has helped countless
                    men regain their vitality and reignite their confidence.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="400">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What If Ereforce Doesn't Meet My Expectations?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    We are confident in Ereforce's ability to support your vitality, but we understand that individual
                    results can vary. That's why we offer a 180-day money-back satisfaction guarantee. You have six
                    months to try Ereforce completely risk-free. If you're not satisfied with the results, simply
                    contact us for a full refund—no questions asked.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="500">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How Many Bottles Should I Purchase for the Best Results?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Research and customer feedback show that Ereforce delivers the best results when used consistently
                    for at least 90 days. We recommend starting with a 3-month or 6-month supply to fully experience the
                    benefits. While a 30-day supply is an option, many customers notice significant improvements and opt
                    for our multi-bottle packages, which offer the best value and are the most popular choice.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="600">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How Soon Will I Receive My Ereforce Order?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Orders are processed and shipped within 2-3 business days. For customers in the United States,
                    delivery usually takes 5-7 days. For international orders, delivery typically takes 10-12 days,
                    depending on customs procedures in your country.
                  </div>
                </div>
              </div>
              <div className="accordion-item" data-aos="zoom-in" data-aos-delay="700">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What Should I Do Next?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    If you're ready to take control of your vitality and experience the benefits of Ereforce, select
                    your preferred package below. Enter your details on the next page to complete your order. Our team
                    will ensure your Ereforce package is promptly shipped, so you can begin your journey toward renewed
                    confidence and performance in just a few days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-5">
        <div className="container text-white text-center" style={{ maxWidth: "1100px" }}>
          <ul className="list-inline small mb-4 fw-bold">
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Contact
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Terms
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Privacy
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Return Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Shipping
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                Disclaimer
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-light text-decoration-none" target="_blank">
                References
              </a>
            </li>
          </ul>
          <div style={{ fontSize: ".7em" }}>
            The website's content and the product for sale is based upon the author's opinion and is provided solely on
            an "AS IS" and "AS AVAILABLE" basis. You should do your own research and confirm the information with other
            sources when searching for information regarding health issues and always review the information carefully
            with your professional health care provider before using any of the protocols presented on this website
            and/or in the product sold here.
            <div className="my-4">
              For Product Support, please contact the vendor HERE.
              <br />
              For Order Support, please contact ClickBank HERE.
            </div>
            <br />
            <br />
          </div>
          <p className="mb-0 opacity-50 small" style={{ fontSize: ".8em" }}>
            © Ereforce Research 2025. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Bootstrap */}
      <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

      {/* Vturb JS */}
      <Script src="/js/vturb.js" strategy="afterInteractive" />

      {/* Countdown Timer JS */}
      <Script src="/js/countdown.js" strategy="afterInteractive" />
    </>
  )
}
