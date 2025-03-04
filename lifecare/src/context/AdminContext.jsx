import React, { createContext, useState } from "react";

const AdminContext = createContext(null);


export const AdminProvider = ({ children }) => {
  const [adminDetails, setAdminDetails] = useState(null);


  const login = (details) => {
    setAdminDetails(details);
  };

  const logout = () => {
    setAdminDetails(null);
  };

  return (
    <AdminContext.Provider value={{ adminDetails, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
