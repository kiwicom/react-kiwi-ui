// @flow
import mergeDeepRight from "ramda/src/mergeDeepRight";

import foundation from "./foundation";
import convertHexToRgba from "./convertHexToRgba";

import type { GetTokens, FromPlainObject } from "./index";

export const getTokens: GetTokens = customFoundation => {
  // By default it takes base foundation config
  const theme = customFoundation ? mergeDeepRight(foundation, customFoundation) : foundation;
  return {
    // category:Colors
    // description:Use these tokens for text or icon colors. Don't use these for borders and background colors.
    colorTextPrimary: theme.palette.ink.normal,
    colorTextSecondary: theme.palette.ink.light,
    colorTextAttention: theme.palette.ink.dark,
    colorTextError: theme.palette.red.normal,
    colorTextInfo: theme.palette.blue.normal,
    colorTextSuccess: theme.palette.green.normal,
    colorTextWarning: theme.palette.orange.normal,
    colorTextCritical: theme.palette.red.normal,
    colorTextWhite: theme.palette.white.normal,
    colorIconPrimary: theme.palette.ink.normal,
    colorIconSecondary: theme.palette.ink.light,
    colorIconAttention: theme.palette.ink.dark,
    colorIconTertiary: theme.palette.ink.lighter,
    colorIconInfo: theme.palette.blue.normal,
    colorIconSuccess: theme.palette.green.normal,
    colorIconWarning: theme.palette.orange.normal,
    colorIconCritical: theme.palette.red.normal,
    colorHeading: theme.palette.ink.dark,
    colorHeadingInverted: theme.palette.white.normal,
    colorTextLinkPrimary: theme.palette.product.dark,
    colorTextLinkPrimaryHover: theme.palette.product.normal,
    colorTextLinkSecondary: theme.palette.ink.dark,
    colorTextLinkSecondaryHover: theme.palette.product.normal,
    colorAlertIconSuccess: theme.palette.green.normal,
    colorTextAlertSuccess: theme.palette.green.dark,
    colorAlertIconInfo: theme.palette.blue.normal,
    colorTextAlertInfo: theme.palette.blue.dark,
    colorAlertIconWarning: theme.palette.orange.normal,
    colorTextAlertWarning: theme.palette.orange.dark,
    colorAlertIconCritical: theme.palette.red.normal,
    colorTextAlertCritical: theme.palette.red.dark,
    colorTextAlertLink: theme.palette.ink.dark,
    colorTextButtonFilled: theme.palette.white.normal,
    colorTextButtonFilledHover: theme.palette.white.normal,
    colorTextButtonFilledActive: theme.palette.white.normal,
    colorTextButtonPrimary: theme.palette.white.normal,
    colorTextButtonPrimaryHover: theme.palette.white.normal,
    colorTextButtonPrimaryActive: theme.palette.white.normal,
    colorTextButtonSecondary: theme.palette.ink.normal,
    colorTextButtonSecondaryHover: theme.palette.ink.normalHover,
    colorTextButtonSecondaryActive: theme.palette.ink.normalActive,
    colorTextButtonInfo: theme.palette.white.normal,
    colorTextButtonInfoHover: theme.palette.white.normal,
    colorTextButtonInfoActive: theme.palette.white.normal,
    colorTextButtonSuccess: theme.palette.white.normal,
    colorTextButtonSuccessHover: theme.palette.white.normal,
    colorTextButtonSuccessActive: theme.palette.white.normal,
    colorTextButtonWarning: theme.palette.white.normal,
    colorTextButtonWarningHover: theme.palette.white.normal,
    colorTextButtonWarningActive: theme.palette.white.normal,
    colorTextButtonCritical: theme.palette.white.normal,
    colorTextButtonCriticalHover: theme.palette.white.normal,
    colorTextButtonCriticalActive: theme.palette.white.normal,
    colorTextButtonFacebook: theme.palette.white.normal,
    colorTextButtonFacebookHover: theme.palette.white.normal,
    colorTextButtonFacebookActive: theme.palette.white.normal,
    colorTextButtonGoogle: theme.palette.ink.normal,
    colorTextButtonGoogleHover: theme.palette.ink.normalHover,
    colorTextButtonGoogleActive: theme.palette.ink.normalActive,
    colorTextButtonWhite: theme.palette.ink.normal,
    colorTextButtonWhiteHover: theme.palette.ink.normalHover,
    colorTextButtonWhiteActive: theme.palette.ink.normalActive,
    colorTextButtonPrimaryBordered: theme.palette.product.normal,
    colorTextButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    colorTextButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    colorTextButtonSecondaryBordered: theme.palette.ink.normal,
    colorTextButtonSecondaryBorderedHover: theme.palette.ink.normalHover,
    colorTextButtonSecondaryBorderedActive: theme.palette.ink.normalActive,
    colorTextButtonInfoBordered: theme.palette.blue.normal,
    colorTextButtonInfoBorderedHover: theme.palette.blue.normalHover,
    colorTextButtonInfoBorderedActive: theme.palette.blue.normalActive,
    colorTextButtonSuccessBordered: theme.palette.green.normal,
    colorTextButtonSuccessBorderedHover: theme.palette.green.normalHover,
    colorTextButtonSuccessBorderedActive: theme.palette.green.normalActive,
    colorTextButtonWarningBordered: theme.palette.orange.normal,
    colorTextButtonWarningBorderedHover: theme.palette.orange.normalHover,
    colorTextButtonWarningBorderedActive: theme.palette.orange.normalActive,
    colorTextButtonCriticalBordered: theme.palette.red.normal,
    colorTextButtonCriticalBorderedHover: theme.palette.red.normalHover,
    colorTextButtonCriticalBorderedActive: theme.palette.red.normalActive,
    colorTextButtonFacebookBordered: theme.palette.social.facebook,
    colorTextButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    colorTextButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    colorTextButtonGoogleBordered: theme.palette.ink.normal,
    colorTextButtonGoogleBorderedHover: theme.palette.ink.normalHover,
    colorTextButtonGoogleBorderedActive: theme.palette.ink.normalActive,
    colorTextButtonWhiteBordered: theme.palette.white.normal,
    colorTextButtonWhiteBorderedHover: theme.palette.white.normal,
    colorTextButtonWhiteBorderedActive: theme.palette.white.normal,
    colorTextButtonLinkPrimary: theme.palette.product.normal,
    colorTextButtonLinkPrimaryHover: theme.palette.product.normalHover,
    colorTextButtonLinkPrimaryActive: theme.palette.product.normalActive,
    colorTextButtonLinkSecondary: theme.palette.ink.normal,
    colorTextButtonLinkSecondaryHover: theme.palette.ink.normalHover,
    colorTextButtonLinkSecondaryActive: theme.palette.ink.normalActive,
    colorTextInput: theme.palette.ink.normal,
    colorTextInputPrefix: theme.palette.ink.light,
    colorTextInputDisabled: theme.palette.ink.lighter,
    colorTextBadgeNeutral: theme.palette.ink.dark,
    colorTextBadgeInfo: theme.palette.blue.normal,
    colorTextBadgeSuccess: theme.palette.green.normal,
    colorTextBadgeWarning: theme.palette.orange.normal,
    colorTextBadgeCritical: theme.palette.red.normal,
    colorTextBadgeDark: theme.palette.white.normal,
    colorTextBadgeWhite: theme.palette.ink.dark,
    colorTextLoading: theme.palette.ink.lighter,
    colorTextTable: theme.palette.ink.light,
    colorTextTag: theme.palette.ink.normal,
    colorTextTagSelected: theme.palette.cloud.normal,
    colorIconInput: theme.palette.ink.lighter,
    colorPlaceholderInput: theme.palette.ink.lighter,
    colorPlaceholderInputError: theme.palette.red.normal,
    colorPlaceholderInputFile: theme.palette.ink.light,
    colorPlaceholderInputFileError: theme.palette.red.normal,
    colorFormLabel: theme.palette.ink.normal,
    colorFormLabelFilled: theme.palette.ink.light,
    colorInfoCheckBoxRadio: theme.palette.ink.light,
    colorIconCheckboxRadio: theme.palette.product.normal,
    colorIconCheckboxRadioDisabled: theme.palette.ink.lighter,
    colorIconRadioButton: theme.palette.product.normal,
    colorIconRadioButtonDisabled: theme.palette.ink.lighter,
    colorStopoverArrow: theme.palette.ink.light,
    // category:Font family
    // description:
    fontFamily: theme.base.fontFamily,
    // category:Background colors
    // description:Use these tokens for background colors only. Do not use these for border colors or text theme.palette.
    backgroundBody: theme.palette.cloud.light,
    backgroundModal: theme.palette.white.normal,
    backgroundCard: theme.palette.white.normal,
    backgroundCarrierLogo: "transparent",
    backgroundCountryFlag: "transparent",
    backgroundButtonPrimary: theme.palette.product.normal,
    backgroundButtonPrimaryHover: theme.palette.product.normalHover,
    backgroundButtonPrimaryActive: theme.palette.product.normalActive,
    backgroundButtonSecondary: theme.palette.cloud.normal,
    backgroundButtonSecondaryHover: theme.palette.cloud.normalHover,
    backgroundButtonSecondaryActive: theme.palette.cloud.normalActive,
    backgroundButtonFacebook: theme.palette.social.facebook,
    backgroundButtonFacebookHover: theme.palette.social.facebookHover,
    backgroundButtonFacebookActive: theme.palette.social.facebookActive,
    backgroundButtonGoogle: theme.palette.cloud.light,
    backgroundButtonGoogleHover: theme.palette.cloud.lightHover,
    backgroundButtonGoogleActive: theme.palette.cloud.lightActive,
    backgroundButtonInfo: theme.palette.blue.normal,
    backgroundButtonInfoHover: theme.palette.blue.normalHover,
    backgroundButtonInfoActive: theme.palette.blue.normalActive,
    backgroundButtonSuccess: theme.palette.green.normal,
    backgroundButtonSuccessHover: theme.palette.green.normalHover,
    backgroundButtonSuccessActive: theme.palette.green.normalActive,
    backgroundButtonWarning: theme.palette.orange.normal,
    backgroundButtonWarningHover: theme.palette.orange.normalHover,
    backgroundButtonWarningActive: theme.palette.orange.normalActive,
    backgroundButtonCritical: theme.palette.red.normal,
    backgroundButtonCriticalHover: theme.palette.red.normalHover,
    backgroundButtonCriticalActive: theme.palette.red.normalActive,
    backgroundButtonWhite: theme.palette.white.normal,
    backgroundButtonWhiteHover: theme.palette.cloud.light,
    backgroundButtonWhiteActive: theme.palette.cloud.lightHover,
    backgroundButtonBordered: "transparent",
    backgroundButtonBorderedHover: theme.palette.cloud.light,
    backgroundButtonBorderedActive: theme.palette.cloud.light,
    backgroundButtonWhiteBordered: "transparent",
    backgroundButtonWhiteBorderedHover: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonWhiteBorderedActive: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonLinkPrimary: "transparent",
    backgroundButtonLinkPrimaryHover: theme.palette.cloud.lightHover,
    backgroundButtonLinkPrimaryActive: theme.palette.cloud.lightActive,
    backgroundButtonLinkSecondary: "transparent",
    backgroundButtonLinkSecondaryHover: theme.palette.cloud.lightHover,
    backgroundButtonLinkSecondaryActive: theme.palette.cloud.lightActive,
    backgroundInput: theme.palette.white.normal,
    backgroundInputDisabled: theme.palette.cloud.normal,
    backgroundAlertSuccess: theme.palette.green.light,
    backgroundAlertInfo: theme.palette.blue.light,
    backgroundAlertWarning: theme.palette.orange.light,
    backgroundAlertCritical: theme.palette.red.light,
    backgroundBadgeNeutral: theme.palette.cloud.light,
    backgroundBadgeInfo: theme.palette.blue.light,
    backgroundBadgeSuccess: theme.palette.green.light,
    backgroundBadgeWarning: theme.palette.orange.light,
    backgroundBadgeCritical: theme.palette.red.light,
    backgroundBadgeDark: theme.palette.ink.normal,
    backgroundBadgeWhite: theme.palette.white.normal,
    backgroundServiceLogo: "transparent",
    backgroundIllustration: "transparent",
    backgroundSeparator: theme.palette.cloud.normal,
    backgroundTableShadowLeft: `linear-gradient(to left, transparent, ${convertHexToRgba(
      theme.palette.ink.lighter,
      23,
    )})`,
    backgroundTableShadowRight: `linear-gradient(to right, transparent, ${convertHexToRgba(
      theme.palette.ink.lighter,
      23,
    )})`,
    backgroundTable: theme.palette.white.normal,
    backgroundTableEven: theme.palette.cloud.light,
    backgroundTableHover: theme.palette.cloud.normal,
    backgroundTag: theme.palette.cloud.light,
    backgroundTagSelected: theme.palette.ink.normal,
    backgroundTagHover: theme.palette.cloud.lightHover,
    backgroundTagSelectedHover: theme.palette.ink.normalHover,
    backgroundTagActive: theme.palette.cloud.lightActive,
    backgroundTagSelectedActive: theme.palette.ink.normalActive,
    // category:Font size
    // description:Use these sizing tokens for font sizes.
    fontSizeHeadingDisplay: "40px",
    fontSizeHeadingTitle1: "28px",
    fontSizeHeadingTitle2: "22px",
    fontSizeHeadingTitle3: "16px",
    fontSizeHeadingTitle4: theme.base.fontSizeMd,
    fontSizeHeadingTitle5: theme.base.fontSizeSm,
    fontSizeTextNormal: theme.base.fontSizeMd,
    fontSizeTextLarge: theme.base.fontSizeLg,
    fontSizeTextSmall: theme.base.fontSizeSm,
    fontSizeMessage: theme.base.fontSizeMd,
    fontSizeButtonLarge: theme.base.fontSizeLg,
    fontSizeButtonNormal: theme.base.fontSizeMd,
    fontSizeButtonSmall: theme.base.fontSizeSm,
    fontSizeInputNormal: theme.base.fontSizeMd,
    fontSizeInputSmall: theme.base.fontSizeMd,
    fontSizeFormLabel: theme.base.fontSizeMd,
    fontSizeFormFeedback: theme.base.fontSizeSm,
    // category:Border radius
    // description:Use radius tokens to change the border-radius size (rounded corners).
    /** use only for square */
    borderRadiusCircle: "50%",
    /** use for all basic elements like buttons, inputs, content containers */
    borderRadiusNormal: theme.base.borderRadius,
    /** use for big elements like modal and large buttons */
    borderRadiusLarge: "6px",
    /** use for smaller elements like tags */
    borderRadiusSmall: "2px",
    borderRadiusBadge: "12px",
    // category:Z Index
    // description:Use layers to show depth of page.
    zIndexDefault: "1",
    zIndexSticky: "100",
    zIndexModalOverlay: "800",
    zIndexModal: "825",
    zIndexOnTheTop: "900",
    // category:Size (width, height)
    // description:
    widthIconSmall: theme.base.sizeSm,
    heightIconSmall: theme.base.sizeSm,
    widthIconMedium: theme.base.sizeMd,
    heightIconMedium: theme.base.sizeMd,
    widthIconLarge: theme.base.sizeLg,
    heightIconLarge: theme.base.sizeLg,
    heightInputNormal: theme.base.sizeXl,
    heightInputLarge: theme.base.size2xl,
    heightInputSmall: theme.base.sizeLg,
    heightButtonNormal: theme.base.sizeXl,
    heightButtonLarge: theme.base.size2xl,
    heightButtonSmall: theme.base.sizeLg,
    heightRadioButton: "20px",
    widthRadioButton: "20px",
    heightCheckbox: "20px",
    widthCheckbox: "20px",
    heightCountryFlag: "auto",
    widthCountryFlag: theme.base.sizeMd,
    heightBadge: theme.base.sizeMd,
    widthBadgeCircled: theme.base.sizeMd,
    heightIllustrationSmall: "90px",
    heightIllustrationMedium: "200px",
    heightServiceLogoSmall: "12px",
    heightServiceLogoMedium: theme.base.sizeMd,
    heightServiceLogoLarge: "48px",
    heightSeparator: "1px",
    heightInputGroupSeparatorSmall: theme.base.sizeSm,
    heightInputGroupSeparatorNormal: theme.base.sizeMd,
    widthModalSmall: "540px",
    widthModalNormal: "740px",
    widthModalLarge: "1280px",
    widthStopoverArrow: "36px",
    heightStopoverArrow: "7px",
    // category:Breakpoints
    widthBreakpointMediumMobile: 414,
    widthBreakpointLargeMobile: 576,
    widthBreakpointTablet: 768,
    widthBreakpointDesktop: 992,
    widthBreakpointLargeDesktop: 1200,
    // category:Border color
    // description:
    borderColorInput: theme.palette.ink.lighter,
    borderColorInputHover: theme.palette.ink.lighterHover,
    borderColorInputActive: theme.palette.ink.lighterActive,
    borderColorInputFocus: theme.palette.blue.normal,
    borderColorInputError: theme.palette.red.normal,
    borderColorInputErrorHover: theme.palette.red.normalHover,
    borderColorInputErrorFocus: theme.palette.red.normal,
    borderColorTableCell: theme.palette.ink.lighter,
    borderColorCard: theme.palette.cloud.normal,
    borderColorModal: theme.palette.cloud.normal,
    borderColorButtonPrimaryBordered: theme.palette.product.normal,
    borderColorButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    borderColorButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    borderColorButtonSecondaryBordered: theme.palette.ink.normal,
    borderColorButtonSecondaryBorderedHover: theme.palette.ink.normalHover,
    borderColorButtonSecondaryBorderedActive: theme.palette.ink.normalActive,
    borderColorButtonFacebookBordered: theme.palette.social.facebook,
    borderColorButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    borderColorButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    borderColorButtonGoogleBordered: theme.palette.ink.normal,
    borderColorButtonGoogleBorderedHover: theme.palette.ink.normalHover,
    borderColorButtonGoogleBorderedActive: theme.palette.ink.normalActive,
    borderColorButtonInfoBordered: theme.palette.blue.normal,
    borderColorButtonInfoBorderedHover: theme.palette.blue.normalHover,
    borderColorButtonInfoBorderedActive: theme.palette.blue.normalActive,
    borderColorButtonSuccessBordered: theme.palette.green.normal,
    borderColorButtonSuccessBorderedHover: theme.palette.green.normalHover,
    borderColorButtonSuccessBorderedActive: theme.palette.green.normalActive,
    borderColorButtonWarningBordered: theme.palette.orange.normal,
    borderColorButtonWarningBorderedHover: theme.palette.orange.normalHover,
    borderColorButtonWarningBorderedActive: theme.palette.orange.normalActive,
    borderColorButtonCriticalBordered: theme.palette.red.normal,
    borderColorButtonCriticalBorderedHover: theme.palette.red.normalHover,
    borderColorButtonCriticalBorderedActive: theme.palette.red.normalActive,
    borderColorButtonWhiteBordered: theme.palette.white.normal,
    borderColorButtonWhiteBorderedHover: theme.palette.white.normal,
    borderColorButtonWhiteBorderedActive: theme.palette.white.normal,
    borderColorCheckboxRadio: theme.palette.ink.lighter,
    borderColorCheckboxRadioError: theme.palette.red.normal,
    borderColorCheckboxRadioHover: theme.palette.ink.light,
    borderColorCheckboxRadioActive: theme.palette.ink.normal,
    borderColorCheckboxRadioFocus: theme.palette.blue.normal,
    borderColorTable: theme.palette.cloud.normal,
    borderColorTableHead: theme.palette.ink.lighter,
    borderColorTag: theme.palette.cloud.normal,
    borderColorTagFocus: theme.palette.blue.normal,
    // category:Border style
    // description:
    borderStyleCard: "solid",
    borderWidthCard: "1px",
    borderStyleInput: "solid",
    borderWidthInput: "1px",
    borderWidthInputFocus: "2px",
    // category:Opacity
    // description:
    opacityOverlay: theme.base.opacityLarge,
    opacityButtonDisabled: theme.base.opacitySmall,
    opacityRadioButtonDisabled: theme.base.opacityMedium,
    opacityCheckboxDisabled: theme.base.opacityMedium,
    // category:Font weight
    // description:Use this for setting basic font weights.
    fontWeightNormal: theme.base.fontWeightNormal,
    fontWeightMedium: theme.base.fontWeightMedium,
    fontWeightBold: theme.base.fontWeightBold,
    fontWeightLinks: theme.base.fontWeightMedium,
    fontWeightHeadingDisplay: theme.base.fontWeightBold,
    fontWeightHeadingTitle1: theme.base.fontWeightBold,
    fontWeightHeadingTitle2: theme.base.fontWeightMedium,
    fontWeightHeadingTitle3: theme.base.fontWeightMedium,
    fontWeightHeadingTitle4: theme.base.fontWeightMedium,
    fontWeightHeadingTitle5: theme.base.fontWeightBold,
    fontWeightTableHead: theme.base.fontWeightBold,
    // category:Spacing
    // description:Use this for setting spacings for elements.
    paddingAlert: theme.base.spaceMd,
    paddingAlertWithIcon: theme.base.spaceSm,
    paddingBadge: `0 ${theme.base.spaceXs}`,
    paddingButtonWithoutText: "0",
    paddingButtonSmall: `0 ${theme.base.spaceSm}`,
    paddingButtonNormal: `0 ${theme.base.spaceMd}`,
    paddingButtonLarge: "0 28px",
    paddingButtonSmallWithIcons: `0 ${theme.base.spaceXs}`,
    paddingButtonNormalWithIcons: `0 ${theme.base.spaceSm}`,
    paddingButtonLargeWithIcons: `0 ${theme.base.spaceMd}`,
    paddingButtonSmallWithLeftIcon: `0 ${theme.base.spaceSm} 0 ${theme.base.spaceXs}`,
    paddingButtonNormalWithLeftIcon: `0 ${theme.base.spaceMd} 0 ${theme.base.spaceSm}`,
    paddingButtonLargeWithLeftIcon: `0 28px 0 ${theme.base.spaceMd}`,
    paddingButtonSmallWithRightIcon: `0 ${theme.base.spaceXs} 0 ${theme.base.spaceSm}`,
    paddingButtonNormalWithRightIcon: `0 ${theme.base.spaceSm} 0 ${theme.base.spaceMd}`,
    paddingButtonLargeWithRightIcon: `0 ${theme.base.spaceMd} 0 28px`,
    paddingTextareaSmall: `${theme.base.spaceXs} ${theme.base.spaceSm}`,
    paddingTextareaNormal: theme.base.spaceSm,
    paddingInputSmall: `0 ${theme.base.spaceSm}`,
    paddingInputNormal: `0 ${theme.base.spaceSm}`,
    marginButtonIconSmall: theme.base.spaceXs,
    marginButtonIconNormal: theme.base.spaceXs,
    marginButtonIconLarge: theme.base.spaceSm,
    marginButtonGroupConnected: "0 1px 0 0",
    marginButtonGroup: `0 ${theme.base.spaceXs} 0 0`,
    marginTopFormFeedback: "2px",
    marginBottomSelectSuffix: "2px",
    paddingInputFile: "0 0 0 6px",
    paddingLeftSelectPrefix: "48px",
    paddingLoading: theme.base.spaceSm,
    paddingTable: `${theme.base.spaceSm} ${theme.base.spaceMd}`,
    paddingTableCompact: `${theme.base.spaceXs} ${theme.base.spaceSm}`,
    paddingTag: `6px ${theme.base.spaceXs}`,
    paddingTagWithIcon: `6px ${theme.base.spaceXs} 6px 6px`,
    paddingTagRemovable: `6px 6px 6px ${theme.base.spaceXs}`,
    paddingTagRemovableWithIcon: "6px",
    marginBadgeIcon: `0 ${theme.base.space2xs} 0 0`,
    spaceXXXSmall: "2px",
    spaceXXSmall: theme.base.space2xs,
    spaceXSmall: theme.base.spaceXs,
    spaceSmall: theme.base.spaceSm,
    spaceMedium: theme.base.spaceMd,
    spaceLarge: theme.base.spaceLg,
    spaceXLarge: theme.base.spaceXl,
    spaceXXLarge: theme.base.space2xl,
    spaceXXXLarge: theme.base.space3xl,
    // category:Duration
    // description:Use this for setting the speed of animation or transition.
    durationFast: theme.base.durationFast,
    durationNormal: theme.base.durationNormal,
    durationSlow: theme.base.durationSlow,
    // category:Modifier
    // description:Use this for values for transform property, etc.
    modifierScaleButtonActive: 0.95,
    modifierScaleCheckboxRadioActive: 0.95,
    // category:Line height
    // description:
    lineHeightText: theme.base.lineHeight,
    lineHeightHeading: "1.2",
    // category:Text decoration
    // description:
    textDecorationTextLinkPrimary: "underline",
    textDecorationTextLinkPrimaryHover: "none",
    textDecorationTextLinkSecondary: "underline",
    textDecorationTextLinkSecondaryHover: "none",
    // category:Box shadow
    // description:
    boxShadowButtonFocus: `0 0 4px 1px ${theme.base.boxShadowColorStatic}`,
    boxShadowActionable: `${theme.base.boxShadowActionable} ${theme.base.boxShadowColorActionable}`,
    boxShadowElevatedLevel1: `${theme.base.boxShadowElevated} ${theme.base.boxShadowColorElevated}`,
    boxShadowModal: `${theme.base.boxShadowModal} ${theme.base.boxShadowColorModal}`,
    // category:Color palette
    // description: Use these tokens as a fallback when you need specific color. It's always preferred to use less abstract design tokens. Don't use Hover and Active shades as base theme.palette.
    paletteProductLight: theme.palette.product.light,
    paletteProductLightHover: theme.palette.product.lightHover,
    paletteProductLightActive: theme.palette.product.lightActive,
    paletteProductNormal: theme.palette.product.normal,
    paletteProductNormalHover: theme.palette.product.normalHover,
    paletteProductNormalActive: theme.palette.product.normalActive,
    paletteProductDark: theme.palette.product.dark,
    paletteProductDarkHover: theme.palette.product.darkHover,
    paletteProductDarkActive: theme.palette.product.darkActive,
    paletteWhite: theme.palette.white.normal,
    paletteWhiteHover: theme.palette.cloud.light,
    paletteWhiteActive: theme.palette.cloud.lightHover,
    paletteCloudLight: theme.palette.cloud.light,
    paletteCloudLightHover: theme.palette.cloud.lightHover,
    paletteCloudLightActive: theme.palette.cloud.lightActive,
    paletteCloudNormal: theme.palette.cloud.normal,
    paletteCloudNormalHover: theme.palette.cloud.normalHover,
    paletteCloudNormalActive: theme.palette.cloud.normalActive,
    paletteInkLighter: theme.palette.ink.lighter,
    paletteInkLighterHover: theme.palette.ink.lighterHover,
    paletteInkLighterActive: theme.palette.ink.lighterActive,
    paletteInkLight: theme.palette.ink.light,
    paletteInkLightHover: theme.palette.ink.lightHover,
    paletteInkLightActive: theme.palette.ink.lightActive,
    paletteInkNormal: theme.palette.ink.normal,
    paletteInkNormalHover: theme.palette.ink.normalHover,
    paletteInkNormalActive: theme.palette.ink.normalActive,
    paletteInkDark: theme.palette.ink.dark,
    paletteOrangeLight: theme.palette.orange.light,
    paletteOrangeLightHover: theme.palette.orange.lightHover,
    paletteOrangeLightActive: theme.palette.orange.lightActive,
    paletteOrangeNormal: theme.palette.orange.normal,
    paletteOrangeNormalHover: theme.palette.orange.normalHover,
    paletteOrangeNormalActive: theme.palette.orange.normalActive,
    paletteOrangeDark: theme.palette.orange.dark,
    paletteOrangeDarkHover: theme.palette.orange.darkHover,
    paletteOrangeDarkActive: theme.palette.orange.darkActive,
    paletteRedLight: theme.palette.red.light,
    paletteRedLightHover: theme.palette.red.lightHover,
    paletteRedLightActive: theme.palette.red.lightActive,
    paletteRedNormal: theme.palette.red.normal,
    paletteRedNormalHover: theme.palette.red.normalHover,
    paletteRedNormalActive: theme.palette.red.normalActive,
    paletteRedDark: theme.palette.red.dark,
    paletteRedDarkHover: theme.palette.red.darkHover,
    paletteRedDarkActive: theme.palette.red.darkActive,
    paletteGreenLight: theme.palette.green.light,
    paletteGreenLightHover: theme.palette.green.lightHover,
    paletteGreenLightActive: theme.palette.green.lightActive,
    paletteGreenNormal: theme.palette.green.normal,
    paletteGreenNormalHover: theme.palette.green.normalHover,
    paletteGreenNormalActive: theme.palette.green.normalActive,
    paletteGreenDark: theme.palette.green.dark,
    paletteGreenDarkHover: theme.palette.green.darkHover,
    paletteGreenDarkActive: theme.palette.green.darkActive,
    paletteBlueLight: theme.palette.blue.light,
    paletteBlueLightHover: theme.palette.blue.lightHover,
    paletteBlueLightActive: theme.palette.blue.lightActive,
    paletteBlueNormal: theme.palette.blue.normal,
    paletteBlueNormalHover: theme.palette.blue.normalHover,
    paletteBlueNormalActive: theme.palette.blue.normalActive,
    paletteBlueDark: theme.palette.blue.dark,
    paletteBlueDarkHover: theme.palette.blue.darkHover,
    paletteBlueDarkActive: theme.palette.blue.darkActive,
    paletteSocialFacebook: theme.palette.social.facebook,
    paletteSocialFacebookHover: theme.palette.social.facebookHover,
    paletteSocialFacebookActive: theme.palette.social.facebookActive,
  };
};

export const defaultTokens = getTokens();

export const fromPlainObject: FromPlainObject = themePaletteColors => {
  const theme = {
    palette: {
      product: {
        light: themePaletteColors.productLight,
        lightHover: themePaletteColors.productLightHover,
        lightActive: themePaletteColors.productLightActive,
        normal: themePaletteColors.productNormal,
        normalHover: themePaletteColors.productNormalHover,
        normalActive: themePaletteColors.productNormalActive,
        dark: themePaletteColors.productDark,
        darkHover: themePaletteColors.productDarkHover || foundation.palette.product.darkHover,
        darkActive: themePaletteColors.productDarkActive || foundation.palette.product.darkActive,
      },
    },
  };

  return getTokens(theme);
};
