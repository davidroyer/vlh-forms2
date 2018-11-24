<script>
import FormField from "./FormField.vue";
import mixinA from "../mixins/mixinA";
import FormItemMixin from "../mixins/FormItemMixin";

/**
 * The form component for last names
 * ```html
 * <form-last-name v-model="submit.lastName"/>
 * ```
 */
export default {
  name: "form-last-name",
  mixins: [mixinA, FormItemMixin],
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
