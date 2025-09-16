import React, { useRef, useState } from "react";
import { allCocktails, qtdOfCocktails } from "../../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCocktail = allCocktails[currentIndex];
  const prevCocktailName = allCocktails[currentIndex - 1]?.name || "";
  const nextCocktailName = allCocktails[currentIndex + 1]?.name || "";

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 1, scale: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              currentIndex !== 0 && setCurrentIndex((prev) => prev - 1);
            }}
          >
            <span>{prevCocktailName}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => {
              currentIndex !== qtdOfCocktails - 1 &&
                setCurrentIndex((prev) => prev + 1);
            }}
          >
            <span>{nextCocktailName}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt="cocktail image"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
