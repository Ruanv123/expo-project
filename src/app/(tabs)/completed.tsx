import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function CompletedScreen() {
  // Aqui você pode implementar a lógica para buscar as tarefas concluídas
  const completedTodos: Todo[] = [];

  return (
    <View style={styles.container}>
      {completedTodos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="checkmark-circle-outline" size={64} color="#666" />
          <Text style={styles.emptyText}>Nenhuma tarefa concluída</Text>
        </View>
      ) : (
        <FlatList
          data={completedTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.completedText}>{item.text}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 8,
  },
  completedText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    textDecorationLine: "line-through",
    color: "#666",
  },
});
