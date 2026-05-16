import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";

export default function SucesPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={{gap: 24, marginTop: 164}}>
                <View style={styles.headerContainer}>
                    <View>
                        <Ionicons name="checkmark-circle" size={124} color="#52d685" />
                    </View>
                </View>
                <View style={styles.sucessMessageContainer}>
                    <Text style={styles.sucessMessage}>
                        Cartão criado
                    </Text>
                    <Text style={styles.sucessMessage}>com sucesso!</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleContainerText}>
                        Seu cartão de visita digital está pronto.
                    </Text>
                    <Text style={styles.subtitleContainerText}>Compartilhe com a galera!</Text>
                </View>
            </View>
            <View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.buttonNewCard} onPress={() => router.push('/cadastro')}>
                        <Text style={styles.buttonNewCardText}>Criar outro cartão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.replace('/')}>
                        <Text style={styles.buttonBackToStartText}>Voltar ao início</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: 32,
        justifyContent: "space-between",
    },
    headerContainer: {
        alignItems: "center",
    },
    test: {
        backgroundColor: "#6ee99d"
    },
    sucessMessageContainer: {
        alignItems: "center",
    },
    sucessMessage: {
        fontSize: 24,
        fontWeight: "bold",

    },
    subtitleContainer: {
        alignItems: "center",
    },
    subtitleContainerText: {
        fontSize: 14,
        color: "#696969"
    },
    footerContainer: {
        alignItems: "center",
        gap: 24,
    },
    buttonNewCard: {
        backgroundColor: "#7B61FF",
        padding: 20,
        width: '100%',
        borderRadius: 16,
        alignItems: "center",
    },
    buttonNewCardText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonBackToStartText: {
        color: "#7B61FF",
        fontWeight: "bold",
    },
})
