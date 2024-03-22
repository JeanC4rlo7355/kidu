import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, ToastAndroid } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from "./viewModel";
import { CustomTextInput } from "../../components/CusatomTextInput";
import stylesR from "./Styles";

export const RegisterScreen = () => {
  
  const { name, lastname, email, phone, password, confirmPassword, errorMessage, onChange, register } = useViewModel();

  //Para saber si la variable ya tiene establecido un valor
  useEffect(() => {
    if (errorMessage !== '')
    ToastAndroid.show(errorMessage, ToastAndroid.LONG)
  }, [errorMessage]);


  return (
    <View style={stylesR.container}>
      <Image
        source={require("../../../../assets/Dragon.jpg")}
        style={stylesR.imageBackground}
      />
      <View style={stylesR.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.webp")}
          style={stylesR.logoImage}
        />
        <Text style={stylesR.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={stylesR.form}>
        <ScrollView>
          <Text style={stylesR.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require("../../../../assets/user.png")}
            placeholder="Nombres"
            value={name}
            keyboardType="default"
            property="name"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/my_user.png")}
            placeholder="Apellidos"
            value={lastname}
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/Email.png")}
            placeholder="Correo electrónico"
            value={email}
            keyboardType="email-address"
            property="email"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/Phone.png")}
            placeholder="Teléfono"
            value={phone}
            keyboardType="numeric"
            property="phone"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="Contraseña"
            value={password}
            keyboardType="default"
            secureTextEntry={true}
            property="password"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/confirm_password.png")}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            keyboardType="default"
            secureTextEntry={true}
            property="confirmPassword"
            onChangeText={onChange}
          />
          <View style={{ marginTop: 30 }}>
            <RoundedButton text="GUARDAR" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
