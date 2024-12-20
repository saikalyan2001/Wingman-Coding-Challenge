import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import ChatModal from "./chatModal";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [isChat, setIsChat] = useState(false);

  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/Json/ordersData.json")
      .then((response) => response.json())
      .then((data) => {
        setOrdersData(data);
        setSortedData(data);
      });
  }, []);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedArray = [...ordersData].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      if (key === "date") {
        aValue = new Date(aValue.replace(/'/g, ""));
        bValue = new Date(bValue.replace(/'/g, ""));
      }

      if (key === "orderValue" || key === "commission") {
        aValue = parseFloat(aValue.replace("$", "").trim());
        bValue = parseFloat(bValue.replace("$", "").trim());
      }

      if (key === "timeSpent") {
        const timeToMinutes = (time) => {
          const [hours, minutes] = time
            .replace("h", "")
            .replace("m", "")
            .split(" ")
            .map(Number);
          return hours * 60 + minutes;
        };
        aValue = timeToMinutes(aValue);
        bValue = timeToMinutes(bValue);
      }

      if (aValue < bValue) {
        return direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const handleChatClick = () => {
    setIsChat(true);
  };

  const handleChatClose = () => {
    setIsChat(false);
  };

  return (
    <>
      <div className="mt-10 max-w-7xl  sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-text1 font-semibold opacity-80 mb-6 sm:mb-10">
          Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-separate border border-gray-300 rounded-lg text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white shadow shadow-gray-300 text-text2">
                <th
                  className="px-2 sm:px-4 py-2 text-left font-normal cursor-pointer"
                  onClick={() => handleSort("productName")}
                >
                  Product
                  {sortConfig.key === "productName" &&
                    (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
                </th>
                <th
                  className="px-2 sm:px-4 py-2 text-left font-normal cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  Date
                  {sortConfig.key === "date" &&
                    (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
                </th>
                <th
                  className="px-2 sm:px-4 py-2 text-left font-normal cursor-pointer"
                  onClick={() => handleSort("timeSpent")}
                >
                  Time spent
                  {sortConfig.key === "timeSpent" &&
                    (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
                </th>
                <th
                  className="px-2 sm:px-4 py-2 text-left font-normal cursor-pointer"
                  onClick={() => handleSort("orderValue")}
                >
                  Order Value
                  {sortConfig.key === "orderValue" &&
                    (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
                </th>
                <th
                  className="px-2 sm:px-4 py-2 text-left font-normal cursor-pointer"
                  onClick={() => handleSort("commission")}
                >
                  Commission
                  {sortConfig.key === "commission" &&
                    (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="text-xs sm:text-sm text-text1">
                  <td className="px-2 sm:px-4 py-2 flex flex-col md:flex-row gap-2 items-center sm:gap-4">
                    <img
                      src={item.image}
                      alt="buds"
                      className="w-10 h-10 rounded"
                    />
                    {item.productName}
                  </td>
                  <td className="px-2 sm:px-4 py-2">
                    {item.date}
                    <br />
                    <span className="text-xs sm:text-sm">{item.timeOfDay}</span>
                  </td>
                  <td className="px-2 sm:px-4 py-2">{item.timeSpent}</td>
                  <td className="px-2 sm:px-4 py-2">{item.orderValue}</td>
                  <td className="px-2 sm:px-4 py-2 font-bold">
                    {item.commission}
                  </td>
                  <td
                    className="px-2 sm:px-4 py-2 whitespace-nowrap items-center gap-2 text-[#8A94A6] text-xs sm:text-sm cursor-pointer hidden lg:flex"
                    onClick={() => handleChatClick()}
                  >
                    {item.chat} <MdArrowOutward />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 bg-gray-200 text-text1 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <div className="flex gap-1 sm:gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-2 py-1 sm:px-3 sm:py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-bg1 text-white"
                    : "bg-text2 text-text1"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 bg-gray-200 text-text1 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
        {isChat && <ChatModal onClose={handleChatClose} />}
      </div>
    </>
  );
};

export default Orders;
