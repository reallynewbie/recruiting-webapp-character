export const increaseAttribute = (attribute, setAttribute) => {
  setAttribute(attribute + 1);
};

export const decreaseAttribute = (attribute, setAttribute) => {
  if (attribute <= 0) {
    throw new Error("Attribute cannot go below zero");
  }
  setAttribute(attribute - 1);
};

export const modifierCalculator = (attributeValue) => {
    let modifier = 0

    if (attributeValue === 10 || attributeValue === 11) {
        return modifier
    }
    if (attributeValue < 10) {
        let tempAttributeValue = 10
        while (attributeValue < tempAttributeValue) {
            tempAttributeValue -= 2
            modifier -= 1
        }
        return modifier
    }
    if (attributeValue > 10) {
        let tempAttributeValue = 11
        while (attributeValue > tempAttributeValue) {
            tempAttributeValue += 2
            modifier += 1
        }
        return modifier
    }
}