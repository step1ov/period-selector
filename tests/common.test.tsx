import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import PeriodSelector from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<PeriodSelector />)
  })
})
