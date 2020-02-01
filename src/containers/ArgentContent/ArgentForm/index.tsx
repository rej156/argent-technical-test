/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useFormik } from "formik"
import { ethers } from "ethers"

interface IProps {
  setAddress: (address: string) => void
  isSubmitting: boolean
}

interface FormValues { address: string }

const ArgentForm: React.FunctionComponent<IProps> = props => {
  const formik = useFormik<FormValues>({
    initialValues: {
      address: "",
    },
    onSubmit: values => {
      props.setAddress(values.address)
    },
    validate: ({ address }) => {
      const errors: { address?: string } = {};
    
      if (!address) {
        errors.address = 'Address required';
      } else {
        try {
          ethers.utils.getAddress(address)
        } catch (err) {
          errors.address = 'Invalid address'
        }
        return errors
      }
      return errors;
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="address">Enter your wallet address: </label>
      <div sx={{ "> input:first-of-type": { mr: 2 } }}>
        <input
          data-testid={'address-input'}
          sx={{ minWidth: '40vw' }}
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <button disabled={props.isSubmitting || Boolean(formik.errors.address)} type="submit" data-testid={'address-submit-button'}>{`>>>`}</button>
        {formik.errors.address && <p data-testid='address-error' sx={{ color: 'red' }}>{formik.errors.address}</p>}
      </div>
    </form>
  )
}

export default ArgentForm
