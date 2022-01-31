import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Surface, Text, TextInput } from "react-native-paper";
import { logo } from "../assets/images";
import { Space } from "../components/toolbox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigaiton = useNavigation();

  const register = async () => {
    try {
      setLoading(true);
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth,
        eMail,
        password
      );
      //   response.user
      navigaiton.goBack();
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Surface style={styles.container}>
      <ScrollView>
        <Space h="48" />
        <Avatar.Image size={90} source={logo} style={{ alignSelf: "center" }} />
        <Space />
        <TextInput
          label="Email"
          value={eMail}
          onChangeText={(text) => setEMail(text)}
          mode="outlined"
          keyboardType="email-address"
        />
        <Space />
        <TextInput
          label="Şifre"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry
        />
        <Space />
        <TextInput
          label="Şifre Tekrar"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry
        />
        <Space />
        <Button
          onPress={register}
          mode="contained"
          icon={"login"}
          style={styles.button}
          loading={loading}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </Button>
        <Space />
      </ScrollView>
    </Surface>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
