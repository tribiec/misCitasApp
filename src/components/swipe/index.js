import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import BackgroundContainer from "../BackgroundContainer";

const Swipe = () => {
  const [cards, setCards] = useState([
    {
      fullNombre: "Margot Robbie",
      bio: "Bendecida x dios",
      universidad: "Universidad Rafael Urdaneta",
      distancia: 6,
      image: require("../../../assets/1.jpg"),
    },
    {
      fullNombre: "Megan Fox",
      bio: "Haciendo peliculas",
      universidad: null,
      distancia: 6,
      image: require("../../../assets/2.png"),
    },
    {
      fullNombre: "Megan Fox",
      bio: "Haciendo peliculas",
      universidad: null,
      distancia: 6,
      image: require("../../../assets/3.png"),
    },
    {
      fullNombre: "Megan Fox",
      bio: "Haciendo peliculas",
      universidad: null,
      distancia: 6,
      image: require("../../../assets/4.jpg"),
    },
    {
      fullNombre: "Megan Fox",
      bio: "Haciendo peliculas",
      universidad: null,
      distancia: 6,
      image: require("../../../assets/5.jpg"),
    },
  ]);
  const [agotado, setAgotado] = useState(false);
  const [showOk, setOk] = useState(false);
  const [showNo, setNo] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
    }).start(() => {
      setOk(false);
    });
  };

  const Ok = () => {
    useEffect(() => {
      fadeIn();
      setTimeout(() => {
        fadeOut();
      }, 500);
    }, []);

    return (
      <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        <View style={styles.like}>
          <Text style={textStyles.like}>LIKE!</Text>
        </View>
      </Animated.View>
    );
  };

  const handleNo = () => {};

  const handleYes = () => {
    // if(showOk) setOk(false);
    setOk(true);
  };

  const cardRetirada = (index) => {
    console.log(`The index is ${index}`);
    const CARD_REFRESH_LIMIT = 1;
    if (cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${cards.length - index - 1} cards left.`);
      if (!agotado) {
        setAgotado(true);
      }
    }
  };

  const Card = (props) => {
    const { image, universidad, fullNombre, distancia, bio } = props;
    const size = Dimensions.get("window");
    useEffect(() => {}, []);
    return (
      <View style={{ height: size.height - 120, width: size.width - 30 }}>
        <BackgroundContainer image={image}>
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              paddingBottom: 25,
              paddingLeft: 20,
            }}
          >
            <Text style={[textStyles.general, textStyles.title]}>
              {fullNombre}
            </Text>
            <Text style={[textStyles.general, textStyles.separation]}>
              {bio}
            </Text>
            {universidad ? (
              <Text style={[textStyles.general, textStyles.separation]}>
                {universidad}
              </Text>
            ) : null}
            <Text style={[textStyles.general, textStyles.separation]}>
              A {distancia} km de distancia
            </Text>
          </View>
        </BackgroundContainer>
      </View>
    );
  };

  const SinCards = () => (
    <View style={styles.noMoreCards}>
      <Text>No more cards</Text>
    </View>
  );

  return (
    <>
      <SwipeCards
        cards={cards}
        loop={true}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <SinCards />}
        showYup={false}
        showNope={false}
        handleYup={handleYes}
        handleNope={handleNo}
        cardRemoved={cardRetirada}
      />
      {showOk ? <Ok /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 50,
    elevation: 1,
    minHeight: 500,
    backgroundColor: "red",
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    backgroundColor: "#C52233",
    height: 100,
    width: "100%",
    position: "absolute",
    zIndex: 2,
    left: 0,
    top: Dimensions.get("window").height / 2 - 150,
    justifyContent: "center",
  },
});

const textStyles = StyleSheet.create({
  general: {
    color: "white",
    fontWeight: "500",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      height: 1,
      width: 0,
    },
    fontSize: 16,
  },
  title: {
    fontSize: 28,
  },
  separation: {
    marginTop: 5,
  },
  info: {
    color: "#797A7A",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
  },
  like: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "800",
    color: "white",
  },
});

export default Swipe;