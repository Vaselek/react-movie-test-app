import withStyles from "@material-ui/core/styles/withStyles";
import Rating from "@material-ui/lab/Rating/Rating";

export const StyledRating = withStyles({
  iconHover: {
    color: "#ff6d75",
  },
  iconFilled: {
    color: 'green',
  }
})(Rating);