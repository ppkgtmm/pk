import { gray, blue, red, green, indigo } from '@radix-ui/colors'

export type Colors = typeof colors

export const colors = {
  ...indigo,
  ...gray,
  ...blue,
  ...red,
  ...green
}
