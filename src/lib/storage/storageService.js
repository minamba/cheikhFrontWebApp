const localStorageService = {
    save: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(`Erreur lors de la sauvegarde de ${key}`, e);
      }
    },
  
    load: (key) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (e) {
        console.error(`Erreur lors de la lecture de ${key}`, e);
        return null;
      }
    },
  
    remove: (key) => {
      localStorage.removeItem(key);
    }
  };
  
export default localStorageService;