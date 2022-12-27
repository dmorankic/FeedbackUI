import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);
  const server = `http://localhost:5000`;

  const fetchFeedback = async () => {
    const response = await fetch(`${server}/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedBack(data);
    setIsLoading(false);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      await fetch(`${server}/feedback/${id}`, { method: "DELETE" });

      setFeedBack(feedback.filter((item) => item.id != id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${server}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedBack([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`${server}/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
