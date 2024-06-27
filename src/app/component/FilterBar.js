import React from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

/*
  Ce code permet d'afficher Composante du haut ayant trois dropdown. Un affichant la liste des saisons, l'autre la liste
  des niveaux et le dernier la liste de passe. 
*/
  const FilterBar = ({ onFilterChange }) => {
    const [selectedSaison, setSelectedSaison] = React.useState(null);
    const [selectedNiveau, setSelectedNiveau] = React.useState(null);
    const [selectedPasse, setSelectedPasse] = React.useState(null);
  
    const saisons = ['été', 'printemps', 'automne', 'hiver'];
    const niveaux = ['pro', 'moyen', 'novice'];
    const passes = ['double', 'illimité','simple'];
  
    const handleSaisonChange = (saison) => {
      setSelectedSaison(saison);
      onFilterChange({ saison, niveau: selectedNiveau, passe: selectedPasse });
    };
  
    const handleNiveauChange = (niveau) => {
      setSelectedNiveau(niveau);
      onFilterChange({ saison: selectedSaison, niveau, passe: selectedPasse });
    };
  
    const handlePasseChange = (passe) => {
      setSelectedPasse(passe);
      onFilterChange({ saison: selectedSaison, niveau: selectedNiveau, passe });
    };

    return (
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">

  
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex space-x-4">
                {/* Dropdown pour la saison */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {selectedSaison || 'Choisir une saison'}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dropdown-menu">
                    {saisons.map((saison) => (
                      <DropdownMenuItem
                        key={saison}
                        onClick={() => handleSaisonChange(saison)}
                        className="dropdown-item px-4 py-2 block text-sm text-gray-600 hover:bg-gray-700 hover:text-white"
                      >
                        {saison}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
  
                {/* Dropdown pour le niveau */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {selectedNiveau || 'Choisir un niveau'}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dropdown-menu">
                    {niveaux.map((niveau) => (
                      <DropdownMenuItem
                        key={niveau}
                        onClick={() => handleNiveauChange(niveau)}
                        className="dropdown-item px-4 py-2 block text-sm text-gray-00 hover:bg-gray-700 hover:text-white"
                      >
                        {niveau}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
  
                {/* Dropdown pour le passse */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {selectedPasse || 'Choisir une passe'}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dropdown-menu">
                    {passes.map((passe) => (
                      <DropdownMenuItem
                        key={passe}
                        onClick={() => handlePasseChange(passe)}
                        className="dropdown-item px-4 py-2 block text-sm text-gray-600 hover:bg-gray-700 hover:text-white"
                      >
                        {passe}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default FilterBar;
  
