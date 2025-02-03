import React from "react";
import { SafeAreaView } from "react-native";
import { EstudiantesProvider } from "./src/context/Usuarios_Context";
import ListaEstudiantes from "./src/components/Lista_Estudiantes";

export default function App() {
  return (
    <EstudiantesProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ListaEstudiantes />
      </SafeAreaView>
    </EstudiantesProvider>
  );
}
