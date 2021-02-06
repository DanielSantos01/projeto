const getShadow = (color: string) => {
  const shadow = {
    shadowColor: color,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 1,
  };
  return shadow;
};

export default getShadow;
