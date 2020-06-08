import { DailyRate } from '../../../../common/types'

interface InnerState extends DailyRate {
  inputValue: string
}

export interface State {
  right: InnerState
  left: InnerState
}

export type ActionType =
  | 'SET_RIGHT'
  | 'SET_LEFT'
  | 'SET_LEFT_INPUT_VALUE'
  | 'SET_RIGHT_INPUT_VALUE'

interface Action {
  type: ActionType
  payload?: DailyRate
  value?: string
}

export const initialState: State = {
  right: {
    currency: null,
    rate: null,
    symbol: '',
    name: 'Select currency',
    inputValue: '',
  },
  left: {
    currency: null,
    rate: null,
    symbol: '',
    name: 'Select currency',
    inputValue: '',
  },
}

export const init = (initialState: State): State => {
  return initialState
}

const currencyExchange = (from: number, to: number, action: Action): string => {
  const result =
    from && action.value
      ? `${((from / to) * parseFloat(action.value)).toFixed(3)}`
      : ''

  return result
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LEFT': {
      return {
        ...state,
        left: {
          ...state.left,
          ...action.payload,
          inputValue: '',
        },
        right: {
          ...state.right,
          inputValue: '',
        },
      }
    }
    case 'SET_LEFT_INPUT_VALUE': {
      return {
        ...state,
        left: {
          ...state.left,
          inputValue: action.value,
        },
        right: {
          ...state.right,
          inputValue: currencyExchange(
            state.right.rate,
            state.left.rate,
            action,
          ),
        },
      }
    }
    case 'SET_RIGHT': {
      return {
        ...state,
        right: {
          ...state.right,
          ...action.payload,
          inputValue: '',
        },
        left: {
          ...state.left,
          inputValue: '',
        },
      }
    }
    case 'SET_RIGHT_INPUT_VALUE': {
      return {
        ...state,
        right: {
          ...state.right,
          inputValue: action.value,
        },
        left: {
          ...state.left,
          inputValue: currencyExchange(
            state.left.rate,
            state.right.rate,
            action,
          ),
        },
      }
    }
    default:
      return state
  }
}
