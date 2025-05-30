# 🎯 Mobile Assessment

### 1. **Calculator** 
Add two numbers with input validation and error handling

### 2. **Responsive Navbar** 
Navigation bar with hamburger menu for mobile devices

### 3. **Two Sum II Algorithm** 
Optimized algorithm implementation with O(n) time complexity

## 🛠️ Technologies Used

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Static type checking and enhanced developer experience
- **React Navigation** - Navigation library for screen transitions
- **React Native Paper** - Material Design UI components
- **Context API** - Global state management solution
- **React Native Responsive Screen** - Responsive design utilities

## 🚀 How to Run

### Prerequisites
- Node.js (v16 or higher)
- React Native development environment setup
- iOS Simulator or Android Emulator

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AeonAssessment
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Start the Metro bundler**
   ```bash
   yarn start
   ```

5. **Run the application**
   
   **For Android:**
   ```bash
   expo run:android
   ```
   
   **For iOS:**
   ```bash
   expo run:ios
   ```

   **For WEB:**
   ```bash
   expo start --web
   ```

## 📁 Project Structure

```
AeonAssessment/
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Calculator/            # Challenge 1 - Calculator component
│   │   ├── Navbar/               # Challenge 2 - Navigation component
│   │   └── TwoSum/               # Challenge 3 - Algorithm component
│   ├── context/                   # Context API providers
│   │   └── AppContext.tsx        # Global state management
│   ├── screens/                   # Screen components
│   │   ├── HomeScreen.tsx        # Welcome/landing screen
│   │   ├── CalculatorScreen.tsx  # Challenge 1 implementation
│   │   ├── NavbarScreen.tsx      # Challenge 2 implementation
│   │   └── TwoSumScreen.tsx      # Challenge 3 implementation
│   ├── types/                     # TypeScript type definitions
│   │   └── index.ts              # Centralized type exports
│   └── utils/                     # Utility functions
│       └── algorithms.ts         # Two Sum algorithm implementation
├── App.tsx                        # Main application component
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## 🎨 Features

### Challenge 1: Calculator
- ✅ Clean Material Design UI
- ✅ Input validation and error handling
- ✅ Responsive design for all screen sizes
- ✅ Real-time calculation
- ✅ Clear and reset functionality

### Challenge 2: Responsive Navbar
- ✅ Desktop and mobile layouts
- ✅ Animated hamburger menu
- ✅ Search functionality (UI implementation)
- ✅ Smooth transitions and animations
- ✅ Responsive breakpoints

### Challenge 3: Two Sum II
- ✅ Optimized two-pointer algorithm
- ✅ O(n) time complexity, O(1) space complexity
- ✅ Interactive testing interface
- ✅ Multiple test cases with validation
- ✅ Visual results display

## 🏗️ Architecture & Best Practices

### **TypeScript Implementation**
- Strict type checking enabled
- Comprehensive interface definitions
- Type-safe Context API implementation
- Generic types for reusability

### **State Management**
- Context API with useReducer pattern
- Centralized application state
- Type-safe actions and reducers
- Immutable state updates

### **UI/UX Design**
- Material Design principles
- Responsive layouts using react-native-responsive-screen
- Accessibility considerations
- Smooth animations and micro-interactions

### **Code Quality**
- ESLint configuration for code consistency
- Prettier for code formatting
- Clean architecture patterns
- Separation of concerns


## App Screenshots

### Challenge 1: Calculator Screen
![Calculator Screen](screenshots/1000011595.jpg)
- Clean interface for adding two numbers
- Real-time validation and error handling
- Clear button to reset inputs

### Challenge 2: Responsive Navbar
![Navbar Desktop](screenshots/1000011596.jpg)
![Navbar Mobile Features](screenshots/1000011597.jpg)
- Adaptive design for desktop and mobile
- Hamburger menu for mobile view
- Integrated search functionality
- Smooth animations and transitions

### Challenge 3: Two Sum Algorithm
![Two Sum Interface](screenshots/1000011598.jpg)
![Two Sum Results](screenshots/1000011599.jpg)
- Input for array and target value
- Visual test results with pass/fail indicators
- Detailed algorithm information
- Clear button to reset inputs

## Live Demo

### Try the app directly in your browser with Expo Snack:
 
 [![Open in Expo Snack](https://img.shields.io/badge/Open%20in-Expo%20Snack-blue.svg)](https://snack.expo.dev/@hamjeth_rn/github.com-hamjeth68-mobileassessment)

## 🚨 Troubleshooting

### Common Issues

**Metro bundler cache issues:**
```bash
yarn start -- --reset-cache
```

**iOS build problems:**
```bash
cd ios
pod deintegrate && pod install
cd ..
```

**Android build problems:**
```bash
cd android
./gradlew clean
cd ..
```

