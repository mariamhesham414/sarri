import { colors as globalColors } from '../../../constants/colors'
export const colors = {
  filter: {
    buttonBg: globalColors.mainColor,
    buttonColor: globalColors.whiteColor,
    checkBoxLabel: globalColors.darkColor,
    borderColor: globalColors.darkColor,
  },
}
export const SearchStyles = {
  BoxSearch: {
    width: '100%',
    borderRadius: '0.5rem',
    display: 'flex',
    border: `1px solid #333`,
    alignItems: 'center',
    padding: '0.5rem',
    justifyContent: 'space-between',
  },
  BoxInput: {
    width: '100%',
    height: '100%',
    border: `none`,
    outline: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    zIndex: 2,
  },
}
export const filterColors = {
  filter: {
    buttonBg: globalColors.mainColor,
    buttonColor: globalColors.whiteColor,
    checkBoxLabel: globalColors.darkColor,
    borderColor: globalColors.darkColor,
  },
}
export const filterMenuStyles = {
  menuButton: {
    fontSize: {
      lg: '20px',
      md: '18px',
      xs: '15px',
    },
    fontWeight: 500,
    mx: '10px',
    color: `${colors.filter.buttonColor} !important`,
  },
  priceBtn: {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: colors.filter.checkBoxLabel,
    textAlign: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
  },
  checkBoxLabel: {
    color: colors.filter.checkBoxLabel,
    fontFamily: 'bold',
    fontSize: '19px',
    cursor: 'pointer',
  },
  formPriceBtn: {
    fontWeight: 'bold',
    fontSize: '13px',
    color: `${colors.filter.buttonBg} !important`,
    border: `1px solid ${colors.borderColor}`,
  },
}
export const DepertmentStyles = ({ props, lng }) => ({
  Breadcrumbs: {
    bgcolor: 'transparent',
    primary: '#414042',
    secondary: '#414042',
  },
  Box: {
    my: 5,
    mx: { xs: 1, sm: 3, lg: 10, md: 10 },
    minHeight: '70vh',
    direction: lng === 'en' ? 'ltr' : 'rtl',
    gap: 0,
  },
  Stack: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'center',
    gap: 3,
  },

  StackDirection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Typography: {
    fontWeight: 600,
    mt: 5,
    fontSize: '1.5rem',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'start',
    zIndex: 1,
  },
  AllProductsGridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
    width: '100%',
    my: 5,
  },
})
