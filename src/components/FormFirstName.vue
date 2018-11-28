<script>
import FormField from "./FormField.vue";

/**
 * The form component for first names
 * ```html
 * <FormFirstName v-model="submit.firstName"/>
 * ```
 */
export default {
  name: "FormFirstName",
  extends: FormField,
  props: {
    name: {
      default: "firstName"
    },
    label: {
      default: "First Name"
    },
    autocomplete: {
      default: "given-name"
    }
  }
};
</script>
