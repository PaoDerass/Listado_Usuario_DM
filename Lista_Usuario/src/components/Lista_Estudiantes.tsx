import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { EstudiantesContext } from "../context/Usuarios_Context";
import { styles } from "../style/Lista_Estudiante_style"; 

const ListaEstudiantes: React.FC = () => {
  const contexto = useContext(EstudiantesContext);

  if (!contexto) {
    return <Text>Cargando...</Text>;
  }

  const { estudiantes } = contexto;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Estudiantes</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.estudiante}>{item.nombre}</Text>
        )}
      />
    </View>
  );
};

export default ListaEstudiantes;
