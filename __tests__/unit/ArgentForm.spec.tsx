import React from 'react'
import {render, fireEvent, screen, act, waitForElement, wait} from '@testing-library/react'
import { Formik } from 'formik'
import ArgentForm from '../../src/containers/ArgentContent/ArgentForm'
import { ethers } from 'ethers'

describe('ArgentForm', () => {
  it('should have an input and label and a submit button', () => {
    const mockSetAddress = jest.fn()
    const mockIsSubmitting = false
    act(() => {
      render(<ArgentForm setAddress={mockSetAddress} isSubmitting={mockIsSubmitting}></ArgentForm>)
    })
    const addressInput = screen.getByTestId('address-input')
    expect(addressInput).toBeTruthy()
    expect(screen.queryByText("Enter your wallet address:")).toBeTruthy()
    const submitButton = screen.getByTestId('address-submit-button')
    expect(submitButton).toBeTruthy()
  })

  it('should show a required address error', async () => {
    const mockSetAddress = jest.fn()
    const mockIsSubmitting = false
    act(() => {

      render(
        <ArgentForm setAddress={mockSetAddress} isSubmitting={mockIsSubmitting}></ArgentForm>
      )
    })
    const addressInput = screen.getByTestId('address-input')
    const submitButton = screen.getByTestId('address-submit-button')
    expect(addressInput).toBeTruthy()
    await wait(() => {
      fireEvent.change(addressInput, { target: { value: 'vghjkl;' } })
      fireEvent.submit(submitButton)
      fireEvent.change(addressInput, { target: { value: '' } })
      fireEvent.submit(submitButton)
    })
    expect(screen.getByTestId('address-error').innerHTML).toEqual('Address required')
  })

  it('should show an invalid address error', async () => {
    const mockSetAddress = jest.fn()
    const mockIsSubmitting = false
    act(() => {

      render(
        <ArgentForm setAddress={mockSetAddress} isSubmitting={mockIsSubmitting}></ArgentForm>
      )
    })
    const addressInput = screen.getByTestId('address-input')
    const submitButton = screen.getByTestId('address-submit-button')
    expect(addressInput).toBeTruthy()
    await wait(() => {
      fireEvent.change(addressInput, { target: { value: 'vghjkl;' } })
      fireEvent.submit(submitButton)
    })
    expect(screen.getByTestId('address-error').innerHTML).toEqual('Invalid address')
  })

  it('should call setAddress prop with valid address', async () => {
    const mockSetAddress = jest.fn()
    const mockIsSubmitting = false
    act(() => {

      render(
        <ArgentForm setAddress={mockSetAddress} isSubmitting={mockIsSubmitting}></ArgentForm>
      )
    })
    const addressInput = screen.getByTestId('address-input')
    const submitButton = screen.getByTestId('address-submit-button')
    expect(addressInput).toBeTruthy()
    await wait(() => {
      fireEvent.change(addressInput, { target: { value: '0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7' } })
      fireEvent.submit(submitButton)
    })
    expect(mockSetAddress).toBeCalled()
  })
})