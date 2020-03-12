import React from 'react';

const {
  Provider: FilmsServiceProvider,
  Consumer: FilmsServiceConsumer
} = React.createContext();

export {
  FilmsServiceProvider,
  FilmsServiceConsumer
};
