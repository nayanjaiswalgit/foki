// /src/config/theme.js

const theme = {
  token: {
    // Primary color (affects buttons, links, etc.)
    colorPrimary: "#1890ff", // Default Ant Design Blue

    // Link color
    colorLink: "#1DA57A", // Ant Design default link color (can be green or any color)

    // Background color for the page
    colorBackground: "#f0f2f5", // Light background color for the app

    // Background color for containers
    colorBgBase: "#ffffff", // Background for the container or card

    // Text colors
    colorTextBase: "#000000", // Default text color (black)
    colorTextSecondary: "#6c757d", // Secondary text color (gray)
    colorTextTertiary: "#868e96", // Tertiary text color (lighter gray)

    // Header background color
    colorBgHeader: "#001529", // Dark header background color

    // Border radius for rounded corners
    borderRadiusBase: "4px", // Global border radius for rounded components like buttons, cards

    // Spacing settings
    paddingXS: "8px", // Extra small padding for small elements
    paddingSM: "12px", // Small padding
    paddingMD: "16px", // Medium padding for larger components
    paddingLG: "24px", // Large padding for large elements like modals

    // Typography settings
    fontSizeBase: "14px", // Base font size (applies globally)
    fontSizeLG: "16px", // Larger font size for headings
    fontSizeSM: "12px", // Smaller font size for small text

    // Button settings
    buttonBorderRadius: "4px", // Border radius for buttons
    buttonHeight: "32px", // Button height

    // Link color when hovered
    colorLinkHover: "#40a9ff", // Hover color for links

    // Border settings for components like input fields and cards
    borderColorBase: "#d9d9d9", // Base border color for elements like inputs, buttons, etc.
    borderColorLight: "#f0f0f0", // Lighter border color for elements like dividers

    // Shadows for components
    boxShadowBase: "0 2px 8px rgba(0, 0, 0, 0.15)", // Default shadow for modals, dropdowns, etc.

    // Additional customization (optional)
    // Adjusting specific component styles like Ant Design's default layout
    layoutHeaderBackground: "#001529", // Header background color
    layoutFooterBackground: "#001529", // Footer background color
  },
};

export default theme;
