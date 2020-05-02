import { createContext } from "react";

const {
  Provider: DogServiceProvider,
  Consumer: DogServiceConsumer,
} = createContext();

export { DogServiceProvider, DogServiceConsumer };
