// Copyright (c) 2025, akshay and contributors
// For license information, please see license.txt

// frappe.ui.form.on("categories", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("categories", {
  refresh: function (frm) {
    // Set filters for the sub_category field in the child table
    frm.fields_dict["sub_categories"].grid.get_field(
      "sub_categories"
    ).get_query = function (doc, cdt, cdn) {
      return {
        filters: {
          categories: frm.doc.category, // Filter subcategories based on the selected category
        },
      };
    };
  },

  category: function (frm) {
    // Clear the child table when the category changes
    frm.clear_table("sub_categories");
    frm.refresh_field("sub_categories");
  },
});
