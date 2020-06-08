import { css } from '@emotion/core'

export const labelCls = css({
  position: 'relative',
  width: '100%',
})

export const inputCls = css({
  border: 'none',
  width: '100%',
  height: 100,
  margin: 0,
  padding: 0,
  outlineWidth: 0,
  fontSize: 30,
  background: 'rgba(42, 70, 96, 0.8)',
  caretColor: '#fff',
  textIndent: 35,
  color: '#fff',
})

export const symbolCls = css({
  position: 'absolute',
  margin: 0,
  paddingLeft: 10,
  outlineWidth: 0,
  fontSize: 20,
  color: '#fff',
  top: 38,
})
