module.exports = {
  findAttribute
}

function findAttribute(attributes, traitType) {
  return attributes.find(attribute => attribute.trait_type === traitType).value
}