import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4992ff",
        borderRadius: 24,
        padding: 32,
        gap: 12,
    },
    cardGroupProfileSubContainer: {
        backgroundColor: "#bed8ff8c",
        padding: 4,
        borderRadius: "100%",
    },
    cardGroupProfile: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "100%",
        height: 80,
        width: 80,
    },
    profileText: {
        color: "#4992ff",
        fontWeight: "bold",
        fontSize: 32,
    },
    cardGroupNameSubContainer: {
        alignItems: "center",
    },
    cardGroupTitle: {
        fontWeight: "bold",
        fontSize: 24,
        color: "white",
        paddingBottom: 8,
    },
    cardGroupRole: {
        color: "#f1f1f1",
        fontSize: 16,
        fontWeight: "bold",
    },
    cardGroupCompany: {
        color: "#e7e7e7",
        fontSize: 14,
        fontWeight: "bold",
    },
    cardSeparator: {
        backgroundColor: "#e7e7e7",
        height: 1,
        width: 250,
    },
    cardGroupFooterContainer: {
        gap: 16,
        alignItems: "center"
    },
    cardGroupFooterContainerTecnologiaText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 16,
        textAlign: "center",
    },
    cardGroupFooterContainerRole: {
        backgroundColor: "#ffaa2b",
        padding: 8,
        borderRadius: 32,
        fontWeight: "bold",
        textAlign: "center"

    }
})