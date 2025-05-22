// src/context/AppContext.tsx
import React, { createContext, useReducer, useContext } from 'react';
import { AppState, AppAction } from '@/types';

// Initial state using imported types
const initialState: AppState = {
  calculator: {
    firstNumber: '',
    secondNumber: '',
    result: null,
    error: null,
  },
  navbar: {
    isMenuOpen: false,
    searchQuery: '',
    showSearch: false,
  },
  twoSum: {
    inputArray: '',
    targetValue: '',
    result: null,
    error: null,
    testResults: [],
  },
};

// Reducer function with proper typing
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    // Calculator cases
    case 'SET_CALCULATOR_INPUT':
      return {
        ...state,
        calculator: {
          ...state.calculator,
          [action.field]: action.value,
          error: null,
        },
      };
    
    case 'CALCULATE_SUM':
      const num1 = parseFloat(state.calculator.firstNumber);
      const num2 = parseFloat(state.calculator.secondNumber);
      
      if (isNaN(num1)) {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            error: 'First number is invalid',
            result: null,
          },
        };
      }
      
      if (isNaN(num2)) {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            error: 'Second number is invalid',
            result: null,
          },
        };
      }
      
      return {
        ...state,
        calculator: {
          ...state.calculator,
          result: num1 + num2,
          error: null,
        },
      };
    
    case 'CLEAR_CALCULATOR':
      return {
        ...state,
        calculator: {
          firstNumber: '',
          secondNumber: '',
          result: null,
          error: null,
        },
      };
    
    // Navbar cases
    case 'TOGGLE_MENU':
      return {
        ...state,
        navbar: {
          ...state.navbar,
          isMenuOpen: !state.navbar.isMenuOpen,
        },
      };
    
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        navbar: {
          ...state.navbar,
          searchQuery: action.value,
        },
      };
    
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        navbar: {
          ...state.navbar,
          showSearch: !state.navbar.showSearch,
          searchQuery: !state.navbar.showSearch ? state.navbar.searchQuery : '',
        },
      };
    
    // TwoSum cases
    case 'SET_TWO_SUM_INPUT':
      return {
        ...state,
        twoSum: {
          ...state.twoSum,
          [action.field]: action.value,
          error: null,
        },
      };
    
    // ... other TwoSum cases
    
    default:
      return state;
  }
}

// Create context with proper typing
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Context provider component
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => useContext(AppContext);