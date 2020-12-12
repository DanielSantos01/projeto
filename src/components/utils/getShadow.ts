const getShadow = (color: string) => {
  const shadow = {
    shadowColor: color,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 2,
  };
  return shadow;
};

export default getShadow;
