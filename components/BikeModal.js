import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Linking } from "react-native";

//Créer un composant BikeModal avec 3 propriétés en argument
export default function BikeModal({ modalVisible, closeModal, bikeType }) {
  // console.log(bikeType);

  //rediriger vers une app externe
  const openExternalApp = () => {
    //condition si la props bikeType est égale à velib
    if (bikeType === "velib") {
      const url = () => {
        return Platform.OS === "ios"
          ? "https://apps.apple.com/fr/app/v%C3%A9lib-app-officielle/id577807727"
          : "https://play.google.com/store/apps/details?id=com.paris.velib&hl=fr";
      };
      Linking.openURL(url());
    } else if (bikeType === "lime") {
      const url = () => {
        return Platform.OS === "ios"
          ? "https://apps.apple.com/us/app/lime-ridegreen/id1199780189"
          : "https://play.google.com/store/apps/details?id=com.limebike&hl=fr";
      };
      Linking.openURL(url());
    } else if (bikeType === "dott") {
      const url = () => {
        return Platform.OS === "ios"
          ? "https://apps.apple.com/be/app/dott-unlock-your-city/id1440301673"
          : "https://play.google.com/store/apps/details?id=com.ridedott.rider&hl=fr";
      };
      Linking.openURL(url());
    } else if (bikeType === "tier") {
      const url = () => {
        return Platform.OS === "ios"
          ? "https://apps.apple.com/fr/app/tier-move-better/id1436140272"
          : "https://play.google.com/store/apps/details?id=com.tier.app&hl=en&gl=US";
      };
      Linking.openURL(url());
    }
  };

  return (
    <View styles={styles.Screen}>
      {/*Créer la balise Modal avec propriété visible passée avec la props modalVisible*/}
      <Modal
        style={styles.modalContainer}
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.blocko}>
          <TouchableOpacity
            style={styles.openAppBtn}
            onPress={() => openExternalApp()}
          >
            <Text style={styles.txtBtn}>unlock & pay !</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.close} onPress={() => closeModal()}>
            <Text style={styles.txtBtn}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  blocko: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    top: "58%",
  },

  txtBtn: {
    color: "#303F4A",
    fontFamily: "monospace",
    fontSize: 16,
    textTransform: "uppercase",
  },

  openAppBtn: {
    color: "#C1DBF0",
    textTransform: "uppercase",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#303F4A",
    backgroundColor: "#C1DBF0",
    shadowColor: "#303F4A",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },

  close: {
    color: "#303F4A",
    textTransform: "uppercase",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#303F4A",
    backgroundColor: "#C1DBF0",
    shadowColor: "#303F4A",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },
});
