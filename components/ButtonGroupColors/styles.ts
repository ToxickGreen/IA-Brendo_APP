import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
        buttonGroupContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    buttonGroupButtonContainer: {
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "#b9b9b9",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        flex: 1,

    },
    buttonGroupButtonColorIndicator: {
        height: 24,
        width: 24,
        borderRadius: "100%"
    },
    buttonGroupButtonText: {
        color: "#b9b9b9",
        fontWeight: "bold",
    },
})