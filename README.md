# Movie Search Mobile App

## Overview
This is a Movie Search mobile app built using React Native. The app allows users to search for movies, view movie details, and save favorite movies.

## Features
- Search for movies by title.
- View movie details including poster, title, year, genre, and rating.
- Save favorite movies.
- Load more movies when reaching the bottom of the list.

## Prerequisites
- Node.js and npm (https://nodejs.org/)
- React Native CLI (https://reactnative.dev/docs/environment-setup)
- Android Studio and/or Xcode for iOS development

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/kisu18/movie-search-app-react-native.git
cd MovieSearchApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up OMDb API Key
Create a `.env` file in the root directory and add your OMDb API key:
```plaintext
OMDB_API_KEY=your_omdb_api_key
```

### 4. Run the App

#### For Android:
Make sure you have an Android emulator running or an Android device connected via USB, then run:
```bash
npm run android
```

#### For iOS:
Make sure you have Xcode installed and set up, then run:
```bash
npm run ios
```

## Folder Structure
```plaintext
MovieSearchApp/
├── App.js
├── package.json
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── MovieList.js
│   │   ├── MovieItem.js
│   │   ├── SearchBar.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── MovieDetailScreen.js
│   │   ├── FavoriteScreen.js
│   ├── services/
│   │   ├── api.js
│   ├── navigation/
│   │   ├── AppNavigator.js
```

## Additional Notes
- Ensure you have set up the Android and/or iOS development environment as per the React Native documentation.
- The app uses AsyncStorage to save favorite movies locally.
