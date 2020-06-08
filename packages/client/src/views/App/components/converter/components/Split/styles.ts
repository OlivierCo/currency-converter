import { css } from '@emotion/core'

export const flexCls = css({
  position: 'relative',
  maxWidth: 50,
  minWidth: 50,
  height: 200,
  '@media (max-width: 520px)': {
    width: '100%',
    maxWidth: '100%',
    height: 50,
  },
})
