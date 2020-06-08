import { css } from '@emotion/core'

export const converter = css({
  width: '100%',
  '@media (max-width: 620px)': {
    flexDirection: 'column',
  },
})

export const box = css({
  display: 'flex',
  minWidth: 300,
  '@media (max-width: 520px)': {
    width: '100%',
  },
})

export const item = css({
  cursor: 'pointer',
  backgroundColor: '#2A4660',
  width: '100%',
  textAlign: 'left',
  padding: '10px 0 10px 10px',
  boxSizing: 'border-box',
  height: 40,
  '&:hover': {
    background: 'rgba(35, 57, 79)',
  },
})

export const rate = css({
  height: 20,
})
