import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

export default {
  title: 'Button',
}

export const ButtonDemo = () => (
  <>
    <Button onClick={action('clicked')} type="btn btn-primary">
      primary
    </Button>
    <Button onClick={action('clicked')} type="btn btn-disabled">
      disabled
    </Button>
  </>
)
