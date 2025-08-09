import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  description: string;
}

export const DecriptionCard = ({ name, description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontFamily: "Inter_700Bold",
  },
  description: {
    fontFamily: "Inter_400Regular",
  },
});
