export const getIcon = (state) => {
  switch (state) {
    case 'Rain':
      return 'svg/s-1.svg'
    case 'Clear':
      return 'svg/s-4.svg'

    case 'Clouds':
      return 'svg/s-2.svg'

    default:
      return 'svg/s-2.svg'
  }
}
