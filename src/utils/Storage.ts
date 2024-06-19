import * as SecureStore from "expo-secure-store";

type props = {
  key: string;
  value: object;
};
export const setValue = async ({ key, value }: props) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

export const getValue = async ({ key }: props) => {
  let result = await SecureStore.getItemAsync(key);

  return result || null;
};

export const deleteValue = async ({ key }: props) => {
  const result = await SecureStore.deleteItemAsync(key);
  return result;
};
