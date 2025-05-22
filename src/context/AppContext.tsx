// src/context/AppContext.tsx
import React, { createContext, useReducer, useContext } from 'react';
import { AppState, AppAction } from '@/types';
import { twoSumAlgorithm } from '@/utils/algorithms';

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

    case 'CALCULATE_TWO_SUM': {
      const { inputArray, targetValue } = state.twoSum;
      
      try {
        // Parse input array
        const numbers = inputArray
          .replace(/[\[\]]/g, '')
          .split(',')
          .map(str => parseInt(str.trim()))
          .filter(num => !isNaN(num));

        const target = parseInt(targetValue);

        if (numbers.length < 2) {
          throw new Error('Array must contain at least 2 numbers');
        }

        if (isNaN(target)) {
          throw new Error('Please enter a valid target number');
        }

        // Verify array is sorted
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] < numbers[i - 1]) {
            throw new Error('Array must be sorted in non-decreasing order');
          }
        }

        const result = twoSumAlgorithm(numbers, target);

        if (result.length === 0) {
          throw new Error('No solution found for the given target');
        }

        return {
          ...state,
          twoSum: {
            ...state.twoSum,
            result,
            error: null,
          },
        };
      } catch (error) {
        return {
          ...state,
          twoSum: {
            ...state.twoSum,
            result: null,
            error: error instanceof Error ? error.message : 'An error occurred',
          },
        };
      }
    }

    case 'CLEAR_TWO_SUM':
      return {
        ...state,
        twoSum: {
          ...initialState.twoSum,
          testResults: state.twoSum.testResults,
        },
      };

    case 'RUN_TWO_SUM_TESTS': {
      const testCases = [
        { input: [4, 11, 17, 25], target: 21, expected: [1, 3] },
        { input: [0, 1, 2, 2, 3, 5], target: 4, expected: [2, 4] },
        { input: [-1, 0], target: -1, expected: [1, 2] },
        { input: [1, 2, 3, 4, 5], target: 9, expected: [4, 5] },
        { input: [2, 7, 11, 15], target: 9, expected: [1, 2] },
      ];

      const testResults = testCases.map(testCase => {
        const output = twoSumAlgorithm(testCase.input, testCase.target);
        const isCorrect = JSON.stringify(output) === JSON.stringify(testCase.expected);
        
        return {
          ...testCase,
          output,
          isCorrect,
        };
      });

      return {
        ...state,
        twoSum: {
          ...state.twoSum,
          testResults,
        },
      };
    }

    
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