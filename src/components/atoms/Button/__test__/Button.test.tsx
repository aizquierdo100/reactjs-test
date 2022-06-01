/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from '@storybook/testing-react'
import * as Stories from '../Button.stories'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const { ButtonPrimaryDisabled, ButtonPrimaryEnabled, ButtonTypeCart, ButtonTypeText } = composeStories(Stories)

describe('Button', () => {
    test('renders ButtonPrimaryDisabled correctly', () => {
        const view = render(<ButtonPrimaryDisabled />)
        expect(view).toMatchSnapshot()
        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('disabled')
    })

    test('renders ButtonPrimaryEnabled correctly', () => {
        const onClick = jest.fn()
        const view = render(<ButtonPrimaryEnabled onClick={onClick} />)
        expect(view).toMatchSnapshot()
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })


    test('renders ButtonTypeCart correctly', () => {
        const onClick = jest.fn()
        const view = render(<ButtonTypeCart onClick={onClick} />)
        expect(view).toMatchSnapshot()
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('renders ButtonTypeText correctly', () => {
        const onClick = jest.fn()
        const view = render(<ButtonTypeCart onClick={onClick} />)
        expect(view).toMatchSnapshot()
        const button = screen.getByRole('button')
        userEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
