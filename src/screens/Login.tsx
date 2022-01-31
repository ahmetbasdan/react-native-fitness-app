import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Divider,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";
import { logo } from "../assets/images";
import { Space } from "../components/toolbox";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();

  const signin = async () => {
    try {
      setLoading(true)
      const auth = getAuth();
      const response= await signInWithEmailAndPassword(auth,eMail,password)
      navigation.navigate("home")
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false)
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
        <Button
          onPress={signin}
          mode="contained"
          icon={"login"}
          style={styles.button}
          loading={loading}
        >
          <Text style={styles.buttonText}>Signin</Text>
        </Button>
        <Space />
        <Divider />
        <Button
          onPress={() => navigation.navigate("register")}
          mode="text"
          style={styles.button}
        >
          Hemen Kayıt Ol
        </Button>
        <Button onPress={signin} mode="text" style={styles.button}>
          Şifremi Unuttum
        </Button>
        <Space h="48" />
      </ScrollView>
    </Surface>
  );
};

export default Login;

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
