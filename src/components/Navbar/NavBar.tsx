import { useAppContext } from '@/context/AppContext';
import { Route } from '@react-navigation/native';
import { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated, Keyboard } from 'react-native';
import { Appbar, TextInput, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

interface NavbarProps {
  back?: {
    title: string | undefined;
    href: string | undefined;
  };
  options: NativeStackNavigationOptions;
  route: Route<string>;
  navigation: NativeStackNavigationProp<any>;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { state, dispatch } = useAppContext();
  const { isMenuOpen, searchQuery, showSearch } = state.navbar;
  const searchAnim = useRef(new Animated.Value(0)).current;
  const searchInputRef = useRef<any>(null);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const toggleSearch = () => {
    if (showSearch) {
      // Close search
      Animated.timing(searchAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        dispatch({ type: 'TOGGLE_SEARCH' });
        Keyboard.dismiss();
      });
    } else {
      // Open search
      dispatch({ type: 'TOGGLE_SEARCH' });
      setTimeout(() => {
        searchInputRef.current?.focus();
        Animated.timing(searchAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }, 10);
    }
  };

  const handleSearch = (text: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', value: text });
  };

  const handleSearchClose = () => {
    if (searchQuery) {
      dispatch({ type: 'SET_SEARCH_QUERY', value: '' });
    } else {
      toggleSearch();
    }
  };

  const menuItems = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Templates',
    'Enterprise',
  ];

  const handleMenuItemPress = (item: string) => {
    console.log(`Navigating to ${item}`);
    if (isMobile) {
      toggleMenu();
    }
  };

  // Animation styles
  const searchContainerStyle = {
    flex: searchAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    opacity: searchAnim,
    marginLeft: searchAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 8],
    }),
  };

  const titleStyle = {
    opacity: searchAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    flex: searchAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        {isMobile ? (
          <View style={styles.mobileHeader}>
            <Animated.View style={[styles.titleContainer, titleStyle]}>
              <Appbar.Content 
                title={props.title || 'AEON'} 
                titleStyle={styles.title}
                style={styles.titleContent}
              />
            </Animated.View>
            
            <Animated.View style={[styles.searchContainer, searchContainerStyle]}>
              <TextInput
                ref={searchInputRef}
                placeholder="Search..."
                placeholderTextColor="#ffffffaa"
                value={searchQuery}
                onChangeText={handleSearch}
                style={styles.mobileSearch}
                mode="flat"
                underlineColor="transparent"
                right={
                  <TextInput.Icon 
                    icon={searchQuery ? "close" : "arrow-left"} 
                    onPress={handleSearchClose}
                    color="#fff"
                  />
                }
                theme={{
                  colors: {
                    text: '#fff',
                    placeholder: '#ffffffaa',
                    primary: '#fff',
                    background: 'transparent',
                  }
                }}
              />
            </Animated.View>
            
            <View style={styles.actionsContainer}>
              {!showSearch && (
                <Appbar.Action 
                  icon="magnify" 
                  onPress={toggleSearch}
                  iconColor="#fff"
                  style={styles.searchButton}
                />
              )}
              
              <Appbar.Action 
                icon={isMenuOpen ? 'close' : 'menu'} 
                onPress={toggleMenu}
                iconColor="#fff"
                style={styles.menuButton}
              />
            </View>
          </View>
        ) : (
          null
        )}
      </Appbar.Header>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <View style={styles.mobileMenu}>
          <View style={styles.mobileMenuHeader}>
            <Text style={styles.mobileMenuTitle}>Navigation</Text>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          
          {menuItems.map(item => (
            <TouchableOpacity 
              key={item} 
              onPress={() => handleMenuItemPress(item)}
              style={styles.mobileMenuItem}
            >
              <Text style={styles.mobileMenuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  header: {
    backgroundColor: '#6200ee',
    elevation: 4,
    paddingHorizontal: 0,
  },
  mobileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 12,
    minHeight: 56, // Ensure consistent header height
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContent: {
    alignItems: 'flex-start', // Center the title
        paddingTop:20,
      paddingRight: 35,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center text alignment
  },
  searchContainer: {
    height: 40,
    justifyContent: 'center',
    flex: 1,
  },
  mobileSearch: {
    height: 40,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    marginLeft: 0,
    color: '#fff',
    includeFontPadding: false, // Better text alignment
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  menuButton: {
    marginLeft: 8,
  },
  searchButton: {
    marginLeft: 8,
  },
  mobileMenu: {
    backgroundColor: 'white',
    padding: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  mobileMenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileMenuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 20,
    color: '#666',
    padding: 4,
  },
  mobileMenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mobileMenuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Navbar;