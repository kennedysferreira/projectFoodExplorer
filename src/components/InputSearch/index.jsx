import { Input } from "../Input";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchResult, MobileSearchModal } from "./style";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { PlateContext } from "../../hooks/plateRequest";

export function InputSearch() {
  const selectRef = useRef(null);
  const navigate = useNavigate();

  const { showAllPlates } = useContext(PlateContext);

  const [isOpen, setIsOpen] = useState(false);
  const [allPlates, setAllPlates] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [platesAndIngredients, setPlateAndIngredients] = useState([]);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  function allPlatesResult() {
    setAllPlates(showAllPlates);
    setIsOpen(true);
  }

  function handleOutsideClick(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  function handleMobileSearchClick() {
    // No mobile, abre modal
    if (window.innerWidth < 768) {
      setMobileModalOpen(true);
      setAllPlates(showAllPlates);
    } else {
      // Tablet/Desktop, comportamento normal
      allPlatesResult();
    }
  }

  function closeMobileModal() {
    setMobileModalOpen(false);
    setInputSearch("");
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (inputSearch.length < 1) {
      setPlateAndIngredients([]);
      return;
    }

    const filteredPlatesBySearch = allPlates.filter((plate) => {
      return plate.name.toLowerCase().includes(inputSearch.toLowerCase());
    });

    const filteredPlatesByIngredients = allPlates.filter((plate) => {
      return plate.ingredients.some((ingredient) => {
        return ingredient.name
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
      });
    });

    const allFilteredSearch = [
      ...filteredPlatesBySearch,
      ...filteredPlatesByIngredients,
    ];

    const uniqueFilteredSearch = [...new Set(allFilteredSearch)];

    setPlateAndIngredients(uniqueFilteredSearch);
  }, [inputSearch, allPlates]);

  return (
    <>
      <Container onClick={handleMobileSearchClick} ref={selectRef}>
        <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder={"Busque por pratos ou ingredientes"}
          icon={IoSearchOutline}
        />

        <SearchResult $isOpen={isOpen && !mobileModalOpen}>
          {platesAndIngredients &&
            platesAndIngredients.map((item) => (
              <p onClick={() => { navigate(`/plateview/${item.id}`); setIsOpen(false); }} key={item.id}>
                {item.name}
              </p>
            ))}
        </SearchResult>
      </Container>

      {/* Mobile Search Modal */}
      <MobileSearchModal $isOpen={mobileModalOpen}>
        <div className="modal-header">
          <h2>Buscar</h2>
          <button className="close-btn" onClick={closeMobileModal}>
            <IoClose size={28} />
          </button>
        </div>

        <div className="search-input">
          <Input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder={"Busque por pratos ou ingredientes"}
            icon={IoSearchOutline}
            autoFocus
          />
        </div>

        <div className="search-results">
          {inputSearch.length > 0 && platesAndIngredients.length > 0 ? (
            platesAndIngredients.map((item) => (
              <button
                className="result-item"
                onClick={() => {
                  navigate(`/plateview/${item.id}`);
                  closeMobileModal();
                }}
                key={item.id}
              >
                <IoSearchOutline size={18} />
                <span>{item.name}</span>
              </button>
            ))
          ) : inputSearch.length > 0 ? (
            <p className="no-results">Nenhum prato encontrado</p>
          ) : (
            <p className="hint">Digite para buscar pratos ou ingredientes</p>
          )}
        </div>
      </MobileSearchModal>
    </>
  );
}
