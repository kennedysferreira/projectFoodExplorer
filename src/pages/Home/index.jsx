import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FloatingCart } from "../../components/FloatingCart";
import { Skeleton } from "../../components/Skeleton";
import cardImage from "../../assets/mainImg.png";
import { Section } from "../../components/Section";
import { Tabs } from "../../components/Tabs";
import { Container, Banner, BannerText, CategorySection } from "./style";

import { api } from "../../service/api";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { PlateContext } from "../../hooks/plateRequest";


export function Home() {
  const navigate = new useNavigate();

  const { showAllPlates, isLoading } = useContext(PlateContext);

  const [isFavorite, setIsFavorite] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Refeição");
  const sectionRefs = useRef({});

  const plateSections = ["Refeição", "Sobremesas", "Bebidas", "Sushi"];

  const imageURL = `${api.defaults.baseURL}/files`;

  const selectPlates = () => {
    return showAllPlates;
  };

  async function handleVerifyFavoritePlate() {
    const searchFavorites = await api.get("/favorites");
    setIsFavorite(searchFavorites.data);
    return searchFavorites.data;
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const element = sectionRefs.current[category];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    handleVerifyFavoritePlate();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.category);
          }
        });
      },
      {
        threshold: 0.3, // Lower threshold works better for all screen sizes
        rootMargin: "-150px 0px -40% 0px" // Works for mobile, tablet and desktop
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [showAllPlates]);

  return (
    <Container>
      <Header plates={selectPlates} />

      <main>

        <Tabs
          tabs={plateSections.map((section) => ({
            id: section,
            label: section,
          }))}
          activeTab={activeCategory}
          onTabChange={handleCategoryChange}
        />

        <div className="categories-container">
          {isLoading ? (
            plateSections.map((section) => (
              <CategorySection
                key={section}
                ref={(el) => (sectionRefs.current[section] = el)}
                data-category={section}>
                <h2 className="category-title">{section}</h2>
                <Section title={section}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={`skeleton-${section}-${index}`} />
                  ))}
                </Section>
              </CategorySection>
            ))
          ) : (
            plateSections &&
            plateSections.map((section) => (
              <CategorySection
                key={section}
                ref={(el) => (sectionRefs.current[section] = el)}
                data-category={section}>
                <h2 className="category-title">{section}</h2>
                <Section title={section}>
                  {showAllPlates &&
                    showAllPlates
                      .filter((plate) => plate.category === section)
                      .map((plate) => (
                        <Card
                          key={String(plate.id)}
                          plate={plate}
                          view={() => navigate(`/plateview/${plate.id}`)}
                          plateImage={`${imageURL}/${String(plate.image)}`}
                          isFavorite={isFavorite}
                          verifyFavorite={handleVerifyFavoritePlate}
                        />
                      ))}
                </Section>
              </CategorySection>
            ))
          )}
        </div>

        <FloatingCart />
        <Footer />
      </main>
    </Container>
  );
}
