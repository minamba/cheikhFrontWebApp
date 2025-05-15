
import axios from "axios";

export const uploadFile = async ({ File, Type }) => {
    try {
      const formData = new FormData();
      formData.append("File", File);  // ✅ même nom que dans UploadRequest
      formData.append("Type", Type); 
  
      return await axios.post("/upload", formData, {
        // Ne pas définir Content-Type manuellement
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier :", error.message);
      throw error;
    }
  };