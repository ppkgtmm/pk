import {
  gray,
  blue,
  green,
  indigo,
  mint,
  lime,
  violet,
  amber
} from '@radix-ui/colors'

export type Colors = typeof colors

export const colors = {
  ...indigo,
  ...gray,
  ...blue,
  ...green,
  ...mint,
  ...amber,
  ...lime,
  ...violet
}
