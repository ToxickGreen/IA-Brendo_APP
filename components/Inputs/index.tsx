import { Text, TextInput, View, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    label: string,
    errorMessage?: string,
}
export function Input({label, errorMessage, ...textInputProps}: Props) {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>{label}</Text>
            <TextInput
                style={styles.formInput}
                {...textInputProps}
            />
            {!!errorMessage && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    );
}