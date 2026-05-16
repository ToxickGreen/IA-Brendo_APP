import { View, Text } from "react-native";
import { styles } from "./styles"
import { Form } from "~/app/cadastro";

type Props = {
    data: Form
}

export default function DevCard({ data }: Props) {
    return (
        <View>
            <View style={[styles.cardContainer, {backgroundColor: data.cardColor,}]}>
                <View style={styles.cardGroupProfileSubContainer}>
                    <View style={styles.cardGroupProfile}>
                        <Text style={[styles.profileText, {color: data.cardColor}]}>{data.fullName.charAt(0)}</Text>
                    </View>
                </View>

                <View style={styles.cardGroupNameSubContainer}>
                    <Text style={styles.cardGroupTitle}>{data.fullName}</Text>
                    <Text style={styles.cardGroupRole}>{data.role}</Text>
                    {!!data.company && <Text style={styles.cardGroupCompany}>{data.company}</Text>}
                </View>
                <View style={styles.cardSeparator} />
                <View style={styles.cardGroupFooterContainer}>
                    <View>
                        <Text style={{ color: "#f1f1f1", fontWeight: "bold"}}>Especialista</Text>
                        <Text style={styles.cardGroupFooterContainerTecnologiaText}>{data.tecnologia}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.cardGroupFooterContainerRole}>Especialista</Text>
                    </View>
                    <Text style={{ color: "#f1f1f1", fontWeight: "bold"}}>{data.experience} anos de experiência</Text>
                </View>
            </View>
        </View>
    )
}