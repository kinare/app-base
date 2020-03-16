import { helper } from "../index";

class Validator {
  field(field) {
    return field ? field.length !== 0 : false;
  }

  isEmptyObject(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  fields(object, rules, error) {
    // todo implement same as field for passwords
    let hasErrors = false;
    for (const key in object) {
      if (rules[key]) {
        const result = this.validateFields(rules[key], object[key]);
        if (result.message.length !== 0) {
          error[key] = result;
          hasErrors = true;
        } else {
          error[key] = { status: "", message: "" };
        }
      }
    }
    return { hasErrors, errors: error };
  }

  validateFields(rules, field) {
    const res = { status: "", message: "" };
    let rule = "";

    if (rules.includes("|")) {
      rule = rules.split("|");
      for (const key in rule) {
        if (rule[key]) {
          const ruleCheck = this.checkRule(rule[key], field);
          // eslint-disable-next-line no-console
          if (!helper.isEmpty(ruleCheck)) {
            res.status = ruleCheck.status ? ruleCheck.status : res.type;
            res.message = ruleCheck.message;
          }
        }
      }
    } else {
      const ruleCheck = this.checkRule(rules, field);
      if (!helper.isEmpty(ruleCheck)) {
        res.status = ruleCheck.status ? ruleCheck.status : res.type;
        res.message = ruleCheck.message;
      }
    }
    return res;
  }

  checkRule(rule, field) {
    let res = {};
    let value;
    if (rule.includes(":")) {
      const arr = rule.split(":");
      rule = arr[0];
      value = parseInt(arr[1]);
    }

    switch (rule) {
      case "optional":
        // extra check i.e regex
        return res;
      case "required":
        if (!this.field(field)) {
          return {
            status: "is-danger",
            message: "must have a value"
          };
        }
        return res;
      case "string":
        if (!field) return res;
        if (!typeof field === "string" || !(field instanceof String)) {
          return {
            status: "has-error",
            message: "not a string"
          };
        }
        return res;
      case "min":
        if (!field) return res;
        if (field.length < value) {
          return {
            status: "has-error",
            message: `must have a minimum of ${value} characters`
          };
        }
        return res;
      case "max":
        if (!field) return res;
        if (field.length > value) {
          return {
            status: "has-error",
            message: `must have a maximum of ${value} characters`
          };
        }
        return res;
      case "size":
        if (!field) return res;
        if (field.length !== value) {
          return {
            status: "has-error",
            message: `must have ${value} characters`
          };
        }
        return res;
      case "numeric":
        if (!field) return res;
        if (typeof field !== "number" && field % 1 !== 0) {
          return {
            status: "has-error",
            message: "not a number"
          };
        }
        return res;
      case "lt":
        if (!field) return res;
        if (field > value) {
          return {
            status: "has-error",
            message: `cannot exceed ${value}`
          };
        }
        return res;
      case "gt":
        if (!field) return res;
        if (field <= value) {
          return {
            status: "has-error",
            message: `cannot be less than or equal to${value}`
          };
        }
        return res;
      case "email":
        if (!field) return res;
        // eslint-disable-next-line no-useless-escape,no-case-declarations
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(field)) {
          return {
            status: "has-error",
            message: "not a valid email"
          };
        }
        return res;
      case "bool":
        if (value === 1 && field === false) {
          return {
            status: "has-error",
            message: "must be checked"
          };
        }

        return res;
      case "kra":
        if (field === "") return res;

        // eslint-disable-next-line no-case-declarations
        const pattern = /^[aApP].\d*.[a-zA-Z]$/;
        if (!pattern.test(field)) {
          return {
            status: "has-error",
            message: "not a valid kra Pin"
          };
        }
        return res;
      case "passport":
        return res;
      case "date":
        return res;
      case "url":
        return res;
      case "array":
        return res;
      case "object":
        if (helper.isEmpty(field)) {
          return (res = {
            status: "has-error",
            message: "must have a value"
          });
        }
        return res;
      default:
        return res;
    }
  }
}

export default new Validator();
