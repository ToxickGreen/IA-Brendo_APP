import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ButtonGroupColors } from "~/components/ButtonGroupColors";
import { Input } from "~/components/Inputs";

const CARD_COLORS = [
    {
        id: "c1",
        name: "Azul",
        colorCode: "#34adf3",
    },
    {
        id: "c2",
        name: "Verde",
        colorCode: "#2cd43a",
    },
    {
        id: "c3",
        name: "Roxo",
        colorCode: "#a936d6",
    },
]

export type Form = {
    fullName: string;
    role: string,
    company?: string,
    experience: number,
    cardColor: string,
    tecnologia: string,
}

type Error = {
    fullName?: string;
    role?: string,
    company?: string,
    experience?: string,
    cardColor?: string,
    tecnologia?: string,
}

export default function cadastro() {
    const route = useRouter()
    const [form, setForm] = useState<{ data: Form, errors: Error }>({
        data: {
            fullName: "",
            role: "",
            company: "",
            experience: 0,
            cardColor: "",
            tecnologia: "",
        },
        errors: {}

    })
    const hasEmptyFields = 
        !form.data.fullName.trim() || 
        !form.data.role.trim() || 
        !form.data.tecnologia.trim() || 
        !form.data.cardColor || 
        form.data.experience <= 0;
    
    const hasErrors = Object.values(form.errors).some(error => error !== undefined);
    const isFormInvalid = hasEmptyFields || hasErrors;

    function handleSumbit(){
        route.push({
            pathname: '/preview',
            params: form.data
        })
    }
    function handleInputChange(fieldName: keyof Form, value: string | number) {
        if(!value) return
        setForm((currentForm) => {
            return {
                ...currentForm,
                data: {
                    ...currentForm.data,
                    [fieldName]: value
                }
            }
        })
    }
    function handleSetOrRemoveInputError(fieldName: keyof Form, error: string | undefined) {
        setForm((currentForm) => {
            return {
                ...currentForm,
                errors: {
                    ...currentForm.errors,
                    [fieldName]: error,
                }
            }
        })
    }
    function handleInputValidation(field: keyof Form) {
        const { fullName, role, cardColor, tecnologia, experience } = form.data;
        switch (field) {
            case "fullName":
                if (!!fullName) {
                    handleSetOrRemoveInputError("fullName", "Informe seu nome completo")
                }
                if (fullName.length < 3) {
                    handleSetOrRemoveInputError("fullName", "Informe pelo menos 3 caracteres")
                }else{
                    handleSetOrRemoveInputError("fullName", undefined)
                }
                break;
            case "role":
                if (role.length === 0) {
                    handleSetOrRemoveInputError("role", "Informe seu cargo")
                }else{
                    handleSetOrRemoveInputError("role", undefined)
                }
                break;
            case "experience":
                const expValue = Number(experience);
                if (isNaN(expValue) || expValue < 1) {
                    handleSetOrRemoveInputError("experience", "Você deve ter pelo menos 1 ano de experiência")
                }else{
                    handleSetOrRemoveInputError("experience", undefined)
                }
                break;
            case "cardColor":
                if (!!cardColor) {
                    handleSetOrRemoveInputError("cardColor", "Selecione pelo menos 1 cor")
                }else{
                    handleSetOrRemoveInputError("cardColor", undefined)
                }
                break;
            case "tecnologia":
                if (tecnologia.length === 0) {
                    handleSetOrRemoveInputError("tecnologia", "Informe sua tecnologia favorita")
                }else{
                    handleSetOrRemoveInputError("tecnologia", undefined)
                }
                break;
            default:
                break;
        }
    }
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.title}>
                    Cadastro
                </Text>
                <Text style={style.subtitle}>
                    Preencha seus dados de dev
                </Text>
            </View>
            <View style={{ height: 672, gap: 8 }}>
                <View style={{ gap: 12, }}>
                    <Input 
                        onChangeText={(text) => handleInputChange('fullName', text)} 
                        label="Nome completo" 
                        placeholder="Nome e sobrenome"
                        defaultValue={form.data.fullName}
                        onBlur={() => handleInputValidation("fullName")}
                        errorMessage={form.errors["fullName"]} 
                    />
                    <Input 
                        onChangeText={(text) => handleInputChange('role', text)} 
                        label="Cargo" 
                        placeholder="Engenheiro"
                        defaultValue={form.data.role}
                        onBlur={() => handleInputValidation("role")}
                        errorMessage={form.errors["role"]} 
                    />
                    <Input 
                        onChangeText={(text) => handleInputChange('company', text)} 
                        label="Empresa (opcional)" 
                        placeholder="UNIC"
                        defaultValue={form.data.company}
                        errorMessage={form.errors["company"]} 
                    />
                    <Input 
                        onChangeText={(text) => handleInputChange('experience', parseInt(text))} 
                        label="Anos de experiência" 
                        placeholder="21"
                        defaultValue={form.data.experience.toString()}
                        onBlur={() => handleInputValidation("experience")}
                        errorMessage={form.errors["experience"]} 
                    />
                    <Input 
                        onChangeText={(text) => handleInputChange('tecnologia', text)} 
                        label="Tecnologia favorita" 
                        placeholder="C#"
                        defaultValue={form.data.tecnologia}
                        onBlur={() => handleInputValidation("tecnologia")}
                        errorMessage={form.errors["tecnologia"]} 
                    />
                </View>
                <Text style={{ color: "black", fontWeight: "bold", paddingTop: 12, fontSize: 16 }}>Cor do cartão</Text>
                <ButtonGroupColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={CARD_COLORS} />
            </View>
            <View style={style.footerContainer}>
                <TouchableOpacity 
                    style={[
                        style.submitButton, 
                        isFormInvalid && { opacity: 0.5 }
                    ]} 
                    onPress={handleSumbit}
                    disabled={isFormInvalid}
                    >
                    <Text style={style.buttonText}>Gerar cartão</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 32,
        flex: 1,
        gap: 16,
        backgroundColor: '#f1f1f1',
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 16,
        color: "#696969",
    },
    headerContainer: {
        gap: 4,
    },
    footerContainer: {
        flex: 1,
        alignContent: "center",
        alignItems: "center"
    },
    submitButton: {
        backgroundColor: "#7B61FF",
        padding: 18,
        width: '100%',
        borderRadius: 16,
        alignItems: "center",
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})