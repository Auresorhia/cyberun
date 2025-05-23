export const uischema = {
    type: "Group",
    elements: [
      {
        type: "Group",
        elements: [
          {
            type: "Control",
            scope: "#/properties/user/properties/a08"
          },
          {
            type: "Control",
            scope: "#/properties/user/properties/a09",
            options: {
              multi: true
            }
          }
        ],
        label: "My User"
      },
      {
        type: "Group",
        elements: [
          {
            type: "Control",
            scope: "#/properties/item/properties/s01"
          },
          {
            type: "Control",
            scope: "#/properties/item/properties/i01"
          }
        ],
        label: "Profile"
      }
    ]
  };
