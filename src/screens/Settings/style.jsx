import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  greetings: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  profileImage: {
    marginRight: 20,
    borderRadius: 50,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  divider: {
    marginBottom: 10,
  },
});

export default styles;
