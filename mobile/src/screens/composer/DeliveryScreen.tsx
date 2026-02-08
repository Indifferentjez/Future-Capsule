import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useComposeStore, type DeliverMode } from "@/store/composeStore";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "Delivery">;

export function DeliveryScreen({ navigation }: Props) {
  const {
    deliverMode,
    deliverAt,
    birthdayDay,
    birthdayMonth,
    timezone,
    set,
  } = useComposeStore();

  const handleMode = (mode: DeliverMode) => {
    set({ deliverMode: mode });
    if (mode === "date" && !deliverAt) {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 1);
      set({ deliverAt: d.toISOString().slice(0, 16) });
    }
  };

  const goNext = () => {
    if (deliverMode === "date" && !deliverAt) return;
    if (deliverMode === "birthday" && (birthdayDay == null || birthdayMonth == null)) return;
    navigation.navigate("MessageType");
  };

  const canNext =
    (deliverMode === "date" && !!deliverAt) ||
    (deliverMode === "birthday" && birthdayDay != null && birthdayMonth != null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Delivery mode</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.option, deliverMode === "date" && styles.optionActive]}
          onPress={() => handleMode("date")}
        >
          <Text style={deliverMode === "date" ? styles.optionTextActive : styles.optionText}>Specific date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, deliverMode === "birthday" && styles.optionActive]}
          onPress={() => handleMode("birthday")}
        >
          <Text style={deliverMode === "birthday" ? styles.optionTextActive : styles.optionText}>Birthday</Text>
        </TouchableOpacity>
      </View>

      {deliverMode === "date" && (
        <View style={styles.field}>
          <Text style={styles.label}>Date & time</Text>
          <TextInput
            style={styles.input}
            value={deliverAt ?? ""}
            onChangeText={(t) => set({ deliverAt: t ? new Date(t).toISOString() : null })}
            placeholder="YYYY-MM-DDTHH:mm"
            placeholderTextColor="#888"
          />
        </View>
      )}

      {deliverMode === "birthday" && (
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Month</Text>
            <View style={styles.pickerRow}>
              {MONTHS.map((m, i) => (
                <TouchableOpacity
                  key={m}
                  style={[styles.chip, birthdayMonth === i + 1 && styles.chipActive]}
                  onPress={() => set({ birthdayMonth: i + 1 })}
                >
                  <Text style={birthdayMonth === i + 1 ? styles.chipTextActive : styles.chipText}>
                    {m.slice(0, 3)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>Day</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value={birthdayDay != null ? String(birthdayDay) : ""}
              onChangeText={(t) => set({ birthdayDay: t ? parseInt(t, 10) : null })}
              placeholder="1–31"
              placeholderTextColor="#888"
            />
          </View>
        </View>
      )}

      <View style={styles.field}>
        <Text style={styles.label}>Timezone</Text>
        <TextInput
          style={styles.input}
          value={timezone}
          onChangeText={(t) => set({ timezone: t || "UTC" })}
          placeholder="e.g. America/New_York"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity
        style={[styles.next, !canNext && styles.nextDisabled]}
        onPress={goNext}
        disabled={!canNext}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 8, color: "#333" },
  row: { flexDirection: "row", gap: 16, marginBottom: 16 },
  option: { flex: 1, padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#ccc", alignItems: "center" },
  optionActive: { backgroundColor: "#1a1a2e", borderColor: "#1a1a2e" },
  optionText: { color: "#333" },
  optionTextActive: { color: "#fff", fontWeight: "600" },
  field: { marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16 },
  half: { flex: 1 },
  pickerRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: "#ccc" },
  chipActive: { backgroundColor: "#1a1a2e", borderColor: "#1a1a2e" },
  chipText: { color: "#333", fontSize: 12 },
  chipTextActive: { color: "#fff", fontSize: 12 },
  next: { marginTop: 24, backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: "#fff", fontWeight: "600" },
});
