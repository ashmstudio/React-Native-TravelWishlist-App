import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [destination, setDestination] = useState("");
  const [destinations, setDestinations] = useState([]);

  const addDestination = () => {
    if (destination.trim() === "") {
      return;
    }

    setDestinations([...destinations, destination.trim()]);
    setDestination("");
  };

  const deleteDestination = (index) => {
    const newList = destinations.filter((item, i) => i !== index);
    setDestinations(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smallTitle}>TRAVEL PLANNER</Text>

        <Text style={styles.title}>Travel Wishlist</Text>

        <Text style={styles.subtitle}>
          Places I want to visit
        </Text>
      </View>

      <View style={styles.addBox}>
        <Text style={styles.label}>ADD A DESTINATION</Text>

        <TextInput
          style={styles.input}
          placeholder="Where do you want to go?"
          placeholderTextColor="#777"
          value={destination}
          onChangeText={setDestination}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addDestination}
        >
          <Text style={styles.addButtonText}>
            + ADD DESTINATION
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>MY DESTINATIONS</Text>

        <View style={styles.countBox}>
          <Text style={styles.countText}>
            {destinations.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={destinations}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.destinationCard}>
            <View style={styles.destinationInfo}>
              <View style={styles.pinBox}>
                <Text style={styles.pin}>•</Text>
              </View>

              <Text style={styles.destinationText}>
                {item}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteDestination(index)}
            >
              <Text style={styles.deleteText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>
              YOUR LIST IS EMPTY
            </Text>

            <Text style={styles.emptyText}>
              Add a destination above to start your travel wishlist.
            </Text>
          </View>
        }
      />

      <Text style={styles.footer}>
        Aisah Muso | BSCS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080A09",
    paddingTop: 65,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 25,
  },

  smallTitle: {
    color: "#D62828",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    color: "#F5F5F5",
    fontSize: 31,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#6FAF7D",
    fontSize: 14,
    marginTop: 5,
  },

  addBox: {
    backgroundColor: "#111613",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1E3A27",
    padding: 16,
    marginBottom: 24,
  },

  label: {
    color: "#D62828",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 9,
  },

  input: {
    height: 48,
    backgroundColor: "#080A09",
    borderWidth: 1,
    borderColor: "#304137",
    borderRadius: 9,
    color: "#FFFFFF",
    paddingHorizontal: 13,
    fontSize: 15,
    marginBottom: 11,
  },

  addButton: {
    height: 46,
    backgroundColor: "#B91C1C",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  listTitle: {
    color: "#F5F5F5",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  countBox: {
    backgroundColor: "#173020",
    minWidth: 30,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  countText: {
    color: "#75C58A",
    fontSize: 13,
    fontWeight: "bold",
  },

  destinationCard: {
    backgroundColor: "#111613",
    borderWidth: 1,
    borderColor: "#1E3A27",
    borderRadius: 12,
    minHeight: 62,
    paddingHorizontal: 13,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  destinationInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  pinBox: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: "#241313",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  pin: {
    color: "#D62828",
    fontSize: 20,
  },

  destinationText: {
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: "500",
  },

  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#241313",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteText: {
    color: "#E04444",
    fontSize: 23,
    fontWeight: "300",
  },

  emptyBox: {
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 45,
  },

  emptyTitle: {
    color: "#777",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  emptyText: {
    color: "#555",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 6,
  },

  footer: {
    color: "#344039",
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 1,
    paddingVertical: 13,
  },
});