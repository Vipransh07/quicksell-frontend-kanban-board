import { createContext, useContext, useEffect, useState } from "react";

const CustomDataContext = createContext({});
const { Provider: CustomDataProvider } = CustomDataContext;

const CustomDataContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [sortedData,setSortedData] = useState({})

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const groupAndSortTickets = () => {
      const grouped = data.tickets.reduce((groupedTickets, ticket) => {
        const groupKey = ticket[grouping];
        groupedTickets[groupKey] = [...(groupedTickets[groupKey] || []), ticket];
        return groupedTickets;
      }, {});
  
      Object.keys(grouped).forEach((groupKey) => {
        grouped[groupKey].sort((a, b) => {
          if (ordering === "priority") {
            return a.priority - b.priority;
          } else if (ordering === "title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      });
  
      setSortedData(grouped);
    };
  
    if (Object.keys(data).length > 0) {
      groupAndSortTickets();
    }
  }, [ordering, grouping, data]);
  


  return (
    <CustomDataProvider
      value={{
        isLoading,
        ordering,
        grouping,
        setGrouping,
        setOrdering,
        sortedData
      }}
    >
      {children}
    </CustomDataProvider>
  );
};

const useCustomDataContext = () => {
  const context = useContext(CustomDataContext);
  if (!context) {
    throw new Error("useCustomDataContext must be used within a CustomDataContextProvider");
  }
  return context;
};

export { CustomDataContext, CustomDataContextProvider, useCustomDataContext };
