import "./App.css";
// *Hooks
import { useState, useRef, useEffect } from "react";
// *Components
import Title from "./components/Title";
import Header from "./components/Header";
import Button from "./components/Button";
import Modal from "./components/Modal";
import CategoriesCard from "./components/page-components/CategoriesCard";
import OffersCard from "./components/page-components/OffersCard";
import TestimonialCard from "./components/page-components/TestimonialCard";
import TestimonialsList from "./components/lists/TestimonialsList";
// *Icons
import { BsFillSendFill, BsArrowUpCircleFill } from "react-icons/bs";
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaPython, FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill, PiPowerBold } from "react-icons/pi";
// *Images
import headerImage from "./img/header-img.png";
// *Examples
import UseStateHookEx from "./examples/UseStateHookEx";
import UseEffectHookEx from "./examples/UseEffectHookEx";
import MyList from "./examples/MyList";
import UseRefEx from "./examples/UseRefEx";

function App() {
  // *References
  const offersRef = useRef();
  const topRef = useRef();

  // *Scroll State
  const [goToTopArrow, setGoToTopArrow] = useState(false);

  // *Scroll handle
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
  }

  const handleGoToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // *Scroll Effect
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction());
    return () => window.removeEventListener("scroll", scrollFunction());
    // window.onscroll = () => scrollFunction();
  }, []);

  // *Modal State
  // se define como falso predeterminado para que no sea visible
  const [showCourseModal, setShowCourseModal] = useState(false);

  // *Modal Handlers
  function handleStartLearningEvent() {
    setShowCourseModal(true);
  }

  function handleModalCancelEvent() {
    setShowCourseModal(false);
  }

  // *Offers State
  const [showOffers, setShowOffers] = useState(false);

  //* Offers Handlers
  function handleShowOffers() {
    setShowOffers(!showOffers);
  }
  const handleScrollToOffers = () => {
    offersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // *Offers List
  const offerList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Tons of content",
      text: "We have library over 100,000 videos that will help you learn to code",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Guided Course",
      text: "We guided you with series of videos that will help you learn to code.",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "File from project are available for all of our courses to be downloaded.",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Exclusive Features",
      text: "Enhance your coding experience with new and exclusive features like AutoPlay, Theming, Progress Tracking, Courses and Quizzes(coming soon!).",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Excellent Support",
      text: "We have excellent support for all of our users. We have a team of dedicated support staff that are ready to help you with any questions you may have..",
    },
  ];

  //* More Offers List
  const moreOffersList = [
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Project File Downloads",
      text: "File from project are available for all of our courses to be downloaded.",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Exclusive Features",
      text: "Enhance your coding experience with new and exclusive features like AutoPlay, Theming, Progress Tracking, Courses and Quizzes(coming soon!).",
    },
    {
      icon_1: <AiFillUnlock className="i" size={"2em"} />,
      title: "Excellent Support",
      text: "We have excellent support for all of our users. We have a team of dedicated support staff that are ready to help you with any questions you may have..",
    },
  ];
  return (
    <div className="container">
      <div className="container container-lg">
        {/* HEADER */}
        <div className="header-content mb-2 mt-2" ref={topRef}>
          <Header>
            <Title
              text="Learn to code by watching others"
              classes={"header-title fs-xxl"}
            />
            <p className="header-text mb-3">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>

            <div className="header-btn">
              <Button
                type={"button"}
                classes={"btn-primary text-light"}
                text={"Try it free 30 days"}
                icon={<BsFillSendFill />}
                onClick={handleStartLearningEvent}
              />
              <Button
                type={"button"}
                classes={"btn-secondary"}
                text={"Learn more"}
                icon={<BsFillSendFill />}
                onClick={handleScrollToOffers}
              />
            </div>
            <img src={headerImage} alt="headerImage" className="header-img" />
          </Header>
          {/* MAIN */}
          <main>
            {/* CATEGORIES */}
            <section className="categories my-4">
              <Title
                text="Top categories"
                classes={"subtitle text-center"}
              ></Title>
              <div className="categories-container d-flex">
                <CategoriesCard
                  title={"Web Development"}
                  icon_1={<AiFillHtml5 size={"4em"} className="icon html5" />}
                  icon_2={<DiCss3Full size={"4em"} className="icon css3" />}
                  icon_3={<SiJavascript size={"4em"} className="icon js" />}
                  btnIcon={<AiFillPlayCircle size={"2em"} />}
                  startLearningEvent={handleStartLearningEvent}
                >
                  <span className="fs-lg">
                    Learn how to build web apps with:
                  </span>
                  <ul className="mt-1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                  </ul>
                </CategoriesCard>
                {/* SECOND CARD */}
                <CategoriesCard
                  title={"Mobile Development"}
                  icon_2={<FaReact size={"4em"} className="icon css3" />}
                  icon_3={<SiJavascript size={"4em"} className="icon js" />}
                  btnIcon={<AiFillPlayCircle size={"2em"} />}
                  startLearningEvent={handleStartLearningEvent}
                >
                  <span className="fs-lg">
                    Learn how to build web apps with:
                  </span>
                  <ul className="mt-1">
                    <li>React Native</li>
                    <li>Javascript</li>
                    <li>Expo</li>
                  </ul>
                </CategoriesCard>
                {/* THIRD CARD */}
                <CategoriesCard
                  title={"Data Science"}
                  icon_1={<FaPython size={"4em"} className="icon html5" />}
                  icon_2={<FaJava size={"4em"} className="icon css3" />}
                  icon_3={<TbBrandCSharp size={"4em"} className="icon js" />}
                  btnIcon={<AiFillPlayCircle size={"2em"} />}
                  startLearningEvent={handleStartLearningEvent}
                >
                  <span className="fs-lg">
                    Learn how to build web apps with:
                  </span>
                  <ul className="mt-1">
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>C#</li>
                  </ul>
                </CategoriesCard>
                {/* FOURTH CARD */}
                <CategoriesCard
                  title={"Bussiness"}
                  icon_1={
                    <PiMicrosoftExcelLogoFill
                      size={"4em"}
                      className="icon html5"
                    />
                  }
                  icon_2={<PiPowerBold size={"4em"} className="icon css3" />}
                  icon_3={<TbSql size={"4em"} className="icon js" />}
                  btnIcon={<AiFillPlayCircle size={"2em"} />}
                  startLearningEvent={handleStartLearningEvent}
                >
                  <span className="fs-lg">
                    Learn how to build web apps with:
                  </span>
                  <ul className="mt-1">
                    <li>Excell</li>
                    <li>Power Bi</li>
                    <li>SQL</li>
                  </ul>
                </CategoriesCard>
              </div>
            </section>
            {/* OFFERS */}
            <section
              className="offers container container-md p-2"
              ref={offersRef}
            >
              <Title
                classes={"subtitle text-center mb-4"}
                text="Here is what you get"
              />
              <div className="offers-container">
                {/* OfferList */}
                {offerList.map((offer, index) => (
                  <OffersCard
                    key={index}
                    icon_1={offer.icon_1}
                    title={offer.title}
                    text={offer.text}
                  ></OffersCard>
                ))}
                {showOffers && (
                  <div className="offers-container fadeIn">
                    {moreOffersList.map((offer, index) => (
                      <OffersCard
                        key={index}
                        icon_1={offer.icon_1}
                        title={offer.title}
                        text={offer.text}
                      ></OffersCard>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#"
                onClick={handleShowOffers}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                <h4 className="text-center text-primary mt-2">
                  {showOffers ? "Less" : "More..."}
                </h4>
              </a>
            </section>
            {/* TESTIMONIALS */}
            <section className="testimonials my-4">
              <Title
                classes={"subtitle text-center mb-4"}
                text="What our users say"
              />
              <div className="testimonials-container">
                <TestimonialsList />
              </div>
            </section>
          </main>
        </div>
        {/* UTILITIES */}
        {/* MODAL */}
        {/* se pone un if con and para si es falso que no aparezca */}
        {showCourseModal && (
          <Modal
            title={"Access Denied"}
            text={"Please login in order to access this content"}
            cancelEvent={handleModalCancelEvent}
          />
        )}
        {/* GOT TO TOP */}
        {goToTopArrow && (
          <BsArrowUpCircleFill
            className="goToTopArrow"
            onClick={handleGoToTop}
          />
        )}
      </div>

      {/* EXAMPLES */}
      {/* <UseStateHookEx></UseStateHookEx> */}
      {/* <MyList style={{ height: "100vh" }} /> */}
      {/* <UseEffectHookEx></UseEffectHookEx> */}
      {/* <UseRefEx /> */}
    </div>
  );
}

export default App;
