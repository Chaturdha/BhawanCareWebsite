import { rootEndPoint } from './../apps/Constant';
import axios from 'axios';

export const postCv = async (formData) => {
    try {
      const response = await axios.post(
        `${rootEndPoint}/api/employee/cvupload/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
  
    } catch (error) {
     
      throw new Error;
    }
  };
  export const postContact = async (formData) => {
    try {
      const response = await axios.post(
        `${rootEndPoint}/api/employee/contact/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
  
    } catch (error) {
     
      throw new Error;
    }
  };  