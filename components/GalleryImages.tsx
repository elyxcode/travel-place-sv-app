import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  images?: string[];
}

export const GalleryImages = ({ images }: Props) => {
  const [selectedImage, setSelectImage] = useState<string | null>(null);

  const Separator = () => <View style={{ width: 10 }} />;

  const ShowImageComponent = ({ uri }: { uri: string }) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => setSelectImage(uri)}>
        <Image source={{ uri }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => <ShowImageComponent uri={item} />}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={Separator}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal visible={!!selectedImage} transparent={true}>
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: selectedImage ?? "" }}
            style={styles.fullImage}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.closeButton}
            onPress={() => setSelectImage(null)}
          >
            <Text style={styles.closeText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 15,
  },
  fullImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000000e6",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#ffffff33",
    padding: 10,
    borderRadius: 8,
  },
  closeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
