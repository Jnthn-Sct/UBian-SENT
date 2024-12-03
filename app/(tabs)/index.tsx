import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(true);
  };

  return (
    <ThemedView style={styles.viewContainer}>
      <View style={styles.container}>
        <HelloWave />
        <Text style={styles.welcomeText}>UBIAN SENT INITIAL ATTEMPT</Text>
        <TouchableOpacity onPress={handleClick} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Press to Learn More!</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                This is to test the Native React befpre continuing on the
                project further.
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#941D00",
    padding: 20,
  },
  container: {
    backgroundColor: "#6B1500",
    borderColor: "#FFFBE6",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FCCD2A",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FCCD2A",
    borderRadius: 5,
  },
});
