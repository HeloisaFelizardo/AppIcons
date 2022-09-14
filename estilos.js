import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#d5d5d5',
    paddingVertical: 60,
  },
  boxIcones: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 320,
  },
  boxIconesTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  iconesLista: {
    flexDirection: "row",
  },
});

export default estilos;