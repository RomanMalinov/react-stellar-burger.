import styles from "./ingredient-details-page.module.css";
import IngredientDetails from "../../components/inrredient-details/inredient-details";
function IngredientDetailsPage() {
  return (
    <div style={styles.conteiner}>
      <IngredientDetails />
    </div>
  );
}

export default IngredientDetailsPage;
