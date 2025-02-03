import React, { createContext, useState, useEffect } from "react";

interface Estudiante {
  id: string;
  nombre: string;
}

interface ContextoEstudiantes {
  estudiantes: Estudiante[];
  setEstudiantes: React.Dispatch<React.SetStateAction<Estudiante[]>>;
}

export const EstudiantesContext = createContext<ContextoEstudiantes | undefined>(undefined);

export const EstudiantesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: "1", nombre: "Mariana" },
    { id: "2", nombre: "Sofia" },
    { id: "3", nombre: "Allan" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setEstudiantes((prevEstudiantes) => [
        ...prevEstudiantes,
        { id: "4", nombre: "Mario" },
        { id: "5", nombre: "Pedro" },
        { id: "6", nombre: "Juan" },
        { id: "7", nombre: "Laura" },
        { id: "8", nombre: "Cristian" },
        { id: "9", nombre: "Bryan" },
        { id: "10", nombre: "Cindy" },
      ]);
    }, 5000);
  }, []);

  return (
    <EstudiantesContext.Provider value={{ estudiantes, setEstudiantes }}>
      {children}
    </EstudiantesContext.Provider>
  );
};
