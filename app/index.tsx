import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Ionicons name="card" size={84} color="#7B61FF" />
        <Text style={styles.titulo}>DevCard</Text>
        
        <View style={styles.textoAlt}>
          <Text style={styles.textin}>Seu cartão de visita digital</Text>
          <Text style={styles.textin}>de dev mobile</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/cadastro")}>
          <Text style={styles.buttonText}>Criar meu cartão</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f1f1f1',
    padding: 32, 
  },
  content: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  titulo: { 
    fontSize: 46,
    color: "#7B61FF",
    fontWeight: "bold",
  },
  textoAlt: {
    marginVertical: 12,
    alignItems: "center",
  },
  textin: {
    color: "#696969",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#7B61FF",
    padding: 20,
    width: '100%',
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});