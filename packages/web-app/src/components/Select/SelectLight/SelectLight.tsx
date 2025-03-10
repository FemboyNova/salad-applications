import type { FC } from 'react'
import type { CSSObjectWithLabel } from 'react-select'
import { DefaultTheme } from '../../../SaladTheme'
import type { SelectStylesConfig } from '../Select'
import { Select, type Props } from '../Select'

const selectLightStyles: SelectStylesConfig = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: DefaultTheme.lightGreen,
    width: '230px',
    borderRadius: 0,
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: DefaultTheme.darkBlue,
    backgroundColor: DefaultTheme.lightGreen,
  }),
  option: (baseStyles: CSSObjectWithLabel, state: { isSelected: boolean; isFocused: boolean }) => {
    let backgroundColor = DefaultTheme.lightGreen
    if (state.isSelected) {
      backgroundColor = DefaultTheme.darkBlue
    } else if (state.isFocused) {
      backgroundColor = DefaultTheme.green
    }

    return {
      ...baseStyles,
      backgroundColor,
      color: state.isSelected ? DefaultTheme.lightGreen : DefaultTheme.darkBlue,
      cursor: 'pointer',
    }
  },
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    transition: 'opacity 300ms',
    color: DefaultTheme.darkBlue,
  }),
}

export const SelectLight: FC<Omit<Props, 'customStyles' | 'classes'>> = ({ options, value, onChange }) => {
  return <Select customStyles={selectLightStyles} options={options} value={value} onChange={onChange} />
}
