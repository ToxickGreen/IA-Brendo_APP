import { Stack } from "expo-router";

export default function Layout(){
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{title: 'devCard'}}/>
            <Stack.Screen name="cadastro" options={{title: 'formulario'}}/>
            <Stack.Screen name="preview" options={{title: 'view'}}/>   
            <Stack.Screen name="sucesso" options={{title: 'sucess'}}/>   
        </Stack>
    );
}