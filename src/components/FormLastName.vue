<script>
import FormField from "./FormField.vue";
import FormItemMixin from "../mixins/FormItemMixin";

/**
 * The form component for last names
 * ```html
 * <form-last-name v-model="submit.lastName"/>
 * ```
 */
export default {
  name: "form-last-name",
  mixins: [FormItemMixin],
  extends: FormField,
  props: {
    name: {
      default: "lastName"
    },
    label: {
      default: "Last Name"
    },
    autocomplete: {
      default: "family-name"
    }
  }
};
</script>
