import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const useJobContext = () => {
  return useContext(JobContext);
};

export const JobProvider = ({ children }) => {
  const [jobPosts, setJobPosts] = useState([]);

  const addJobPost = (newJob) => {
    setJobPosts((prevPosts) => [...prevPosts, newJob]);
  };

  return (
    <JobContext.Provider value={{ jobPosts, addJobPost }}>
      {children}
    </JobContext.Provider>
  );
};
