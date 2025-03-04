import { z } from 'zod';

const initialContact = {
  'first-name': '',
  'last-name': '',
  company: '',
  email: '',
  'mobile-phone': '',
  country: null, // For Select component, initial value can be null or an empty object
  city: '',
  'product-category': [], // Array for multiple checkboxes
  industry: '',
  'account-category': '',
  message: '',
  subscription: '', // To handle radio buttons
  'privacy-policy': false // For checkbox
};

const contactValidationSchema = z.object({
  'first-name': z.string().min(1, "First name is required"),
  'last-name': z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  'mobile-phone': z.string().length(10, "Mobile phone is required()").optional(), // Optional field
  country: z.string({required_error: "Country is required"}), // For Select component
  city: z.string().optional(), // Optional field
  'product-category': z.array(z.string({required_error: "Product category is required"})).min(1, "Product category is required"), // Array for multiple checkboxes
  industry: z.string({required_error: "Industry is required"}),
  'account-category': z.string({required_error: "Account category is required"}),
  message: z.string().optional(), // Optional field
  subscription: z.string({required_error: "Subscription is required"}),
  'privacy-policy': z.boolean().refine(val => val === true, "You must agree to the Privacy Policy")
});

  export {
    initialContact,
    contactValidationSchema
  }