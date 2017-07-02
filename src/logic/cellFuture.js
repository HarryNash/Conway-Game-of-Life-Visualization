const cellFuture = {
  UNDERPOPDEATH: 1,
  SURVIVE: 2,
  OVERPOPDEATH: 3,
  BIRTH: 4,
  STAYDEAD: 5,
  properties: {
    1: {explanation: "Death by underpopulation", emojiCode: "1F3DD"},
    2: {explanation: "Appropriate conditions for survival", emojiCode: "1F605"},
    3: {explanation: "Death by overpopulation", emojiCode: "1F301"},
    4: {explanation: "Appropriate conditions for reproduction", emojiCode: "1F476"},
    5: {explanation: "Unsuitable conditions for reproduction", emojiCode: "2620"}
  }
};

export default cellFuture;
