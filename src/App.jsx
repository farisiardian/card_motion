import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const items = [
  {
    id: "1",
    subtitle: "Product Management",
    title: "Product Launch Planning",
  },
  {
    id: "2",
    subtitle: "Marketing",
    title: "Social Media Strategy",
  },
  {
    id: "3",
    subtitle: "Development",
    title: "New Features Roadmap",
  },
  {
    id: "4",
    subtitle: "Sales",
    title: "Sales Team Training",
  },
  {
    id: "5",
    subtitle: "Operations",
    title: "Supply Chain Optimization",
  },
  {
    id: "6",
    subtitle: "Customer Service",
    title: "Customer Support Initiatives",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer" // Styling for the card
          >
            <motion.h5 className="text-sm text-gray-500">
              {item.subtitle}
            </motion.h5>
            <motion.h2 className="text-lg font-bold">{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.div
              key={selectedItem.id}
              layoutId={selectedItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <motion.h5 className="text-sm text-gray-500">
                  {selectedItem.subtitle}
                </motion.h5>
                <motion.h2 className="text-lg font-bold">
                  {selectedItem.title}
                </motion.h2>

                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2" // Button styling
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
