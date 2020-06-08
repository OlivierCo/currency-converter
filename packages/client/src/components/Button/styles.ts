import { css } from '@emotion/core'

export const button = css({
  width: '100%',
  padding: '15px 0px',
  cursor: 'pointer',
  fontSize: 14,
  color: '#fff',
  outline: 'none',
  border: '1px solid rgba(39, 60, 171, 0.1)',
  backgroundColor: '#2A4660',
  '&:hover': {
    background: 'rgba(42, 70, 96, 0.8)',
  },
  '&:active': {
    background: 'rgba(42, 70, 96, 0.9)',
  },
})
