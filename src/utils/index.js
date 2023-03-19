
export const randomColor = () => {
    const colors = ["#ff5757", "#ff9d57", "#9e83ff", "#636793"];
    const textColors = ["#dddddd", "#333333"];
    return {
      color: colors[Math.floor(Math.random() * colors.length)],
      text: textColors[Math.floor(Math.random() * textColors.length)],
    };
  };