import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Form } from "./cadastro";
import DevCard from "~/components/DevCard";

export default function Preview() {
    const router = useRouter();
    const params = useLocalSearchParams() as unknown as Form

    function x(){
        params
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerGroupTitle}>Seu Cartão</Text>
            </View>
            <DevCard data={params}/>
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footerGroupEditButton} onPress={router.back}>
                    <Text style={styles.footerGroupEditButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerGroupSubmitButton} onPress={() => router.push("/sucesso")}>
                    <Text style={styles.footerGroupSubmitButtonText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: 32,
        justifyContent: "space-around",
    },
    headerGroupTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },
    footerContainer: {
        gap: 16,
    },
    footerGroupEditButton: {
        backgroundColor: "white",
        padding: 20,
        width: '100%',
        borderRadius: 16,
        borderWidth: 3,
        borderColor: "#7B61FF",
        alignItems: "center",
    },
    footerGroupEditButtonText: {
        color: "#7B61FF",
        fontWeight: "bold",
        fontSize: 16,
    },
    footerGroupSubmitButton: {
        backgroundColor: "#7B61FF",
        padding: 20,
        width: '100%',
        borderRadius: 16,
        alignItems: "center",
    },
    footerGroupSubmitButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})