import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Esta é a Página Inicial</Text>
      {/* O Link funciona como um <a> do HTML */}
      <Link href="/sobre" style={styles.link}>Ir para Sobre</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  link: { marginTop: 20, color: 'blue', fontSize: 18 }
});