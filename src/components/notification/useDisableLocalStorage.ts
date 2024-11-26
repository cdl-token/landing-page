"use client"
import { useEffect } from 'react';

const useDisableLocalStorage = () => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       // Store a reference to the original localStorage setItem function
    //       const originalSetItem = window.localStorage.setItem;
    
    //       // Override setItem to block specific keys
    //       window.localStorage.setItem = (key: string, value: string) => {
    //         // Check if the key is the one you want to block
    //         if (key === '@appkit/active_caip_network_id') {
    //           console.log('Blocked setting key:', key);
    //           return; // Prevent storing this key
    //         }
    
    //         // Otherwise, allow normal behavior
    //         originalSetItem.call(window.localStorage, key, value);
    //       };
    //     }
    //   }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
        },
      });
    }
  }, []);
};

export default useDisableLocalStorage;
