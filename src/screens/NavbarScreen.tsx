import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, List, Chip } from 'react-native-paper';

const NavbarScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Responsive Navbar Demo</Title>
          <Paragraph style={styles.description}>
            This is a demonstration of a responsive navbar that adapts to both desktop and mobile views.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Desktop Features</Title>
          <List.Section>
            <List.Item
              title="Horizontal Menu Items"
              description="Navigation items displayed horizontally"
              left={props => <List.Icon {...props} icon="menu" />}
            />
            <List.Item
              title="Integrated Search"
              description="Search input visible in navbar"
              left={props => <List.Icon {...props} icon="magnify" />}
            />
            <List.Item
              title="Brand Logo"
              description="Company name/logo prominently displayed"
              left={props => <List.Icon {...props} icon="domain" />}
            />
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Mobile Features</Title>
          <List.Section>
            <List.Item
              title="Hamburger Menu"
              description="Three-line menu icon for mobile navigation"
              left={props => <List.Icon {...props} icon="menu" />}
            />
            <List.Item
              title="Collapsible Menu"
              description="Menu slides down when hamburger is tapped"
              left={props => <List.Icon {...props} icon="chevron-down" />}
            />
            <List.Item
              title="Close Button"
              description="X button to close the mobile menu"
              left={props => <List.Icon {...props} icon="close" />}
            />
            <List.Item
              title="Mobile Search"
              description="Search input in mobile menu dropdown"
              left={props => <List.Icon {...props} icon="magnify" />}
            />
          </List.Section>
        </Card.Content>
      </Card>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
    color: '#6200ee',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  techDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginTop: 12,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    margin: 4,
  },
});

export default NavbarScreen;