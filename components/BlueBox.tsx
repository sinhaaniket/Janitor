import { StyleSheet, View } from "react-native"
import { ThemedText } from "./ThemedText"

export type BlueBoxProps = {
    amount ?: number
}

export function BlueBox({ amount }: BlueBoxProps) {
    return (
        
        <View style={styles.box}>
            <ThemedText type="default" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Coupons remaining
            </ThemedText>
            <ThemedText type="title" lightColor="#ECEDEE" darkColor="#ECEDEE">
                Rs. { amount }
            </ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066F6',
        height: 180,
        width: 382,
        margin: 25,
        borderRadius: 10

    }
})