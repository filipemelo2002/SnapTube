import { useState } from "react";
import { Platform } from "react-native";
import { Searchbar, useTheme } from "react-native-paper";
import { Container, Title, Animation } from "./SearchStyles";
import Icon from "react-native-vector-icons/Feather";

const Search = () => {
  const [search, setSearch] = useState("");
  const { colors } = useTheme();
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Title>
        <Icon name="youtube" size={30} color={colors.primary} />
        SnapTube
      </Title>
      <Searchbar
        placeholder="Search"
        style={{ fontFamily: "Noto-Regular" }}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={() => console.log("GO")}
      />
      <Animation
        source={require("../../assets/empty-box.json")}
        autoPlay
        loop
      />
    </Container>
  );
};

export default Search;
