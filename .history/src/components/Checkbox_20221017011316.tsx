import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root>
      <CheckboxPrimitive.Item></CheckboxPrimitive.Item>
  )
}
